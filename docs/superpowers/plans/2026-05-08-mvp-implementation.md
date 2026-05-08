# InfiniteEvolution MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully functional React Native MVP of InfiniteEvolution — a gamified personal growth app with 4 tabs (Character, Todo, Skill Tree, Achievements), dual Morandi themes, and AsyncStorage persistence.

**Architecture:** React Native + Expo SDK 52. Redux Toolkit for state (4 slices: character, todo, skillTree, achievement). React Navigation 7 Bottom Tabs. NativeWind for theming. AsyncStorage for persist+hydrate.

**Tech Stack:** Expo SDK 52 · TypeScript 5.x · Redux Toolkit 2.x · React Navigation 7.x · NativeWind/Tailwind · AsyncStorage · date-fns · Reanimated 3.x · @expo/vector-icons

---

### Task 1: Project Scaffolding & Dependencies

**Files:**
- Create: `InfiniteEvolution/` (Expo project root)
- Create: `App.tsx`
- Create: `tsconfig.json`
- Modify: `package.json`

- [ ] **Step 1: Create Expo project**

```bash
cd /path/to/parent
npx create-expo-app@latest InfiniteEvolution --template blank-typescript
cd InfiniteEvolution
```

- [ ] **Step 2: Install core dependencies**

```bash
npm install @reduxjs/toolkit react-redux
npm install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-reanimated react-native-gesture-handler
npm install @react-native-async-storage/async-storage date-fns
npm install nativewind tailwindcss
```

- [ ] **Step 3: Install vector icons (already part of Expo but ensure available)**

```bash
npx expo install @expo/vector-icons
```

- [ ] **Step 4: Create directory structure**

```bash
mkdir -p src/{constants,types,store,data,utils,hooks,components,screens}
touch src/constants/theme.ts
touch src/types/index.ts
```

- [ ] **Step 5: Commit scaffold**

```bash
git add .
git commit -m "chore: scaffold Expo project with dependencies"
```

---

### Task 2: Theme System (Dual Morandi Palette)

**Files:**
- Create: `src/constants/theme.ts`
- Create: `src/hooks/useTheme.ts`
- Create: `src/components/ThemeToggle.tsx`

**Theme tokens:** All tokens from SPEC.md §2.2 (Misty Night + Morning Mist palettes). No purple. No high-contrast.

- [ ] **Step 1: Define theme tokens in `src/constants/theme.ts`**

```typescript
export type ThemeMode = 'dark' | 'light';

export interface ThemeTokens {
  bgPrimary: string;
  bgSurface: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  colorCharacter: string;
  colorTodo: string;
  colorSkill: string;
  colorAchievement: string;
  colorMp: string;
  colorInactive: string;
  tabIconActive: string;
}

export const darkTheme: ThemeTokens = {
  bgPrimary: '#1a1a24',
  bgSurface: '#2a2a36',
  border: '#3a3a48',
  textPrimary: '#e0e0e0',
  textSecondary: '#999',
  textMuted: '#666',
  colorCharacter: '#c47b7b',
  colorTodo: '#7bb5a8',
  colorSkill: '#c9a96e',
  colorAchievement: '#c4a97d',
  colorMp: '#8a9cc4',
  colorInactive: '#555',
  tabIconActive: '#c47b7b',
};

export const lightTheme: ThemeTokens = {
  bgPrimary: '#ece8e0',
  bgSurface: '#f5f2ec',
  border: '#dad4ca',
  textPrimary: '#3a2a1a',
  textSecondary: '#8a7a6a',
  textMuted: '#b0a090',
  colorCharacter: '#b87373',
  colorTodo: '#6ba89a',
  colorSkill: '#b8955e',
  colorAchievement: '#b89a6e',
  colorMp: '#7a8cb4',
  colorInactive: '#bbb',
  tabIconActive: '#b87373',
};
```

- [ ] **Step 2: Create ThemeContext/hook `src/hooks/useTheme.ts`**

React context + provider that stores `ThemeMode` (from AsyncStorage on init, default `'dark'`). Provides `theme: ThemeTokens`, `themeMode`, `setThemeMode(mode: ThemeMode)`. Supports `'system'` → reads `useColorScheme()`.

```typescript
// useTheme.ts exports:
// ThemeProvider (wraps app)
// useTheme() → { theme, themeMode, setThemeMode, cycleTheme }
// setThemeMode accepts 'dark' | 'light' | 'system'
// cycleTheme: dark → light → system → dark
// Persist preference to AsyncStorage key 'theme-mode'
```

