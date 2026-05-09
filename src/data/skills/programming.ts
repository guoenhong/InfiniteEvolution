import type { SkillBranchData } from '../../types';

export const programmingSkills: SkillBranchData = {
  id: 'programming',
  name: '编程',
  icon: '💻',
  level: 0,
  exp: 0,
  nodes: [
    // ====== Tier 1 ======
    {
      id: 'git-version-control',
      name: '乾坤版本诀',
      icon: '🔧',
      branch: 'programming',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'local-repo',
          name: '版本开辟术',
          description: '本地仓库操作：init、commit、log、reset',
          commands: ['init', 'commit', 'log', 'reset', 'reflog'],
          lore: '从零开辟版本天地，刻下第一道印记',
          titles: ['📜初版劍士', '🗿碑文銘刻使', '⏳時序逆流者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'remote-collab',
          name: '遠程通灵术',
          description: '远程仓库协作：remote、push、pull、fetch',
          commands: ['remote', 'push', 'pull', 'fetch', 'upstream'],
          lore: '建立异界通道，联通远程道场',
          titles: ['🌐跨界通訊使', '☯️陰陽調停者', '🌟萬源歸一者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'branch-strategy',
          name: '平行分支诀',
          description: '分支策略：branch、merge、rebase、stash',
          commands: ['branch', 'merge', 'rebase', 'stash', 'conflict'],
          lore: '化身千万，开辟平行修炼路线',
          titles: ['👥分身開拓者', '⚖️因果裁決者', '🌀天機篡命者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'workflow-collab',
          name: '万剑归宗阵',
          description: '协作工作流：PR、Code Review、Issues',
          commands: ['PR', 'Code Review', 'Issues', 'GitHub Flow'],
          lore: '递呈献祭之书，开启天眼审视',
          titles: ['📤獻祭先鋒', '👁️天眼審判官', '👑武林盟主'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'shell-mastery',
      name: '天机指令录',
      icon: '🖥️',
      branch: 'programming',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'shell-basics',
          name: '命令行心法',
          description: 'Shell基础操作：ls、cd、grep、find、ps',
          commands: ['ls', 'cd', 'grep', 'find', 'ps', 'kill'],
          lore: '以键盘为剑，黑暗之中号令系统万灵',
          titles: ['⚡玄铁鍵盤使', '📟暗黑號令者', '🔮靈犀指路者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'file-permissions',
          name: '权限掌控诀',
          description: '文件权限管理：chmod、chown、umask、ACL',
          commands: ['chmod', 'chown', 'umask', 'ACL', 'setuid'],
          lore: '为万物立规，划定可读可写可行之界',
          titles: ['🛡️御林守門將', '📜律令執法者', '👁️萬物監察使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'pipe-redirect',
          name: '管道重定向法',
          description: '管道和重定向：pipe、redirect、xargs、tee',
          commands: ['pipe', 'redirect', 'xargs', 'tee', 'devnull'],
          lore: '灵力流转不息，前道输出即为后道输入',
          titles: ['🌊靈流引導者', '⛓️因果鏈接使', '🔄無極循環師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'script-programming',
          name: '脚本御灵术',
          description: 'Shell脚本编程：变量、循环、函数、自动化',
          commands: ['bash', 'awk', 'sed', 'cron', 'alias'],
          lore: '将枯燥琐事化为自动运转的灵力循环',
          titles: ['🤖自動化聖手', '🧙符文編織者', '⚙️永動機關師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
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
      id: 'web-fundamentals',
      name: '万维天罗网',
      icon: '🌐',
      branch: 'programming',
      tier: 2,
      spCost: 1,
      prerequisites: ['shell-mastery'],
      subSkills: [
        {
          id: 'html-css',
          name: '结构样式诀',
          description: 'HTML语义化与CSS布局：Flex、Grid、动画',
          commands: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Animation'],
          lore: '以标记为骨，样式为皮，构建万物容器',
          titles: ['🏗️頁面建築師', '🎨視覺塑形者', '✨光影織造者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'dom-manipulation',
          name: '神魂操控术',
          description: 'DOM操作与浏览器API：选择器、事件、节点',
          commands: ['querySelector', 'addEventListener', 'DOM', 'BOM', 'Canvas'],
          lore: '以代码之力，操控页面神魂，瞬息万变',
          titles: ['👻魂靈操偶師', '🕹️瀏覽器御者', '🌀虛實轉換者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'responsive-design',
          name: '万象适配诀',
          description: '响应式设计：媒体查询、断点、流式布局',
          commands: ['MediaQuery', 'Breakpoint', 'Rem', 'Vw', 'Container'],
          lore: '化身万千，适应一切屏幕尺寸变化',
          titles: ['🦎變色龍靈使', '📱萬象適應者', '🔮尺寸變形師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'event-driven',
          name: '事件驱动诀',
          description: '事件驱动编程：事件流、委托、自定义事件',
          commands: ['Event', 'Delegate', 'Bubble', 'CustomEvent', 'Observer'],
          lore: '万物有灵，触之即发，因果相循不息',
          titles: ['🔔因果觸發者', '📡訊息感應師', '⚡萬象回响使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'programming-paradigms',
      name: '万法归宗录',
      icon: '📚',
      branch: 'programming',
      tier: 2,
      spCost: 1,
      prerequisites: ['git-version-control'],
      subSkills: [
        {
          id: 'paradigm-basics',
          name: '编程范式诀',
          description: '编程范式：OOP、FP、过程式、声明式',
          commands: ['OOP', 'FP', 'Procedural', 'Declarative', 'Mixin'],
          lore: '万法同源，参透编程的终极奥义',
          titles: ['🧘萬法參悟者', '📖范式傳承使', '🔱道法自然者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'package-management',
          name: '包管理心法',
          description: '包管理：npm、yarn、依赖管理、语义化版本',
          commands: ['npm', 'yarn', 'semver', 'lockfile', 'registry'],
          lore: '收天下功法于囊中，调用如臂使指',
          titles: ['📦百寶囊守護者', '🔗依賴鍊術師', '🗂️萬法藏經使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'modular-system',
          name: '模块化分诀',
          description: '模块化：ESM、CommonJS、导入导出、命名空间',
          commands: ['ESM', 'CommonJS', 'import', 'export', 'barrel'],
          lore: '化整为零，各司其职，聚散皆由心意',
          titles: ['🧩碎片重組者', '🏗️模塊架構師', '🔄聚散無常使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'type-system',
          name: '类型箴言术',
          description: '类型系统：TypeScript、泛型、类型推导、接口',
          commands: ['TypeScript', 'Generic', 'Interface', 'Type', 'Enum'],
          lore: '以类型为枷锁，在编译之际便扼杀万般谬误',
          titles: ['🔒類型束縛者', '📜箴言守護使', '🛡️編譯護法尊'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
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
      id: 'algorithm-matrix',
      name: '天衍算法阵',
      icon: '🧮',
      branch: 'programming',
      tier: 3,
      spCost: 2,
      prerequisites: ['programming-paradigms'],
      subSkills: [
        {
          id: 'linear-structures',
          name: '线性结构诀',
          description: '线性数据结构：数组、链表、栈、队列',
          commands: ['Array', 'LinkedList', 'Stack', 'Queue', 'Deque'],
          lore: '一线牵万法，排列有序，进出有度',
          titles: ['📊序列排列者', '🔗鏈條操縱師', '🚶單行朝聖者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'sorting-algorithms',
          name: '排序阵法诀',
          description: '排序算法：快排、归并、堆排、桶排',
          commands: ['QuickSort', 'MergeSort', 'HeapSort', 'BucketSort', 'Radix'],
          lore: '混沌无序之物，经我之手皆归其位',
          titles: ['🧹混沌歸序者', '🗂️萬物分揀使', '⚡疾風排序師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'tree-graph',
          name: '树图演天术',
          description: '树和图结构：二叉树、图遍历、最短路径',
          commands: ['BinaryTree', 'Graph', 'BFS', 'DFS', 'Dijkstra'],
          lore: '枝繁叶茂，根深蒂固，通天彻地皆在掌中',
          titles: ['🌳千枝萬葉使', '🗺️路徑尋覓者', '🔍深廣探測師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'search-strategies',
          name: '搜索策略诀',
          description: '搜索策略：二分搜索、哈希、回溯、剪枝',
          commands: ['BinarySearch', 'Hash', 'Backtrack', 'Prune', 'DP'],
          lore: '于万千迷雾之中，精准锁定唯一真相',
          titles: ['🎯真相獵捕者', '🧠智慧篩選師', '🌀迷霧破局者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'debugging-mastery',
      name: '天机破障诀',
      icon: '🐛',
      branch: 'programming',
      tier: 3,
      spCost: 2,
      prerequisites: ['web-fundamentals'],
      subSkills: [
        {
          id: 'breakpoint-tracking',
          name: '断点追踪术',
          description: '断点调试：条件断点、调用堆栈、步进执行',
          commands: ['Breakpoint', 'CallStack', 'StepOver', 'Watch', 'Exception'],
          lore: '以神念锁定异常之处，步步深入追查本源',
          titles: ['🔍微觀偵查使', '🕵️足跡追蹤者', '🧩斷點拼接師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'testing-shield',
          name: '测试护体诀',
          description: '测试体系：单元测试、集成测试、E2E测试',
          commands: ['UnitTest', 'Integration', 'E2E', 'Mock', 'Coverage'],
          lore: '以测试为护体罡气，确保万无一失',
          titles: ['🛡️無瑕護體使', '✅驗證守門將', '🧪煉金測試師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'log-diagnostics',
          name: '日志诊断诀',
          description: '日志与诊断：分级日志、结构化日志、追踪',
          commands: ['LogLevel', 'StructuredLog', 'Trace', 'Sentry', 'ELK'],
          lore: '记录天地运行轨迹，从中窥见异常端倪',
          titles: ['📝天機記錄使', '🔎軌跡分析師', '📊萬象洞察者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'performance-profiling',
          name: '性能分析诀',
          description: '性能分析：CPU分析、内存泄漏、帧率检测',
          commands: ['Profiler', 'MemoryLeak', 'Flamegraph', 'Lighthouse', 'Bundle'],
          lore: '洞察系统运行之奥妙，寻出拖慢步伐之元凶',
          titles: ['⏱️時序測量使', '🔥火焰圖譜師', '💨疾風加速者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
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
      id: 'database-mastery',
      name: '天藏数据库',
      icon: '🗄️',
      branch: 'programming',
      tier: 4,
      spCost: 2,
      prerequisites: ['algorithm-matrix'],
      subSkills: [
        {
          id: 'relational-schema',
          name: '关系布阵诀',
          description: '关系型数据库设计：ER图、范式、表关系',
          commands: ['ER', 'NormalForm', 'ForeignKey', 'Index', 'Schema'],
          lore: '以关系为经纬，编织数据天罗地网',
          titles: ['🗂️數據架構師', '📐關係織網者', '🏛️資訊閣守護'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'query-mastery',
          name: '查询御剑诀',
          description: 'SQL查询：JOIN、子查询、聚合、窗口函数',
          commands: ['SELECT', 'JOIN', 'SubQuery', 'Aggregate', 'Window'],
          lore: '以查询为剑，从浩瀚数据中取敌首级',
          titles: ['⚔️數據劍術師', '🔍萬中取一者', '📊彙總煉金使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'index-optimization',
          name: '索引优化心法',
          description: '索引优化：B-Tree、覆盖索引、执行计划',
          commands: ['BTree', 'CoverIndex', 'Explain', 'QueryPlan', 'Cardinality'],
          lore: '为数据建立通天之路，瞬间通达万人难寻之物',
          titles: ['🚀數據疾風使', '🗺️捷徑開闢者', '⚡閃電查詢師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'transaction-processing',
          name: '事务处理诀',
          description: '事务处理：ACID、隔离级别、锁、MVCC',
          commands: ['ACID', 'Isolation', 'Lock', 'MVCC', 'Deadlock'],
          lore: '以事务为契约，确保每一步皆有迹可循',
          titles: ['📜契約守護者', '🔐鎖定乾坤使', '🔄回滾復原師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'networking',
      name: '天网连接术',
      icon: '🔗',
      branch: 'programming',
      tier: 4,
      spCost: 2,
      prerequisites: ['debugging-mastery'],
      subSkills: [
        {
          id: 'request-response',
          name: '请求响应诀',
          description: 'HTTP协议：请求方法、状态码、头部、缓存',
          commands: ['HTTP', 'REST', 'Status', 'Header', 'Cache'],
          lore: '一来一往之间，完成跨域信息交换',
          titles: ['📨信使傳送者', '🔄往復調停使', '📡訊息中樞師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'async-communication',
          name: '异步通信诀',
          description: '异步编程：Promise、async/await、事件循环',
          commands: ['Promise', 'Async', 'Await', 'EventLoop', 'Microtask'],
          lore: '同时驾驭多股灵力，互不干扰又协同共进',
          titles: ['🕒時序操弄者', '🌀多線並行師', '⚡非線性執行者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'api-design',
          name: 'API御神诀',
          description: 'API设计：RESTful规范、版本管理、文档生成',
          commands: ['RESTful', 'OpenAPI', 'Versioning', 'Swagger', 'HATEOAS'],
          lore: '定义天地法则，使万界生灵都能依规交流',
          titles: ['📖法則制定者', '🌉橋樑建造使', '📋介面守護者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'graphql-mastery',
          name: '万物查询诀',
          description: 'GraphQL：Schema、Resolver、Subscription、缓存',
          commands: ['GraphQL', 'Schema', 'Resolver', 'Subscription', 'Apollo'],
          lore: '予取予求，只取所需，不多拿一丝一毫',
          titles: ['🎯精準索取者', '🔮萬物查詢使', '⚖️取捨平衡師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
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
      id: 'automation',
      name: '天工自动化阵',
      icon: '⚙️',
      branch: 'programming',
      tier: 5,
      spCost: 3,
      prerequisites: ['database-mastery'],
      subSkills: [
        {
          id: 'ci-cd-pipeline',
          name: '流水线心法',
          description: 'CI/CD流水线：构建、测试、部署自动化',
          commands: ['CI', 'CD', 'Pipeline', 'GitHubActions', 'Jenkins'],
          lore: '设立天地自动运转之仪轨，不假外力生生不息',
          titles: ['🏭自動化工匠', '🔄永動機守護', '⚙️無休執行者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'containerization',
          name: '容器化虚诀',
          description: '容器化：Docker、镜像、容器、Dockerfile',
          commands: ['Docker', 'Container', 'Image', 'Dockerfile', 'Layer'],
          lore: '以虚化实，将万物封装于方寸之间',
          titles: ['📦方寸乾坤袋', '🫧虛實轉換師', '🏠隔離結界使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'orchestration',
          name: '编排御阵诀',
          description: '容器编排：Kubernetes、Pod、服务发现、伸缩',
          commands: ['K8s', 'Pod', 'Service', 'Deploy', 'Scaling'],
          lore: '指挥千万容器大军，布阵攻守皆在弹指之间',
          titles: ['🎪萬軍統帥者', '🧭編排掌旗使', '🏗️集結號令者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'monitoring',
          name: '监控天眼术',
          description: '监控与告警：指标收集、日志聚合、告警策略',
          commands: ['Prometheus', 'Grafana', 'Alert', 'Dashboard', 'SLI'],
          lore: '开天眼以观天下，微末异动皆无所遁形',
          titles: ['👁️洞悉萬里眼', '📊儀表天象師', '🔔預警先知者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'performance-optimization',
      name: '天机加速诀',
      icon: '🚀',
      branch: 'programming',
      tier: 5,
      spCost: 3,
      prerequisites: ['networking'],
      subSkills: [
        {
          id: 'profiling-analysis',
          name: '性能剖析诀',
          description: '性能剖析：代码热点、IO瓶颈、网络延迟分析',
          commands: ['Profiling', 'Bottleneck', 'Latency', 'Throughput', 'Flamegraph'],
          lore: '以天眼察微末，找出拖慢万物的顽疾所在',
          titles: ['🔬微觀診斷師', '⏳時間竊取者', '🔍瓶頸獵手'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'cache-strategy',
          name: '缓存策略诀',
          description: '缓存策略：多级缓存、缓存穿透、缓存失效',
          commands: ['Redis', 'MemCache', 'CDN', 'TTL', 'LRU'],
          lore: '预存天机于近侧，取用时方恨少之慢',
          titles: ['⚡疾速存取者', '📦預言儲藏使', '🧠記憶速寫師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'code-slimming',
          name: '代码瘦身诀',
          description: '代码优化：Tree Shaking、压缩、代码分割',
          commands: ['TreeShake', 'Minify', 'Split', 'Bundle', 'Purge'],
          lore: '去芜存菁，剔除冗余，留下最精纯的灵力',
          titles: ['🔪冗餘斬除者', '🧘至簡大道使', '🌱精煉萃取師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'lazy-loading',
          name: '懒加载悟诀',
          description: '懒加载与异步加载：路由懒加载、图片懒加载',
          commands: ['LazyLoad', 'DynamicImport', 'Suspense', 'Intersection', 'Prefetch'],
          lore: '智者不急于一时，需用时方才调用真力',
          titles: ['🦥智者緩行派', '⏰時機等待者', '🧘按需施放師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
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
      id: 'architecture-mastery',
      name: '天道架构诀',
      icon: '🏛️',
      branch: 'programming',
      tier: 6,
      spCost: 3,
      prerequisites: ['automation'],
      subSkills: [
        {
          id: 'design-patterns',
          name: '设计模式诀',
          description: '设计模式：单例、工厂、观察者、策略、适配器',
          commands: ['Singleton', 'Factory', 'Observer', 'Strategy', 'Adapter'],
          lore: '总结天地间反复出现的规律，化为己用',
          titles: ['📐規律總結者', '🧩模式拼接師', '🏗️萬法結構使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'microservices',
          name: '微服务化诀',
          description: '微服务架构：服务拆分、通信、治理、容错',
          commands: ['MicroService', 'RPC', 'Gateway', 'CircuitBreaker', 'ServiceMesh'],
          lore: '化整为零，各司其职，合则万钧之力',
          titles: ['🧩分化重組者', '🌐網狀服務使', '⚖️負載均衡者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'distributed-systems',
          name: '分布式心神',
          description: '分布式系统：一致性、分区容错、CAP理论',
          commands: ['CAP', 'Consensus', 'Raft', 'Sharding', 'Replication'],
          lore: '化身千万分布各地，心念一动便万众归一',
          titles: ['🌍天涯共此時使', '🧠萬眾一心者', '🔄數據同步師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'domain-driven',
          name: '领域驱动诀',
          description: '领域驱动设计：限界上下文、实体、值对象、聚合',
          commands: ['DDD', 'BoundedContext', 'Entity', 'Aggregate', 'EventSourcing'],
          lore: '以业务领域为疆界，构建与真实世界映射的代码王国',
          titles: ['🏰領域封王者', '🗺️業務製圖師', '📖域境敘事者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'security-mastery',
      name: '天罡护体诀',
      icon: '🛡️',
      branch: 'programming',
      tier: 6,
      spCost: 3,
      prerequisites: ['performance-optimization'],
      subSkills: [
        {
          id: 'web-defense',
          name: 'Web防御诀',
          description: 'Web安全防御：XSS、CSRF、SQL注入、CORS',
          commands: ['XSS', 'CSRF', 'SQLInjection', 'CORS', 'CSP'],
          lore: '筑起固若金汤的结界，抵御一切邪魔入侵',
          titles: ['🛡️金鐘罩護法', '🧱不破壁壘使', '🚫邪魔退散者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'authentication',
          name: '认证体系诀',
          description: '认证与授权：JWT、OAuth2、SSO、RBAC',
          commands: ['JWT', 'OAuth2', 'SSO', 'RBAC', 'MFA'],
          lore: '为每一位访客验明正身，按权限分配资源',
          titles: ['🪪身份驗證官', '🔑鑰匙守護者', '🚪門禁管理使'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'encryption',
          name: '加密玄奥诀',
          description: '加密技术：对称加密、非对称加密、哈希、证书',
          commands: ['AES', 'RSA', 'SHA', 'TLS', 'PKI'],
          lore: '以玄奥符文加密，非持有密钥者不可窥探',
          titles: ['🔐密文守護使', '🧩編碼魔術師', '🗝️秘鑰持有者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'security-audit',
          name: '安全审计诀',
          description: '安全审计：日志审计、渗透测试、合规检查',
          commands: ['Audit', 'PenTest', 'Compliance', 'Vulnerability', 'Forensic'],
          lore: '以审查之眼审视每一个角落，不给漏洞可乘之机',
          titles: ['🔦暗處探照者', '📋合規審判官', '🕵️漏洞獵人'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'programming' }
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
      id: 'fullstack-ultimate',
      name: '全栈工程师·天道归一',
      icon: '💎',
      branch: 'programming',
      tier: 7,
      spCost: 5,
      prerequisites: ['architecture-mastery', 'security-mastery'],
      subSkills: [
        {
          id: 'cultivation-initiate',
          name: '初窥天道',
          description: '掌握全栈开发全貌，前后端融会贯通',
          commands: ['FullStack', 'DevOps', 'SystemDesign', 'Leadership', 'Mentor'],
          lore: '历经万般磨练，终于窥见编程大道的全貌',
          titles: ['🌅天道初窺者', '🔭視野開拓者', '🌉全境通曉者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 5, perLevel: 3, scope: 'global' }
          ],
          expToNext: 500,
          currentExp: 0,
        },
        {
          id: 'cultivation-master',
          name: '道法自然',
          description: '随心所欲不逾矩，架构设计信手拈来',
          commands: ['ArchDesign', 'TechStrategy', 'Innovation', 'Optimization', 'Ecosystem'],
          lore: '大道至简，万法自然，再无框架束缚于身',
          titles: ['🌿道法自然者', '🎋無招勝有招', '🧘至簡宗師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 8, perLevel: 3, scope: 'global' }
          ],
          expToNext: 800,
          currentExp: 0,
        },
        {
          id: 'cultivation-transcend',
          name: '天道归一',
          description: '技术与道合而为一，开宗立派引领时代',
          commands: ['CreateFramework', 'OpenSourceLead', 'CommunityBuild', 'BookWrite', 'Keynote'],
          lore: '吾即是道，道即是吾，编程之巅再无他路',
          titles: ['👑萬法歸宗者', '🌟開宗立派祖', '∞天道化身'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 12, perLevel: 3, scope: 'global' }
          ],
          expToNext: 1200,
          currentExp: 0,
        },
      ],
      ultimate: true,
      titles: ['初窥天道', '道法自然', '天道归一'],
    },
  ],
};
