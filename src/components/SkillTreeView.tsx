import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../hooks/useTheme';
import { unlockSubSkill, upgradeSubSkill } from '../store/skillTreeSlice';
import { spendSp } from '../store/characterSlice';
import type { AppState, AppDispatch } from '../store';
import type { SkillBranch, SubSkill } from '../types';

const CULTIVATION_NAMES = ['', '一重境', '二重境', '三重境'];

function CultivationIndicator({ level, sub }: { level: number; sub: SubSkill }) {
  const { theme } = useTheme();
  const colors = [theme.textMuted, theme.colorSkill, theme.colorTodo, theme.colorAchievement];
  const icons = ['', '🌱', '🌟', '👑'];

  return (
    <View style={{ flexDirection: 'row', gap: 4, marginTop: 6 }}>
      {[1, 2, 3].map(l => (
        <View
          key={l}
          style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 4,
            paddingHorizontal: 6,
            borderRadius: 6,
            backgroundColor: level >= l ? colors[l] + '20' : theme.bgPrimary,
            borderWidth: 1,
            borderColor: level >= l ? colors[l] : theme.border,
            opacity: level >= l ? 1 : 0.4,
          }}
        >
          <Text style={{ fontSize: 12 }}>{icons[l]}</Text>
          <Text
            style={{
              fontSize: 9,
              color: level >= l ? colors[l] : theme.textMuted,
              fontWeight: 'bold',
            }}
          >
            {CULTIVATION_NAMES[l]}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: level >= l ? colors[l] : theme.textMuted,
              marginTop: 1,
            }}
          >
            {level >= l ? sub.titles[l - 1] : '???'}
          </Text>
        </View>
      ))}
    </View>
  );
}