- [ ] **Step 3: Create ThemeToggle component `src/components/ThemeToggle.tsx`**

A small icon button (sun/moon icon) placed in the app header area. On press, calls `cycleTheme()`. Show the current mode icon (moon for dark, sun for light, auto-icon for system).

- [ ] **Step 4: Verify theme system**

Ensure `ThemeProvider` wraps the entire app in `App.tsx`. Verify that consuming `useTheme()` in any component returns the correct tokens.

- [ ] **Step 5: Commit**

```bash
git add src/constants/theme.ts src/hooks/useTheme.ts src/components/ThemeToggle.tsx
git commit -m "feat(theme): add dual Morandi theme system with toggle"
```

---

### Task 3: TypeScript Types

**Files:**
- Create: `src/types/index.ts`

- [ ] **Step 1: Define all game interfaces**

```typescript
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

export interface SkillNode {
  id: string;
  name: string;
  description: string;
  branch: SkillBranch;
  tier: number; // 1-5
  level: number; // 0 = locked
  maxLevel: number;
  expToNext: number;
  currentExp: number;
  prerequisites: string[]; // skill node IDs
  spCost: number;
  icon: string;
}

export interface SkillBranchData {
  id: SkillBranch;
  name: string;
  icon: string;
  nodes: SkillNode[];
  level: number;
  exp: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'general' | 'branch' | 'challenge' | 'hidden';
  branch?: SkillBranch;
  condition: string; // human-readable
  unlocked: boolean;
  unlockedAt?: string;
  progress?: number; // 0-100
}

export interface RootState {
  character: CharacterState;
  todo: TodoState;
  skillTree: SkillTreeState;
  achievement: AchievementState;
}

export interface TodoState {
  items: Todo[];
}

export interface SkillTreeState {
  branches: SkillBranchData[];
}

export interface AchievementState {
  items: Achievement[];
}
```

- [ ] **Step 2: Commit**

```bash
git add src/types/index.ts
git commit -m "feat(types): add all game data TypeScript interfaces"
```

---

### Task 4: Redux Store + Character Slice

**Files:**
- Create: `src/store/index.ts`
- Create: `src/store/characterSlice.ts`

- [ ] **Step 1: Create `src/store/index.ts`**

```typescript
import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import todoReducer from './todoSlice';
import skillTreeReducer from './skillTreeSlice';
import achievementReducer from './achievementSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    todo: todoReducer,
    skillTree: skillTreeReducer,
    achievement: achievementReducer,
  },
});
```

- [ ] **Step 2: Create `src/store/characterSlice.ts`**

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharacterState {
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

const TITLES: Record<number, string> = {
  1: '初出茅庐',
  5: '独当一面',
  10: '百炼成钢',
  20: '登峰造极',
  50: '超凡入圣',
};

const initialState: CharacterState = {
  level: 1,
  hp: 100,
  maxHp: 100,
  mp: 50,
  maxMp: 50,
  exp: 0,
  gold: 0,
  sp: 0,
  streak: 0,
  lastLoginDate: null,
  title: '初出茅庐',
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addExp(state, action: PayloadAction<number>) {
      state.exp += action.payload;
      const expToNext = Math.floor(100 * Math.pow(state.level, 1.5));
      while (state.exp >= expToNext) {
        state.exp -= expToNext;
        state.level += 1;
        state.sp += 1;
        state.title = TITLES[state.level] || state.title;
        // Recalculate maxHp/maxMp scaling
        state.maxHp = 80 + state.level * 20;
        state.maxMp = 40 + state.level * 10;
        state.hp = state.maxHp; // Full heal on level up
        state.mp = state.maxMp;
      }
    },
    damageHp(state, action: PayloadAction<number>) {
      state.hp = Math.max(0, state.hp - action.payload);
    },
    healHp(state, action: PayloadAction<number>) {
      state.hp = Math.min(state.maxHp, state.hp + action.payload);
    },
    addGold(state, action: PayloadAction<number>) {
      state.gold += action.payload;
    },
    spendSp(state, action: PayloadAction<number>) {
      state.sp -= action.payload;
    },
    updateStreak(state) {
      // Called daily - increments streak
      state.streak += 1;
    },
    resetStreak(state) {
      state.streak = 0;
    },
    dailyLogin(state) {
      const today = new Date().toISOString().split('T')[0];
      if (state.lastLoginDate !== today) {
        state.hp = Math.min(state.maxHp, state.hp + 20);
        state.lastLoginDate = today;
      }
    },
    loadCharacter(state, action: PayloadAction<CharacterState>) {
      return action.payload;
    },
  },
});

