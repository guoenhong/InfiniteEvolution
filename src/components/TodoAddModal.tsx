import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import type { TodoDifficulty, SkillBranch } from '../types';

const BRANCH_OPTIONS: { label: string; value: SkillBranch }[] = [
  { label: '💻 编程', value: 'programming' },
  { label: '📖 阅读', value: 'reading' },
  { label: '🏃 运动', value: 'sports' },
  { label: '🎨 绘画', value: 'drawing' },
  { label: '🌐 语言', value: 'language' },
  { label: '🔧 硬件', value: 'hardware' },
  { label: '🎵 音乐', value: 'music' },
];

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; difficulty: TodoDifficulty; branch?: SkillBranch }) => void;
}

export function TodoAddModal({ visible, onClose, onSubmit }: Props) {
  const { theme } = useTheme();
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState<TodoDifficulty>(1);
  const [branch, setBranch] = useState<SkillBranch | undefined>();

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit({ title: title.trim(), difficulty, branch });
    setTitle('');
    setDifficulty(1);
    setBranch(undefined);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView style={styles.overlay} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={[styles.sheet, { backgroundColor: theme.bgSurface, borderColor: theme.border }]}>
          <Text style={[styles.sheetTitle, { color: theme.textPrimary }]}>添加新任务</Text>

          {/* Title input */}
          <Text style={[styles.label, { color: theme.textSecondary }]}>任务名称</Text>
          <TextInput
            style={[styles.input, { backgroundColor: theme.bgPrimary, color: theme.textPrimary, borderColor: theme.border }]}
            placeholder="输入任务名称..."
            placeholderTextColor={theme.textMuted}
            value={title}
            onChangeText={setTitle}
            autoFocus
          />

          {/* Difficulty selector */}
          <Text style={[styles.label, { color: theme.textSecondary }]}>难度</Text>
          <View style={styles.diffRow}>
            {([1, 2, 3] as TodoDifficulty[]).map(d => (
              <TouchableOpacity
                key={d}
                onPress={() => setDifficulty(d)}
                style={[styles.diffBtn, {
                  backgroundColor: difficulty === d ? theme.colorCharacter + '20' : theme.bgPrimary,
                  borderColor: difficulty === d ? theme.colorCharacter : theme.border,
                }]}
              >
                <Text style={[styles.diffBtnText, { color: difficulty === d ? theme.colorCharacter : theme.textMuted }]}>
                  {'⚔️'.repeat(d)}
                </Text>
                <Text style={[styles.diffLabel, { color: difficulty === d ? theme.colorCharacter : theme.textMuted }]}>
                  {d === 1 ? '简单' : d === 2 ? '普通' : '困难'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Skill branch selector */}
          <Text style={[styles.label, { color: theme.textSecondary }]}>关联技能（可选）</Text>
          <View style={styles.branchRow}>
            {BRANCH_OPTIONS.map(opt => (
              <TouchableOpacity
                key={opt.value}
                onPress={() => setBranch(branch === opt.value ? undefined : opt.value)}
                style={[styles.branchBtn, {
                  backgroundColor: branch === opt.value ? theme.colorTodo + '20' : theme.bgPrimary,
                  borderColor: branch === opt.value ? theme.colorTodo : theme.border,
                }]}
              >
                <Text style={[styles.branchBtnText, { color: branch === opt.value ? theme.colorTodo : theme.textMuted }]}>
                  {opt.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Action buttons */}
          <View style={styles.actions}>
            <TouchableOpacity onPress={onClose} style={[styles.btn, { backgroundColor: theme.bgPrimary, borderColor: theme.border }]}>
              <Text style={[styles.btnText, { color: theme.textSecondary }]}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={[styles.btn, { backgroundColor: theme.colorCharacter, borderColor: theme.colorCharacter }]}>
              <Text style={[styles.btnText, { color: '#fff', fontWeight: 'bold' }]}>添加</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  sheet: { borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24, borderTopWidth: 1, paddingBottom: 40 },
  sheetTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 12, fontWeight: '600', marginBottom: 6, marginTop: 12 },
  input: { borderRadius: 10, padding: 14, fontSize: 14, borderWidth: 1 },
  diffRow: { flexDirection: 'row', gap: 10 },
  diffBtn: { flex: 1, alignItems: 'center', paddingVertical: 12, borderRadius: 10, borderWidth: 1 },
  diffBtnText: { fontSize: 16 },
  diffLabel: { fontSize: 11, marginTop: 4 },
  branchRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  branchBtn: { borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1 },
  branchBtnText: { fontSize: 12 },
  actions: { flexDirection: 'row', gap: 12, marginTop: 24 },
  btn: { flex: 1, alignItems: 'center', paddingVertical: 14, borderRadius: 12, borderWidth: 1 },
  btnText: { fontSize: 15 },
});