function SubSkillCard({
  sub,
  branchId,
  nodeId,
}: {
  sub: SubSkill;
  branchId: SkillBranch;
  nodeId: string;
}) {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const isLocked = sub.level === 0;
  const isMaxed = sub.level >= 3;
  const hasEnoughExp = sub.currentExp >= sub.expToNext;
  const expPercent =
    sub.expToNext > 0
      ? Math.min(Math.floor((sub.currentExp / sub.expToNext) * 100), 100)
      : 0;

  const handlePress = () => {
    if (isLocked) {
      dispatch(unlockSubSkill({ branchId, nodeId, subSkillId: sub.id }));
      return;
    }
    if (hasEnoughExp && !isMaxed) {
      dispatch(upgradeSubSkill({ branchId, nodeId, subSkillId: sub.id }));
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.subCard,
        {
          backgroundColor: isMaxed
            ? theme.colorAchievement + '08'
            : theme.bgPrimary,
          borderColor: isMaxed
            ? theme.colorAchievement
            : isLocked
              ? theme.border
              : theme.colorSkill,
          opacity: isLocked ? 0.6 : 1,
        },
      ]}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: isLocked ? theme.textMuted : theme.textPrimary,
          }}
        >
          {sub.name}
        </Text>
        {isLocked && (
          <Text style={{ fontSize: 10, color: theme.colorTodo }}>点击解锁</Text>
        )}
        {isMaxed && (
          <Text style={{ fontSize: 10, color: theme.colorAchievement }}>
            圆满
          </Text>
        )}
      </View>

      {/* Lore text */}
      {!isLocked && (
        <Text
          style={{
            fontSize: 10,
            color: theme.textMuted,
            fontStyle: 'italic',
            marginTop: 4,
          }}
        >
          「{sub.lore}」
        </Text>
      )}

      {/* Cultivation indicators */}
      <CultivationIndicator level={sub.level} sub={sub} />

      {/* EXP bar (only show if unlocked and not maxed) */}
      {!isLocked && !isMaxed && (
        <View style={{ marginTop: 8 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}
          >
            <Text style={{ fontSize: 9, color: theme.textMuted }}>修为</Text>
            <Text style={{ fontSize: 9, color: theme.textMuted }}>
              {sub.currentExp}/{sub.expToNext}
            </Text>
          </View>
          <View
            style={[
              styles.expBarOuter,
              { backgroundColor: theme.bgSurface },
            ]}
          >
            <View
              style={[
                styles.expBarInner,
                {
                  width: `${expPercent}%`,
                  backgroundColor: theme.colorSkill,
                },
              ]}
            />
          </View>
          {hasEnoughExp && (
            <Text
              style={{
                fontSize: 10,
                color: theme.colorTodo,
                textAlign: 'center',
                marginTop: 4,
                fontWeight: 'bold',
              }}
            >
              点击突破至下一境
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

export function SkillTreeView({ branchId }: { branchId: SkillBranch }) {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const branch = useSelector((state: AppState) =>
    state.skillTree.branches.find(b => b.id === branchId),
  );
  const sp = useSelector((state: AppState) => state.character.sp);
  const [expandedNode, setExpandedNode] = useState<string | null>(null);

  if (!branch) return null;

  const sortedNodes = [...branch.nodes].sort((a, b) => a.tier - b.tier);
  const tiers = [...new Set(sortedNodes.map(n => n.tier))].sort();

  const expToNext = (branch.level + 1) * 500;
  const expPercent = Math.min(
    Math.floor((branch.exp / expToNext) * 100),
    100,
  );

  const handleNodePress = (nodeId: string) => {
    const node = branch.nodes.find(n => n.id === nodeId);
    if (!node) return;

    // Check if all sub-skills are locked (first time unlocking this skill)
    const allLocked = node.subSkills.every(s => s.level === 0);
    if (allLocked) {
      if (sp < node.spCost) {
        Alert.alert('修为不足', `需要 ${node.spCost} SP，当前 ${sp}`);
        return;
      }
      // Check prerequisites
      const unmetPrereqs = node.prerequisites.filter(prereqId => {
        const prereqNode = branch.nodes.find(n => n.id === prereqId);
        return !prereqNode?.subSkills.some(s => s.level > 0);
      });
      if (unmetPrereqs.length > 0) {
        Alert.alert('前置未完成', `需要先掌握：${unmetPrereqs.join(', ')}`);
        return;
      }
      Alert.alert(
        '学习绝技',
        `消耗 ${node.spCost} SP 学习「${node.name}」吗？`,
        [
          { text: '取消', style: 'cancel' },
          {
            text: '学习',
            onPress: () => {
              dispatch(spendSp(node.spCost));
              // Auto-unlock first sub-skill
              if (node.subSkills[0]) {
                dispatch(
                  unlockSubSkill({
                    branchId,
                    nodeId: node.id,
                    subSkillId: node.subSkills[0].id,
                  }),
                );
              }
              setExpandedNode(nodeId);
            },
          },
        ],
      );
    } else {
      setExpandedNode(expandedNode === nodeId ? null : nodeId);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.bgPrimary }]}
    >
      {/* Branch header */}
      <View
        style={[
          styles.headerCard,
          { backgroundColor: theme.bgSurface, borderColor: theme.border },
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 32 }}>{branch.icon}</Text>
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={[styles.branchName, { color: theme.textPrimary }]}>
              {branch.name}
            </Text>
            <Text style={[styles.branchLevel, { color: theme.colorSkill }]}>
              Lv.{branch.level}
            </Text>
          </View>
          <Text style={[styles.spText, { color: theme.colorCharacter }]}>
            SP: {sp}
          </Text>
        </View>
        <View
          style={[
            styles.expBarOuter,
            { backgroundColor: theme.bgPrimary, marginTop: 10 },
          ]}
        >
          <View
            style={[
              styles.expBarInner,
              {
                width: `${expPercent}%`,
                backgroundColor: theme.colorSkill,
              },
            ]}
          />
        </View>
      </View>

      {/* Tier sections */}
      {tiers.map(tier => {
        const tierNodes = sortedNodes.filter(n => n.tier === tier);
        return (
          <View key={tier} style={{ marginBottom: 12 }}>
            <Text
              style={[styles.tierLabel, { color: theme.textMuted }]}
            >
              {tier === 7 ? '💎 终极绝技' : `第 ${tier} 层`}
            </Text>
            {tierNodes.map(node => {
              const isExpanded = expandedNode === node.id;
              const unlockedCount = node.subSkills.filter(s => s.level > 0)
                .length;
              const allMaxed = node.subSkills.every(s => s.level >= 3);

              return (
                <View key={node.id} style={{ marginBottom: 8 }}>
                  <TouchableOpacity
                    onPress={() => handleNodePress(node.id)}
                    style={[
                      styles.nodeCard,
                      {
                        backgroundColor: allMaxed
                          ? theme.colorAchievement + '10'
                          : theme.bgSurface,
                        borderColor: allMaxed
                          ? theme.colorAchievement
                          : unlockedCount > 0
                            ? theme.colorSkill
                            : theme.border,
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          flex: 1,
                        }}
                      >
                        <Text style={{ fontSize: 24, marginRight: 10 }}>
                          {node.icon}
                        </Text>
                        <View>
                          <Text
                            style={[
                              styles.nodeName,
                              {
                                color:
                                  unlockedCount > 0
                                    ? theme.textPrimary
                                    : theme.textSecondary,
                              },
                            ]}
                          >
                            {node.name}
                          </Text>
                          {!node.ultimate && (
                            <Text
                              style={{
                                fontSize: 10,
                                color: theme.textMuted,
                              }}
                            >
                              {unlockedCount > 0
                                ? `${unlockedCount}/${node.subSkills.length} 子技 · `
                                : ''}
                              SP: {node.spCost}
                            </Text>
                          )}
                        </View>
                      </View>
                      <Text style={{ fontSize: 16 }}>
                        {isExpanded ? '▼' : '▶'}
                      </Text>
                    </View>
                    {node.ultimate && node.subSkills[0]?.level > 0 && (
                      <Text
                        style={{
                          fontSize: 11,
                          color: theme.colorAchievement,
                          fontWeight: 'bold',
                          marginTop: 4,
                        }}
                      >
                        {CULTIVATION_NAMES[node.subSkills[0].level]} ·{' '}
                        {node.subSkills[0].titles[
                          node.subSkills[0].level - 1
                        ]}
                      </Text>
                    )}
                  </TouchableOpacity>

                  {/* Expanded sub-skills */}
                  {isExpanded && (
                    <View
                      style={{ paddingLeft: 16, marginTop: 8, gap: 8 }}
                    >
                      {node.subSkills.map(sub => (
                        <SubSkillCard
                          key={sub.id}
                          sub={sub}
                          branchId={branchId}
                          nodeId={node.id}
                        />
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerCard: { margin: 16, padding: 16, borderRadius: 16, borderWidth: 1 },
  branchName: { fontSize: 18, fontWeight: 'bold' },
  branchLevel: { fontSize: 13, marginTop: 2 },
  spText: { fontSize: 14, fontWeight: 'bold' },
  expBarOuter: { height: 8, borderRadius: 4, overflow: 'hidden' },
  expBarInner: { height: '100%', borderRadius: 4 },
  tierLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  nodeCard: {
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  nodeName: { fontSize: 15, fontWeight: 'bold' },
  subCard: { padding: 14, borderRadius: 10, borderWidth: 1 },
});
