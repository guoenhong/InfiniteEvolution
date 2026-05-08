# InfiniteEvolution - AI 开发助手上下文

## 1. 项目概述

**项目名称**: InfiniteEvolution (无限进化)
**类型**: 移动端个人工具类 App (React Native + Expo)
**核心概念**: 把真实世界的个人成长变成一场 RPG 冒险

**Core Fantasy**: "我是自己人生的 RPG 主角。我选择的技能树定义了我想成为的人，而每日 Todo 是我打怪升级的方式。"

**Core Loop**:
```
选择技能方向 → 接受每日修炼任务 → 完成获得 EXP/成就 → 解锁新技能 → 成为更强大的自己
```

---

## 2. 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | React Native + Expo SDK 52 |
| 语言 | TypeScript 5.x |
| 样式 | Tailwind CSS 3.x |
| 状态管理 | Redux Toolkit 2.x + React Redux 9.x |
| 导航 | React Navigation 7.x (Bottom Tabs + Modal Stack) |
| 本地存储 | AsyncStorage |
| 动画 | React Native Reanimated 3.x |
| SVG | react-native-svg |
| 日期 | date-fns |
| 图标 | @expo/vector-icons |

---

## 3. 项目结构

```
InfiniteEvolution/
├── docs/                    # 项目文档 (设计/需求/架构)
│   ├── SPEC.md            # 需求文档，4页面 UI 设计
│   ├── ARCHITECTURE.md    # 技术架构
│   ├── SKILL_TREES.md     # 7 大技能分支详细定义
│   ├── TODO_BREAKDOWN.md  # 日/周/月/年任务分布
│   ├── DATA_MODELS.md     # TypeScript 接口定义
│   ├── ROADMAP.md         # 开发路线图
│   └── PREREQUISITES.md   # 环境配置指南
├── CLAUDE.md               # AI 开发助手上下文 (本文件)
├── App.tsx                 # App 入口
└── src/                    # 源代码
    ├── components/         # UI 组件
    ├── screens/            # 页面组件
    ├── store/              # Redux 状态管理
    ├── data/               # 静态数据
    ├── hooks/              # 自定义 Hooks
    ├── utils/              # 工具函数
    ├── types/              # TypeScript 类型定义
    └── constants/          # 常量配置
```

---

## 4. 核心游戏机制

### 4.1 资源系统

| 资源 | 说明 | 恢复/消耗 |
|------|------|----------|
| HP | 血量，任务失败扣减 | 每日首次打开 App +20 |
| MP | 专注力(展示用) | 每小时 +5 |
| EXP | 经验值，完成任务获得 | 任务奖励 |
| Gold | 金币(展示用) | 任务奖励 |
| SP | 技能点，升级获得 | 升级 +1/级 |

### 4.2 HP 惩罚机制

```
任务失败惩罚:
- HP 扣减: 10/20/30 (按难度)
- EXP 惩罚: 任务奖励 × 0.3
- 装备耐久: 10/20/30 (按难度)
```

### 4.3 等级系统

```
升级公式: expToNextLevel = 100 × (level ^ 1.5)
每级奖励: +1 SP
```

### 4.4 技能树

- 7 大预设分支: 编程、绘画、语言、硬件、阅读、运动、音乐
- 技能解锁: 需要 SP + 前置技能等级满足
- 技能升级: 通过关联任务 EXP 积累

---

## 5. 文档索引

| 文档 | 用途 |
|------|------|
| `docs/SPEC.md` | 需求文档，核心机制，4页面 UI 设计 |
| `docs/ARCHITECTURE.md` | 技术架构，目录结构 |
| `docs/SKILL_TREES.md` | 7 大技能分支详细定义 |
| `docs/TODO_BREAKDOWN.md` | 日/周/月/年任务分布 |
| `docs/DATA_MODELS.md` | TypeScript 接口定义 |
| `docs/ROADMAP.md` | 开发路线图 |
| `docs/PREREQUISITES.md` | 环境配置指南 |
| `docs/UI_UX_DESIGN.md` | 完整设计系统文档 |

---

## 6. 设计约束

### 6.1 Phase 1 MVP 范围

**Must Have**:
- [x] 4 Tab 页面框架
- [x] 角色状态展示 (HP/MP/EXP/Level/Gold/SP)
- [x] 今日 Todo 列表 (系统预设 + 自定义)
- [x] Todo 完成 → EXP → 升级
- [x] Todo 失败 → HP 扣减
- [x] 技能树可视化 (至少 3 分支)
- [x] 技能点分配
- [x] 成就系统 (展示 + 解锁)
- [x] 本地数据持久化
- [x] 连续打卡计数

**Nice to Have (Phase 2+)**:
- [ ] 装备槽位系统
- [ ] 装备耐久度惩罚
- [ ] 用户自建技能分支
- [ ] 周/月统计数据
- [ ] 成就合成系统
- [ ] 动画特效增强
- [ ] 主题切换

### 6.2 设计原则

1. **MP/Gold Phase 1 仅展示**: 暂不实现消耗机制
2. **HP 恢复明确**: 每日首次打开 App +20 HP
3. **数据持久化**: AsyncStorage，debounced 500ms

---

## 7. 常见模式

### 7.1 创建新 Todo
```typescript
dispatch(addTodo({
  id: nanoid(),
  title: '完成任务',
  difficulty: 2,
  expReward: 50,
  goldReward: 20,
  hpPenalty: 20,
  type: 'daily',
  status: 'pending',
  createdAt: new Date().toISOString(),
}));
```

### 7.2 完成 Todo
```typescript
dispatch(completeTodo(todoId));
dispatch(addExp(expReward));
dispatch(updateStreak());
dispatch(checkAchievements());
```

### 7.3 任务失败
```typescript
dispatch(failTodo(todoId));
dispatch(damageHp(hpPenalty));
dispatch(deductExp(Math.floor(expReward * 0.3)));
dispatch(deductEquipmentDurability(difficulty * 10));
```

---

## 8. 开发工作流

```
1. Read CLAUDE.md (this file) for context
2. Reference docs/SPEC.md for feature requirements
3. Implement feature
4. Type check: npx tsc --noEmit
5. Test on simulator
6. Commit: git add . && git commit -m "feat(scope): description"
```

### Commit Convention
```
feat(todo): add difficulty selector to add todo modal
fix(character): correct HP bar overflow when exceeding max
docs(skilltree): update Python skill tree progression
refactor(store): extract exp calculation to utility
chore(deps): upgrade react-native-reanimated to 3.16
```

---

## 9. 快速开始

```bash
# 1. 创建项目
npx create-expo-app@latest InfiniteEvolution --template blank-typescript

# 2. 安装依赖
npm install @reduxjs/toolkit react-redux
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context react-native-reanimated react-native-gesture-handler
npm install @react-native-async-storage/async-storage date-fns tailwindcss

# 3. 启动开发
cd InfiniteEvolution
npm start
```

---

## 10. 关键决策记录

| 日期 | 决策 | 原因 |
|------|------|------|
| 2026-03-24 | 项目命名 InfiniteEvolution | 无限进化，更符合 RPG 成长概念 |
| 2026-03-24 | 状态管理: Redux Toolkit | 更规范，适合中大型项目 |
| 2026-03-24 | MP/Gold Phase 1 仅展示 | 简化 MVP，聚焦核心循环 |
| 2026-03-24 | HP 恢复: 每日首次打开 App | 简化恢复逻辑，避免刷分 |
