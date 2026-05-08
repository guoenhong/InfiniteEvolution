import type { Todo, SkillBranch } from '../types';

interface PresetTodoDef {
  title: string;
  difficulty: 1 | 2 | 3;
  branch: SkillBranch;
  type: 'daily';
}

const PRESETS_BY_BRANCH: Record<SkillBranch, PresetTodoDef[]> = {
  programming: [
    { title: '刷一道 LeetCode 每日一题', difficulty: 3, branch: 'programming', type: 'daily' },
    { title: '阅读技术文章 15 分钟', difficulty: 1, branch: 'programming', type: 'daily' },
    { title: '写一段代码练习', difficulty: 2, branch: 'programming', type: 'daily' },
  ],
  reading: [
    { title: '阅读 30 页书籍', difficulty: 2, branch: 'reading', type: 'daily' },
    { title: '做读书笔记', difficulty: 1, branch: 'reading', type: 'daily' },
  ],
  sports: [
    { title: '跑步 30 分钟', difficulty: 2, branch: 'sports', type: 'daily' },
    { title: '做一组拉伸运动', difficulty: 1, branch: 'sports', type: 'daily' },
  ],
  drawing: [
    { title: '练习素描 20 分钟', difficulty: 2, branch: 'drawing', type: 'daily' },
  ],
  language: [
    { title: '背单词 15 分钟', difficulty: 1, branch: 'language', type: 'daily' },
    { title: '练习口语对话', difficulty: 2, branch: 'language', type: 'daily' },
  ],
  hardware: [
    { title: '学习电路基础知识', difficulty: 2, branch: 'hardware', type: 'daily' },
  ],
  music: [
    { title: '练习乐器 30 分钟', difficulty: 2, branch: 'music', type: 'daily' },
  ],
};

export function generateDailyTodos(activeBranches: SkillBranch[] = ['programming', 'reading', 'sports']): Omit<Todo, 'id'>[] {
  const todos: Omit<Todo, 'id'>[] = [];
  const now = new Date().toISOString();

  for (const branch of activeBranches) {
    const presets = PRESETS_BY_BRANCH[branch] || [];
    for (const preset of presets) {
      const difficulty = preset.difficulty;
      todos.push({
        title: preset.title,
        difficulty,
        expReward: difficulty * 50,
        goldReward: difficulty * 20,
        hpPenalty: difficulty * 10,
        type: 'daily',
        branch: preset.branch,
        status: 'pending',
        createdAt: now,
      });
    }
  }

  return todos;
}
