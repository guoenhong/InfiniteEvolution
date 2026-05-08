import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../hooks/useTheme';
import { TodoItem } from '../components/TodoItem';
import { TodoAddModal } from '../components/TodoAddModal';
import { completeTodo, failTodo, addTodo, generateDailyTodos } from '../store/todoSlice';
import { addExp, addGold, updateStreak, damageHp } from '../store/characterSlice';
import { addBranchExp } from '../store/skillTreeSlice';
import { checkAchievements } from '../store/achievementSlice';
import { store } from '../store';
import type { AppState, AppDispatch } from '../store';
import type { TodoDifficulty, SkillBranch } from '../types';
import { generateDailyTodos as generatePresets } from '../data/presetTodos';

export default function TodoScreen() {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: AppState) => state.todo.items);
  const [modalVisible, setModalVisible] = useState(false);

  // Generate daily presets on mount
  useEffect(() => {
    dispatch(generateDailyTodos(generatePresets(['programming', 'reading', 'sports'])));
  }, [dispatch]);

  const handleComplete = (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    dispatch(completeTodo(id));
    dispatch(addExp(todo.expReward));
    dispatch(addGold(todo.goldReward));
    dispatch(updateStreak());
    if (todo.branch) {
      dispatch(addBranchExp({ branchId: todo.branch, amount: todo.expReward }));
    }
    // Read fresh state after all dispatches to avoid stale closure
    const state = store.getState();
    dispatch(checkAchievements({
      character: state.character,
      todo: state.todo,
      skillTree: state.skillTree,
    }));
  };

  const handleFail = (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    dispatch(failTodo(id));
    dispatch(damageHp(todo.hpPenalty));
  };

  const handleAdd = (data: { title: string; difficulty: TodoDifficulty; branch?: SkillBranch }) => {
    const difficulty = data.difficulty;
    dispatch(addTodo({
      title: data.title,
      difficulty,
      expReward: difficulty * 50,
      goldReward: difficulty * 20,
      hpPenalty: difficulty * 10,
      type: 'daily',
      branch: data.branch,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }));
  };

  const pendingCount = todos.filter(t => t.status === 'pending').length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bgPrimary }}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <View>
          <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>今日修炼</Text>
          <Text style={[styles.headerSub, { color: theme.textMuted }]}>{pendingCount} 项待完成</Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.addBtn, { backgroundColor: theme.colorTodo }]}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Todo list */}
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onComplete={handleComplete} onFail={handleFail} />
        )}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            <Text style={{ fontSize: 40, opacity: 0.3 }}>📋</Text>
            <Text style={{ color: theme.textMuted, marginTop: 12, fontSize: 14 }}>今天还没有任务</Text>
            <Text style={{ color: theme.textMuted, fontSize: 12 }}>点击右上角 + 添加</Text>
          </View>
        }
        contentContainerStyle={todos.length === 0 ? { flex: 1 } : { paddingBottom: 20 }}
      />

      <TodoAddModal visible={modalVisible} onClose={() => setModalVisible(false)} onSubmit={handleAdd} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  headerSub: { fontSize: 12, marginTop: 2 },
  addBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  addBtnText: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginTop: -2 },
});
