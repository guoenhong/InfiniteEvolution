import type { SkillBranchData } from '../../types';

export const hardwareSkills: SkillBranchData = {
  id: 'hardware',
  name: '硬件',
  icon: '🔧',
  level: 0,
  exp: 0,
  nodes: [
    // ====== Tier 1 ======
    {
      id: 'circuit-fundamentals',
      name: '万电归流诀',
      icon: '⚡',
      branch: 'hardware',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'ohm-law',
          name: '欧姆定律诀',
          description: '欧姆定律：电压、电流、电阻关系与计算',
          commands: ['电压', '电流', '电阻', '功率', '欧姆'],
          lore: '电之根本法则，参透压流阻三者之间的玄妙关系',
          titles: ['⚡電流感知者', '📐歐姆修行者', '🔋電壓掌控師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'series-parallel',
          name: '串并连诀',
          description: '串并联电路：串联、并联、混联分析',
          commands: ['串联', '并联', '混联', '等效', '分压'],
          lore: '串联分压并联分流，电路连接的变化之道',
          titles: ['🔗串聯佈陣者', '🔀並聯分流師', '🧩混聯解謎者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'component-recognition',
          name: '元件认知诀',
          description: '元件认知：电阻、电容、电感、二极管、三极管',
          commands: ['电阻', '电容', '电感', '二极管', '三极管'],
          lore: '认识电路世界的每一个基础构件，如数家珍',
          titles: ['🔍元件鑑定師', '📦百寶零件使', '🧰零件通曉者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'multimeter-usage',
          name: '万用表灵诀',
          description: '万用表使用：电压测量、电阻测量、通断检测',
          commands: ['电压档', '电阻档', '通断档', '电流档', '电容档'],
          lore: '以万用表为天眼，探測电路中不可见的流动',
          titles: ['📟儀表操控者', '🔬電路診斷師', '🩺電子聽診器'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'soldering-mastery',
      name: '熔焊天工诀',
      icon: '🔥',
      branch: 'hardware',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'soldering-tools',
          name: '焊接工具诀',
          description: '焊接工具：烙铁、焊锡、助焊剂、热风枪',
          commands: ['烙铁', '焊锡', '助焊剂', '热风枪', '吸锡器'],
          lore: '工欲善其事必先利其器，熟练掌握焊接法器',
          titles: ['🔧烙鐵掌控者', '🔥熱風操縱師', '🛠️焊接工匠'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'soldering-technique',
          name: '焊接技巧诀',
          description: '焊接技巧：通孔焊接、贴片焊接、拖焊',
          commands: ['通孔焊', '贴片焊', '拖焊', '点焊', '补焊'],
          lore: '以熔化的金属为纽带，将分离的电路合为一体',
          titles: ['🔗金屬連結者', '⚡導通創造者', '🩹電路修補師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'desoldering',
          name: '拆焊回春诀',
          description: '拆焊方法：吸锡、热风拆焊、IC拆卸',
          commands: ['吸锡', '热风', 'IC拆卸', '清理', '修复'],
          lore: '逆转焊接之术，将错误拆除犹如华佗再世',
          titles: ['🔄拆焊回春手', '🩺電路外科醫', '🧹焊點清潔使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'safety-practice',
          name: '安全规范诀',
          description: '安全规范：防静电、通风、防火、急救措施',
          commands: ['防静电', '通风', '防火', '急救', '防护'],
          lore: '安全是硬件修行的第一要义，护己方能造物',
          titles: ['🛡️安全守護者', '⚠️風險防範師', '🚒應急處理者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
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
      id: 'digital-logic',
      name: '天机逻辑阵',
      icon: '🧮',
      branch: 'hardware',
      tier: 2,
      spCost: 1,
      prerequisites: ['circuit-fundamentals'],
      subSkills: [
        {
          id: 'logic-gates',
          name: '门电路心法',
          description: '门电路：与门、或门、非门、异或门',
          commands: ['AND', 'OR', 'NOT', 'XOR', 'NAND'],
          lore: '以逻辑门为基础，构建数字世界的真假判定',
          titles: ['🚪邏輯門守將', '🧮二進位算者', '🔘真值演算師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'flip-flops',
          name: '触发器诀',
          description: '触发器：RS触发、D触发、JK触发、T触发',
          commands: ['RS', 'D', 'JK', 'T', '时钟'],
          lore: '在电平跳变的瞬间锁住状态，时序逻辑的起点',
          titles: ['🔒狀態鎖定者', '⏱️邊緣觸發師', '🔄翻轉操控者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'counters',
          name: '计数器诀',
          description: '计数器：二进制计数、十进制计数、分频',
          commands: ['二进制', '十进制', '分频', '级联', '预置'],
          lore: '以脉冲为脚步，精确计量数字的每一次跳动',
          titles: ['🔢計數掌控者', '⏲️脈衝計量師', '📊頻率分析者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'registers',
          name: '寄存器诀',
          description: '寄存器：移位寄存、并行寄存、存储阵列',
          commands: ['移位', '并行', '存储', '锁存', '缓冲'],
          lore: '在方寸之间暂存数据，等待被调用的那一刻',
          titles: ['📥暫存守護者', '🔀移位編排師', '🧠數據記憶者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'analog-circuits',
      name: '模拟玄音诀',
      icon: '〰️',
      branch: 'hardware',
      tier: 2,
      spCost: 1,
      prerequisites: ['soldering-mastery'],
      subSkills: [
        {
          id: 'amplifiers',
          name: '放大器诀',
          description: '放大器：运放、同相放大、反相放大、差分',
          commands: ['运放', '同相', '反相', '差分', '增益'],
          lore: '以微弱的信号催动强大的力量，四两拨千斤',
          titles: ['📢信號增幅者', '🔊微弱放大師', '⚡增益掌控者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'filters',
          name: '滤波器诀',
          description: '滤波器：低通、高通、带通、带阻滤波',
          commands: ['低通', '高通', '带通', '带阻', '截止'],
          lore: '于万千频率之中，只取所需频段摒弃一切杂波',
          titles: ['🎵頻率篩選者', '🧹雜波淨化師', '🔊音色調控使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'oscillators',
          name: '振荡器诀',
          description: '振荡器：RC振荡、LC振荡、晶振、555定时',
          commands: ['RC', 'LC', '晶振', '555', '波形'],
          lore: '无中生有，自生脉动，为电路注入生命的节拍',
          titles: ['💓脈搏產生者', '🎵自激震盪師', '⏱️時基掌控者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'power-design',
          name: '电源设计诀',
          description: '电源设计：稳压、升降压、线性电源、开关电源',
          commands: ['稳压', '升降压', '线性', '开关', 'LDO'],
          lore: '为万物提供稳定的能量，是硬件运转的基石',
          titles: ['🔋能量供應者', '⚡穩壓守護使', '💡電源設計師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
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
      id: 'microcontroller-basics',
      name: '微控天启诀',
      icon: '🔌',
      branch: 'hardware',
      tier: 3,
      spCost: 2,
      prerequisites: ['digital-logic'],
      subSkills: [
        {
          id: 'arduino-basics',
          name: 'Arduino心法',
          description: 'Arduino基础：IDE、GPIO、PWM、模拟输入',
          commands: ['GPIO', 'PWM', 'Analog', 'Digital', 'Serial'],
          lore: '以Arduino为入门法器，开启微控世界的大门',
          titles: ['🔌微控啟蒙者', '🟢Arduino使徒', '💡LED調光師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'sensor-input',
          name: '传感器诀',
          description: '传感器读取：温湿度、距离、光线、运动检测',
          commands: ['温度', '距离', '光线', '运动', '气压'],
          lore: '以传感器为感知器官，让微控制器感知真实世界',
          titles: ['👁️感知擴展者', '🌡️環境偵測師', '📡信號採集者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'actuator-drive',
          name: '执行器诀',
          description: '执行器驱动：电机驱动、舵机控制、继电器',
          commands: ['电机', '舵机', '继电器', '步进', ' solenoid'],
          lore: '以微弱的控制信号驱动强大的机械执行机构',
          titles: ['⚙️機械驅動者', '🔄舵機操控師', '🔩執行器使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'i2c-spi',
          name: '通信协议诀',
          description: '通信协议：I2C、SPI、UART、单总线',
          commands: ['I2C', 'SPI', 'UART', '单总线', 'CAN'],
          lore: '在芯片之间建立沟通的桥梁，让数据自由流动',
          titles: ['🌐總線通信者', '🔗I2C連結使', '📨UART信差'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'embedded-programming',
      name: '嵌入御灵诀',
      icon: '💾',
      branch: 'hardware',
      tier: 3,
      spCost: 2,
      prerequisites: ['analog-circuits'],
      subSkills: [
        {
          id: 'c-embedded',
          name: 'C语言嵌入诀',
          description: '嵌入式C语言：寄存器操作、位运算、内存管理',
          commands: ['寄存器', '位运算', '指针', '内存', '中断'],
          lore: '以C语言为咒语，直接操控硬件底层的一举一动',
          titles: ['⚡底層操控者', '🧠寄存器馭使', '🔣位元魔術師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'interrupt-handling',
          name: '中断处理诀',
          description: '中断处理：中断向量、优先级、嵌套、ISR编写',
          commands: ['中断', '向量', '优先级', 'ISR', '临界'],
          lore: '在事件发生的瞬间暂停一切，优先处理紧急之事',
          titles: ['⏰中斷響應者', '🚨緊急處理使', '🔔事件觸發師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'timer-counter',
          name: '定时计数诀',
          description: '定时器与计数器：PWM生成、输入捕获、输出比较',
          commands: ['定时器', 'PWM', '捕获', '比较', '计数'],
          lore: '以精准的时序控制一切，分毫不差如钟表般精确',
          titles: ['⏱️時序掌控者', '🎵PWM調音師', '⏲️精確計時使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'dma-communication',
          name: 'DMA传功诀',
          description: 'DMA传输：内存到外设、外设到内存、循环传输',
          commands: ['DMA', '通道', '传输', '循环', '触发'],
          lore: '不經CPU之手，數據自行在記憶體與外設間流轉',
          titles: ['🔄數據自行流', '🧠CPU解放者', '⚡直通傳輸師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
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
      id: 'pcb-design',
      name: '天工布阵诀',
      icon: '📐',
      branch: 'hardware',
      tier: 4,
      spCost: 2,
      prerequisites: ['microcontroller-basics'],
      subSkills: [
        {
          id: 'schematic-design',
          name: '原理图诀',
          description: '原理图设计：符号库、连线、网络标记、ERC',
          commands: ['符号', '连线', '网络', 'ERC', '层次'],
          lore: '以原理图为蓝图，描绘电路的血脉与经络',
          titles: ['📋原理圖師', '🔗網絡佈局者', '🗺️電路繪製者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'layout-routing',
          name: '布局布线诀',
          description: '布局布线：元件布局、走线策略、过孔设计',
          commands: ['布局', '走线', '过孔', '敷铜', '泪滴'],
          lore: '在方寸之间精心安排每一颗元件，连接每一条通路',
          titles: ['🧩元件擺放師', '🛤️走線規劃者', '🔀佈局最佳化'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'drc-check',
          name: '规则检查诀',
          description: '设计规则检查：间距、线宽、丝印、DRC',
          commands: ['间距', '线宽', '丝印', 'DRC', 'ERC'],
          lore: '以严格的规则审视设计，不放过任何潜在隐患',
          titles: ['🔍規則審查官', '📏間距測量使', '✅設計驗證者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'gerber-output',
          name: 'Gerber天工诀',
          description: 'Gerber输出：光绘文件、钻孔文件、拼板设计',
          commands: ['Gerber', '钻孔', '拼板', '叠层', '阻抗'],
          lore: '将设计转化为制造的语言，让电路板从虚拟走入现实',
          titles: ['🏭製造轉化者', '📄光繪文件師', '🔩拼板工藝使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: '3d-modeling',
      name: '三维造物诀',
      icon: '📦',
      branch: 'hardware',
      tier: 4,
      spCost: 2,
      prerequisites: ['embedded-programming'],
      subSkills: [
        {
          id: 'modeling-basics',
          name: '建模基础诀',
          description: '建模基础：草图、拉伸、旋转、扫描',
          commands: ['草图', '拉伸', '旋转', '扫描', '放样'],
          lore: '从二维草图开始，创造三维世界的无限可能',
          titles: ['🎨三維造物者', '✏️草圖繪製師', '🔩實體建模者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'structural-design',
          name: '结构设计诀',
          description: '结构设计：外壳设计、装配配合、强度考量',
          commands: ['外壳', '装配', '配合', '卡扣', '加强筋'],
          lore: '为电子心脏打造坚固的骨骼，内外兼修方为完品',
          titles: ['🏗️結構設計師', '🔩外殼工匠', '🦴骨架打造者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'assembly-simulation',
          name: '装配仿真诀',
          description: '装配仿真：运动仿真、干涉检查、爆炸视图',
          commands: ['装配', '运动', '干涉', '爆炸', '动画'],
          lore: '在虚拟空间中预演产品的组装，发现问题于未然',
          titles: ['🎬裝配導演', '🔍干涉檢查者', '🎞️運動模擬師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: '3d-printing',
          name: '3D打印诀',
          description: '3D打印：FDM、光固化、切片、后处理',
          commands: ['FDM', '光固化', '切片', '支撑', '打磨'],
          lore: '将数字模型化为实体，层層堆疊創造真實的觸感',
          titles: ['🖨️打印工匠', '🧱層層堆疊者', '🔧後處理大師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
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
      id: 'wireless-communication',
      name: '天波传信诀',
      icon: '📡',
      branch: 'hardware',
      tier: 5,
      spCost: 3,
      prerequisites: ['pcb-design'],
      subSkills: [
        {
          id: 'wifi-module',
          name: 'WiFi通灵诀',
          description: 'WiFi模块：ESP8266、HTTP请求、云平台对接',
          commands: ['ESP8266', 'HTTP', 'MQTT', 'WiFi', 'TCP/IP'],
          lore: '以无形电波连接万物，跨越空间传递信息',
          titles: ['📡無線通訊者', '🌐WiFi御靈師', '☁️雲端連接者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'bluetooth-ble',
          name: '蓝牙心法诀',
          description: '蓝牙BLE：广播、扫描、服务、特征值读写',
          commands: ['BLE', '广播', '服务', '特征值', '配对'],
          lore: '以低功耗的藍牙連接周邊，無線世界盡在掌握',
          titles: ['🔵藍牙連結者', '📲低功耗通訊師', '🔄廣播收發使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'lora-communication',
          name: 'LoRa远诀',
          description: 'LoRa通信：扩频、网关、远距离传感网络',
          commands: ['LoRa', '扩频', '网关', '传感', 'LPWAN'],
          lore: '以微弱的信号穿越千里，在荒芜之地传递讯息',
          titles: ['📯遠程號角者', '🌾田野通訊使', '📡LoRa佈網師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'antenna-design',
          name: '天线设计诀',
          description: '天线设计：PCB天线、阻抗匹配、驻波比、增益',
          commands: ['天线', '阻抗', '驻波', '增益', '辐射'],
          lore: '以无形的天线捕捉空中的电磁波，接收天地之音',
          titles: ['📡天線架設者', '🔮電磁波馭使', '📶信號增益師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'operating-system',
      name: '系统御神诀',
      icon: '⚙️',
      branch: 'hardware',
      tier: 5,
      spCost: 3,
      prerequisites: ['3d-modeling'],
      subSkills: [
        {
          id: 'rtos-basics',
          name: 'RTOS心法',
          description: 'RTOS基础：任务、调度、同步、通信',
          commands: ['任务', '调度', '信号量', '队列', '互斥'],
          lore: '在嵌入式的方寸之间，运行精密的实时操作系统',
          titles: ['🧠即時調度者', '📋任務管理師', '🔀多工協調使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'task-scheduling',
          name: '任务调度诀',
          description: '任务调度：优先级、时间片、抢占、协作',
          commands: ['优先级', '时间片', '抢占', '空闲', '延迟'],
          lore: '合理安排每一毫秒的时间，让万物有条不紊地运行',
          titles: ['📊排程優化者', '⏰時間管理師', '⚡優先裁決官'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'memory-management',
          name: '内存管理诀',
          description: '内存管理：堆栈、动态分配、碎片整理、MMU',
          commands: ['堆栈', '分配', '碎片', 'MMU', 'MPU'],
          lore: '在有限的存储空间中精打细算，物尽其用',
          titles: ['🧠內存管家', '📦空間分配者', '🧩碎片整理師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'driver-development',
          name: '驱动开发诀',
          description: '驱动开发：字符设备、中断驱动、DMA驱动',
          commands: ['驱动', '设备', '注册', '回调', '文件系统'],
          lore: '為硬件編寫靈魂，讓操作系統與外設無縫對話',
          titles: ['🔌驅動開發者', '⚙️設備溝通使', '🔄硬件抽象師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
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
      id: 'product-design',
      name: '创客造物诀',
      icon: '💡',
      branch: 'hardware',
      tier: 6,
      spCost: 3,
      prerequisites: ['wireless-communication'],
      subSkills: [
        {
          id: 'user-needs',
          name: '用户需求诀',
          description: '用户需求：市场调研、需求分析、用户画像',
          commands: ['调研', '需求', '画像', '场景', '痛点'],
          lore: '倾听用户的声音，将真实需求转化为产品定义',
          titles: ['🎯需求洞察者', '👥用戶代言人', '📋產品定義師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'prototyping',
          name: '原型设计诀',
          description: '原型设计：面包板测试、验证板、迭代优化',
          commands: ['面包板', '验证', '迭代', '调试', '测试'],
          lore: '以最快的速度将想法变为实物，测试方能出真知',
          titles: ['🔧原型打造者', '🧪實驗驗證師', '🔄快速迭代者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'testing-validation',
          name: '测试验证诀',
          description: '测试验证：功能测试、可靠性测试、EMC测试',
          commands: ['功能', '可靠性', 'EMC', '环境', '老化'],
          lore: '以严苛的测试验证产品的可靠性，确保万无一失',
          titles: ['✅品質守護官', '🔬可靠性測試者', '🌡️極限驗證師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'mass-production',
          name: '量产优化诀',
          description: '量产优化：成本控制、工艺优化、供应链管理',
          commands: ['成本', '工艺', '供应链', '良率', 'BOM'],
          lore: '从样品到量产，将匠心之作带给千家万户',
          titles: ['🏭量產規劃師', '📊BOM管理者', '🔗供應鏈協調者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'smart-hardware',
      name: '智能物联诀',
      icon: '🤖',
      branch: 'hardware',
      tier: 6,
      spCost: 3,
      prerequisites: ['operating-system'],
      subSkills: [
        {
          id: 'sensor-fusion',
          name: '传感器融合诀',
          description: '传感器融合：卡尔曼滤波、IMU融合、多传感',
          commands: ['卡尔曼', 'IMU', '融合', '校准', '姿态'],
          lore: '集多路感知于一体，得出超越单一传感器的智慧',
          titles: ['🧠感官融合者', '🔄卡爾曼濾波師', '🎯姿態解算者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'edge-computing',
          name: '边缘计算诀',
          description: '边缘计算：本地推理、模型部署、低延迟处理',
          commands: ['边缘', '推理', 'TinyML', '模型', '低延迟'],
          lore: '在设备本地完成智慧决策，无需依赖云端之力',
          titles: ['🧠邊緣智慧者', '⚡本地決策官', '🤏TinyML使徒'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'iot-platform',
          name: 'IoT平台诀',
          description: '物联网平台：设备管理、数据采集、远程控制',
          commands: ['IoT', '管理', '采集', '控制', 'OTA'],
          lore: '搭建萬物互聯的平台，讓天下設備皆在掌中',
          titles: ['🌐物聯網構建者', '☁️設備雲端使', '📊數據中樞師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'low-power',
          name: '低功耗心法',
          description: '低功耗设计：睡眠模式、电源管理、能量采集',
          commands: ['睡眠', '电源', '采集', '能耗', '优化'],
          lore: '以最少的能量完成最多的任务，续航持久之道',
          titles: ['🪫能耗精算師', '💤睡眠模式者', '🔋續航守護使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'hardware' }
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
      id: 'maker-ultimate',
      name: '硬件创客·天道归一',
      icon: '💎',
      branch: 'hardware',
      tier: 7,
      spCost: 5,
      prerequisites: ['product-design', 'smart-hardware'],
      subSkills: [
        {
          id: 'cultivation-initiate',
          name: '初窥器道',
          description: '融会贯通硬件全栈，从想法到产品一气呵成',
          commands: ['全栈', '整合', '创造', '迭代', '落地'],
          lore: '历经万千电路磨练，终能独立创造完整的硬件产品',
          titles: ['🌟器道初覷者', '🔧全棧開拓者', '⚡創客覺醒者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 5, perLevel: 3, scope: 'global' }
          ],
          expToNext: 500,
          currentExp: 0,
        },
        {
          id: 'cultivation-master',
          name: '器物自然',
          description: '硬件设计信手拈来，电路方案随心而造',
          commands: ['设计', '创造', '优化', '突破', '创新'],
          lore: '万物皆可为器，心念所至便能化虚为实',
          titles: ['🌿器物自然者', '🎋無招勝有招', '🧘造物隨心者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 8, perLevel: 3, scope: 'global' }
          ],
          expToNext: 800,
          currentExp: 0,
        },
        {
          id: 'cultivation-transcend',
          name: '万器归宗',
          description: '以硬件改变世界，将创意产品带给亿万人',
          commands: ['创业', '产品', '影响', '传承', '革新'],
          lore: '吾即是造物主，以硬件之力改變這個世界',
          titles: ['👑萬器歸宗者', '🌟產品革新者', '∞創客宗師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 12, perLevel: 3, scope: 'global' }
          ],
          expToNext: 1200,
          currentExp: 0,
        },
      ],
      ultimate: true,
      titles: ['初窥器道', '器物自然', '万器归宗'],
    },
  ],
};
