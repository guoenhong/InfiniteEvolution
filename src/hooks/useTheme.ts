import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeMode, ThemeTokens, darkTheme, lightTheme } from '../constants/theme';

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
    AsyncStorage.setItem('theme-mode', mode).catch(() => {});
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
    AsyncStorage.getItem('theme-mode')
      .then((saved) => {
        if (saved === 'dark' || saved === 'light' || saved === 'system') {
          setThemeModeState(saved);
        }
      })
      .catch(() => {});
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
