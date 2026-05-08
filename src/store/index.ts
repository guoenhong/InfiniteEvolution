import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import todoReducer from './todoSlice';
import skillTreeReducer from './skillTreeSlice';
import achievementReducer from './achievementSlice';
import { saveState } from '../utils/storage';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    todo: todoReducer,
    skillTree: skillTreeReducer,
    achievement: achievementReducer,
  },
});

// Auto-save with 500ms debounce
let saveTimeout: ReturnType<typeof setTimeout> | null = null;
store.subscribe(() => {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    const state = store.getState();
    saveState(state as any);
  }, 500);
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