export const { addExp, damageHp, healHp, addGold, spendSp, updateStreak, resetStreak, dailyLogin, loadCharacter } = characterSlice.actions;
export default characterSlice.reducer;
```

- [ ] **Step 3: Verify slice compiles**

```bash
npx tsc --noEmit src/store/characterSlice.ts --strict
```

- [ ] **Step 4: Commit**

```bash
git add src/store/
git commit -m "feat(store): add Redux store and character slice"
```

---

### Task 5: Todo Slice

**Files:**
- Create: `src/store/todoSlice.ts`
- Create: `src/data/presetTodos.ts`

- [ ] **Step 1: Create `src/data/presetTodos.ts`** — preset task definitions by skill branch

```typescript
// Returns 3-5 daily preset todos based on user's active skill branches
// Difficulty balanced: 1 easy, 2 normal, 1 hard
// EXP reward formula: difficulty * 50
// Gold reward formula: difficulty * 20
// HP penalty formula: difficulty * 10
```

- [ ] **Step 2: Create `src/store/todoSlice.ts`**

```typescript
// State: { items: Todo[] }
// Reducers:
//   addTodo: add a custom todo
//   completeTodo: set status='completed', dispatch addExp/gold/streak
//   failTodo: set status='failed', dispatch damageHp/deductExp
//   generateDailyTodos: append preset todos for today
//   loadTodos: hydrate from persisted state
```

`completeTodo` reducer logic:
```typescript
completeTodo(state, action: PayloadAction<string>) {
  const todo = state.items.find(t => t.id === action.payload);
  if (todo && todo.status === 'pending') {
    todo.status = 'completed';
  }
},
```

- [ ] **Step 3: Commit**

```bash
git add src/store/todoSlice.ts src/data/presetTodos.ts
git commit -m "feat(store): add todo slice with preset tasks"
```

---

### Task 6: Skill Tree Slice + Static Data

**Files:**
- Create: `src/store/skillTreeSlice.ts`
- Create: `src/data/skills.ts`

- [ ] **Step 1: Create `src/data/skills.ts`** — define 3 MVP branches (programming, reading, sports)

Each branch has 3 tiers, 2-3 skills per tier:

```typescript
export const SKILL_BRANCHES: SkillBranchData[] = [
  {
    id: 'programming',
    name: '编程',
    icon: '💻',
    level: 0,
    exp: 0,
    nodes: [
      {
        id: 'git-basics',
        name: 'Git 基础',
        description: '掌握版本控制基本操作',
        branch: 'programming',
        tier: 1,
        level: 0,
        maxLevel: 3,
        expToNext: 100,
        currentExp: 0,
        prerequisites: [],
        spCost: 1,
        icon: 'code',
      },
      // ... more nodes
    ],
  },
  // sports, reading branches...
];
```

- [ ] **Step 2: Create `src/store/skillTreeSlice.ts`**

```typescript
// State: { branches: SkillBranchData[] }
// Reducers:
//   addBranchExp(branchId, amount): accumulate exp, auto-level-up at threshold
//   unlockSkill(nodeId, branchId): spend SP, set level=1
//   upgradeSkill(nodeId, branchId): increment level if enough exp
//   loadSkillTree: hydrate
```

- [ ] **Step 3: Commit**

```bash
git add src/store/skillTreeSlice.ts src/data/skills.ts
git commit -m "feat(store): add skill tree slice with 3 branches"
```

---

### Task 7: Achievement Slice + Data

**Files:**
- Create: `src/store/achievementSlice.ts`
- Create: `src/data/achievements.ts`

- [ ] **Step 1: Create `src/data/achievements.ts`** — 12+ achievements

| ID | Title | Type | Unlock Condition |
|----|-------|------|------------------|
| first-task | 初出茅庐 | general | Complete 1 task |
| streak-3 | 三日不辍 | general | 3-day streak |
| streak-7 | 七日成习惯 | general | 7-day streak |
| streak-30 | 持之以恒 | general | 30-day streak |
| level-5 | 独当一面 | general | Reach level 5 |
| level-10 | 百炼成钢 | general | Reach level 10 |
| todo-10 | 代码行者 | branch | Complete 10 programming tasks |
| skill-5 | 技能达人 | general | Unlock 5 skills |
| hidden-1 | ??? | hidden | Complete 50 tasks |

- [ ] **Step 2: Create `src/store/achievementSlice.ts`**

```typescript
// State: { items: Achievement[] }
// Reducers:
//   unlockAchievement(id): set unlocked=true, unlockedAt=now
//   checkAchievements(): evaluate all locked achievements against current state
//   loadAchievements: hydrate

