import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onComplete: (id: string) => void;
  onFail: (id: string) => void;
}

const DIFFICULTY_COLORS: Record<number, string> = { 1: '#4ecca3', 2: '#f59e0b', 3: '#ef4444' };
const DIFFICULTY_LABELS: Record<number, string> = { 1: '简单', 2: '普通', 3: '困难' };
const BRANCH_ICONS: Record<string, string> = {
  programming: '💻', drawing: '🎨', language: '🌐',
  hardware: '🔧', reading: '📖', sports: '🏃', music: '🎵',
};

export function TodoItem({ todo, onComplete, onFail }: Props) {
  const { theme } = useTheme();
  const isDone = todo.status === 'completed';
  const isPending = todo.status === 'pending';
  const diffColor = DIFFICULTY_COLORS[todo.difficulty];

  const handlePress = () => {
    if (!isPending) return;
    onComplete(todo.id);
  };

  const handleLongPress = () => {
    if (!isPending) return;
    Alert.alert('放弃任务', `确定要放弃「${todo.title}」吗？\nHP -${todo.hpPenalty}`, [
      { text: '取消', style: 'cancel' },
      { text: '放弃', style: 'destructive', onPress: () => onFail(todo.id) },
    ]);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={[styles.container, { borderBottomColor: theme.border }]}
      activeOpacity={0.7}
    >
      {/* Status circle */}
      <View style={[styles.circle, {
        borderColor: isDone ? theme.colorTodo : isPending ? theme.colorSkill : theme.textMuted,
        backgroundColor: isDone ? theme.colorTodo + '20' : 'transparent',
      }]}>
        {isDone && <Text style={[styles.check, { color: theme.colorTodo }]}>✓</Text>}
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={[styles.title, {
            color: isDone ? theme.textMuted : theme.textPrimary,
            textDecorationLine: isDone ? 'line-through' : 'none',
          }]} numberOfLines={1}>
            {todo.title}
          </Text>
          <View style={styles.rewards}>
            <Text style={[styles.reward, { color: theme.colorSkill }]}>+{todo.expReward} EXP</Text>
            {todo.goldReward > 0 && (
              <Text style={[styles.reward, { color: theme.colorAchievement }]}>🪙 {todo.goldReward}</Text>
            )}
          </View>
        </View>
        <View style={styles.tags}>
          <Text style={[styles.tag, { color: diffColor }]}>⚔️ {DIFFICULTY_LABELS[todo.difficulty]}</Text>
          {todo.branch && (
            <Text style={[styles.tag, { color: theme.colorSkill }]}>
              {BRANCH_ICONS[todo.branch] || '🌳'} {todo.branch}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 12, borderBottomWidth: 1 },
  circle: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  check: { fontSize: 12, fontWeight: 'bold' },
  content: { flex: 1 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  title: { fontSize: 14, fontWeight: '500', flex: 1, marginRight: 8 },
  rewards: { flexDirection: 'row', gap: 4 },
  reward: { fontSize: 10, fontWeight: '600' },
  tags: { flexDirection: 'row', gap: 8, marginTop: 4 },
  tag: { fontSize: 11 },
});
