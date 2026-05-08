import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import todoReducer from './todoSlice';
import skillTreeReducer from './skillTreeSlice';
// import achievementReducer from './achievementSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    todo: todoReducer,
    skillTree: skillTreeReducer,
    // achievement: achievementReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
