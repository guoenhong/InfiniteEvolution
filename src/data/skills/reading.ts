import type { SkillBranchData } from '../../types';

export const readingSkills: SkillBranchData = {
  id: 'reading',
  name: '阅读',
  icon: '📖',
  level: 0,
  exp: 0,
  nodes: [
    // ====== Tier 1 ======
    {
      id: 'speed-reading',
      name: '一目千行诀',
      icon: '⚡',
      branch: 'reading',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'eye-movement',
          name: '眼动训练诀',
          description: '眼动训练：扩大视幅、减少回跳、焦点移动',
          commands: ['视幅', '回跳', '焦点', '移动', '节奏'],
          lore: '训练双眼如鹰隼般銳利，大幅提升信息摄取速度',
          titles: ['🦅鷹眼訓練者', '👁️視野擴張師', '🎯焦點跳躍者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'peripheral-vision',
          name: '边缘视野诀',
          description: '扩大视野：词组识别、行间跳跃、周边感知',
          commands: ['词组', '按行', '跳跃', '宽幅', '扫视'],
          lore: '一眼看穿整行文字，边缘视野之内无一遺漏',
          titles: ['👀寬幅掃描者', '📄一目十行使', '🔭視野擴張師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'subvocal-elimination',
          name: '心读止息诀',
          description: '消除默读：减少内心发音、提升阅读速度',
          commands: ['止读', '视读', '默读', '速度', '理解'],
          lore: '止息心中的默念之声，让文字直達意識深處',
          titles: ['🤫心音止息者', '💭默念消除師', '⚡純粹視讀者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'comprehension-retention',
          name: '理解保持诀',
          description: '理解保持：速度与理解平衡、复述检验、回顾',
          commands: ['平衡', '复述', '检验', '回顾', '速度'],
          lore: '快而不失其意，速读与理解兼得的平衡之道',
          titles: ['⚖️速度平衡者', '🧠理解守護師', '📊效率最優者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'note-taking',
      name: '札记天工诀',
      icon: '📝',
      branch: 'reading',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'annotation-skills',
          name: '标注技巧诀',
          description: '标注技巧：划线、符号、批注、标签系统',
          commands: ['划线', '符号', '批注', '标签', '高亮'],
          lore: '在字里行间留下思考的痕迹，与过去的自己对话',
          titles: ['🖍️批注留痕者', '🔖標籤分類師', '✏️重點標記使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'excerpt-method',
          name: '摘录方法诀',
          description: '摘录方法：引文摘抄、改写总结、灵感记录',
          commands: ['摘抄', '改写', '总结', '灵感', '引用'],
          lore: '摘取书中最精华的部分，化为己用珍藏於庫',
          titles: ['📚精華採集者', '✂️摘錄剪貼師', '💡靈感捕手'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'mind-map',
          name: '思维导图诀',
          description: '思维导图：中心主题、分支展开、联想连接',
          commands: ['中心', '分支', '联想', '连接', '图示'],
          lore: '以圖像化的方式梳理思維，讓知識的脈絡清晰可見',
          titles: ['🗺️思維製圖者', '🧠心智圖繪師', '🔗聯想連接使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'card-notes',
          name: '卡片笔记诀',
          description: '卡片笔记：原子化笔记、关联、索引编号',
          commands: ['原子', '关联', '索引', '编号', '标签'],
          lore: '以卡片为单位存储知识，灵活組合構成知識網絡',
          titles: ['🗃️卡片筆記法', '🧩原子化存儲者', '🔗索引連結師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
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
      id: 'intensive-reading',
      name: '精读天眼诀',
      icon: '🔍',
      branch: 'reading',
      tier: 2,
      spCost: 1,
      prerequisites: ['speed-reading'],
      subSkills: [
        {
          id: 'text-analysis',
          name: '文本分析诀',
          description: '文本分析：层次拆解、论证识别、逻辑推理',
          commands: ['层次', '论证', '推理', '拆解', '结构'],
          lore: '將文本層層剝開，深入分析每一個論證的邏輯結構',
          titles: ['🔬文本解剖師', '📐層次拆解者', '🧩邏輯還原師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'deep-comprehension',
          name: '深层理解诀',
          description: '深层理解：言外之意、作者意图、时代背景',
          commands: ['言外', '意图', '背景', '暗示', '隐喻'],
          lore: '讀懂文字背後的潛台詞，與作者進行跨越時空的對話',
          titles: ['👁️言外洞察者', '🧠深層理解師', '🔮意圖解讀者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'critical-reading',
          name: '批判阅读诀',
          description: '批判性阅读：质疑、评估、多角度分析',
          commands: ['质疑', '评估', '多角度', '偏见', '论证'],
          lore: '不盲从于文字，以批判之眼审视每一个观点',
          titles: ['⚖️批判審判者', '🔍質疑探尋者', '🛡️獨立思考者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'structure-deconstruction',
          name: '结构拆解诀',
          description: '结构拆解：章节划分、叙事结构、论证框架',
          commands: ['章节', '叙事', '框架', '划分', '组织'],
          lore: '將書的骨架完整拆出，一目了然地掌握全局結構',
          titles: ['🏗️結構拆解師', '📋框架提取者', '🗺️全書鳥瞰使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'memory-enhancement',
      name: '过目不忘诀',
      icon: '🧠',
      branch: 'reading',
      tier: 2,
      spCost: 1,
      prerequisites: ['note-taking'],
      subSkills: [
        {
          id: 'memory-palace',
          name: '记忆宫殿术',
          description: '记忆宫殿：空间记忆、地点挂钩、图像联想',
          commands: ['宫殿', '地点', '挂钩', '图像', '空间'],
          lore: '在脑海中构建宏大的宫殿，將知識存放於每個房間',
          titles: ['🏛️記憶建築師', '🧠宮殿守護者', '🗺️空間聯想師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'spaced-repetition',
          name: '间隔重复诀',
          description: '间隔重复：遗忘曲线、复习计划、Anki系统',
          commands: ['遗忘', '间隔', '复习', '计划', 'Anki'],
          lore: '遵循遗忘的规律，在記憶消退之前再次加固',
          titles: ['📅遗忘對抗者', '🔄間隔複習官', '📈艾賓浩斯使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'association-memory',
          name: '联想记忆诀',
          description: '联想记忆：故事联想、谐音法、挂钩系统',
          commands: ['故事', '谐音', '挂钩', '夸张', '串联'],
          lore: '以天馬行空的聯想為鉤，將新知牢牢掛在舊識之上',
          titles: ['🔗聯想編織者', '🎭故事記憶師', '🌈誇張聯想使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'review-strategy',
          name: '复习策略诀',
          description: '复习策略：主动回忆、检索练习、交错练习',
          commands: ['回忆', '检索', '交错', '测试', '反馈'],
          lore: '以科學的複習策略取代盲目重讀，事半功倍',
          titles: ['🧪檢索練習者', '📝主動回憶師', '🎯高效複習使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
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
      id: 'knowledge-management',
      name: '万象归库诀',
      icon: '🗂️',
      branch: 'reading',
      tier: 3,
      spCost: 2,
      prerequisites: ['intensive-reading'],
      subSkills: [
        {
          id: 'classification-system',
          name: '分类体系诀',
          description: '分类体系：标签系统、文件夹结构、层级分类',
          commands: ['标签', '分类', '层级', '结构', '索引'],
          lore: '为知识建立井然有序的分类体系，隨時取用如探囊取物',
          titles: ['🗂️分類編目者', '🏷️標籤系統師', '📚圖書管理員'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'knowledge-graph',
          name: '知识图谱诀',
          description: '知识图谱：概念关联、关系图谱、知识网络',
          commands: ['概念', '关联', '图谱', '网络', '节点'],
          lore: '將散落的知識點連接成網，發現意想不到的聯繫',
          titles: ['🕸️知識織網者', '🔗關聯發現者', '🗺️概念繪圖師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'information-synthesis',
          name: '信息整合诀',
          description: '信息整合：多源合并、矛盾调和、综合提炼',
          commands: ['多源', '合并', '调和', '提炼', '综合'],
          lore: '從多個來源收集信息碎片，拼湊出完整的知識圖景',
          titles: ['🧩信息拼圖者', '🔀多源合成師', '⚗️提煉精華者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'output-driven',
          name: '输出驱动诀',
          description: '输出驱动：以教代学、写作输出、分享讨论',
          commands: ['教学', '写作', '分享', '讨论', '教授'],
          lore: '以輸出倒逼輸入，教学相長中鞏固所學',
          titles: ['📢知識傳播者', '🎓以教代學者', '✍️輸出驅動使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'thematic-reading',
      name: '主题深耕诀',
      icon: '🎯',
      branch: 'reading',
      tier: 3,
      spCost: 2,
      prerequisites: ['memory-enhancement'],
      subSkills: [
        {
          id: 'theme-selection',
          name: '主题确立诀',
          description: '主题确立：选题标准、范围界定、目标设定',
          commands: ['选题', '范围', '目标', '计划', '聚焦'],
          lore: '選定一個方向深耕，集中火力方能挖出深層智慧',
          titles: ['🎯主題聚焦者', '📋範圍界定師', '🎪深耕研究者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'reading-list',
          name: '书单构建诀',
          description: '书单构建：入门到精通、经典与前沿、交叉推荐',
          commands: ['书单', '入门', '经典', '前沿', '推荐'],
          lore: '精心設計從入門到精通的閱讀路線圖',
          titles: ['📚書單策劃師', '🗺️閱讀路線者', '📖經典推薦使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'comparative-reading',
          name: '比较阅读诀',
          description: '比较阅读：同主题对比、观点差异、优劣分析',
          commands: ['对比', '差异', '优劣', '角度', '评价'],
          lore: '同時閱讀多本相關著作，在比較中發現獨特見解',
          titles: ['⚖️比較分析者', '🔀觀點對照師', '🔬差異研究員'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'synthesis-distillation',
          name: '综合提炼诀',
          description: '综合提炼：跨书整合、核心洞见、知识萃取',
          commands: ['整合', '洞见', '萃取', '核心', '输出'],
          lore: '將多本書的精華冶煉一爐，提煉出屬於自己的智慧',
          titles: ['⚗️知識煉金師', '🧪精華萃取者', '💎洞見提煉使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
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
      id: 'writing-expression',
      name: '妙笔生花诀',
      icon: '✒️',
      branch: 'reading',
      tier: 4,
      spCost: 2,
      prerequisites: ['knowledge-management'],
      subSkills: [
        {
          id: 'essay-structure',
          name: '文章结构诀',
          description: '文章结构：开头结尾、段落衔接、起承转合',
          commands: ['开头', '结尾', '衔接', '转合', '结构'],
          lore: '以精妙的結構組織文字，引導讀者流暢地讀完全文',
          titles: ['📐結構設計師', '✒️起承轉合者', '🔗段落銜接師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'argumentation',
          name: '论证方法诀',
          description: '论证方法：举例、因果、类比、数据支撑',
          commands: ['举例', '因果', '类比', '数据', '引用'],
          lore: '以邏輯為劍，用無可辯駁的論證說服每一位讀者',
          titles: ['⚔️論證劍術師', '🛡️邏輯護盾者', '📊數據支持者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'rhetoric-devices',
          name: '修辞手法诀',
          description: '修辞手法：比喻、排比、反问、对仗、拟人',
          commands: ['比喻', '排比', '反问', '对仗', '拟人'],
          lore: '以修辭為衣裝，讓文字華麗而不浮誇，生動而不失體',
          titles: ['🎨修辭魔法師', '✨文采裝扮者', '🎭語言戲法師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'style-crafting',
          name: '风格塑造诀',
          description: '风格塑造：个人风格、语气把控、声音统一',
          commands: ['风格', '语气', '声音', '特色', '一致'],
          lore: '找到屬於自己的寫作聲音，讓文字擁有獨特的靈魂',
          titles: ['🎭風格塑造者', '🗣️個人聲音使', '🎪特色寫作者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'research-methods',
      name: '天机研法诀',
      icon: '🔬',
      branch: 'reading',
      tier: 4,
      spCost: 2,
      prerequisites: ['thematic-reading'],
      subSkills: [
        {
          id: 'literature-search',
          name: '文献检索诀',
          description: '文献检索：数据库使用、关键词策略、筛选评估',
          commands: ['数据库', '关键词', '检索', '筛选', '评估'],
          lore: '在浩瀚的文献汪洋中精準定位，找到最相關的資料',
          titles: ['🔍文獻搜索者', '🗺️資料導航師', '🎯精準檢索者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'data-collection',
          name: '数据收集诀',
          description: '数据收集：问卷、采访、观察、实验记录',
          commands: ['问卷', '采访', '观察', '实验', '记录'],
          lore: '以科學的方法收集第一手資料，為研究打下堅實基礎',
          titles: ['📋數據收集者', '🎙️訪談記錄員', '🔬實驗觀察者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'experiment-design',
          name: '实验设计诀',
          description: '实验设计：变量控制、对照组、随机化、信效度',
          commands: ['变量', '对照', '随机', '信度', '效度'],
          lore: '設計嚴謹的實驗方案，確保研究結果的可靠性',
          titles: ['🧪實驗設計師', '🔬變量掌控者', '📊信效度分析師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'conclusion-deduction',
          name: '结论推导诀',
          description: '结论推导：数据分析、统计推断、结果解释',
          commands: ['分析', '统计', '推断', '解释', '总结'],
          lore: '從數據中提煉出結論，將原始信息轉化為真知灼見',
          titles: ['📈數據解讀者', '🧮統計分析師', '💡結論提煉者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
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
      id: 'academic-writing',
      name: '玄学术著诀',
      icon: '🎓',
      branch: 'reading',
      tier: 5,
      spCost: 3,
      prerequisites: ['writing-expression'],
      subSkills: [
        {
          id: 'paper-standards',
          name: '论文规范诀',
          description: '论文规范：结构格式、引用标准、学术道德',
          commands: ['结构', '引用', '道德', '格式', '规范'],
          lore: '遵循學術界的嚴謹規範，讓研究成果得到同行認可',
          titles: ['📜論文規範者', '📚引用格式師', '🎓學術道德官'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'citation-system',
          name: '引用体系诀',
          description: '引用体系：APA、MLA、Chicago、参考文献管理',
          commands: ['APA', 'MLA', 'Chicago', '参考文献', 'Zotero'],
          lore: '以嚴謹的引用體系標註每一個思想的來源',
          titles: ['📖引用管理師', '🔗文獻連結者', '📚參考編纂使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'argument-logic',
          name: '论证逻辑诀',
          description: '论证逻辑：逻辑链、证据链、反驳與回應',
          commands: ['逻辑', '证据', '反驳', '回应', '推理'],
          lore: '構建無懈可擊的論證鏈條，讓每一個觀點都有據可依',
          titles: ['⛓️邏輯鏈建構者', '🛡️證據護衛者', '⚔️反駁回應師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'academic-publishing',
          name: '学术发表诀',
          description: '学术发表：选刊、投稿、同行评审、修改答复',
          commands: ['选刊', '投稿', '评审', '修改', '答复'],
          lore: '將研究成果發表於學術期刊，讓智慧照亮更遠的地方',
          titles: ['📰學術發表者', '🎯選刊策略師', '📬投稿經驗者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'critical-thinking',
      name: '破妄天眼诀',
      icon: '👁️',
      branch: 'reading',
      tier: 5,
      spCost: 3,
      prerequisites: ['research-methods'],
      subSkills: [
        {
          id: 'logical-fallacies',
          name: '逻辑谬误诀',
          description: '逻辑谬误：稻草人、滑坡、诉诸情感、紅鯡魚',
          commands: ['稻草人', '滑坡', '情感', '红鲱鱼', '循环'],
          lore: '識破言論中的邏輯陷阱，不被華麗的謬誤所迷惑',
          titles: ['🔍謬誤偵測者', '🧠邏輯警衛官', '🚩紅鯡魚獵手'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'argument-evaluation',
          name: '论证评估诀',
          description: '论证评估：強度評估、證據分級、可靠性判斷',
          commands: ['強度', '證據', '可靠性', '評估', '分級'],
          lore: '以客觀標準評估每一個論證的可靠性與說服力',
          titles: ['⚖️論證評審官', '📊證據分級者', '🎯可靠性判斷師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'multiple-perspectives',
          name: '多元视角诀',
          description: '多元视角：換位思考、立場轉換、全面考量',
          commands: ['換位', '立場', '全面', '角度', '同理'],
          lore: '跳出自己的立場，從多個角度審視同一個問題',
          titles: ['🔄視角轉換者', '👥多元包容者', '🎭立場體驗師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'independent-thought',
          name: '独立思考诀',
          description: '独立思考：自主判斷、破除權威、形成己見',
          commands: ['自主', '判斷', '權威', '己見', '质疑'],
          lore: '不盲從權威與多數，培養獨立判斷的思考能力',
          titles: ['🧠獨立思考者', '🗽自主判斷官', '🔓破除權威者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
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
      id: 'knowledge-creation',
      name: '造物天书诀',
      icon: '💡',
      branch: 'reading',
      tier: 6,
      spCost: 3,
      prerequisites: ['academic-writing'],
      subSkills: [
        {
          id: 'interdisciplinary',
          name: '跨学科整合诀',
          description: '跨学科整合：多元思維、跨界類比、融合創新',
          commands: ['跨学科', '跨界', '融合', '类比', '整合'],
          lore: '打破學科壁壘，在知識的交匯處發現創新的火花',
          titles: ['🔗跨界連結者', '🧬學科融合師', '🌈多元思維者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'innovation-methods',
          name: '创新方法论诀',
          description: '创新方法论：設計思維、第一性原理、反向思考',
          commands: ['設計思維', '第一性', '反向', 'TRIZ', 'SCAMPER'],
          lore: '掌握系統性的創新方法，讓靈感不再隨機降臨',
          titles: ['💡創新方法者', '🔧設計思維師', '🔄反向思考家'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'theory-building',
          name: '理论构建诀',
          description: '理论构建：概念化、模型建立、框架設計',
          commands: ['概念', '模型', '框架', '假說', '驗證'],
          lore: '將零散的觀察提煉為系統性的理論，解釋世界的規律',
          titles: ['🏛️理論建構者', '📐模型設計師', '🧩框架編織者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'knowledge-dissemination',
          name: '知识传播诀',
          description: '知识传播：教學設計、內容創作、社群運營',
          commands: ['教學', '創作', '社群', '傳播', '影響'],
          lore: '將知識傳播出去，讓智慧的火種照亮更多的人',
          titles: ['📢知識傳播者', '🎓智慧導師', '🌱火種傳遞者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'wisdom-cultivation',
      name: '智库天心诀',
      icon: '🧿',
      branch: 'reading',
      tier: 6,
      spCost: 3,
      prerequisites: ['critical-thinking'],
      subSkills: [
        {
          id: 'information-verification',
          name: '信息甄别诀',
          description: '信息甄别：假新聞識別、來源驗證、事實核查',
          commands: ['假新聞', '來源', '核查', '辨偽', '事實'],
          lore: '在信息爆炸的時代練就火眼金睛，分辨真偽',
          titles: ['🔍事實核查官', '🛡️信息守門者', '👁️辨偽天眼'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'deep-insight',
          name: '深度洞察诀',
          description: '深度洞察：模式識別、趨勢判斷、本質把握',
          commands: ['模式', '趨勢', '本質', '洞察', '預見'],
          lore: '穿透表象直達事物的核心，洞察常人所未見的規律',
          titles: ['🔮深層洞察者', '🧠本質把握師', '👁️模式識別者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'trend-forecasting',
          name: '趋势预测诀',
          description: '趨勢預測：歷史規律、未來推演、情景規劃',
          commands: ['預測', '推演', '情景', '規律', '未來'],
          lore: '以歷史為鏡，推演未來的走向，立於不敗之地',
          titles: ['🔮未來預言者', '📈趨勢分析師', '♟️情景推演師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'wisdom-accumulation',
          name: '智慧沉淀诀',
          description: '智慧沉淀：人生經驗、反思實踐、智慧傳承',
          commands: ['反思', '實踐', '傳承', '經驗', '智慧'],
          lore: '將知識內化為智慧，在時間的沉淀中愈發閃耀',
          titles: ['🧘智慧沉淀者', '📿人生智者', '🌟智慧傳承使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'reading' }
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
      id: 'scholar-ultimate',
      name: '学者·天道归一',
      icon: '💎',
      branch: 'reading',
      tier: 7,
      spCost: 5,
      prerequisites: ['knowledge-creation', 'wisdom-cultivation'],
      subSkills: [
        {
          id: 'cultivation-initiate',
          name: '初窥学道',
          description: '融会贯通所有阅读与研究方法，形成个人学术体系',
          commands: ['整合', '研究', '输出', '体系', '方法'],
          lore: '歷經萬卷書海磨練，終于窺見學術大道的真諦',
          titles: ['🌟學道初窺者', '📚知識整合者', '🔬研究覺醒者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 5, perLevel: 3, scope: 'global' }
          ],
          expToNext: 500,
          currentExp: 0,
        },
        {
          id: 'cultivation-master',
          name: '學問自然',
          description: '學貫中西，信手拈來皆為學問',
          commands: ['博學', '貫通', '隨手', '運用', '創新'],
          lore: '學問已融入血脈，舉手投足皆是智慧的流露',
          titles: ['🌿學問自然者', '🎋博學貫通者', '🧘隨心求學者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 8, perLevel: 3, scope: 'global' }
          ],
          expToNext: 800,
          currentExp: 0,
        },
        {
          id: 'cultivation-transcend',
          name: '萬學歸宗',
          description: '以學問影響世界，成為一代宗師',
          commands: ['傳承', '開派', '影響', '不朽', '奉獻'],
          lore: '吾即是學問，學問即是吾，終成一代大家',
          titles: ['👑萬學歸宗者', '🌟學術宗師', '∞智慧化身'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 12, perLevel: 3, scope: 'global' }
          ],
          expToNext: 1200,
          currentExp: 0,
        },
      ],
      ultimate: true,
      titles: ['初窥学道', '学问自然', '万学归宗'],
    },
  ],
};
