export type ThemeMode = 'dark' | 'light' | 'system';

export interface ThemeTokens {
  bgPrimary: string;
  bgSurface: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  colorCharacter: string;
  colorTodo: string;
  colorSkill: string;
  colorAchievement: string;
  colorMp: string;
  colorInactive: string;
  tabIconActive: string;
}

/** 🌑 Dark Theme "雾夜 (Misty Night)" */
export const darkTheme: ThemeTokens = {
  bgPrimary: '#1a1a24',
  bgSurface: '#2a2a36',
  border: '#3a3a48',
  textPrimary: '#e0e0e0',
  textSecondary: '#999',
  textMuted: '#666',
  colorCharacter: '#c47b7b',
  colorTodo: '#7bb5a8',
  colorSkill: '#c9a96e',
  colorAchievement: '#c4a97d',
  colorMp: '#8a9cc4',
  colorInactive: '#555',
  tabIconActive: '#c47b7b',
};

/** 🌅 Light Theme "晨雾 (Morning Mist)" */
export const lightTheme: ThemeTokens = {
  bgPrimary: '#ece8e0',
  bgSurface: '#f5f2ec',
  border: '#dad4ca',
  textPrimary: '#3a2a1a',
  textSecondary: '#8a7a6a',
  textMuted: '#b0a090',
  colorCharacter: '#b87373',
  colorTodo: '#6ba89a',
  colorSkill: '#b8955e',
  colorAchievement: '#b89a6e',
  colorMp: '#7a8cb4',
  colorInactive: '#bbb',
  tabIconActive: '#b87373',
};
