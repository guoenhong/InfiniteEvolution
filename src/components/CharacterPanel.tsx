import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '../hooks/useTheme';
import type { AppState } from '../store';

function StatBar({ label, current, max, color, theme }: { label: string; current: number; max: number; color: string; theme: any }) {
  const pct = Math.min((current / max) * 100, 100);
  return (
    <View style={styles.statSection}>
      <View style={styles.statLabelRow}>
        <Text style={[styles.statLabel, { color }]}>{label}</Text>
        <Text style={[styles.statValue, { color }]}>{current}/{max}</Text>
      </View>
      <View style={[styles.barBg, { backgroundColor: theme.bgPrimary, borderColor: theme.border }]}>
        <View style={[styles.barFill, { width: `${pct}%` as any, backgroundColor: color }]} />
      </View>
    </View>
  );
}

function ResourceCard({ icon, value, label, color, theme }: { icon: string; value: number; label: string; color: string; theme: any }) {
  return (
    <View style={[styles.resourceCard, { backgroundColor: theme.bgPrimary, borderColor: theme.border }]}>
      <Text style={styles.resourceIcon}>{icon}</Text>
      <Text style={[styles.resourceValue, { color }]}>{value}</Text>
      <Text style={[styles.resourceLabel, { color: theme.textMuted }]}>{label}</Text>
    </View>
  );
}

export function CharacterPanel() {
  const { theme } = useTheme();
  const character = useSelector((state: AppState) => state.character);

  const expToNext = Math.floor(100 * Math.pow(character.level, 1.5));
  const expPercent = character.exp > 0 ? Math.floor((character.exp / expToNext) * 100) : 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.bgSurface, borderColor: theme.border }]}>
      {/* Level Badge */}
      <View style={styles.banner}>
        <View style={[styles.levelBadge, { borderColor: theme.colorAchievement }]}>
          <View style={[styles.levelTag, { backgroundColor: theme.colorCharacter }]}>
            <Text style={styles.levelTagText}>LV</Text>
          </View>
          <Text style={[styles.levelText, { color: theme.colorAchievement }]}>{character.level}</Text>
        </View>
        <Text style={[styles.name, { color: theme.textPrimary }]}>无名冒险者</Text>
        <Text style={[styles.title, { color: theme.colorSkill }]}>{character.title}</Text>
      </View>

      {/* HP Bar */}
      <StatBar
        label="❤️ HP"
        current={character.hp}
        max={character.maxHp}
        color={theme.colorCharacter}
        theme={theme}
      />

      {/* MP Bar */}
      <StatBar
        label="💠 MP"
        current={character.mp}
        max={character.maxMp}
        color={theme.colorMp}
        theme={theme}
      />

      {/* EXP Bar */}
      <View style={styles.statSection}>
        <View style={styles.statLabelRow}>
          <Text style={[styles.statLabel, { color: theme.colorSkill }]}>✨ EXP</Text>
          <Text style={[styles.statValue, { color: theme.colorSkill }]}>
            {character.exp} / {expToNext}
          </Text>
        </View>
        <View style={[styles.barBg, { backgroundColor: theme.bgPrimary, borderColor: theme.border }]}>
          <View style={[styles.barFill, { width: `${Math.min(expPercent, 100)}%` as any, backgroundColor: theme.colorSkill }]} />
          <Text style={styles.barPercent}>{expPercent}%</Text>
        </View>
      </View>

      {/* Resource Row */}
      <View style={styles.resourceRow}>
        <ResourceCard icon="🪙" value={character.gold} label="Gold" color={theme.colorAchievement} theme={theme} />
        <ResourceCard icon="⬡" value={character.sp} label="SP" color={theme.colorSkill} theme={theme} />
        <ResourceCard icon="🔥" value={character.streak} label="连续" color={theme.colorTodo} theme={theme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
  },
  banner: { alignItems: 'center', paddingVertical: 24, paddingHorizontal: 20 },
  levelBadge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    elevation: 8,
    shadowColor: '#fbbf24',
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  levelTag: {
    position: 'absolute',
    top: -4,
    right: -8,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  levelTagText: { fontSize: 10, color: '#fff', fontWeight: 'bold' },
  levelText: { fontSize: 28, fontWeight: 'bold' },
  name: { fontSize: 18, fontWeight: 'bold' },
  title: { fontSize: 11, letterSpacing: 2, marginTop: 2 },
  statSection: { paddingHorizontal: 20, marginBottom: 12 },
  statLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  statLabel: { fontSize: 11, fontWeight: '600' },
  statValue: { fontSize: 11 },
  barBg: {
    height: 14,
    borderRadius: 7,
    overflow: 'hidden',
    borderWidth: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  barFill: { position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: 7 },
  barPercent: { textAlign: 'center', fontSize: 9, color: 'rgba(255,255,255,0.6)', fontWeight: '600' },
  resourceRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 20, paddingBottom: 20 },
  resourceCard: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
  },
  resourceIcon: { fontSize: 16 },
  resourceValue: { fontSize: 16, fontWeight: 'bold', marginVertical: 2 },
  resourceLabel: { fontSize: 10 },
});
