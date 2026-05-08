import * as FileSystem from 'expo-file-system/legacy';
import type { RootState } from '../types';

const STORAGE_DIR = FileSystem.documentDirectory + 'infinite-evolution/';
const STATE_FILE = STORAGE_DIR + 'state.json';

export async function saveState(state: RootState): Promise<void> {
  try {
    await FileSystem.makeDirectoryAsync(STORAGE_DIR, { intermediates: true });
    await FileSystem.writeAsStringAsync(STATE_FILE, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

export async function loadState(): Promise<RootState | undefined> {
  try {
    const exists = await FileSystem.getInfoAsync(STATE_FILE);
    if (exists.exists) {
      const json = await FileSystem.readAsStringAsync(STATE_FILE);
      return JSON.parse(json) as RootState;
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
  return undefined;
}
