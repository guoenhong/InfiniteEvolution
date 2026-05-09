import type { SkillBranchData } from '../../types';

export const sportsSkills: SkillBranchData = {
  id: 'sports',
  name: '运动',
  icon: '🏃',
  level: 0,
  exp: 0,
  nodes: [
    // ====== Tier 1 ======
    {
      id: 'running-fundamentals',
      name: '疾风步法诀',
      icon: '🏃',
      branch: 'sports',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'running-form',
          name: '跑姿基础诀',
          description: '跑姿基础：前倾角度、摆臂、落地方式',
          commands: ['前倾', '摆臂', '落地', '步频', '步幅'],
          lore: '以正确的姿势奔跑，让每一步都高效而流畅',
          titles: ['🏃跑姿塑形者', '🦵步伐調整師', '💨流線跑者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'breathing-rhythm',
          name: '呼吸节奏诀',
          description: '呼吸节奏：腹式呼吸、节奏匹配、换气技巧',
          commands: ['腹式', '节奏', '换气', '鼻吸', '三步'],
          lore: '以呼吸为节拍器，让氧气随步伐源源不断涌入',
          titles: ['🌬️呼吸調控者', '🎵節奏呼吸師', '💨氣息悠長者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'distance-progression',
          name: '距离渐进诀',
          description: '距离渐进：循序渐进、心率控制、里程规划',
          commands: ['渐进', '心率', '里程', '配速', '恢复'],
          lore: '不急不躁稳步提升，让距离在坚持中悄然增长',
          titles: ['📈距離漸進者', '🫀心率掌控師', '🎯里數目標使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'warmup-cooldown',
          name: '热身冷却诀',
          description: '热身冷却：动态热身、静态拉伸、冷身整理',
          commands: ['动态', '热身', '冷身', '拉伸', '激活'],
          lore: '热身启功冷身收功，善始善终方为长久之道',
          titles: ['🔥熱身啟功者', '🧘冷身收功師', '🔄善始善終者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'stretching-fundamentals',
      name: '柔韧玄功诀',
      icon: '🤸',
      branch: 'sports',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'dynamic-stretching',
          name: '动态拉伸诀',
          description: '动态拉伸：摆腿、转体、弓步、開髖',
          commands: ['摆腿', '转体', '弓步', '开髋', '肩环'],
          lore: '以动作为拉伸，唤醒沉睡的身体为运动做好准备',
          titles: ['🤸動態伸展者', '🦵擺腿熱身師', '🔄轉體開髖者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'static-stretching',
          name: '静态拉伸诀',
          description: '静态拉伸：保持时间、呼吸配合、渐进增加',
          commands: ['保持', '呼吸', '渐进', '放松', '延展'],
          lore: '在靜止中感受肌肉的延展，讓柔韌在時間中增長',
          titles: ['🧘靜態延展者', '⏱️保持時間師', '🌱柔韌漸進者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'foam-roller',
          name: '泡沫轴诀',
          description: '泡沫轴放松：肌筋膜放松、痛点按压、恢复',
          commands: ['泡沫轴', '痛点', '筋膜', '按压', '滚动'],
          lore: '以泡沫轴为法器，化解肌肉中的结节與疲勞',
          titles: ['🔄筋膜放鬆者', '💆痛點按壓師', '🪵泡沫軸行者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'flexibility-training',
          name: '柔韧提升诀',
          description: '柔韧提升：劈叉、后弯、扭转、开肩开髋',
          commands: ['劈叉', '后弯', '扭转', '开肩', '开髋'],
          lore: '日復一日地探索身體的極限，讓柔韌度不斷突破',
          titles: ['🧘柔韌修行者', '🤸極限探索者', '🦩身體摺疊師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    // ====== Tier 2 ======
    {
      id: 'strength-foundation',
      name: '铁骨铜皮诀',
      icon: '💪',
      branch: 'sports',
      tier: 2,
      spCost: 1,
      prerequisites: ['running-fundamentals'],
      subSkills: [
        {
          id: 'bodyweight-training',
          name: '自重训练诀',
          description: '自重训练：俯卧撑、深蹲、引体向上、平板支撑',
          commands: ['俯卧撑', '深蹲', '引体', '平板', '臀桥'],
          lore: '以自身重量为负载，打造扎实的力量基础',
          titles: ['💪自重訓練者', '🏋️俯臥撐行者', '🧱核心穩固者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'dumbbell-training',
          name: '哑铃修炼诀',
          description: '哑铃训练：弯举、推举、划船、飞鸟',
          commands: ['弯举', '推举', '划船', '飞鸟', '农夫'],
          lore: '以哑铃为兵器，锻造上肢的每一块肌肉',
          titles: ['🏋️啞鈴戰士', '💪上肢鍛造師', '🔩肌肉雕塑者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'barbell-intro',
          name: '杠铃入门诀',
          description: '杠铃入门：深蹲、硬拉、卧推、推举',
          commands: ['深蹲', '硬拉', '卧推', '推举', '保护'],
          lore: '以杠铃為試煉石，挑戰人體力量的極限',
          titles: ['🔩杠鈴挑戰者', '🦵深蹲王者', '🏋️硬拉大力士'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'core-training',
          name: '核心训练诀',
          description: '核心训练：腹肌、背肌、旋转、抗伸展',
          commands: ['腹肌', '背肌', '旋转', '平板', '侧撑'],
          lore: '以核心为力量之源，穩固軀幹方能發力於四肢',
          titles: ['🧱核心鐵壁者', '🤸旋轉穩定師', '🦴軀幹支柱者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'cardio-advanced',
      name: '天心跳率诀',
      icon: '❤️',
      branch: 'sports',
      tier: 2,
      spCost: 1,
      prerequisites: ['stretching-fundamentals'],
      subSkills: [
        {
          id: 'interval-training',
          name: '间歇训练诀',
          description: '间歇跑：冲刺恢复交替、高强度间歇、节奏变化',
          commands: ['冲刺', '恢复', '高强度', '间歇', '组数'],
          lore: '在衝刺與恢复之間反复切換，大幅提升心肺能力',
          titles: ['⚡衝刺爆發者', '🔄強弱交替師', '💓心肺激發者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'hill-training',
          name: '坡度修炼诀',
          description: '坡度训练：上坡冲刺、下坡控制、坡度适应',
          commands: ['上坡', '下坡', '坡度', '爬升', '下降'],
          lore: '征服从平坦到陡峭的每一寸地形',
          titles: ['⛰️坡道征服者', '📈爬升修行者', '🏔️山岳跑者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'pace-control',
          name: '配速控制诀',
          description: '配速控制：匀速策略、负分配、节奏跑',
          commands: ['匀速', '负分配', '节奏', '配速', '定时'],
          lore: '以精準的配速驾驭體能，不因衝刺過早耗盡',
          titles: ['🎯配速大師', '⏱️時間分配者', '📊節奏掌控師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'endurance-building',
          name: '耐力提升诀',
          description: '耐力提升：长距离慢跑、有氧基础、乳酸阈值',
          commands: ['长距离', 'LSD', '有氧', '乳酸', '阈值'],
          lore: '以悠長的慢跑積累有氧基礎，讓耐力如涓流不息',
          titles: ['🏃長跑修行者', '🫁有氧基礎者', '📈耐力漸進師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    // ====== Tier 3 ======
    {
      id: 'nutrition-science',
      name: '食补天经诀',
      icon: '🥗',
      branch: 'sports',
      tier: 3,
      spCost: 2,
      prerequisites: ['strength-foundation'],
      subSkills: [
        {
          id: 'macronutrients',
          name: '宏量营养诀',
          description: '宏量营养：蛋白质、碳水、脂肪的配比与计算',
          commands: ['蛋白质', '碳水', '脂肪', '热量', '配比'],
          lore: '掌握三大宏量營養的奧秘，為身體提供精準的能量',
          titles: ['🥩蛋白質獵人', '🍚碳水調配師', '🥑脂肪掌控者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'micronutrients',
          name: '微量营养诀',
          description: '微量营养：维生素、矿物质、抗氧化素',
          commands: ['维生素', '矿物质', '抗氧化', '电解质', '微量元素'],
          lore: '在细微之處守護身體健康，微量營養舉足輕重',
          titles: ['🔬微量元素師', '🥦維生素使者', '⚡電解質調控者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'meal-planning',
          name: '饮食计划诀',
          description: '饮食计划：增肌餐、减脂餐、运动前后饮食',
          commands: ['增肌', '减脂', '运动前', '运动后', '加餐'],
          lore: '針對不同目標制定精準的飲食方案，吃出理想身形',
          titles: ['📋飲食規劃師', '🎯增肌減脂者', '🍽️運動配餐師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'supplement-knowledge',
          name: '补剂知识诀',
          description: '补剂知识：蛋白粉、肌酸、BCAA、咖啡因',
          commands: ['蛋白粉', '肌酸', 'BCAA', '咖啡因', '氮泵'],
          lore: '以補劑为辅佐，在科学范围内最大化训练效果',
          titles: ['🧪補劑研究者', '⚡肌酸使用者', '☕咖啡因調配師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'recovery-mastery',
      name: '养息归元诀',
      icon: '😴',
      branch: 'sports',
      tier: 3,
      spCost: 2,
      prerequisites: ['cardio-advanced'],
      subSkills: [
        {
          id: 'sleep-optimization',
          name: '睡眠优化诀',
          description: '睡眠优化：睡眠周期、深度睡眠、入睡技巧',
          commands: ['周期', '深度', '入睡', '环境', '规律'],
          lore: '在沉睡中恢復身體，讓肌肉在夢境中增長',
          titles: ['😴睡眠修行者', '🌙深度睡眠師', '🛏️入睡達人'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'active-recovery',
          name: '主动恢复诀',
          description: '主动恢复：低强度活动、恢复跑、交叉训练',
          commands: ['恢复跑', '游泳', '骑行', '瑜伽', '散步'],
          lore: '以溫和的運動促進恢復，讓身體在活動中修復',
          titles: ['🔄主動恢復者', '🏊交叉訓練師', '🧘和緩運動者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'injury-prevention',
          name: '伤病预防诀',
          description: '伤病预防：跑者膝、足底筋膜炎、ITBS预防',
          commands: ['跑者膝', '足底', 'ITBS', '预防', '强化'],
          lore: '防患於未然，在傷病降臨之前築起堅固的防線',
          titles: ['🛡️傷病防禦者', '🦵跑者膝守護者', '🦶足底護航使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'massage-relaxation',
          name: '按摩放松诀',
          description: '按摩放松：深层组织按摩、穴位按压、放松技巧',
          commands: ['深层', '穴位', '按压', '推拿', '放松'],
          lore: '以雙手為療癒工具，化解肌肉中的疲勞與緊張',
          titles: ['💆按摩療癒者', '🖐️深層放鬆師', '🔮穴位按壓者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    // ====== Tier 4 ======
    {
      id: 'comprehensive-fitness',
      name: '全能体修诀',
      icon: '⚡',
      branch: 'sports',
      tier: 4,
      spCost: 2,
      prerequisites: ['nutrition-science'],
      subSkills: [
        {
          id: 'hiit-training',
          name: 'HIIT训练诀',
          description: 'HIIT训练：Tabata、EMOM、AMRAP、间歇设计',
          commands: ['Tabata', 'EMOM', 'AMRAP', '间歇', '全力'],
          lore: '在極短的時間內爆發出最大能量，燃脂增效果',
          titles: ['⚡HIIT戰士', '🔥Tabata修行者', '⏱️極限間歇師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'circuit-training',
          name: '循环训练诀',
          description: '循环训练：动作循环、休息间隔、全身整合',
          commands: ['循环', '动作', '休息', '组间', '全身'],
          lore: '以循环的方式全面刺激全身肌群，效率至上',
          titles: ['🔄循環訓練者', '🏋️全身整合師', '⏲️高效訓練者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'functional-training',
          name: '功能训练诀',
          description: '功能训练：平衡、稳定、协调、爆发力训练',
          commands: ['平衡', '稳定', '协调', '爆发', '敏捷'],
          lore: '以實用為導向的訓練，讓身體在真實生活中更強大',
          titles: ['🤸功能訓練者', '⚖️平衡大師', '💥爆發力修行者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'agility-training',
          name: '敏捷提升诀',
          description: '敏捷训练：梯绳训练、变向、反应速度',
          commands: ['梯绳', '变向', '反应', '速度', '协调'],
          lore: '在快速變向中挑戰身體的反應極限，如獵豹般敏捷',
          titles: ['🐆敏捷獵豹者', '🪜梯繩訓練師', '⚡反應速度者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'movement-skills',
      name: '身法御形诀',
      icon: '🤸',
      branch: 'sports',
      tier: 4,
      spCost: 2,
      prerequisites: ['recovery-mastery'],
      subSkills: [
        {
          id: 'jumping-technique',
          name: '跳跃技巧诀',
          description: '跳跃训练：深蹲跳、箱跳、跳绳、垂直跳',
          commands: ['深蹲跳', '箱跳', '跳绳', '垂直跳', '跨栏'],
          lore: '克服重力束縛，讓身體在空中自由翱翔',
          titles: ['🦘跳躍袋鼠者', '📦箱跳挑戰者', '⛹️垂直彈跳師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'throwing-skills',
          name: '投掷技巧诀',
          description: '投掷训练：药球投掷、旋转投掷、爆发力傳導',
          commands: ['药球', '旋转', '爆发', '传导', '核心'],
          lore: '將全身力量凝聚於一點釋放，擲出雷霆萬鈞之勢',
          titles: ['🎯投擲精準者', '💥爆發釋放師', '🔄旋轉動力者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'balance-training',
          name: '平衡修炼诀',
          description: '平衡训练：单腿站立、波速球、不穩定訓練',
          commands: ['单腿', '波速球', '不稳', '核心', '稳定'],
          lore: '在動盪中尋找平衡，讓身體的核心穩定如大地',
          titles: ['🧘單腿平衡者', '⚖️穩定大師', '🌊波速球行者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'coordination-training',
          name: '协调训练诀',
          description: '协调训练：手脚配合、眼手协调、节奏動作',
          commands: ['手脚', '眼手', '节奏', '配合', '同步'],
          lore: '訓練身體各部位的完美協同，讓動作行雲流水',
          titles: ['🎵節奏協調者', '🖐️👁️眼手配合師', '🤹同步訓練者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    // ====== Tier 5 ======
    {
      id: 'competitive-prep',
      name: '竞技备战诀',
      icon: '🏆',
      branch: 'sports',
      tier: 5,
      spCost: 3,
      prerequisites: ['comprehensive-fitness'],
      subSkills: [
        {
          id: 'pre-race-training',
          name: '赛前训练诀',
          description: '赛前训练：减量期、巅峰調整、賽前飲食',
          commands: ['减量', '巅峰', '赛前', '状态', '调整'],
          lore: '在比賽前將身體狀態調整至巔峰，一切為了那一刻',
          titles: ['🏅賽前調整者', '📈巔峰狀態師', '⏱️減量規劃者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'mental-toughness',
          name: '心理素质诀',
          description: '心理素质：专注力、壓力管理、自我對話',
          commands: ['专注', '压力', '对话', '冥想', '信念'],
          lore: '鍛造鋼鐵般的意志，比身體更早抵達終點',
          titles: ['🧠鋼鐵意志者', '🎯專注大師', '💪心理韌性者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'tactic-strategy',
          name: '战术制定诀',
          description: '战术制定：配速策略、補給策略、應變計劃',
          commands: ['策略', '配速', '补给', '应变', '计划'],
          lore: '以智慧制定比賽策略，不是只靠蠻力取勝',
          titles: ['♟️戰術制定者', '🎯策略執行官', '📋應變規劃師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'race-execution',
          name: '比赛执行诀',
          description: '比赛执行：開跑策略、途中調整、終點衝刺',
          commands: ['开跑', '途中', '衝刺', '配速', '節省'],
          lore: '將訓練成果在比賽中完美展現，不留遺憾',
          titles: ['🏃比賽執行者', '⚡終點衝刺者', '🎯完美發揮師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'specialized-training',
      name: '专精破极诀',
      icon: '🎯',
      branch: 'sports',
      tier: 5,
      spCost: 3,
      prerequisites: ['movement-skills'],
      subSkills: [
        {
          id: 'long-distance',
          name: '长跑专训诀',
          description: '长跑专训：马拉松备战、配速策略、耐力儲備',
          commands: ['马拉松', '配速', '耐力', 'LSD', '节奏'],
          lore: '為長距離賽事量身訓練，挑戰人體耐力的極限',
          titles: ['🏅馬拉松者', '📏長距離專師', '🏆耐力王者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'explosive-power',
          name: '爆发力训诀',
          description: '爆发力训练：增强式训练、奧舉、快速伸缩',
          commands: ['增强式', '奧舉', '快速', '伸缩', '弹跳'],
          lore: '在瞬間釋放全部力量，如彈簧般迅猛爆發',
          titles: ['💥爆發力王者', '⚡增強式訓練者', '🔋彈簧蓄力師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'skill-specialization',
          name: '技巧专训诀',
          description: '技巧专训：運動專項技巧、技術打磨、动作優化',
          commands: ['专項', '技巧', '打磨', '優化', '精準'],
          lore: '將特定運動的技巧磨練到極致，追求完美的動作',
          titles: ['🎯技巧修行者', '🔧動作打磨師', '⚙️專項優化者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'endurance-specialization',
          name: '耐力专训诀',
          description: '耐力专训：超長距離、時間挑戰、極限適應',
          commands: ['超長距', '時間', '極限', '適應', '續航'],
          lore: '挑戰身體耐受的極限，在筋疲力盡時仍有前進之力',
          titles: ['🏃極限耐力求', '⏱️時間挑戰者', '🌄超長距離者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    // ====== Tier 6 ======
    {
      id: 'sports-science',
      name: '运动天机诀',
      icon: '🔬',
      branch: 'sports',
      tier: 6,
      spCost: 3,
      prerequisites: ['competitive-prep'],
      subSkills: [
        {
          id: 'biomechanics',
          name: '运动生物力学诀',
          description: '运动生物力学：力的分析、关节力矩、運動鏈',
          commands: ['力', '力矩', '运动链', '杠杆', '角度'],
          lore: '從力學角度分析每一個動作，追求效率最大化的極致',
          titles: ['🔬生物力學師', '⚙️動作分析者', '📐杠杆最佳化'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'exercise-physiology',
          name: '运动生理学诀',
          description: '运动生理学：能量系統、激素反應、適應機制',
          commands: ['能量', '激素', '适应', '有氧', '无氧'],
          lore: '了解身體在運動中的運作機制，科學化訓練設計',
          titles: ['🧬生理學研究者', '⚡能量系統師', '🧪激素調控者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'periodization',
          name: '训练周期化诀',
          description: '训练周期化：大周期、中周期、小周期設計',
          commands: ['大周期', '中周期', '小周期', '波峰', '恢复'],
          lore: '以週期化的訓練計劃，在正確的時間達到最佳狀態',
          titles: ['📅周期規劃者', '📈波峰設計師', '🔄訓練節奏者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'data-analysis',
          name: '训练数据分析诀',
          description: '训练数据分析：心率變異、功率輸出、進度追踪',
          commands: ['心率', '功率', '進度', '分析', '趨勢'],
          lore: '以數據驅動訓練決策，用科學取代感覺',
          titles: ['📊數據分析者', '📈趨勢洞察師', '📉HRV掌握者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'leadership-coaching',
      name: '领航传承诀',
      icon: '👥',
      branch: 'sports',
      tier: 6,
      spCost: 3,
      prerequisites: ['specialized-training'],
      subSkills: [
        {
          id: 'coaching-skills',
          name: '教练技能诀',
          description: '教练技能：教學方法、糾正技巧、激勵策略',
          commands: ['教学', '纠正', '激励', '示范', '反馈'],
          lore: '以教練的身份引導他人，將運動的樂趣傳承下去',
          titles: ['🎓運動教練', '📢激勵引導者', '👁️糾正觀察師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'team-leading',
          name: '团队带领诀',
          description: '团队带领：團隊建設、目標設定、氛圍營造',
          commands: ['团队', '目标', '氛围', '合作', '鼓舞'],
          lore: '凝聚團隊的力量，帶領一群人共同突破極限',
          titles: ['👥團隊領袖', '🎯目標設定者', '🤝凝聚核心者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'program-design',
          name: '运动规划诀',
          description: '运动规划：訓練計劃設計、年度規劃、長期發展',
          commands: ['计划', '年度', '长期', '设计', '评估'],
          lore: '為個人或團隊設計長期的運動發展藍圖',
          titles: ['📋訓練規劃師', '📅年度設計者', '🗺️長期藍圖師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'experience-sharing',
          name: '经验传承诀',
          description: '经验传承：經驗分享、知識沉澱、社群建設',
          commands: ['分享', '沉淀', '社群', '传承', '影响'],
          lore: '將一生的運動智慧化作燈塔，照亮後來者的路',
          titles: ['📖經驗傳承者', '🌟智慧燈塔者', '🌱後輩引路人'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'sports' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    // ====== Tier 7 - Ultimate ======
    {
      id: 'iron-body-ultimate',
      name: '钢铁之躯·天道归一',
      icon: '💎',
      branch: 'sports',
      tier: 7,
      spCost: 5,
      prerequisites: ['sports-science', 'leadership-coaching'],
      subSkills: [
        {
          id: 'cultivation-initiate',
          name: '初窥体道',
          description: '融会贯通所有运动训练方法，打造个人训练体系',
          commands: ['整合', '体系', '训练', '优化', '健康'],
          lore: '歷經千萬次訓練的打磨，終于窺見身體潛能的真諦',
          titles: ['🌟體道初窺者', '💪全才訓練者', '🔬身體覺醒者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 5, perLevel: 3, scope: 'global' }
          ],
          expToNext: 500,
          currentExp: 0,
        },
        {
          id: 'cultivation-master',
          name: '武道自然',
          description: '身體與心靈合一，運動如同呼吸般自然',
          commands: ['合一', '自然', '超越', '極限', '自由'],
          lore: '身隨心動，武動自然，再也沒有極限可限制',
          titles: ['🌿身體自然者', '🎋武道隨心者', '🧘身心合一者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 8, perLevel: 3, scope: 'global' }
          ],
          expToNext: 800,
          currentExp: 0,
        },
        {
          id: 'cultivation-transcend',
          name: '万体归宗',
          description: '以身體為道，激發他人潛能，傳承運動精神',
          commands: ['傳承', '激發', '影響', '標杆', '榜樣'],
          lore: '吾即是運動，運動即是吾，成就鋼鐵之軀的傳奇',
          titles: ['👑萬體歸宗者', '🌟傳奇運動家', '∞鋼鐵化身'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 12, perLevel: 3, scope: 'global' }
          ],
          expToNext: 1200,
          currentExp: 0,
        },
      ],
      ultimate: true,
      titles: ['初窥体道', '武道自然', '万体归宗'],
    },
  ],
};
