import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ThemeProvider, useTheme } from './src/hooks/useTheme';
import { ThemeToggle } from './src/components/ThemeToggle';

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
  let iconName: keyof typeof Ionicons.glyphMap = 'person';
  switch (routeName) {
    case 'Character':
      iconName = 'person';
      break;
    case 'Todo':
      iconName = 'clipboard';
      break;
    case 'SkillTree':
      iconName = 'leaf';
      break;
    case 'Achievement':
      iconName = 'trophy';
      break;
  }
  return (
    <Ionicons
      name={focused ? iconName : (`${iconName}-outline` as keyof typeof Ionicons.glyphMap)}
      size={size}
      color={color}
    />
  );
}

function AppNavigator() {
  const { theme } = useTheme();

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
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
