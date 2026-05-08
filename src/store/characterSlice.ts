import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CharacterState } from '../types';

const TITLES: Record<number, string> = {
  1: '初出茅庐',
  5: '独当一面',
  10: '百炼成钢',
  20: '登峰造极',
  50: '超凡入圣',
};

const initialState: CharacterState = {
  level: 1,
  hp: 100,
  maxHp: 100,
  mp: 50,
  maxMp: 50,
  exp: 0,
  gold: 0,
  sp: 0,
  streak: 0,
  lastLoginDate: null,
  title: '初出茅庐',
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addExp(state, action: PayloadAction<number>) {
      state.exp += action.payload;
      const expToNext = (level: number) => Math.floor(100 * Math.pow(level, 1.5));
      while (state.exp >= expToNext(state.level)) {
        state.exp -= expToNext(state.level);
        state.level += 1;
        state.sp += 1;
        // Pick the highest eligible title based on current level
        const titles = Object.entries(TITLES)
          .sort(([a], [b]) => Number(b) - Number(a));
        const matched = titles.find(([lv]) => state.level >= Number(lv));
        if (matched) state.title = matched[1];
        state.maxHp = 80 + state.level * 20;
        state.maxMp = 40 + state.level * 10;
        state.hp = state.maxHp;
        state.mp = state.maxMp;
      }
    },
    damageHp(state, action: PayloadAction<number>) {
      state.hp = Math.max(0, state.hp - action.payload);
    },
    healHp(state, action: PayloadAction<number>) {
      state.hp = Math.min(state.maxHp, state.hp + action.payload);
    },
    addGold(state, action: PayloadAction<number>) {
      state.gold += action.payload;
    },
    spendSp(state, action: PayloadAction<number>) {
      state.sp -= action.payload;
    },
    updateStreak(state) {
      state.streak += 1;
    },
    resetStreak(state) {
      state.streak = 0;
    },
    dailyLogin(state) {
      const today = new Date().toISOString().split('T')[0];
      if (state.lastLoginDate !== today) {
        state.hp = Math.min(state.maxHp, state.hp + 20);
        state.lastLoginDate = today;
      }
    },
    loadCharacter(_state, action: PayloadAction<CharacterState>) {
      return action.payload;
    },
  },
});

export const {
  addExp, damageHp, healHp, addGold, spendSp,
  updateStreak, resetStreak, dailyLogin, loadCharacter,
} = characterSlice.actions;

export default characterSlice.reducer;
