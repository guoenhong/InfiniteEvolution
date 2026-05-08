import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import type { Achievement } from '../types';

interface Props {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: Props) {
  const { theme } = useTheme();
  const isUnlocked = achievement.unlocked;
  const isHidden = achievement.type === 'hidden' && !isUnlocked;

  return (
    <View style={[styles.card, {
      backgroundColor: isUnlocked ? theme.colorAchievement + '10' : theme.bgSurface,
      borderColor: isUnlocked ? theme.colorAchievement + '30' : theme.border,
      opacity: isHidden ? 0.5 : 1,
    }]}>
      {/* Icon circle */}
      <View style={[styles.iconCircle, {
        backgroundColor: isUnlocked ? theme.colorAchievement + '20' : theme.bgPrimary,
        borderColor: isUnlocked ? theme.colorAchievement : theme.border,
      }]}>
        <Text style={styles.icon}>{isHidden ? '?' : achievement.icon}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={[styles.title, {
          color: isUnlocked ? theme.colorAchievement : theme.textSecondary,
        }]}>
          {isHidden ? '???' : achievement.title}
        </Text>
        <Text style={[styles.desc, { color: isUnlocked ? theme.textSecondary : theme.textMuted }]}>
          {isHidden ? '条件未知' : achievement.description}
        </Text>
        {achievement.progress !== undefined && achievement.progress > 0 && achievement.progress < 100 && !isUnlocked && (
          <View style={[styles.progressBg, { backgroundColor: theme.bgPrimary }]}>
            <View style={[styles.progressFill, { width: `${achievement.progress}%`, backgroundColor: theme.colorAchievement }]} />
          </View>
        )}
      </View>

      {/* Status badge */}
      <View style={[styles.badge, {
        backgroundColor: isUnlocked ? theme.colorAchievement + '20' : 'transparent',
        borderColor: isUnlocked ? theme.colorAchievement + '40' : theme.border,
      }]}>
        <Text style={[styles.badgeText, {
          color: isUnlocked ? theme.colorAchievement : theme.textMuted,
        }]}>
          {isUnlocked ? '✓ 完成' : isHidden ? '🔒 隐藏' : achievement.progress ? `${achievement.progress}%` : '未完成'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 12, borderWidth: 1, marginBottom: 8 },
  iconCircle: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 18 },
  content: { flex: 1, marginHorizontal: 12 },
  title: { fontSize: 14, fontWeight: 'bold' },
  desc: { fontSize: 11, marginTop: 2 },
  progressBg: { height: 4, borderRadius: 2, marginTop: 6, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 2 },
  badge: { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, borderWidth: 1 },
  badgeText: { fontSize: 10, fontWeight: '600' },
});
