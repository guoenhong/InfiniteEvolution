import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ThemeProvider, useTheme } from './src/hooks/useTheme';
import { ThemeToggle } from './src/components/ThemeToggle';
import { useDailyLogin } from './src/hooks/useDailyLogin';
import { loadState } from './src/utils/storage';
import { loadCharacter } from './src/store/characterSlice';
import { loadTodos } from './src/store/todoSlice';
import { loadSkillTree } from './src/store/skillTreeSlice';
import { loadAchievements } from './src/store/achievementSlice';

import CharacterScreen from './src/screens/CharacterScreen';
import TodoScreen from './src/screens/TodoScreen';
import SkillTreeScreen from './src/screens/SkillTreeScreen';
import AchievementScreen from './src/screens/AchievementScreen';

const Tab = createBottomTabNavigator();

function TabIcon({
  routeName,
  focused,
  color,
  size,
}: {
  routeName: string;
  focused: boolean;
  color: string;
  size: number;
}) {
  const icons = {
    Character: { focused: 'person' as const, unfocused: 'person-outline' as const },
    Todo: { focused: 'clipboard' as const, unfocused: 'clipboard-outline' as const },
    SkillTree: { focused: 'leaf' as const, unfocused: 'leaf-outline' as const },
    Achievement: { focused: 'trophy' as const, unfocused: 'trophy-outline' as const },
  };
  const icon = icons[routeName as keyof typeof icons];
  return <Ionicons name={focused ? icon.focused : icon.unfocused} size={size} color={color} />;
}

function AppNavigator() {
  const { theme } = useTheme();
  useDailyLogin();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              routeName={route.name}
              focused={focused}
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor:
            route.name === 'Character'
              ? theme.colorCharacter
              : route.name === 'Todo'
                ? theme.colorTodo
                : route.name === 'SkillTree'
                  ? theme.colorSkill
                  : theme.colorAchievement,
          tabBarInactiveTintColor: theme.colorInactive,
          tabBarStyle: {
            backgroundColor: theme.bgSurface,
            borderTopColor: theme.border,
            borderTopWidth: 1,
          },
          tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
          headerStyle: { backgroundColor: theme.bgSurface },
          headerTitleStyle: { color: theme.textPrimary, fontWeight: 'bold' },
          headerRight: () => <ThemeToggle />,
          headerRightContainerStyle: { paddingRight: 16 },
        })}
      >
        <Tab.Screen
          name="Character"
          component={CharacterScreen}
          options={{ title: '角色' }}
        />
        <Tab.Screen
          name="Todo"
          component={TodoScreen}
          options={{ title: '任务' }}
        />
        <Tab.Screen
          name="SkillTree"
          component={SkillTreeScreen}
          options={{ title: '技能' }}
        />
        <Tab.Screen
          name="Achievement"
          component={AchievementScreen}
          options={{ title: '成就' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [hydrated, setHydrated] = useState(false);

  // Hydrate persisted state on mount BEFORE rendering AppNavigator
  // This ensures useDailyLogin runs AFTER persisted state is loaded
  useEffect(() => {
    loadState().then(state => {
      if (state) {
        store.dispatch(loadCharacter(state.character));
        store.dispatch(loadTodos(state.todo));
        store.dispatch(loadSkillTree(state.skillTree));
        store.dispatch(loadAchievements(state.achievement));
      }
      setHydrated(true);
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          {hydrated ? <AppNavigator /> : null}
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
