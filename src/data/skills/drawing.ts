import type { SkillBranchData } from '../../types';

export const drawingSkills: SkillBranchData = {
  id: 'drawing',
  name: '绘画',
  icon: '🎨',
  level: 0,
  exp: 0,
  nodes: [
    // ====== Tier 1 ======
    {
      id: 'line-fundamentals',
      name: '画龙点睛诀',
      icon: '✏️',
      branch: 'drawing',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'line-drawing',
          name: '线条基础诀',
          description: '线稿基础：直线曲线、轻重变化、轮廓线',
          commands: ['直线', '曲线', '轻重', '轮廓', '排线'],
          lore: '一笔一画皆有意，线条之中见真功',
          titles: ['✏️白描入門生', '🪄筆鋒掌控者', '🎯線條狙擊手'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'brush-control',
          name: '笔触控制诀',
          description: '笔触控制：运笔力度、速度、方向变化',
          commands: ['运笔', '力度', '速度', '方向', '压感'],
          lore: '以气御笔，力透纸背，轻重缓急皆随心',
          titles: ['🖌️運筆如風者', '💨輕重自如使', '🎋筆下生花師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'hatching',
          name: '排线明暗法',
          description: '排线技巧：平行排线、交叉排线、渐变排线',
          commands: ['平行线', '交叉线', '渐变线', '弧线', '点画'],
          lore: '以千万细线编织光影，于二维之中创造三维',
          titles: ['📊線陣排列師', '🌓光影編織者', '🔲灰階魔法使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'sketch-quick',
          name: '速写捕捉术',
          description: '速写练习：动态捕捉、比例速记、快速表现',
          commands: ['动态', '比例', '速记', '剪影', '抓型'],
          lore: '抓住瞬间即逝的灵感，在遗忘之前将其封印于纸面',
          titles: ['⚡靈感捕手', '👻形影速記師', '🕐瞬間凍結者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'light-shadow',
      name: '光影入道诀',
      icon: '🌓',
      branch: 'drawing',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'sketch-basics',
          name: '素描心法',
          description: '素描基础：几何体、静物、明暗五大调',
          commands: ['几何体', '静物', '五大调', '黑白灰', '结构'],
          lore: '去色存形，以黑白灰演绎世间万物',
          titles: ['⚫單色修行者', '🖼️明暗調解師', '🗿形體雕塑者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'value-relationship',
          name: '明暗关系诀',
          description: '明暗关系：光源方向、明度层次、对比控制',
          commands: ['光源', '明度', '对比', '层次', '环境光'],
          lore: '洞察光之轨迹，在纸面重现真实的明暗秩序',
          titles: ['💡光源追尋者', '🌘陰影塑造師', '🔦探照分析使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'shadow-projection',
          name: '阴影投射诀',
          description: '阴影投射：投影形状、柔和度、色彩影响',
          commands: ['投影', '柔边', '硬边', '衰减', '环境遮蔽'],
          lore: '万物皆有影子，有光就有存在的证明',
          titles: ['👤影子操弄者', '🌓明暗裁決官', '🔲負形觀察者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'material-texture',
          name: '材质表现术',
          description: '材质表现：金属、玻璃、布料、皮肤质感',
          commands: ['金属', '玻璃', '布料', '皮肤', '粗糙度'],
          lore: '以笔触模拟万千材质，让画面拥有真实的触感',
          titles: ['🧪材質煉金師', '🪞擬真幻術使', '👐觸感再現者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
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
      id: 'perspective-mastery',
      name: '透视天眼诀',
      icon: '📐',
      branch: 'drawing',
      tier: 2,
      spCost: 1,
      prerequisites: ['line-fundamentals'],
      subSkills: [
        {
          id: 'one-point',
          name: '一点透视诀',
          description: '一点透视：消失点、视平线、深度表现',
          commands: ['消失点', '视平线', '深度', '灭点', '透视线'],
          lore: '万物汇聚于一点，通往无尽深处的视觉之道',
          titles: ['🎯聚點凝視者', '🛤️深遠引導使', '📍終點指向者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'two-point',
          name: '两点透视诀',
          description: '两点透视：转角、建筑、室内空间表现',
          commands: ['双灭点', '转角', '建筑透视', '室内', '仰视'],
          lore: '两界交汇之处，建立立体空间的基石',
          titles: ['🏗️空間建築師', '🏛️雙界交匯者', '📐角度測量師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'three-point',
          name: '三点透视诀',
          description: '三点透视：鸟瞰、虫视、倾斜透视',
          commands: ['鸟瞰', '虫视', '倾斜', '三点', '广角'],
          lore: '俯瞰众生或仰望苍穹，皆在三个灭点之间',
          titles: ['🦅蒼鷹俯視者', '🐛蟲蟻仰望使', '🌀三界全覽師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'fisheye',
          name: '鱼眼透视诀',
          description: '鱼眼透视：球面扭曲、夸张变形、动态视角',
          commands: ['球面', '扭曲', '夸张', '动态', '曲率'],
          lore: '以鱼眼观世界，扭曲之中蕴含独特的视觉张力',
          titles: ['🐟魚眼觀天者', '🌀扭曲幻術師', '🎪誇張表現使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'color-magic',
      name: '色彩真经录',
      icon: '🌈',
      branch: 'drawing',
      tier: 2,
      spCost: 1,
      prerequisites: ['light-shadow'],
      subSkills: [
        {
          id: 'color-theory',
          name: '色彩理论诀',
          description: '色彩理论：色环、三原色、互补色、冷暖色',
          commands: ['色环', '三原色', '互补', '冷暖', '饱和度'],
          lore: '参透色彩背后的物理与生理奥秘',
          titles: ['🔬色光研究者', '🎨顏料調配師', '🌈光譜參悟者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'color-scheme',
          name: '配色心法',
          description: '配色方案：类似色、对比色、三角色、分裂互补',
          commands: ['类似色', '对比色', '三角色', '分裂互补', '单色'],
          lore: '掌握配色的黄金法则，令画面和谐而有冲击力',
          titles: ['🎨配色大師', '👁️視覺平衡使', '✨色彩協調者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'warm-cool',
          name: '冷暖对比诀',
          description: '冷暖对比：色温、氛围营造、空间退远',
          commands: ['色温', '氛围', '退远', '冷暖调', '色调'],
          lore: '冷与暖的较量，在画布上演绎温度的故事',
          titles: ['❄️🔥冰火操控者', '🌡️色溫調節師', '🌅氛圍營造使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'atmosphere',
          name: '氛围渲染诀',
          description: '氛围渲染：空气透视、色彩情绪、光影气氛',
          commands: ['空气透视', '情绪色', '气氛', '色调统一', '光源色'],
          lore: '以色彩为媒介，让观者感受到画中的温度与情绪',
          titles: ['🌫️氛圍製造者', '🎭情緒渲染師', '🌄天地色感使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
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
      id: 'human-anatomy',
      name: '人体天工诀',
      icon: '🧍',
      branch: 'drawing',
      tier: 3,
      spCost: 2,
      prerequisites: ['perspective-mastery'],
      subSkills: [
        {
          id: 'skeletal-structure',
          name: '骨骼结构诀',
          description: '骨骼结构：头骨、躯干骨骼、四肢骨骼比例',
          commands: ['头骨', '脊柱', '肋骨', '骨盆', '肢骨'],
          lore: '以骨骼为框架，支撑起血肉之躯的精密构造',
          titles: ['🦴骨架剖析者', '💀結構測量師', '📐比例鑑定官'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'muscle-anatomy',
          name: '肌肉解剖诀',
          description: '肌肉解剖：主要肌群、运动肌理、体表标志',
          commands: ['胸肌', '背肌', '臂肌', '腿肌', '腹肌'],
          lore: '解开肌肉的奥秘，让笔下人物拥有真实的体态',
          titles: ['💪肌肉圖譜師', '🔪解剖學徒', '🏋️體態結構者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'dynamic-pose',
          name: '动态姿势诀',
          description: '动态姿势：重心线、动态线、平衡、韵律',
          commands: ['重心', '动态线', 'S曲线', '扭转', '平衡'],
          lore: '捕捉生命运动的韵律，在静止的画面中注入动感',
          titles: ['🏃動態捕捉者', '💃韻律舞動使', '⚖️平衡掌控者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'facial-features',
          name: '面谱刻画诀',
          description: '面部特征：五官比例、表情变化、年龄差异',
          commands: ['眼', '鼻', '嘴', '耳', '表情'],
          lore: '于方寸之间刻画出千变万化的面容与神态',
          titles: ['🎭百面塑造者', '😊表情操控師', '👤容顏描繪者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'composition-mastery',
      name: '构图玄机诀',
      icon: '🖼️',
      branch: 'drawing',
      tier: 3,
      spCost: 2,
      prerequisites: ['color-magic'],
      subSkills: [
        {
          id: 'golden-ratio',
          name: '黄金分割诀',
          description: '黄金分割：三分法、黄金螺旋、对角线',
          commands: ['三分法', '黄金螺旋', '对角线', '井字', '对称'],
          lore: '以数学之美构建画面，让视觉自然流向重点',
          titles: ['📐比例魔術師', '🔢數學構圖者', '🎯視線誘導師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'visual-guide',
          name: '视觉引导诀',
          description: '视觉引导：引导线、视线方向、动作指向',
          commands: ['引导线', '视线', '指向', '动势', '节奏'],
          lore: '引导观者的视线，让他们按照你的设计欣賞画面',
          titles: ['👁️視線操縱者', '🧭導航設計師', '🪄注意力魔術師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'balance-symmetry',
          name: '平衡对称诀',
          description: '平衡与对称：对称构图、不对称平衡、重量分布',
          commands: ['对称', '不对称', '重量', '正负形', '留白'],
          lore: '在平衡与冲突之间找到完美的视觉和谐',
          titles: ['⚖️視覺平衡者', '🎭對稱守護使', '⬜留白美學家'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'rhythm-flow',
          name: '节奏韵律诀',
          description: '节奏韵律：重复、渐变、放射、节奏变化',
          commands: ['重复', '渐变', '放射', '节奏', '疏密'],
          lore: '在画面中谱写视觉的旋律，让眼睛为之起舞',
          titles: ['🎵視覺節奏師', '🔄律動創造者', '📊疏密編排使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
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
      id: 'digital-painting',
      name: '数位绘灵诀',
      icon: '🖥️',
      branch: 'drawing',
      tier: 4,
      spCost: 2,
      prerequisites: ['human-anatomy'],
      subSkills: [
        {
          id: 'layer-management',
          name: '图层管理诀',
          description: '图层管理：分层策略、混合模式、图层蒙版',
          commands: ['图层', '混合模式', '蒙版', '分组', '调整层'],
          lore: '将画面分层构建，改一处而不动全局',
          titles: ['📂層次建築師', '🧩分層編排者', '🔄非破壞編輯師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'brush-technique',
          name: '笔刷运用诀',
          description: '笔刷运用：自定义笔刷、纹理笔刷、压感设置',
          commands: ['笔刷', '纹理', '压感', '流量', '散布'],
          lore: '以千变万化的笔刷模拟真实世界的万千触感',
          titles: ['🖌️筆刷收藏家', '✨特效繪製者', '🧹紋理創造使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'blend-modes',
          name: '混合模式诀',
          description: '混合模式：正片叠底、滤色、叠加、柔光',
          commands: ['正片叠底', '滤色', '叠加', '柔光', '颜色'],
          lore: '以数字魔法混合光影色彩，创造超越现实的视觉效果',
          titles: ['🧪化學混色師', '✨光效魔術師', '🎆視覺特效使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'filter-effects',
          name: '特效滤镜诀',
          description: '特效滤镜：模糊、扭曲、调色、Camera Raw',
          commands: ['模糊', '扭曲', '调色', '滤镜', '锐化'],
          lore: '以数字滤镜为法器，一键改天换地再造乾坤',
          titles: ['🔮幻術濾鏡師', '🎞️數位暗房使', '✨一鍵改圖者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'scene-design',
      name: '万象场景诀',
      icon: '🏔️',
      branch: 'drawing',
      tier: 4,
      spCost: 2,
      prerequisites: ['composition-mastery'],
      subSkills: [
        {
          id: 'environment-drawing',
          name: '环境绘制诀',
          description: '环境绘制：自然风景、城市景观、室内场景',
          commands: ['自然', '城市', '室内', '远景', '氛围'],
          lore: '以画笔构建天地，创造令人身临其境的场景世界',
          titles: ['🌍世界創造者', '🏙️城市規劃師', '🌲自然描繪者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'arch-perspective',
          name: '建筑透视诀',
          description: '建筑透视：结构细节、材质、空间深度',
          commands: ['建筑', '结构', '材质', '细节', '空间'],
          lore: '以透视之眼再现宏伟建筑的每一处细节',
          titles: ['🏛️古建築復原師', '🏗️結構透視者', '🔍細節狂熱者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'nature-elements',
          name: '自然元素诀',
          description: '自然元素：水、火、风、云、植被绘制',
          commands: ['水', '火', '云', '植被', '岩石'],
          lore: '驾驭四大自然元素，让它们在画布上自由舞动',
          titles: ['🌊水靈操控者', '🔥火焰繪製師', '🍃風林火山使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'atmosphere-light',
          name: '光景氛围诀',
          description: '光影氛围：时间光线、天气效果、季节色调',
          commands: ['晨光', '黄昏', '雨天', '雪景', '夜景'],
          lore: '捕捉时光流转中的光影变化，让场景拥有生命',
          titles: ['☀️時光捕光者', '🌙月色氣氛師', '🌦️天氣操控使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
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
      id: 'concept-design',
      name: '概念创世诀',
      icon: '💡',
      branch: 'drawing',
      tier: 5,
      spCost: 3,
      prerequisites: ['digital-painting'],
      subSkills: [
        {
          id: 'character-design',
          name: '角色设定诀',
          description: '角色设定：角色概念、背景故事、视觉特征',
          commands: ['角色', '设定', '故事', '特征', '剪影'],
          lore: '从虚无中创造有血有肉的角色，赋予其灵魂与故事',
          titles: ['🧙角色造物主', '📖故事孵化者', '👥眾生創造者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'world-building',
          name: '世界观构建术',
          description: '世界观构建：文明设定、地理环境、文化符号',
          commands: ['文明', '地理', '文化', '符号', '历史'],
          lore: '化作创世之神，从零构建一个完整的幻想世界',
          titles: ['🌌創世神使', '📚文明編纂者', '🗺️世界繪製師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'visual-development',
          name: '视觉开发诀',
          description: '视觉开发：风格探索、情绪板、视觉语言',
          commands: ['风格', '情绪板', '视觉', '探索', '统一'],
          lore: '从混沌的灵感中提炼出统一的视觉语言体系',
          titles: ['🎨風格探索者', '📋情緒板繪師', '🔗視覺統一使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'mood-board',
          name: '情绪板修诀',
          description: '情绪板：氛围参考、色彩脚本、参考资料整合',
          commands: ['参考', '拼贴', '色调', '氛围', '关键词'],
          lore: '收集天地灵感碎片，拼凑出完整的创作蓝图',
          titles: ['🧩靈感拼貼者', '🎯視覺定調師', '📌參考收集使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'illustration-narrative',
      name: '叙事插画诀',
      icon: '📖',
      branch: 'drawing',
      tier: 5,
      spCost: 3,
      prerequisites: ['scene-design'],
      subSkills: [
        {
          id: 'storyboard',
          name: '故事板诀',
          description: '故事板：分镜设计、节奏控制、情节叙事',
          commands: ['分镜', '节奏', '叙事', '镜头', '转场'],
          lore: '以连续的画面讲述动人的故事，一页胜过千言',
          titles: ['🎬分鏡導演', '📖視覺說書人', '🎞️節奏掌控者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'camera-language',
          name: '镜头语言术',
          description: '镜头语言：景别、角度、运镜、焦距表现',
          commands: ['远景', '特写', '俯拍', '仰拍', '运镜'],
          lore: '以镜头为眼，选择最佳角度讲述每个瞬间',
          titles: ['📷鏡頭語言師', '🎥導演視角者', '🔭焦段操控使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'dynamic-narrative',
          name: '动态叙事诀',
          description: '动态叙事：动作序列、时间流逝、因果关系',
          commands: ['动作', '序列', '时间', '因果', '悬念'],
          lore: '在静止的画面中埋下时间的种子，讲述前后因果',
          titles: ['⏳時間敘事者', '🎭因果描繪者', '🔮懸念製造師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'series-creation',
          name: '系列创作诀',
          description: '系列创作：系列插画、风格统一、主题连贯',
          commands: ['系列', '统一', '连贯', '主题', '变奏'],
          lore: '以一以贯之的风格创作系列作品，形成强大的视觉冲击',
          titles: ['📚系列創作者', '🔄主題變奏師', '🎨風格統一使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
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
      id: 'character-mastery',
      name: '角色造极诀',
      icon: '👤',
      branch: 'drawing',
      tier: 6,
      spCost: 3,
      prerequisites: ['concept-design'],
      subSkills: [
        {
          id: 'character-modeling',
          name: '角色造型诀',
          description: '角色造型：体态特征、外形设计、风格化处理',
          commands: ['体态', '外形', '风格化', '剪影', '比例'],
          lore: '以独特的造型语言赋予角色令人难忘的视觉形象',
          titles: ['🎭角色雕塑家', '👤體態設計師', '✂️剪影大師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'costume-design',
          name: '服装设计诀',
          description: '服装设计：时代风格、材质表现、功能细节',
          commands: ['服装', '时代', '材质', '装饰', '功能'],
          lore: '以服装为载体，讲述角色的身份、性格与故事',
          titles: ['👗服裝設計師', '🧵材質魔法使', '👘時代考證者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'expression-acting',
          name: '表情演绎诀',
          description: '表情演绎：微表情、情绪传递、角色性格表达',
          commands: ['微表情', '情绪', '性格', '眼神', '肢体'],
          lore: '透过眉宇之间的细微变化，传递角色内心的惊涛骇浪',
          titles: ['🎭情緒演繹者', '👁️眼神交流師', '😤微表情專家'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'character-evolution',
          name: '角色进化诀',
          description: '角色进化：年龄变化、成长弧线、版本迭代',
          commands: ['年龄', '成长', '迭代', '变化', '历程'],
          lore: '描绘角色从青涩到成熟的蜕变，见证时光的力量',
          titles: ['🦋蛻變記錄者', '📈成長弧繪師', '⏳歲月刻痕者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'brand-aesthetics',
      name: '品牌美学录',
      icon: '🏷️',
      branch: 'drawing',
      tier: 6,
      spCost: 3,
      prerequisites: ['illustration-narrative'],
      subSkills: [
        {
          id: 'visual-identity',
          name: '视觉识别诀',
          description: '视觉识别：LOGO设计、品牌色、视觉系统',
          commands: ['LOGO', '品牌色', '系统', '规范', '应用'],
          lore: '为品牌打造独一无二的视觉指纹，让世人过目不忘',
          titles: ['🏷️品牌塑造師', '🎨視覺系統者', '🔖標誌設計師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'style-unification',
          name: '风格统一诀',
          description: '风格统一：系列作品、画集策划、风格手册',
          commands: ['风格', '统一', '手册', '规范', '一致性'],
          lore: '将散落的风格碎片熔炼成统一的视觉语言',
          titles: ['🎯風格守恆者', '📖風格聖經使', '🔗統一律動師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'commercial-application',
          name: '商业应用诀',
          description: '商业应用：包装设计、广告插画、UI插画',
          commands: ['包装', '广告', 'UI', '印刷', '授权'],
          lore: '将艺术转化为商业价值，让美学为产品赋能',
          titles: ['💼商業藝術家', '📦包裝設計者', '📈價值轉化師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'art-direction',
          name: '艺术指导诀',
          description: '艺术指导：团队管理、风格把控、品质监控',
          commands: ['指导', '管理', '品控', '风格', '评审'],
          lore: '作为艺术领航者，指引团队驶向视觉的巅峰',
          titles: ['🎬藝術總監', '🧭風格領航者', '👑美術指導官'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'drawing' }
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
      id: 'art-master-ultimate',
      name: '艺术巨匠·天道归一',
      icon: '💎',
      branch: 'drawing',
      tier: 7,
      spCost: 5,
      prerequisites: ['character-mastery', 'brand-aesthetics'],
      subSkills: [
        {
          id: 'cultivation-vision',
          name: '初窥艺境',
          description: '融会贯通所有绘画技法，形成个人艺术语言',
          commands: ['个人风格', '融合', '表达', '创作', '展览'],
          lore: '历经万千画作磨练，终于窥见艺术大道的真谛',
          titles: ['🌟藝境初窺者', '🎨風格覺醒者', '🖼️創作實踐者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 5, perLevel: 3, scope: 'global' }
          ],
          expToNext: 500,
          currentExp: 0,
        },
        {
          id: 'cultivation-master',
          name: '画道自然',
          description: '随心所欲不逾矩，下笔如有神助',
          commands: ['随性', '挥洒', '灵感', '表达', '突破'],
          lore: '笔随心走，意到笔到，再无技法可束缚于身',
          titles: ['🌿畫道自然者', '🎋落筆如有神', '🧘無招勝有招'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 8, perLevel: 3, scope: 'global' }
          ],
          expToNext: 800,
          currentExp: 0,
        },
        {
          id: 'cultivation-transcend',
          name: '艺术归宗',
          description: '开宗立派，以艺术影响时代',
          commands: ['开派', '教学', '传承', '影响', '不朽'],
          lore: '吾即是艺术，艺术即是吾，终成一代巨匠',
          titles: ['👑開宗立派祖', '🌟時代影響者', '∞不朽巨匠'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 12, perLevel: 3, scope: 'global' }
          ],
          expToNext: 1200,
          currentExp: 0,
        },
      ],
      ultimate: true,
      titles: ['初窥艺境', '画道自然', '艺术归宗'],
    },
  ],
};
