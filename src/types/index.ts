// === Todo Types ===
export type TodoDifficulty = 1 | 2 | 3;
export type TodoStatus = 'pending' | 'completed' | 'failed';
export type TodoType = 'daily' | 'weekly' | 'monthly' | 'yearly';
export type SkillBranch = 'programming' | 'drawing' | 'language' | 'hardware' | 'reading' | 'sports' | 'music';
export type ThemePreference = 'dark' | 'light' | 'system';

export interface Todo {
  id: string;
  title: string;
  difficulty: TodoDifficulty;
  expReward: number;
  goldReward: number;
  hpPenalty: number;
  type: TodoType;
  branch?: SkillBranch;
  status: TodoStatus;
  createdAt: string;
}

export interface CharacterState {
  level: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  exp: number;
  gold: number;
  sp: number;
  streak: number;
  lastLoginDate: string | null;
  title: string;
}

// === Skill Tree Types ===
export type PassiveEffectType =
  | 'exp_multiplier' | 'gold_multiplier' | 'hp_regen'
  | 'max_hp_bonus' | 'hp_penalty_reduce' | 'sp_discount'
  | 'extra_daily_task' | 'streak_protect' | 'bonus_difficulty_exp';

export interface PassiveEffect {
  type: PassiveEffectType;
  value: number;
  perLevel?: number;
  scope?: 'branch' | 'global' | 'difficulty';
  branch?: SkillBranch;
}

export interface SubSkill {
  id: string;
  name: string;
  description: string;
  commands: string[];
  lore: string;
  titles: string[];
  level: 0 | 1 | 2 | 3;
  passiveEffects: PassiveEffect[];
  expToNext: number;
  currentExp: number;
}

export interface PassiveModifiers {
  expMultiplier: Record<string, number>;
  goldMultiplier: Record<string, number>;
  globalExpMultiplier: number;
  globalGoldMultiplier: number;
  hpRegen: number;
  maxHpBonus: number;
  hpPenaltyReduce: number;
  extraDailyTasks: number;
  streakProtect: number;
  spDiscount: number;
}

export interface SkillNode {
  id: string;
  name: string;
  icon: string;
  branch: SkillBranch;
  tier: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  spCost: number;
  prerequisites: string[];
  subSkills: SubSkill[];
  ultimate: boolean;
  titles: string[];
}

export interface SkillBranchData {
  id: SkillBranch;
  name: string;
  icon: string;
  nodes: SkillNode[];
  level: number;
  exp: number;
}

// === Achievement Types ===
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'general' | 'branch' | 'challenge' | 'hidden';
  branch?: SkillBranch;
  condition: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress?: number;
}

// === Redux State Types ===
export interface TodoState {
  items: Todo[];
}

export interface SkillTreeState {
  branches: SkillBranchData[];
}

export interface AchievementState {
  items: Achievement[];
}

export interface RootState {
  character: CharacterState;
  todo: TodoState;
  skillTree: SkillTreeState;
  achievement: AchievementState;
}
