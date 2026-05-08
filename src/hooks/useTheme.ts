import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import { ThemeMode, ThemeTokens, darkTheme, lightTheme } from '../constants/theme';

const THEME_FILE = FileSystem.documentDirectory + 'infinite-evolution/theme-mode.json';

async function saveThemeMode(mode: ThemeMode) {
  try {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'infinite-evolution/', { intermediates: true });
    await FileSystem.writeAsStringAsync(THEME_FILE, JSON.stringify({ mode }));
  } catch {}
}

async function loadThemeMode(): Promise<ThemeMode | null> {
  try {
    const exists = await FileSystem.getInfoAsync(THEME_FILE);
    if (exists.exists) {
      const data = JSON.parse(await FileSystem.readAsStringAsync(THEME_FILE));
      if (data.mode === 'dark' || data.mode === 'light' || data.mode === 'system') return data.mode;
    }
  } catch {}
  return null;
}

interface ThemeContextValue {
  theme: ThemeTokens;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  cycleTheme: () => void;
  isDark: boolean;
}

const defaultContext: ThemeContextValue = {
  theme: darkTheme,
  themeMode: 'system',
  setThemeMode: () => {},
  cycleTheme: () => {},
  isDark: true,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');

  // Persist theme preference
  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
    saveThemeMode(mode);
  }, []);

  // Cycle: dark -> light -> system -> dark
  const cycleTheme = useCallback(() => {
    setThemeMode(
      themeMode === 'dark' ? 'light' : themeMode === 'light' ? 'system' : 'dark',
    );
  }, [themeMode, setThemeMode]);

  // Resolve actual theme
  const resolvedDark =
    themeMode === 'system' ? systemScheme === 'dark' : themeMode === 'dark';
  const theme = resolvedDark ? darkTheme : lightTheme;

  // Hydrate saved preference on mount
  useEffect(() => {
    loadThemeMode().then(saved => {
      if (saved) setThemeModeState(saved);
    });
  }, []);

  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, themeMode, setThemeMode, cycleTheme, isDark: resolvedDark } },
    children,
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
