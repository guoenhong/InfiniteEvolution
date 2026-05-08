import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SkillTreeState, SkillBranch } from '../types';
import { SKILL_BRANCHES, STUB_BRANCHES } from '../data/skills';

const initialState: SkillTreeState = {
  branches: [...SKILL_BRANCHES, ...STUB_BRANCHES],
};

export const skillTreeSlice = createSlice({
  name: 'skillTree',
  initialState,
  reducers: {
    unlockSkill(state, action: PayloadAction<{ branchId: SkillBranch; nodeId: string }>) {
      const branch = state.branches.find(b => b.id === action.payload.branchId);
      if (!branch) return;
      const node = branch.nodes.find(n => n.id === action.payload.nodeId);
      if (!node || node.level > 0) return; // already unlocked
      // Check prerequisites
      const allPrereqsMet = node.prerequisites.every(prereqId =>
        branch.nodes.find(n => n.id === prereqId)?.level && branch.nodes.find(n => n.id === prereqId)!.level > 0
      );
      if (!allPrereqsMet) return;
      node.level = 1;
    },
    upgradeSkill(state, action: PayloadAction<{ branchId: SkillBranch; nodeId: string }>) {
      const branch = state.branches.find(b => b.id === action.payload.branchId);
      if (!branch) return;
      const node = branch.nodes.find(n => n.id === action.payload.nodeId);
      if (!node || node.level <= 0 || node.level >= node.maxLevel) return;
      if (node.currentExp >= node.expToNext) {
        node.currentExp -= node.expToNext;
        node.level += 1;
      }
    },
    addBranchExp(state, action: PayloadAction<{ branchId: SkillBranch; amount: number }>) {
      const branch = state.branches.find(b => b.id === action.payload.branchId);
      if (!branch) return;
      branch.exp += action.payload.amount;
      // Auto level-up branch
      const expToNext = (branch.level + 1) * 200;
      while (branch.exp >= expToNext) {
        branch.exp -= expToNext;
        branch.level += 1;
      }
      // Also distribute exp to all unlocked nodes in this branch
      for (const node of branch.nodes) {
        if (node.level > 0 && node.level < node.maxLevel) {
          node.currentExp += Math.floor(action.payload.amount / branch.nodes.length);
        }
      }
    },
    loadSkillTree(_state, action: PayloadAction<SkillTreeState>) {
      return action.payload;
    },
  },
});

export const { unlockSkill, upgradeSkill, addBranchExp, loadSkillTree } = skillTreeSlice.actions;
export default skillTreeSlice.reducer;
