import type { SkillBranchData } from '../../types';

export const musicSkills: SkillBranchData = {
  id: 'music',
  name: '音乐',
  icon: '🎵',
  level: 0,
  exp: 0,
  nodes: [
    // ====== Tier 1 ======
    {
      id: 'music-theory',
      name: '天音律典诀',
      icon: '🎼',
      branch: 'music',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'notes-scales',
          name: '音符音阶诀',
          description: '音符音阶：十二平均律、大调小调、唱名',
          commands: ['音符', '音阶', '大调', '小调', '半音'],
          lore: '從最基礎的音符開始，搭建音樂世界的磚瓦',
          titles: ['🎵音符啟蒙者', '🎼音階掌握師', '🎹十二律行者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'keys-modes',
          name: '调式调性诀',
          description: '调式调性：調號、關係調、教會調式',
          commands: ['調號', '關係調', '調式', '五度圈', '移調'],
          lore: '掌握調式與調性的奧秘，為音樂定下情感基調',
          titles: ['🎹調性掌控者', '🔄五度圈行者', '🎼教會調式師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'chord-construction',
          name: '和弦构建诀',
          description: '和弦构成：三和弦、七和弦、轉位、延伸音',
          commands: ['三和弦', '七和弦', '轉位', '延伸', '省略'],
          lore: '將多個音符疊加為和弦，為旋律鋪墊豐富的和聲背景',
          titles: ['🎹和弦建構者', '🖐️指法排列師', '🎵和聲調配者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'rhythm-basics',
          name: '节奏节拍诀',
          description: '节奏节拍：拍號、音符時值、休止符、連音',
          commands: ['拍號', '時值', '休止', '連音', '附點'],
          lore: '以節奏為骨架，讓音符在時間的脈搏中有序跳動',
          titles: ['🥁節拍守護者', '⏱️時值精算師', '🎵節奏骨架者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'rhythm-training',
      name: '节拍天启诀',
      icon: '🥁',
      branch: 'music',
      tier: 1,
      spCost: 1,
      prerequisites: [],
      subSkills: [
        {
          id: 'beat-perception',
          name: '节拍感知诀',
          description: '节拍感知：穩拍、重音、切分、三連音感',
          commands: ['穩拍', '重音', '切分', '三連', '搶拍'],
          lore: '讓身體感受節拍的律動，與音樂的脈搏同步跳動',
          titles: ['🎵節拍感知者', '🫀律動心臟者', '🥁穩拍大師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'rhythm-patterns',
          name: '节奏型诀',
          description: '節奏型：常見節奏模式、風格節奏、填充',
          commands: ['模式', '風格', '填充', '變奏', '動機'],
          lore: '掌握各種風格的節奏模式，豐富音樂的表現力',
          titles: ['🥁節奏型師', '🎵風格節奏者', '🔄變奏編排者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 100,
          currentExp: 0,
        },
        {
          id: 'sight-rhythm',
          name: '视奏节奏诀',
          description: '视奏节奏：讀譜打節奏、複雜節奏解讀',
          commands: ['讀譜', '視奏', '複合', '交錯', '多聲部'],
          lore: '一眼看穿複雜的節奏記譜，在腦中精準重現',
          titles: ['👁️視奏節奏者', '📖讀譜快手', '🧩複合節奏師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'rhythm-creation',
          name: '节奏创作诀',
          description: '节奏创作：節奏動機、發展、變奏、即興',
          commands: ['動機', '發展', '變奏', '即興', '創作'],
          lore: '從無到有創造節奏，讓每一次擊打都充滿生命力',
          titles: ['🎵節奏創作者', '💡動機靈感者', '🎤即興節奏者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
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
      id: 'instrument-basics',
      name: '琴心御器诀',
      icon: '🎹',
      branch: 'music',
      tier: 2,
      spCost: 1,
      prerequisites: ['music-theory'],
      subSkills: [
        {
          id: 'fingering-basics',
          name: '指法基础诀',
          description: '指法基础：手型、指法排列、音階指法、琶音',
          commands: ['手型', '指法', '音階', '琶音', '換指'],
          lore: '以正確的指法為起點，讓雙手在樂器上自由舞動',
          titles: ['🖐️指法修行者', '🎹手型塑形師', '🎵音階奔跑者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'scale-practice',
          name: '音阶练习诀',
          description: '音阶练习：各大調音階、和聲小調、旋律小調',
          commands: ['大調', '小調', '半音階', '全音階', '模進'],
          lore: '日復一日地練習音階，讓手指記住每一個音符的位置',
          titles: ['🎵音階修行者', '🎹黑白鍵旅者', '🏃指法跑者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'simple-repertoire',
          name: '简单曲目诀',
          description: '简单曲目：經典小品、練習曲、簡單編曲',
          commands: ['小品', '練習曲', '經典', '旋律', '伴奏'],
          lore: '通過演奏完整的曲目，將技巧轉化為真正的音樂',
          titles: ['🎶曲目演奏者', '📖樂譜實踐者', '🎵旋律詮釋者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'ensemble-intro',
          name: '合奏入门诀',
          description: '合奏入门：同步演奏、聲部配合、聆聽他人',
          commands: ['合奏', '同步', '聲部', '配合', '聆聽'],
          lore: '與他人一同演奏，在默契配合中感受音樂的社交魅力',
          titles: ['🎻合奏夥伴', '👥聲部配合者', '🎵默契演奏者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'ear-training',
      name: '天听玄耳诀',
      icon: '👂',
      branch: 'music',
      tier: 2,
      spCost: 1,
      prerequisites: ['rhythm-training'],
      subSkills: [
        {
          id: 'interval-identification',
          name: '音程辨识诀',
          description: '音程辨识：度數聽辨、音程性質、旋律音程',
          commands: ['度數', '性質', '旋律', '和聲音程', '轉位'],
          lore: '練就一雙金耳朵，精準辨別兩個音之間的距離',
          titles: ['👂音程辨識者', '🎵絕對聽感者', '🔊和聲聆聽者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'chord-recognition',
          name: '和弦听辨诀',
          description: '和弦听辨：三和弦、七和弦、轉位和弦辨識',
          commands: ['三和弦', '七和弦', '轉位', '色彩', '延伸'],
          lore: '從一堆同時響起的音符中識別和弦的類型與色彩',
          titles: ['🎹和弦辨識者', '🖐️和聲感知師', '🎵色彩聆聽者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 150,
          currentExp: 0,
        },
        {
          id: 'melody-dictation',
          name: '旋律听写诀',
          description: '旋律听写：短句聽寫、節奏記錄、調性判斷',
          commands: ['聽寫', '記錄', '調性', '節奏', '短語'],
          lore: '將聽到的旋律快速轉化為樂譜，在腦中建立聲音與符號的連結',
          titles: ['📝旋律聽寫者', '🎵音符複刻師', '🧠聲音轉譯者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'tonal-perception',
          name: '调性感知诀',
          description: '調性感知：主音辨識、調性判斷、轉調感知',
          commands: ['主音', '調性', '轉調', '終止', '屬和弦'],
          lore: '感知音樂的調性中心，理解樂曲的調性佈局',
          titles: ['🎵調性感知者', '🔮主音定位師', '🔄轉調追蹤者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
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
      id: 'harmony-theory',
      name: '和声天纶诀',
      icon: '🎶',
      branch: 'music',
      tier: 3,
      spCost: 2,
      prerequisites: ['instrument-basics'],
      subSkills: [
        {
          id: 'harmonic-progression',
          name: '和声进行诀',
          description: '和声进行：功能進行、終止式、副屬和弦',
          commands: ['功能', '終止', '副屬', '變化和弦', '持續音'],
          lore: '掌握和弦之間的流動規律，引導聽眾的情感起伏',
          titles: ['🎵和聲進行者', '🔄功能編排師', '🎼終止式大師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'chord-function',
          name: '和弦功能诀',
          description: '和弦功能：主功能、屬功能、下屬功能、替代',
          commands: ['主功能', '屬功能', '下屬', '替代', '變格'],
          lore: '理解每一個和弦在調性中的角色與功能定位',
          titles: ['🎹和弦功能師', '🏛️和聲架構者', '🔀替代和弦者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'voice-leading',
          name: '声部配置诀',
          description: '聲部配置：四部和聲、聲部進行、避免平行',
          commands: ['四部', '進行', '平行', '反向', '密集'],
          lore: '精心安排每一個聲部的走向，讓和聲如流水般順暢',
          titles: ['🎵聲部配置者', '🧵四部和聲師', '🔀聲部引導者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'harmonic-analysis',
          name: '和声分析诀',
          description: '和声分析：曲目和聲分析、和弦標記、數字低音',
          commands: ['分析', '標記', '低音', '圖表', '功能'],
          lore: '透過分析經典曲目的和聲，學習大師的寫作手法',
          titles: ['🔬和聲分析者', '📖曲目解構師', '🎼大師手法學者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'form-analysis',
      name: '曲式天书诀',
      icon: '📐',
      branch: 'music',
      tier: 3,
      spCost: 2,
      prerequisites: ['ear-training'],
      subSkills: [
        {
          id: 'form-structure',
          name: '曲式结构诀',
          description: '曲式結構：二段式、三段式、迴旋、變奏',
          commands: ['二段式', '三段式', '迴旋', '變奏', '奏鳴'],
          lore: '認識音樂作品的骨架結構，從宏觀把握樂曲全貌',
          titles: ['🏛️曲式架構者', '📐結構分析師', '🎵樂曲鳥瞰者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'motif-development',
          name: '动机发展诀',
          description: '動機發展：動機變形、展開手法、節奏縮放',
          commands: ['動機', '變形', '展開', '縮放', '逆行'],
          lore: '從一個小小的音樂動機出發，發展出完整的樂章',
          titles: ['💡動機創造者', '🔄動機發展師', '🧬音樂基因者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 200,
          currentExp: 0,
        },
        {
          id: 'phrase-analysis',
          name: '段落划分诀',
          description: '段落劃分：樂句、樂段、終止式、呼吸點',
          commands: ['樂句', '樂段', '終止', '呼吸', '分句'],
          lore: '將樂曲劃分為合理的段落，理解音樂的敘事節奏',
          titles: ['📝樂句劃分者', '✂️段落分割師', '🌬️呼吸點感知者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'style-identification',
          name: '风格辨识诀',
          description: '風格辨識：時代風格、作曲家風格、流派特徵',
          commands: ['時代', '作曲家', '流派', '特徵', '比較'],
          lore: '一聽便知是哪位大師的作品，辨識不同時代的風格印記',
          titles: ['🎵風格辨識者', '🎼時代聆聽者', '🔍作曲家指紋師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
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
      id: 'music-production',
      name: '数位音律诀',
      icon: '🎛️',
      branch: 'music',
      tier: 4,
      spCost: 2,
      prerequisites: ['harmony-theory'],
      subSkills: [
        {
          id: 'daw-operation',
          name: 'DAW操作诀',
          description: 'DAW操作：音軌、編輯器、混音台、自動化',
          commands: ['DAW', '音軌', '編輯', '混音', '自動化'],
          lore: '以數位音訊工作站為畫布，在電腦上創作音樂',
          titles: ['🎛️DAW操控者', '💻數位音樂家', '🎚️音軌編排者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'midi-programming',
          name: 'MIDI编程诀',
          description: 'MIDI編程：音符輸入、CC控制、力度編輯、量化',
          commands: ['MIDI', 'CC', '力度', '量化', '人性化'],
          lore: '以MIDI數據驅動虛擬樂器，讓電腦奏出真實的音樂',
          titles: ['🎹MIDI編程者', '🤖虛擬樂器師', '🎵音符序列者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'audio-recording',
          name: '音频录制诀',
          description: '音頻錄製：麥克風選擇、錄音技巧、聲學處理',
          commands: ['麥克風', '錄音', '聲學', '增益', '干擾'],
          lore: '以麥克風捕捉聲音的靈魂，將真實的聲波化為數位訊號',
          titles: ['🎤錄音工程師', '🎙️麥克風操控者', '🔊聲學處理師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'mixing-basics',
          name: '混音基础诀',
          description: '混音基礎：音量平衡、聲像、EQ、壓縮',
          commands: ['平衡', '聲像', 'EQ', '壓縮', '混響'],
          lore: '將多條音軌融合為和諧的整體，讓每一個樂器各就其位',
          titles: ['🎚️混音工程師', '⚖️音量平衡者', '🔊聲像定位師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'sound-design',
      name: '音色造化诀',
      icon: '🔊',
      branch: 'music',
      tier: 4,
      spCost: 2,
      prerequisites: ['form-analysis'],
      subSkills: [
        {
          id: 'synthesizer',
          name: '合成器心法',
          description: '合成器：振盪器、濾波器、包絡、LFO',
          commands: ['振盪器', '濾波器', '包絡', 'LFO', '調制'],
          lore: '從電子信號中創造出前所未有的聲音，塑造音色的無限可能',
          titles: ['🔊合成器巫師', '🎛️波形塑形者', '⚡電子音色師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'sampling',
          name: '采样处理诀',
          description: '採樣處理：取樣、切片、映射、變調',
          commands: ['取樣', '切片', '映射', '變調', '時間'],
          lore: '從現有聲音中取材，重新拼貼出全新的聲音世界',
          titles: ['🔊採樣藝術家', '✂️聲音剪輯者', '🧩聲音拼貼師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 250,
          currentExp: 0,
        },
        {
          id: 'effects-processing',
          name: '效果器诀',
          description: '效果器：延遲、混響、失真、調制效果',
          commands: ['延遲', '混響', '失真', '合唱', '移相'],
          lore: '以效果器為畫筆，為原始聲音添加空間與色彩的變化',
          titles: ['🎛️效果器大師', '🌌空間創造者', '🎨聲音彩繪師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'timbre-sculpting',
          name: '音色塑造诀',
          description: '音色塑造：音色設計、紋理構建、頻譜分析',
          commands: ['音色', '紋理', '頻譜', '設計', '開發'],
          lore: '像雕塑家一樣塑造聲音的質感與色彩，打造獨特的音色簽名',
          titles: ['🔊音色雕塑家', '🎨紋理設計師', '🎵簽名音色者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
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
      id: 'composition-mastery',
      name: '作曲天机诀',
      icon: '✍️',
      branch: 'music',
      tier: 5,
      spCost: 3,
      prerequisites: ['music-production'],
      subSkills: [
        {
          id: 'melody-writing',
          name: '旋律写作诀',
          description: '旋律寫作：動機創建、句法結構、起伏設計',
          commands: ['動機', '句法', '起伏', '高潮', '呼吸'],
          lore: '創作出讓人過耳不忘的旋律，這是音樂的靈魂所在',
          titles: ['🎵旋律創作者', '🎼動機靈感者', '💡金句製造者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'harmonic-arrangement',
          name: '和声编排诀',
          description: '和聲編排：和弦進行編配、和聲節奏、重新和聲',
          commands: ['編配', '節奏', '重新', '色彩', '緊張'],
          lore: '為旋律配上恰到好處的和聲，讓音樂的情感更加立體',
          titles: ['🎹和聲編配者', '🎨和聲彩繪師', '🔄重新和聲者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'rhythmic-arrangement',
          name: '节奏编排诀',
          description: '節奏編排：節奏組設計、律動編寫、過門填充',
          commands: ['節奏組', '律動', '過門', '填充', '變化'],
          lore: '以節奏為引擎，驅動音樂的前進動力',
          titles: ['🥁節奏設計者', '🎵律動編寫師', '⚡節奏引擎者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'orchestration-basics',
          name: '配器基础诀',
          description: '配器基礎：樂器音域、音色搭配、織體層次',
          commands: ['音域', '搭配', '織體', '層次', '音色'],
          lore: '了解每種樂器的特性，為不同的音色找到最適合的位置',
          titles: ['🎻配器大師', '🎺樂器搭配師', '🎼織體編排者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'advanced-arrangement',
      name: '编曲玄妙诀',
      icon: '🎚️',
      branch: 'music',
      tier: 5,
      spCost: 3,
      prerequisites: ['sound-design'],
      subSkills: [
        {
          id: 'voice-balance',
          name: '声部平衡诀',
          description: '聲部平衡：頻率分配、動態範圍、立體聲場',
          commands: ['頻率', '動態', '立體聲', '平衡', '遮罩'],
          lore: '讓每一個聲部在頻譜上各安其位，互不干擾又融為一體',
          titles: ['⚖️頻率平衡者', '🎚️動態掌控師', '🌌立體聲設計者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'timbre-pairing',
          name: '音色搭配诀',
          description: '音色搭配：音色組合、對比效果、質感層次',
          commands: ['組合', '對比', '質感', '層次', '融合'],
          lore: '將不同音色巧妙搭配，創造出令人驚喜的聲音化學反應',
          titles: ['🎨音色搭配師', '🔬聲音化學者', '🎭質感對比者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 300,
          currentExp: 0,
        },
        {
          id: 'dynamics-control',
          name: '动态控制诀',
          description: '動態控制：音量包絡、表情曲線、漸強漸弱',
          commands: ['包絡', '表情', '漸強', '漸弱', '對比'],
          lore: '以精細的動態控制賦予音樂生命的呼吸感',
          titles: ['📈動態控制者', '🌊表情曲線師', '🎵呼吸賦予者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'style-arrangement',
          name: '风格编曲诀',
          description: '風格編曲：流行編曲、古典編曲、電子編曲',
          commands: ['流行', '古典', '電子', '爵士', '融合'],
          lore: '熟悉不同風格的編曲手法，靈活穿梭於各種音樂類型',
          titles: ['🎵風格編曲師', '🎼流行金曲者', '🎹爵士和聲者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
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
      id: 'scoring-art',
      name: '配乐天籁诀',
      icon: '🎬',
      branch: 'music',
      tier: 6,
      spCost: 3,
      prerequisites: ['composition-mastery'],
      subSkills: [
        {
          id: 'film-scoring',
          name: '影视配乐诀',
          description: '影視配樂：畫面同步、情感引導、主題設計',
          commands: ['同步', '情感', '主題', '鋪墊', '高潮'],
          lore: '用音樂為影像注入情感，讓每一幀畫面都有了靈魂',
          titles: ['🎬影視配樂師', '🎵情感引導者', '🎞️畫面音樂者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'game-scoring',
          name: '游戏配乐诀',
          description: '遊戲配樂：互動配樂、循環設計、動態切換',
          commands: ['互動', '循環', '動態', '關卡', '沉浸'],
          lore: '為遊戲世界創作出沉浸式的音樂體驗，讓玩家身臨其境',
          titles: ['🎮遊戲配樂者', '🔄循環設計師', '🎯互動音樂師'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'emotional-direction',
          name: '情感引导诀',
          description: '情感引導：情緒曲線、音樂張力、氛圍營造',
          commands: ['情緒', '張力', '氛圍', '鋪陳', '爆發'],
          lore: '以音樂操控聽眾的情感，從平靜到激昂盡在掌握',
          titles: ['🎭情感操縱者', '📈情緒曲線師', '🌪️音樂張力者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'theme-development',
          name: '主题发展诀',
          description: '主題發展：人物主題、變奏手法、主題貫穿',
          commands: ['主題', '變奏', '貫穿', '回憶', '發展'],
          lore: '為角色與場景創作標誌性的音樂主題，讓旋律成為記憶的錨點',
          titles: ['🎵主題創作者', '🎼角色旋律師', '🔗主題貫穿者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
      ],
      ultimate: false,
      titles: [],
    },
    {
      id: 'musical-expression',
      name: '琴韵天心诀',
      icon: '🎭',
      branch: 'music',
      tier: 6,
      spCost: 3,
      prerequisites: ['advanced-arrangement'],
      subSkills: [
        {
          id: 'improvisation',
          name: '即兴演奏诀',
          description: '即興演奏：和弦音階、即興思維、動機發展',
          commands: ['即興', '和弦', '音階', '動機', '對話'],
          lore: '在當下創造音樂，讓指尖跟隨直覺自由舞動',
          titles: ['🎹即興演奏者', '🎵靈感瞬間者', '🎭音樂對話者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'emotional-delivery',
          name: '情感传达诀',
          description: '情感傳達：音色控制、力度變化、音樂詮釋',
          commands: ['音色', '力度', '詮釋', '情感', '表達'],
          lore: '用樂器代替語言，將內心最深沉的情感化為音符傳遞出去',
          titles: ['💖情感傳達者', '🎻音樂詮釋者', '😢靈魂演奏者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 2, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 350,
          currentExp: 0,
        },
        {
          id: 'performance-technique',
          name: '演奏技巧诀',
          description: '演奏技巧：炫技段落、表現力、舞台掌控',
          commands: ['炫技', '表現', '舞台', '掌控', '魅力'],
          lore: '將技術與情感完美融合，在舞台上綻放最耀眼的光芒',
          titles: ['🎤舞台掌控者', '🎵炫技大師', '✨魅力演奏者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
          ],
          expToNext: 400,
          currentExp: 0,
        },
        {
          id: 'stage-presence',
          name: '舞台表现诀',
          description: '舞台表現：台風、互動、即興應變、感染力',
          commands: ['台风', '互動', '應變', '感染力', '魅力'],
          lore: '以舞台為戰場，用音樂征服每一位聽眾的心',
          titles: ['🎪舞台王者', '👥群眾煽動者', '🌟魅力放射者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 3, perLevel: 3, scope: 'branch', branch: 'music' }
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
      id: 'soul-composer-ultimate',
      name: '灵魂作曲家·天道归一',
      icon: '💎',
      branch: 'music',
      tier: 7,
      spCost: 5,
      prerequisites: ['scoring-art', 'musical-expression'],
      subSkills: [
        {
          id: 'cultivation-initiate',
          name: '初窥音道',
          description: '融会贯通所有音乐知识与技能，形成个人音乐语言',
          commands: ['整合', '创作', '表达', '风格', '作品'],
          lore: '歷經千萬音符的洗禮，終于窺見音樂大道的真諦',
          titles: ['🌟音道初窺者', '🎵音樂覺醒者', '🎼風格形成者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 5, perLevel: 3, scope: 'global' }
          ],
          expToNext: 500,
          currentExp: 0,
        },
        {
          id: 'cultivation-master',
          name: '樂道自然',
          description: '音樂創作信手拈來，旋律流淌如呼吸般自然',
          commands: ['創作', '自然', '流露', '靈感', '隨心'],
          lore: '樂由心生，音隨意動，再無技法可以束縛表達',
          titles: ['🌿樂道自然者', '🎋音符隨心者', '🧘與樂合一者'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 8, perLevel: 3, scope: 'global' }
          ],
          expToNext: 800,
          currentExp: 0,
        },
        {
          id: 'cultivation-transcend',
          name: '萬樂歸宗',
          description: '以音樂感動世界，成為不朽的音樂傳奇',
          commands: ['傳奇', '影響', '不朽', '傳承', '感動'],
          lore: '吾即是音樂，音樂即是吾，終成一代靈魂作曲家',
          titles: ['👑萬樂歸宗者', '🌟不朽作曲家', '∞音樂傳奇'],
          level: 0,
          passiveEffects: [
            { type: 'exp_multiplier', value: 12, perLevel: 3, scope: 'global' }
          ],
          expToNext: 1200,
          currentExp: 0,
        },
      ],
      ultimate: true,
      titles: ['初窥音道', '乐道自然', '万乐归宗'],
    },
  ],
};
