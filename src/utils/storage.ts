import AsyncStorage from '@react-native-async-storage/async-storage';
import type { RootState } from '../types';

const STORAGE_KEY = 'infinite-evolution-state';

export async function saveState(state: RootState): Promise<void> {
  try {
    const json = JSON.stringify(state);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

export async function loadState(): Promise<RootState | undefined> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json) {
      return JSON.parse(json) as RootState;
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
  return undefined;
}
