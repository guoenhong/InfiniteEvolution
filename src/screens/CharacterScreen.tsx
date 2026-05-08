import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { CharacterPanel } from '../components/CharacterPanel';

export default function CharacterScreen() {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bgPrimary }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <CharacterPanel />
      </ScrollView>
    </SafeAreaView>
  );
}
