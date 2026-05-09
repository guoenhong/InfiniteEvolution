import type { SkillBranchData, PassiveModifiers, SubSkill } from '../types';

const LEVEL_MULTIPLIERS = [0, 1.0, 1.8, 3.0];

export function computePassives(branches: SkillBranchData[]): PassiveModifiers {
  const result: PassiveModifiers = {
    expMultiplier: {},
    goldMultiplier: {},
    globalExpMultiplier: 1.0,
    globalGoldMultiplier: 1.0,
    hpRegen: 0,
    maxHpBonus: 0,
    hpPenaltyReduce: 0,
    extraDailyTasks: 0,
    streakProtect: 0,
    spDiscount: 0,
  };

  for (const branch of branches) {
    for (const node of branch.nodes) {
      for (const sub of node.subSkills) {
        if (sub.level === 0) continue;
        const mult = LEVEL_MULTIPLIERS[sub.level];

        for (const effect of sub.passiveEffects) {
          const value = effect.value * mult;
          const perLevelBonus = (effect.perLevel || 0) * (sub.level - 1) * mult;

          switch (effect.type) {
            case 'exp_multiplier': {
              const key = effect.branch || branch.id;
              result.expMultiplier[key] = (result.expMultiplier[key] || 1.0) + (value + perLevelBonus) / 100;
              break;
            }
            case 'gold_multiplier': {
              const key = effect.branch || branch.id;
              result.goldMultiplier[key] = (result.goldMultiplier[key] || 1.0) + (value + perLevelBonus) / 100;
              break;
            }
            case 'hp_regen':
              result.hpRegen += Math.floor(value + perLevelBonus);
              break;
            case 'max_hp_bonus':
              result.maxHpBonus += Math.floor(value + perLevelBonus);
              break;
            case 'hp_penalty_reduce':
              result.hpPenaltyReduce += Math.floor(value + perLevelBonus);
              break;
            case 'sp_discount':
              result.spDiscount += Math.floor(value + perLevelBonus);
              break;
            case 'extra_daily_task':
              result.extraDailyTasks += Math.floor(value + perLevelBonus);
              break;
            case 'streak_protect':
              result.streakProtect += Math.floor(value + perLevelBonus);
              break;
            case 'bonus_difficulty_exp':
              result.expMultiplier['__difficulty__'] = (result.expMultiplier['__difficulty__'] || 1.0) + (value + perLevelBonus) / 100;
              break;
          }
        }
      }
    }
  }

  return result;
}
