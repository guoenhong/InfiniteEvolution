import React, { useState, useMemo } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '../hooks/useTheme';
import { AchievementCard } from '../components/AchievementCard';
import type { AppState } from '../store';
import type { Achievement } from '../types';

type FilterType = 'all' | 'general' | 'branch' | 'hidden';

const FILTERS: { key: FilterType; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'general', label: '通用' },
  { key: 'branch', label: '分支' },
  { key: 'hidden', label: '隐藏' },
];

export default function AchievementScreen() {
  const { theme } = useTheme();
  const achievements = useSelector((state: AppState) => state.achievement.items);
  const [filter, setFilter] = useState<FilterType>('all');

  const unlocked = achievements.filter(a => a.unlocked).length;
  const total = achievements.length;
  const percent = Math.floor((unlocked / total) * 100);

  const filtered = useMemo(() => {
    if (filter === 'all') return achievements;
    return achievements.filter(a => {
      if (filter === 'hidden') return a.type === 'hidden';
      return a.type === filter;
    });
  }, [achievements, filter]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bgPrimary }}>
      {/* Summary bar */}
      <View style={[styles.summary, { borderBottomColor: theme.border }]}>
        <View style={styles.summaryCol}>
          <Text style={[styles.summaryNum, { color: theme.colorAchievement }]}>{unlocked}</Text>
          <Text style={[styles.summaryLabel, { color: theme.textMuted }]}>已解锁</Text>
        </View>
        <View style={[styles.summaryDivider, { backgroundColor: theme.border }]} />
        <View style={styles.summaryCol}>
          <Text style={[styles.summaryNum, { color: theme.textSecondary }]}>{total - unlocked}</Text>
          <Text style={[styles.summaryLabel, { color: theme.textMuted }]}>未解锁</Text>
        </View>
        <View style={[styles.summaryDivider, { backgroundColor: theme.border }]} />
        <View style={styles.summaryCol}>
          <Text style={[styles.summaryNum, { color: theme.colorTodo }]}>{percent}%</Text>
          <Text style={[styles.summaryLabel, { color: theme.textMuted }]}>完成度</Text>
        </View>
      </View>

      {/* Filter chips */}
      <View style={styles.filters}>
        {FILTERS.map(f => (
          <TouchableOpacity
            key={f.key}
            onPress={() => setFilter(f.key)}
            style={[styles.filterChip, {
              backgroundColor: filter === f.key ? theme.colorAchievement + '20' : theme.bgSurface,
              borderColor: filter === f.key ? theme.colorAchievement : theme.border,
            }]}
          >
            <Text style={[styles.filterText, {
              color: filter === f.key ? theme.colorAchievement : theme.textSecondary,
            }]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Achievement list */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <AchievementCard achievement={item} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  summary: { flexDirection: 'row', paddingVertical: 16, paddingHorizontal: 32, borderBottomWidth: 1, alignItems: 'center' },
  summaryCol: { flex: 1, alignItems: 'center' },
  summaryNum: { fontSize: 22, fontWeight: 'bold' },
  summaryLabel: { fontSize: 11, marginTop: 2 },
  summaryDivider: { width: 1, height: 32 },
  filters: { flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 10, gap: 8 },
  filterChip: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 16, borderWidth: 1 },
  filterText: { fontSize: 12, fontWeight: '600' },
});
