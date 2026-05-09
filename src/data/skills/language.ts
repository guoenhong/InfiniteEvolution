import type { SkillBranchData } from '../../types';

export const languageSkills: SkillBranchData = {
  id: 'language',
  name: '语言',
  icon: '🌐',
  level: 0,
  exp: 0,
  nodes: [
    // ====== Tier 1 ======
    {
      id: 'vocabulary-fundamentals',
      name: '万言归宗诀',
      icon: '📝',
      branch: 'language',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'high-frequency',
          name: '高频词汇诀',
          description: '高频词汇：核心词汇、日常用语、基础表达',
          commands: ['核心词', '日常用语', '基础词', '量词', '连词'],
          lore: '从千言万语中提炼最常用的精华词汇',
          titles: ['📚詞彙收集者', '🔤基礎積累使', '🗣️日常會話者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'root-affix',
          name: '词根词缀诀',
          description: '词根词缀：前缀、后缀、词根联想记忆法',
          commands: ['前缀', '后缀', '词根', '派生', '合成'],
          lore: '拆解文字的基因密码，举一反三触类旁通',
          titles: ['🧬詞源解碼師', '🔗字根串聯者', '🌱派生聯想使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'mnemonics',
          name: '记忆心法',
          description: '记忆法：联想记忆、故事记忆、间隔重复',
          commands: ['联想', '故事', '间隔重复', '卡片', '口诀'],
          lore: '以巧妙的心法将生词牢牢刻入脑海深处',
          titles: ['🧠記憶大師', '🔗聯想編織者', '🔄間隔訓練使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'thematic-vocab',
          name: '主题词汇诀',
          description: '主题词汇：餐饮、旅行、职场、科技分类',
          commands: ['餐饮', '旅行', '职场', '科技', '文化'],
          lore: '按主题分门别类，构建语言使用的实用蓝图',
          titles: ['📂主題分類使', '🗺️場景詞彙師', '🎯實用導向者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'pronunciation-mastery',
      name: '天音正声诀',
      icon: '🔊',
      branch: 'language',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'phonetics',
          name: '音标掌握诀',
          description: '音标掌握：元音、辅音、国际音标拼读',
          commands: ['元音', '辅音', '音标', '拼读', '重音'],
          lore: '掌握发音的基石，让每个音节都精准无误',
          titles: ['🔤音標解碼者', '🗣️發音矯正師', '🎵語音律動使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'tone-training',
          name: '声调修炼诀',
          description: '声调训练：四声、连读变调、语调模式',
          commands: ['声调', '变调', '语调', '升降', '轻重'],
          lore: '调阴阳之音，掌握语言的旋律与节奏',
          titles: ['🎼聲調音樂家', '📈抑揚頓挫使', '🎭語調演員'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'linking-reduction',
          name: '连读弱读诀',
          description: '连读弱读：连读规则、弱读形式、同化现象',
          commands: ['连读', '弱读', '同化', '省略', '缩约'],
          lore: '让词与词之间行云流水，如丝绸般顺滑自然',
          titles: ['🌊連讀流水使', '💨輕音省略者', '🔗詞間膠合師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'rhythm-flow',
          name: '口语节奏诀',
          description: '口语节奏：重音模式、语速控制、停顿技巧',
          commands: ['重音', '语速', '停顿', '节奏', '断句'],
          lore: '以节奏驾驭语言，让每一句话都富有生命力',
          titles: ['🥁節奏打擊者', '⏱️語速調控師', '🎤口語律動者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
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
      id: 'daily-conversation',
      name: '日常交流录',
      icon: '💬',
      branch: 'language',
      tier: 2,
      spCost: 1,
      prerequisites: ['vocabulary-fundamentals'],
      subSkills: [
        {
          id: 'greetings-intro',
          name: '问候介绍诀',
          description: '问候介绍：自我介绍、寒暄、社交礼仪',
          commands: ['问候', '介绍', '寒暄', '礼仪', '告别'],
          lore: '以得体之言打开沟通之门，留下美好的第一印象',
          titles: ['🤝社交開場者', '👋寒暄高手', '🎩禮儀使者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'shopping-dining',
          name: '购物餐饮诀',
          description: '购物餐饮：点餐、购物、退换、询价',
          commands: ['点餐', '购物', '询价', '退换', '结账'],
          lore: '在日常消费中自如交流，不再为开口而发愁',
          titles: ['🛒購物達人', '🍽️點餐高手', '💰議價談判者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'travel-transport',
          name: '旅行交通诀',
          description: '旅行交通：问路、乘车、住宿、紧急情况',
          commands: ['问路', '乘车', '住宿', '紧急', '票务'],
          lore: '走遍天下都不怕，在异国他乡也能畅行无阻',
          titles: ['🧭旅行嚮導', '🗺️異國通靈者', '🚄暢行無阻使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'social-expression',
          name: '社交表达诀',
          description: '社交表达：邀请、拒绝、感谢、道歉、赞美',
          commands: ['邀请', '拒绝', '感谢', '道歉', '赞美'],
          lore: '掌握社交言语的艺术，让人际关系如沐春风',
          titles: ['🌸社交花使者', '🎭人情練達者', '💝溫暖傳遞師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'listening-training',
      name: '天耳通灵诀',
      icon: '👂',
      branch: 'language',
      tier: 2,
      spCost: 1,
      prerequisites: ['pronunciation-mastery'],
      subSkills: [
        {
          id: 'intensive-listening',
          name: '精听修炼术',
          description: '精听练习：逐句听写、关键词捕捉、细节理解',
          commands: ['听写', '逐句', '细节', '关键词', '复述'],
          lore: '凝神静听，不放过每一个音节的变化',
          titles: ['👂細聽修行者', '📝逐句抄寫使', '🔍細節獵聽師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'extensive-listening',
          name: '泛听积累诀',
          description: '泛听积累：播客、新闻、影视沉浸式输入',
          commands: ['播客', '新闻', '影视', '有声书', '广播'],
          lore: '以大量的听力输入培养语感，让理解成为本能',
          titles: ['🎧泛聽積累者', '📻新聞聆聽師', '🎬影視入門使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'dictation',
          name: '听写复刻诀',
          description: '听写训练：精听写、影子跟读、听译练习',
          commands: ['听写', '跟读', '听译', '速记', '核对'],
          lore: '以笔尖追隨聲音，將聽到的信息完整復刻',
          titles: ['✍️聽寫復刻者', '👻影子跟讀師', '⚡聽譯快手'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'accent-adapt',
          name: '口音适应诀',
          description: '口音适应：各地口音、语速变化、背景噪音',
          commands: ['口音', '语速', '噪音', '方言', '变体'],
          lore: '适应万千口音变化，无论何处皆能听懂',
          titles: ['🌍口音通譯者', '🗣️方言適應師', '🔊噪音篩選者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
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
      id: 'grammar-mastery',
      name: '语法天则诀',
      icon: '📏',
      branch: 'language',
      tier: 3,
      spCost: 2,
      prerequisites: ['daily-conversation'],
      subSkills: [
        {
          id: 'tense-aspect',
          name: '时态语态诀',
          description: '时态语态：时态变化、主动被动、语气',
          commands: ['时态', '语态', '语气', '完成', '进行'],
          lore: '掌握时间的语言表达，精确定位事件发生的时刻',
          titles: ['⏳時態掌控者', '🔄語態轉換師', '📅時間敘述者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'clause-structure',
          name: '从句结构诀',
          description: '从句结构：名词从句、定语从句、状语从句',
          commands: ['名词从句', '定语从句', '状语从句', '非谓语', '并列'],
          lore: '以从句嵌套构建复杂的思维表达，如套娃般精妙',
          titles: ['🗃️套娃結構師', '🔗從句編織者', '🏗️複句建築師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'subjunctive-mood',
          name: '虚拟语气心法',
          description: '虚拟语气：与现实相反的假设、愿望、建议',
          commands: ['虚拟', '假设', '愿望', '建议', '条件'],
          lore: '在言语中构建平行世界，诉说与现实相反的愿望',
          titles: ['🌌平行世界者', '💭願望編織師', '🔮假設推演使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'grammar-nuance',
          name: '语法细节诀',
          description: '语法细节：冠词、介词、易错辨析、高级结构',
          commands: ['冠词', '介词', '易错', '惯用', '倒装'],
          lore: '雕琢语法的最细微之处，追求语言的极致精确',
          titles: ['🔬細微辨析者', '📐語法精算師', '🧐易錯糾察官'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'reading-comprehension',
      name: '慧眼阅读诀',
      icon: '👁️',
      branch: 'language',
      tier: 3,
      spCost: 2,
      prerequisites: ['listening-training'],
      subSkills: [
        {
          id: 'scanning-skimming',
          name: '扫描略读诀',
          description: '扫描略读：标题扫描、关键词定位、大意把握',
          commands: ['扫描', '略读', '标题', '关键词', '大意'],
          lore: '一眼扫过即知大意，于字海之中快速定位所需',
          titles: ['📄速讀掃描者', '🎯關鍵詞獵手', '👀一目十行使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'intensive-analysis',
          name: '精读分析诀',
          description: '精读分析：逐句分析、结构拆解、深层理解',
          commands: ['精读', '拆解', '分析', '注释', '总结'],
          lore: '逐字逐句深挖文意，发现字面之下的真意',
          titles: ['🔍精讀掘金者', '📖文意剖析師', '🧐字間尋真者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'inference-deduction',
          name: '推理判断诀',
          description: '推理判断：上下文推测、隐含意义、作者意图',
          commands: ['推测', '隐含', '意图', '语气', '立场'],
          lore: '从字里行间读出言外之意，洞悉作者的真正意图',
          titles: ['🕵️言外之意偵探', '🧠推理解碼師', '🔮筆者心聲者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'vocab-guessing',
          name: '词汇猜测诀',
          description: '词汇猜测：语境线索猜词、词形分析、构词法',
          commands: ['语境', '猜词', '词形', '构词', '线索'],
          lore: '即使遇到生词也能凭线索猜出其意，不再依赖字典',
          titles: ['🔤生詞獵人', '🧩線索拼接師', '🎯語境推測使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
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
      id: 'written-expression',
      name: '笔落惊风诀',
      icon: '✍️',
      branch: 'language',
      tier: 4,
      spCost: 2,
      prerequisites: ['grammar-mastery'],
      subSkills: [
        {
          id: 'paragraph-structure',
          name: '段落结构诀',
          description: '段落结构：主题句、支持句、过渡衔接',
          commands: ['主题句', '支持句', '过渡', '衔接', '结尾'],
          lore: '以清晰的段落结构为载体，承载思想的重量',
          titles: ['📐段落建築師', '🔗銜接編織者', '📄結構規劃師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'argumentative-writing',
          name: '论证写作诀',
          description: '论证写作：论点、论据、论证、反驳',
          commands: ['论点', '论据', '论证', '反驳', '结论'],
          lore: '以逻辑为矛，以证据为盾，撰写无人能驳的雄文',
          titles: ['⚔️雄辯寫作者', '🛡️邏輯護盾使', '🎯論點狙擊手'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'creative-writing',
          name: '创意写作诀',
          description: '创意写作：故事叙述、描写技巧、修辞运用',
          commands: ['叙述', '描写', '修辞', '比喻', '意象'],
          lore: '以文字为颜料，在白纸上绘制五彩斑斓的世界',
          titles: ['🎨文字畫家', '📖故事編織者', '✨修辭魔法師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'formal-style',
          name: '正式文体诀',
          description: '正式文体：书信、报告、提案、邮件写作',
          commands: ['书信', '报告', '提案', '邮件', '备忘录'],
          lore: '掌握正式文体的礼仪与规范，在职场中游刃有余',
          titles: ['📧商務書信師', '📊報告撰寫者', '🎩正式文體家'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'oral-fluency',
      name: '舌绽莲花诀',
      icon: '🗣️',
      branch: 'language',
      tier: 4,
      spCost: 2,
      prerequisites: ['reading-comprehension'],
      subSkills: [
        {
          id: 'impromptu-speech',
          name: '即兴表达诀',
          description: '即兴表达：即兴演讲、临场反应、思路组织',
          commands: ['即兴', '临场', '组织', '串联', '应变'],
          lore: '不需要稿子，心中所想便能脱口而出流利自如',
          titles: ['🎤即興演說家', '⚡脫口而出者', '🧠思維串聯師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'debate-discussion',
          name: '辩论讨论诀',
          description: '辩论讨论：观点表达、反驳、协商、共识',
          commands: ['辩论', '反驳', '协商', '共识', '提问'],
          lore: '在思想碰撞中坚守立场，以理服人而非以声压人',
          titles: ['⚔️辯論戰士', '🤝協商調解者', '💡觀點碰撞師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'public-speaking',
          name: '演讲技巧诀',
          description: '演讲技巧：开场、肢体语言、声音控制、互动',
          commands: ['开场', '肢体', '声音', '互动', '故事'],
          lore: '站在台上光芒万丈，用言语的力量征服全场',
          titles: ['🎙️舞台王者', '👥群眾煽動者', '✨台上魅力師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'cultural-context',
          name: '文化理解诀',
          description: '文化理解：文化背景、禁忌、幽默、非语言交流',
          commands: ['文化', '禁忌', '幽默', '身势', '习俗'],
          lore: '语言背后的文化才是真正的灵魂，理解才能共鸣',
          titles: ['🌍文化解讀者', '🎭風俗通曉使', '🤣幽默領悟者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
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
      id: 'academic-language',
      name: '学术玄典诀',
      icon: '🎓',
      branch: 'language',
      tier: 5,
      spCost: 3,
      prerequisites: ['written-expression'],
      subSkills: [
        {
          id: 'paper-reading',
          name: '论文阅读诀',
          description: '论文阅读：摘要理解、结构把握、批判评估',
          commands: ['摘要', '结构', '评估', '引用', '数据'],
          lore: '穿透学术论文的层层面纱，快速把握研究精髓',
          titles: ['📜論文解讀者', '🔬學術鑑賞家', '📊數據分析師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'academic-writing',
          name: '学术写作诀',
          description: '学术写作：论文规范、引用格式、学术语言',
          commands: ['论文', '引用', '格式', '规范', '术语'],
          lore: '以严谨规范的学术语言，将研究成果公之于众',
          titles: ['📖學術寫作者', '📚引用編纂師', '🎓論文工匠'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'literature-review',
          name: '文献综述诀',
          description: '文献综述：文献检索、分类、综合评述',
          commands: ['检索', '分类', '综述', '评述', '趋势'],
          lore: '在浩瀚的学术文献中梳理脉络，构建知识地图',
          titles: ['🗺️文獻導航者', '📚綜述編織師', '🔍學術偵探'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'academic-presentation',
          name: '学术报告诀',
          description: '学术报告：PPT制作、演讲发表、问答应对',
          commands: ['PPT', '发表', '问答', '展示', '海报'],
          lore: '将研究成果以最佳方式呈现，赢得学界认可',
          titles: ['🎤學術發表者', '📊PPT煉金師', '🎯問答應對使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'translation-mastery',
      name: '通译万语诀',
      icon: '🔄',
      branch: 'language',
      tier: 5,
      spCost: 3,
      prerequisites: ['oral-fluency'],
      subSkills: [
        {
          id: 'written-translation',
          name: '笔译基础诀',
          description: '笔译基础：直译意译、语序调整、文化转化',
          commands: ['直译', '意译', '语序', '转换', '校对'],
          lore: '在两种文字之间架起桥梁，忠实传达原文的灵魂',
          titles: ['📝筆譯匠人', '🌉文字架橋者', '🔍忠實傳達使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'interpretation',
          name: '口译心法诀',
          description: '口译技巧：听译同步、笔记、记忆、视译',
          commands: ['同传', '交传', '笔记', '记忆', '视译'],
          lore: '在声音与声音之间瞬间转换，如闪电般精准',
          titles: ['⚡同步口譯者', '🗒️筆記速記師', '🧠聽譯記憶者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'cultural-adaptation',
          name: '文化转化诀',
          description: '文化转化：文化意象翻译、本土化、习惯表达',
          commands: ['意象', '本土化', '成语', '幽默', '典故'],
          lore: '跨越文化的鸿沟，让译文在目标文化中自然生长',
          titles: ['🌍文化擺渡人', '🔄本地化巧匠', '🎯意象轉換師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'specialized-translation',
          name: '专业翻译诀',
          description: '专业翻译：法律、医疗、科技、商务文书',
          commands: ['法律', '医疗', '科技', '商务', '合同'],
          lore: '在专业领域内精准用词，不容丝毫偏差与歧义',
          titles: ['⚖️法律翻譯官', '💊醫學通譯者', '🔬科技文獻使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
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
      id: 'professional-terminology',
      name: '术语天书诀',
      icon: '📚',
      branch: 'language',
      tier: 6,
      spCost: 3,
      prerequisites: ['academic-language'],
      subSkills: [
        {
          id: 'business-terms',
          name: '商务术语诀',
          description: '商务术语：谈判用语、合同词汇、金融术语',
          commands: ['谈判', '合同', '金融', '市场', '管理'],
          lore: '在商海沉浮中用语精准，一言九鼎定乾坤',
          titles: ['💼商務辭典', '📊金融術語師', '🤝談判語言家'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'legal-language',
          name: '法律语言诀',
          description: '法律语言：法律条文、判例用语、合同条款',
          commands: ['条文', '判例', '合同', '诉讼', '法规'],
          lore: '以精确无误的法律语言，守护公平与正义',
          titles: ['⚖️法律語言官', '📜條文解讀者', '🔨判例分析師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'medical-terms',
          name: '医学术语诀',
          description: '医学术语：解剖、症状、诊断、药物术语',
          commands: ['解剖', '症状', '诊断', '药物', '手术'],
          lore: '掌握救死扶伤的专业语言，在医疗领域沟通无碍',
          titles: ['💉醫學辭典者', '🏥診斷術語師', '🔬藥理解說使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'tech-vocabulary',
          name: '科技词汇诀',
          description: '科技词汇：编程、AI、工程、科学英语',
          commands: ['编程', 'AI', '工程', '科学', '专利'],
          lore: '站在科技前沿，掌握改写世界的最新词汇',
          titles: ['🤖科技翻譯師', '💻編程語言者', '🔬前沿術語使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'cultural-mastery',
      name: '文华精通诀',
      icon: '🌍',
      branch: 'language',
      tier: 6,
      spCost: 3,
      prerequisites: ['translation-mastery'],
      subSkills: [
        {
          id: 'literary-appreciation',
          name: '文学鉴赏诀',
          description: '文学鉴赏：诗歌赏析、小说分析、文学评论',
          commands: ['诗歌', '小说', '评论', '流派', '风格'],
          lore: '在文学的世界里感受语言最极致的魅力与力量',
          titles: ['📖文學鑑賞家', '📝詩歌解讀者', '🎭文學評論師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'idioms-proverbs',
          name: '习语谚语诀',
          description: '习语谚语：惯用语、俚语、谚语、典故',
          commands: ['习语', '俚语', '谚语', '典故', '双关'],
          lore: '掌握母语者才知道的地道表达，让语言焕发生机',
          titles: ['🗣️俚語達人', '📜典故活字典', '🎯地道表達者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'cultural-allusion',
          name: '文化典故诀',
          description: '文化典故：历史典故、神话传说、文化符号',
          commands: ['历史', '神话', '符号', '节日', '传统'],
          lore: '了解语言背后的文化基因，才能真正理解其深邃含义',
          titles: ['🏛️文化考古者', '📜典故傳承使', '🔮符號解讀師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'humor-wit',
          name: '幽默理解诀',
          description: '幽默理解：文化幽默、双关、讽刺、笑话解析',
          commands: ['幽默', '双关', '讽刺', '笑话', '梗'],
          lore: '听懂他国人的笑声，是语言最高境界的证明',
          titles: ['😄幽默通曉者', '🎭雙關破解師', '🤣笑點解析官'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'language' }
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
      id: 'polyglot-ultimate',
      name: '多语贤者·天道归一',
      icon: '💎',
      branch: 'language',
      tier: 7,
      spCost: 5,
      prerequisites: ['professional-terminology', 'cultural-mastery'],
      subSkills: [
        {
          id: 'cultivation-initiate',
          name: '初窥语道',
          description: '掌握多门语言的核心结构与表达逻辑',
          commands: ['多语', '对比', '融通', '思维', '表达'],
          lore: '历经千万词汇磨练，终于窥见语言大道的全貌',
          titles: ['🌟語道初窺者', '🌐多語通曉者', '🧠語言覺醒者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 5, perLevel: 3, scope: 'global' }
          ],
          expToNext: 500,
          currentExp: 0,
        },
        {
          id: 'cultivation-master',
          name: '言道自然',
          description: '多语思维自由切换，如呼吸般自然流畅',
          commands: ['切换', '思维', '自然', '表达', '同传'],
          lore: '言为心声，万语皆可信手拈来不加思索',
          titles: ['🌿言道自然者', '🔄思維切換師', '🧘隨心所欲者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 8, perLevel: 3, scope: 'global' }
          ],
          expToNext: 800,
          currentExp: 0,
        },
        {
          id: 'cultivation-transcend',
          name: '万语归宗',
          description: '以语言为桥梁，连接世界，传播智慧',
          commands: ['教学', '传承', '译著', '交流', '文明'],
          lore: '吾即是语言，语言即是吾，终成一代多语贤者',
          titles: ['👑萬語歸宗者', '🌍文明橋樑者', '∞智慧賢者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 12, perLevel: 3, scope: 'global' }
          ],
          expToNext: 1200,
          currentExp: 0,
        },
      ],
      ultimate: true,
      titles: ['初窥语道', '言道自然', '万语归宗'],
    },
  ],
};