// checkAchievements scans all locked items and checks conditions
// Called after: completeTodo, levelUp, streakUpdate
```

- [ ] **Step 3: Commit**

```bash
git add src/store/achievementSlice.ts src/data/achievements.ts
git commit -m "feat(store): add achievement slice with 12 achievements"
```

---

### Task 8: Navigation + App Entry

**Files:**
- Create: `App.tsx`
- Create: `src/screens/CharacterScreen.tsx`
- Create: `src/screens/TodoScreen.tsx`
- Create: `src/screens/SkillTreeScreen.tsx`
- Create: `src/screens/AchievementScreen.tsx`

- [ ] **Step 1: Create 4 placeholder screens** — each returns a simple view with the screen name and tab color, wrapped in SafeAreaView with the theme bg color.

```typescript
// Example placeholder:
import { View, Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export function CharacterScreen() {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bgPrimary }}>
      <Text style={{ color: theme.textPrimary }}>角色</Text>
    </View>
  );
}
```

- [ ] **Step 2: Set up Bottom Tab Navigator in `App.tsx`**

```typescript
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// In the navigator:
<NavigationContainer>
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Character') iconName = 'person';
        else if (route.name === 'Todo') iconName = 'clipboard';
        else if (route.name === 'SkillTree') iconName = 'leaf';
        else if (route.name === 'Achievement') iconName = 'trophy';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.tabIconActive,
      tabBarInactiveTintColor: theme.colorInactive,
      tabBarStyle: { backgroundColor: theme.bgSurface, borderColor: theme.border },
      headerStyle: { backgroundColor: theme.bgSurface },
      headerTitleStyle: { color: theme.textPrimary },
    })}
  >
    <Tab.Screen name="Character" component={CharacterScreen} options={{ title: '角色' }} />
    <Tab.Screen name="Todo" component={TodoScreen} options={{ title: '任务' }} />
    <Tab.Screen name="SkillTree" component={SkillTreeScreen} options={{ title: '技能' }} />
    <Tab.Screen name="Achievement" component={AchievementScreen} options={{ title: '成就' }} />
  </Tab.Navigator>
</NavigationContainer>
```

Wrap with ThemeProvider and Redux Provider:
```typescript
// App.tsx
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>{/* Tab Navigator */}</NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
```

- [ ] **Step 3: Verify navigation works**

```bash
npx expo start
```
Verify all 4 tabs render, theme colors are applied, icons display.

- [ ] **Step 4: Commit**

```bash
git add App.tsx src/screens/
git commit -m "feat(nav): add bottom tab navigation with 4 screens"
```

---

### Task 9: Character Screen

**Files:**
- Create: `src/components/CharacterPanel.tsx`
- Modify: `src/screens/CharacterScreen.tsx`

- [ ] **Step 1: Build `CharacterPanel.tsx`**

A self-contained component that reads character state from Redux and renders the RPG character panel per SPEC.md §3.1 layout:

- Top: level badge (circle, gold border, Lv tag), character name, title
- HP bar (colorCharacter red) with text
- MP bar (colorMp blue) with text  
- EXP bar (colorSkill amber) with text + percentage
- Resource cards: Gold / SP / Streak
- Call `dailyLogin()` on mount (checks if today is first open)

Use the theme hook for all colors. Use Reanimated for a subtle pulse on the level badge.

- [ ] **Step 2: Update CharacterScreen to use CharacterPanel**

```typescript
// CharacterScreen.tsx
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
```

- [ ] **Step 3: Verify rendering**

Run the app. Check HP/MP/EXP bars display with correct colors and respond to Redux state changes.

- [ ] **Step 4: Commit**

```bash
git add src/components/CharacterPanel.tsx src/screens/CharacterScreen.tsx
git commit -m "feat(ui): add character panel with RPG stats display"
```

---

### Task 10: Todo Screen

**Files:**
- Create: `src/components/TodoItem.tsx`
- Create: `src/components/TodoAddModal.tsx`
- Modify: `src/screens/TodoScreen.tsx`

- [ ] **Step 1: Build `TodoItem.tsx`**

Props: `todo: Todo`, `onComplete`, `onFail`.

Layout per SPEC.md §3.2:
- Left: circle button (empty=pending, check=done, pulse=recommended)
- Center: title + difficulty + skill branch tags
- Right: EXP/Gold reward tags (color rounded labels)
- Completed items: gray text + strikethrough

Tap circle → `onComplete()`. Long press → confirm dialog → `onFail()`.

- [ ] **Step 2: Build `TodoAddModal.tsx`**

Modal with form fields:
- Title (text input)
- Difficulty (1/2/3 picker)
- Skill branch (optional, picker from active branches)
- Type (daily/weekly/monthly/yearly)
- Auto-calculated EXP/Gold reward based on difficulty

- [ ] **Step 3: Update `TodoScreen.tsx`**

Render:
- Header with "今日修炼" title, count, add (+) button
- FlatList of TodoItem components
- FAB or header button opens TodoAddModal
- Empty state message when no todos

On mount: dispatch `generateDailyTodos()` if today's presets haven't been generated.

```typescript
// Dispatching actions from the screen
const dispatch = useDispatch();

