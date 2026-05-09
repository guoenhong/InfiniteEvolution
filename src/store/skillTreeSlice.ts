import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SkillTreeState, SkillBranch } from '../types';
import { ALL_BRANCHES } from '../data/skills';

const initialState: SkillTreeState = {
  branches: ALL_BRANCHES.map(b => ({
    ...b,
    nodes: b.nodes.map(n => ({
      ...n,
      subSkills: n.subSkills.map(s => ({ ...s })),
    })),
  })),
};

export const skillTreeSlice = createSlice({
  name: 'skillTree',
  initialState,
  reducers: {
    unlockSubSkill(state, action: PayloadAction<{
      branchId: SkillBranch; nodeId: string; subSkillId: string
    }>) {
      const { branchId, nodeId, subSkillId } = action.payload;
      const branch = state.branches.find(b => b.id === branchId);
      if (!branch) return;
      const node = branch.nodes.find(n => n.id === nodeId);
      if (!node) return;
      const sub = node.subSkills.find(s => s.id === subSkillId);
      if (!sub || sub.level > 0) return;
      sub.level = 1;
    },
    upgradeSubSkill(state, action: PayloadAction<{
      branchId: SkillBranch; nodeId: string; subSkillId: string
    }>) {
      const { branchId, nodeId, subSkillId } = action.payload;
      const branch = state.branches.find(b => b.id === branchId);
      if (!branch) return;
      const node = branch.nodes.find(n => n.id === nodeId);
      if (!node) return;
      const sub = node.subSkills.find(s => s.id === subSkillId);
      if (!sub || sub.level >= 3) return;
      if (sub.currentExp >= sub.expToNext) {
        sub.currentExp -= sub.expToNext;
        sub.level = (sub.level + 1) as 1 | 2 | 3;
      }
    },
    addSubSkillExp(state, action: PayloadAction<{
      branchId: SkillBranch; nodeId: string; subSkillId: string; amount: number
    }>) {
      const { branchId, nodeId, subSkillId, amount } = action.payload;
      const branch = state.branches.find(b => b.id === branchId);
      if (!branch) return;
      const node = branch.nodes.find(n => n.id === nodeId);
      if (!node) return;
      const sub = node.subSkills.find(s => s.id === subSkillId);
      if (!sub || sub.level === 0 || sub.level >= 3) return;
      sub.currentExp += amount;
      while (sub.currentExp >= sub.expToNext && sub.level < 3) {
        sub.currentExp -= sub.expToNext;
        sub.level = (sub.level + 1) as 1 | 2 | 3;
      }
    },
    addNodeExp(state, action: PayloadAction<{
      branchId: SkillBranch; amount: number
    }>) {
      const { branchId, amount } = action.payload;
      const branch = state.branches.find(b => b.id === branchId);
      if (!branch) return;
      branch.exp += amount;
      // Auto level-up branch (recalculate threshold each iteration)
      while (branch.exp >= (branch.level + 1) * 500) {
        branch.exp -= (branch.level + 1) * 500;
        branch.level += 1;
      }
      // Distribute EXP to unlocked sub-skills
      for (const node of branch.nodes) {
        for (const sub of node.subSkills) {
          if (sub.level > 0 && sub.level < 3) {
            sub.currentExp += Math.floor(amount / branch.nodes.length / 4);
            while (sub.currentExp >= sub.expToNext && sub.level < 3) {
              sub.currentExp -= sub.expToNext;
              sub.level = (sub.level + 1) as 1 | 2 | 3;
            }
          }
        }
      }
    },
    loadSkillTree(_state, action: PayloadAction<SkillTreeState>) {
      return action.payload;
    },
  },
});

export const { unlockSubSkill, upgradeSubSkill, addSubSkillExp, addNodeExp, loadSkillTree } = skillTreeSlice.actions;
export default skillTreeSlice.reducer;
