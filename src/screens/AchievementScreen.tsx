import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function AchievementScreen() {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bgPrimary }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40 }}>🏆</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.textPrimary, marginTop: 8 }}>成就</Text>
      </View>
    </SafeAreaView>
  );
}