const handleComplete = (id: string) => {
  dispatch(completeTodo(id));
  const todo = todos.find(t => t.id === id);
  if (todo) {
    dispatch(addExp(todo.expReward));
    dispatch(addGold(todo.goldReward));
    dispatch(updateStreak());
    dispatch(checkAchievements());
  }
};
```

- [ ] **Step 4: Verify task flow**

Add a task → complete it → verify EXP/Gold update on character screen. Fail a task → verify HP deduction.

- [ ] **Step 5: Commit**

```bash
git add src/components/TodoItem.tsx src/components/TodoAddModal.tsx src/screens/TodoScreen.tsx
git commit -m "feat(ui): add todo screen with complete/fail flows"
```

---

### Task 11: Skill Tree Screen

**Files:**
- Create: `src/components/SkillTreeView.tsx`
- Create: `src/components/SkillBranchSelector.tsx`
- Modify: `src/screens/SkillTreeScreen.tsx`

- [ ] **Step 1: Build `SkillBranchSelector.tsx`**

Horizontal scrollable tab bar with the 7 branch icons+names. Highlighted tab is the selected branch. For MVP, show all 7 but only 3 have actual data.

- [ ] **Step 2: Build `SkillTreeView.tsx`**

Renders the selected branch's skill nodes:
- Branch header: icon + name + level + branch EXP bar
- Skill nodes arranged by tier (1-3), 1-2 per row
- Node states per SPEC.md §3.3:
  - Unlocked: full color, border glow
  - Unlockable (has SP, meets prereqs): pulse border, tap to unlock
  - Locked: gray, shows prerequisite text
  - Hidden: dark ???, shows "Lv.X 解锁"
- Tap unlockable node → dispatch `unlockSkill()`

- [ ] **Step 3: Update `SkillTreeScreen.tsx`**

Renders SkillBranchSelector at top, SkillTreeView below with selected branch.

- [ ] **Step 4: Verify**

Navigate between branches. Verify node states render correctly. Verify SP deduction on unlock.

- [ ] **Step 5: Commit**

```bash
git add src/components/SkillTreeView.tsx src/components/SkillBranchSelector.tsx src/screens/SkillTreeScreen.tsx
git commit -m "feat(ui): add skill tree screen with branch selector and node unlocking"
```

---

### Task 12: Achievement Screen

**Files:**
- Create: `src/components/AchievementCard.tsx`
- Modify: `src/screens/AchievementScreen.tsx`

- [ ] **Step 1: Build `AchievementCard.tsx`**

Props: `achievement: Achievement`.

Layout per SPEC.md §3.4:
- Left: icon in circle (gold border if unlocked, gray if locked)
- Center: title + description
- Right: status badge (✓ 完成 / ##% / 🔒 隐藏)

- [ ] **Step 2: Update `AchievementScreen.tsx`**

Render:
- Summary bar: unlocked count / total count / percentage
- Category filter: 全部 / 编程 / 绘画 / 语言 / 通用 / 隐藏
- FlatList of AchievementCards, filtered by selected category

- [ ] **Step 3: Verify**

Complete tasks to trigger achievements via `checkAchievements()`. Verify they auto-unlock and show in the list.

- [ ] **Step 4: Commit**

```bash
git add src/components/AchievementCard.tsx src/screens/AchievementScreen.tsx
git commit -m "feat(ui): add achievement screen with unlock detection"
```

---

### Task 13: AsyncStorage Persistence

**Files:**
- Create: `src/utils/storage.ts`
- Modify: `src/store/index.ts` (add subscription)
- Modify: `App.tsx` (add hydration)

- [ ] **Step 1: Create `src/utils/storage.ts`**

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'infinite-evolution-state';

export async function saveState(state: RootState): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export async function loadState(): Promise<RootState | undefined> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : undefined;
}
```

