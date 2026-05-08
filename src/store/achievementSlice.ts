import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Achievement, AchievementState, CharacterState, TodoState, SkillTreeState } from '../types';
import { ACHIEVEMENTS } from '../data/achievements';

const initialState: AchievementState = {
  items: ACHIEVEMENTS.map(a => ({ ...a })),
};

export const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {
    unlockAchievement(state, action: PayloadAction<string>) {
      const achievement = state.items.find(a => a.id === action.payload);
      if (achievement && !achievement.unlocked) {
        achievement.unlocked = true;
        achievement.unlockedAt = new Date().toISOString();
      }
    },
    checkAchievements(state, action: PayloadAction<{
      character: CharacterState;
      todo: TodoState;
      skillTree: SkillTreeState;
    }>) {
      const { character, todo, skillTree } = action.payload;
      const completedCount = todo.items.filter(t => t.status === 'completed').length;
      const streak = character.streak;
      const level = character.level;
      const unlockedSkills = skillTree.branches
        .flatMap(b => b.nodes)
        .filter(n => n.level > 0)
        .length;
      const branchCompletedCounts: Record<string, number> = {};
      for (const t of todo.items) {
        if (t.status === 'completed' && t.branch) {
          branchCompletedCounts[t.branch] = (branchCompletedCounts[t.branch] || 0) + 1;
        }
      }

      for (const achievement of state.items) {
        if (achievement.unlocked) continue;

        let shouldUnlock = false;
        switch (achievement.condition) {
          case 'complete_1_tasks': shouldUnlock = completedCount >= 1; break;
          case 'complete_10_tasks': shouldUnlock = completedCount >= 10; break;
          case 'complete_50_tasks': shouldUnlock = completedCount >= 50; break;
          case 'streak_3': shouldUnlock = streak >= 3; break;
          case 'streak_7': shouldUnlock = streak >= 7; break;
          case 'streak_30': shouldUnlock = streak >= 30; break;
          case 'level_5': shouldUnlock = level >= 5; break;
          case 'level_10': shouldUnlock = level >= 10; break;
          case 'unlock_3_skills': shouldUnlock = unlockedSkills >= 3; break;
          case 'unlock_8_skills': shouldUnlock = unlockedSkills >= 8; break;
          case 'branch_programming_10': shouldUnlock = (branchCompletedCounts['programming'] || 0) >= 10; break;
          case 'branch_reading_10': shouldUnlock = (branchCompletedCounts['reading'] || 0) >= 10; break;
          case 'branch_sports_10': shouldUnlock = (branchCompletedCounts['sports'] || 0) >= 10; break;
          case 'all_daily_completed': {
            const today = new Date().toISOString().split('T')[0];
            const todayTodos = todo.items.filter(t =>
              t.type === 'daily' && t.createdAt?.startsWith(today)
            );
            const allDone = todayTodos.length > 0 && todayTodos.every(t => t.status === 'completed');
            shouldUnlock = allDone;
            achievement.progress = todayTodos.length > 0
              ? Math.floor((todayTodos.filter(t => t.status === 'completed').length / todayTodos.length) * 100)
              : 0;
            break;
          }
        }

        if (shouldUnlock) {
          achievement.unlocked = true;
          achievement.unlockedAt = new Date().toISOString();
        }
      }
    },
    loadAchievements(_state, action: PayloadAction<AchievementState>) {
      return action.payload;
    },
  },
});

export const { unlockAchievement, checkAchievements, loadAchievements } = achievementSlice.actions;
export default achievementSlice.reducer;
