import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useTheme } from '../hooks/useTheme';
import { SkillBranchSelector } from '../components/SkillBranchSelector';
import { SkillTreeView } from '../components/SkillTreeView';
import type { AppState } from '../store';
import type { SkillBranch } from '../types';

export default function SkillTreeScreen() {
  const { theme } = useTheme();
  const branches = useSelector((state: AppState) => state.skillTree.branches);
  const [selected, setSelected] = useState<SkillBranch>('programming');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bgPrimary }}>
      <SkillBranchSelector
        branches={branches}
        selected={selected}
        onSelect={setSelected}
      />
      <SkillTreeView branchId={selected} />
    </SafeAreaView>
  );
}
