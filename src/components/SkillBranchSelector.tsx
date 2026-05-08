import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import type { SkillBranch } from '../types';

interface Props {
  branches: { id: SkillBranch; name: string; icon: string }[];
  selected: SkillBranch;
  onSelect: (branch: SkillBranch) => void;
}

export function SkillBranchSelector({ branches, selected, onSelect }: Props) {
  const { theme } = useTheme();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {branches.map(b => (
        <TouchableOpacity
          key={b.id}
          onPress={() => onSelect(b.id)}
          style={[styles.chip, {
            backgroundColor: selected === b.id ? theme.colorSkill + '20' : theme.bgSurface,
            borderColor: selected === b.id ? theme.colorSkill : theme.border,
          }]}
        >
          <Text style={styles.chipIcon}>{b.icon}</Text>
          <Text style={[styles.chipLabel, {
            color: selected === b.id ? theme.colorSkill : theme.textSecondary,
          }]}>{b.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { paddingVertical: 12, paddingHorizontal: 12 },
  chip: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, borderWidth: 1, marginRight: 8 },
  chipIcon: { fontSize: 16, marginRight: 4 },
  chipLabel: { fontSize: 13, fontWeight: '600' },
});