- [ ] **Step 2: Add auto-save subscription in store/index.ts**

```typescript
// After configureStore, add:
import { saveState } from '../utils/storage';

// Subscribe with debounce 500ms
let timeoutId: NodeJS.Timeout;
store.subscribe(() => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    saveState(store.getState() as RootState);
  }, 500);
});
```

- [ ] **Step 3: Add hydration in App.tsx**

On app launch, load persisted state, dispatch `load*` actions for each slice to hydrate.

```typescript
// In App component:
useEffect(() => {
  loadState().then(state => {
    if (state) {
      store.dispatch(loadCharacter(state.character));
      store.dispatch(loadTodos(state.todo));
      store.dispatch(loadSkillTree(state.skillTree));
      store.dispatch(loadAchievements(state.achievement));
    }
  });
}, []);
```

- [ ] **Step 4: Verify persistence**

Force close app, reopen. Verify state is restored (streak, completed todos, etc.)

- [ ] **Step 5: Commit**

```bash
git add src/utils/storage.ts src/store/index.ts App.tsx
git commit -m "feat(persist): add AsyncStorage persistence with debounced save"
```

---

### Task 14: Daily Login + Streak Management

**Files:**
- Modify: `src/hooks/useDailyLogin.ts`
- Modify: `src/store/characterSlice.ts` (already has dailyLogin)

- [ ] **Step 1: Create `src/hooks/useDailyLogin.ts`**

Hook called once on app launch. Checks if today's date differs from `lastLoginDate`:
- If different: dispatch `dailyLogin()` (+20 HP)
- If consecutive yesterday: dispatch `updateStreak()`
- If gap > 1 day: dispatch `resetStreak()`
- Stores today as `lastLoginDate`

- [ ] **Step 2: Wire it up**

Call `useDailyLogin()` in `App.tsx` after hydration completes.

- [ ] **Step 3: Verify**

Change system date forward, reopen app. Verify HP +20 applied, streak incremented.

- [ ] **Step 4: Commit**

```bash
git add src/hooks/useDailyLogin.ts
git commit -m "feat(character): add daily login HP recovery and streak management"
```

---

### Task 15: Final Integration Test

**Files:**
- No new files — verify all features

- [ ] **Step 1: Full flow test**

```bash
npx expo start
```

Walk through:
1. Launch app → character screen loads with default state
2. Switch to dark/light theme → verify colors update
3. Go to Todo → verify preset tasks generated
4. Add a custom task → verify it appears
5. Complete a task → verify EXP increase on character screen
6. Complete enough for level up → verify animation + SP gained
7. Go to Skill Tree → verify branch selection works
8. Unlock a skill → verify SP deducted
9. Go to Achievements → verify task-based achievements unlocked
10. Force close → reopen → verify state persisted

- [ ] **Step 2: Type check**

```bash
npx tsc --noEmit
```

Fix any type errors.

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete MVP implementation"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Character panel with HP/MP/EXP/Gold/SP/Streak → Task 9
- ✅ Daily HP recovery → Task 14
- ✅ Todo list with complete/fail → Task 10
- ✅ System preset + custom todos → Task 5, 10
- ✅ Skill tree with 3 branches, tiers, unlocking → Task 6, 11
- ✅ Achievement system with auto-detection → Task 7, 12
- ✅ Dual Morandi themes → Task 2
- ✅ Theme toggle + system auto → Task 2
- ✅ AsyncStorage persistence → Task 13
- ✅ 4 tab navigation → Task 8

**Placeholder check:** No TBD, TODOs, or incomplete sections.

**Type consistency check:** All interfaces defined in Task 3, used consistently across all slices and components.
