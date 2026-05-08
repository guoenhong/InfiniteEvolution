import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import type { Todo, TodoState } from '../types';

const initialState: TodoState = {
  items: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Omit<Todo, 'id'>>) {
      state.items.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    completeTodo(state, action: PayloadAction<string>) {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo && todo.status === 'pending') {
        todo.status = 'completed';
      }
    },
    failTodo(state, action: PayloadAction<string>) {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo && todo.status === 'pending') {
        todo.status = 'failed';
      }
    },
    generateDailyTodos(state, action: PayloadAction<Omit<Todo, 'id'>[]>) {
      // Only generate if no daily todos exist for today
      const hasDailyTodos = state.items.some(t => {
        const isToday = t.createdAt?.startsWith(new Date().toISOString().split('T')[0]);
        return t.type === 'daily' && isToday;
      });
      if (!hasDailyTodos) {
        for (const preset of action.payload) {
          state.items.push({
            ...preset,
            id: nanoid(),
          });
        }
      }
    },
    loadTodos(_state, action: PayloadAction<TodoState>) {
      return action.payload;
    },
  },
});

export const { addTodo, completeTodo, failTodo, generateDailyTodos, loadTodos } = todoSlice.actions;
export default todoSlice.reducer;
