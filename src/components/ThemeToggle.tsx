import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, themeMode, cycleTheme } = useTheme();

  const icon =
    themeMode === 'dark' ? '☀️' : themeMode === 'light' ? '🌙' : '🔄';

  return (
    <TouchableOpacity
      onPress={cycleTheme}
      style={[styles.button, { backgroundColor: theme.bgSurface }]}
      accessibilityLabel="Toggle theme"
      accessibilityRole="button"
    >
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 18,
  },
});
