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
      if (!node || node.subSkills.some(s => s.level > 0)) return; // already unlocked
      // Check prerequisites
      const allPrereqsMet = node.prerequisites.every(prereqId =>
        branch.nodes.find(n => n.id === prereqId)?.subSkills.some(s => s.level > 0)
      );
      if (!allPrereqsMet) return;
      node.subSkills[0].level = 1;
    },
    upgradeSkill(state, action: PayloadAction<{ branchId: SkillBranch; nodeId: string }>) {
      const branch = state.branches.find(b => b.id === action.payload.branchId);
      if (!branch) return;
      const node = branch.nodes.find(n => n.id === action.payload.nodeId);
      const mainSub = node?.subSkills[0];
      if (!mainSub || mainSub.level <= 0 || mainSub.level >= 3) return;
      if (mainSub.currentExp >= mainSub.expToNext) {
        mainSub.currentExp -= mainSub.expToNext;
        mainSub.level = (mainSub.level + 1) as 0 | 1 | 2 | 3;
      }
    },
    addBranchExp(state, action: PayloadAction<{ branchId: SkillBranch; amount: number }>) {
      const branch = state.branches.find(b => b.id === action.payload.branchId);
      if (!branch) return;
      branch.exp += action.payload.amount;
      // Auto level-up branch (recalculate threshold each iteration)
      while (branch.exp >= (branch.level + 1) * 200) {
        branch.exp -= (branch.level + 1) * 200;
        branch.level += 1;
      }
      // Also distribute exp to all unlocked nodes in this branch
      for (const node of branch.nodes) {
        const mainSub = node.subSkills[0];
        if (mainSub && mainSub.level > 0 && mainSub.level < 3) {
          mainSub.currentExp += Math.floor(action.payload.amount / branch.nodes.length);
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
