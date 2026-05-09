import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../hooks/useTheme';
import { unlockSubSkill } from '../store/skillTreeSlice';
import { spendSp } from '../store/characterSlice';
import type { AppState, AppDispatch } from '../store';
import type { SkillBranch, SkillNode } from '../types';

interface Props {
  branchId: SkillBranch;
}

export function SkillTreeView({ branchId }: Props) {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const branch = useSelector((state: AppState) =>
    state.skillTree.branches.find(b => b.id === branchId)
  );
  const sp = useSelector((state: AppState) => state.character.sp);

  if (!branch) return null;

  const sortedNodes = [...branch.nodes].sort((a, b) => a.tier - b.tier);
  const tiers = [...new Set(sortedNodes.map(n => n.tier))].sort();

  const handleUnlock = (node: SkillNode) => {
    if (node.subSkills.some(s => s.level > 0)) return;
    if (sp < node.spCost) {
      Alert.alert('SP 不足', `需要 ${node.spCost} SP，当前 ${sp}`);
      return;
    }
    // Check prereqs
    const unmetPrereqs = node.prerequisites.filter(prereqId =>
      !branch.nodes.find(n => n.id === prereqId)?.subSkills.some(s => s.level > 0)
    );
    if (unmetPrereqs.length > 0) {
      Alert.alert('前置条件未满足', `需要先解锁：${unmetPrereqs.join(', ')}`);
      return;
    }
    Alert.alert(
      '解锁技能',
      `消耗 ${node.spCost} SP 解锁「${node.name}」吗？`,
      [
        { text: '取消', style: 'cancel' },
        {
          text: '解锁',
          onPress: () => {
            dispatch(unlockSubSkill({ branchId, nodeId: node.id, subSkillId: node.subSkills[0].id }));
            dispatch(spendSp(node.spCost));
          },
        },
      ]
    );
  };

  const expToNext = (branch.level + 1) * 500;
  const expPercent = Math.min(Math.floor((branch.exp / expToNext) * 100), 100);

  return (
    <View style={[styles.container, { backgroundColor: theme.bgSurface, borderColor: theme.border }]}>
      {/* Branch header */}
      <View style={styles.header}>
        <Text style={{ fontSize: 32 }}>{branch.icon}</Text>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={[styles.branchName, { color: theme.textPrimary }]}>{branch.name}</Text>
          <Text style={[styles.branchLevel, { color: theme.colorSkill }]}>Lv.{branch.level}</Text>
        </View>
        <Text style={[styles.spText, { color: theme.colorCharacter }]}>SP: {sp}</Text>
      </View>

      {/* Branch EXP bar */}
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <View style={[styles.barBg, { backgroundColor: theme.bgPrimary, borderColor: theme.border }]}>
          <View style={[styles.barFill, { width: `${expPercent}%`, backgroundColor: theme.colorSkill }]} />
        </View>
      </View>

      {/* Skill tiers */}
      {tiers.map(tier => (
        <View key={tier} style={styles.tierSection}>
          <Text style={[styles.tierLabel, { color: theme.textMuted }]}>第 {tier} 层</Text>
          <View style={styles.nodesRow}>
            {sortedNodes.filter(n => n.tier === tier).map(node => {
              const isUnlocked = node.subSkills.some(s => s.level > 0);
              const canUnlock = !isUnlocked && sp >= node.spCost &&
                node.prerequisites.every(prereqId =>
                  branch.nodes.find(n => n.id === prereqId)?.subSkills.some(s => s.level > 0)
                );
              const isLocked = !isUnlocked && !canUnlock;

              return (
                <TouchableOpacity
                  key={node.id}
                  onPress={() => handleUnlock(node)}
                  disabled={isLocked}
                  style={[styles.nodeCard, {
                    backgroundColor: isUnlocked ? theme.colorSkill + '15' : theme.bgPrimary,
                    borderColor: isUnlocked ? theme.colorSkill : isLocked ? theme.border : theme.colorTodo,
                    opacity: isLocked ? 0.5 : 1,
                  }]}
                >
                  {isUnlocked && <Text style={[styles.nodeLevel, { backgroundColor: theme.colorSkill }]}>Lv.{node.subSkills[0]?.level ?? 0}</Text>}
                  <Text style={[styles.nodeName, { color: isUnlocked ? theme.colorSkill : theme.textSecondary }]}>
                    {node.name}
                  </Text>
                  {isLocked && node.prerequisites.length > 0 && (
                    <Text style={[styles.nodePrereq, { color: theme.textMuted }]}>
                      需要前置: {node.prerequisites.join(', ')}
                    </Text>
                  )}
                  {canUnlock && (
                    <Text style={[styles.nodeCost, { color: theme.colorTodo }]}>
                      消耗 {node.spCost} SP
                    </Text>
                  )}
                  {isUnlocked && (
                    <Text style={[styles.nodeExp, { color: theme.textMuted }]}>
                      {node.subSkills[0]?.currentExp ?? 0}/{node.subSkills[0]?.expToNext ?? 100} EXP
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: 16, borderWidth: 1, overflow: 'hidden', margin: 16 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 0 },
  branchName: { fontSize: 18, fontWeight: 'bold' },
  branchLevel: { fontSize: 13, marginTop: 2 },
  spText: { fontSize: 14, fontWeight: 'bold' },
  barBg: { height: 8, borderRadius: 4, overflow: 'hidden', borderWidth: 1 },
  barFill: { height: '100%', borderRadius: 4 },
  tierSection: { paddingHorizontal: 16, marginBottom: 16 },
  tierLabel: { fontSize: 11, fontWeight: '600', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
  nodesRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  nodeCard: { flex: 1, minWidth: '45%', borderRadius: 12, padding: 14, borderWidth: 1, position: 'relative' },
  nodeLevel: { position: 'absolute', top: 6, right: 8, fontSize: 10, fontWeight: 'bold', color: '#fff', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 1, overflow: 'hidden' },
  nodeName: { fontSize: 14, fontWeight: '600', marginBottom: 4 },
  nodePrereq: { fontSize: 10, marginTop: 4 },
  nodeCost: { fontSize: 11, fontWeight: '600', marginTop: 6 },
  nodeExp: { fontSize: 10, marginTop: 4 },
});
