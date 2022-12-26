import { StatsEnum } from "./pokemon-stats";

export enum NaturesEnum {
  ADAMANT = 'ADAMANT',
  BASHFUL = 'BASHFUL',
  BOLD = 'BOLD',
  BRAVE = 'BRAVE',
  CALM = 'CALM',
  CAREFUL = 'CAREFUL',
  DOCILE = 'DOCILE',
  GENTLE = 'GENTLE',
  HARDY = 'HARDY',
  HASTY = 'HASTY',
  IMPISH = 'IMPISH',
  JOLLY = 'JOLLY',
  LAX = 'LAX',
  LONELY = 'LONELY',
  MILD = 'MILD',
  MODEST = 'MODEST',
  NAIVE = 'NAIVE',
  NAUGHTY = 'NAUGHTY',
  QUIET = 'QUIET',
  QUIRKY = 'QUIRKY',
  RASH = 'RASH',
  RELAXED = 'RELAXED',
  SASSY = 'SASSY',
  SERIOUS = 'SERIOUS',
  TIMID = 'TIMID',
}

export const PokemonNatures = [
  NaturesEnum.ADAMANT,
  NaturesEnum.BASHFUL,
  NaturesEnum.BOLD,
  NaturesEnum.BRAVE,
  NaturesEnum.CALM,
  NaturesEnum.CAREFUL,
  NaturesEnum.DOCILE,
  NaturesEnum.GENTLE,
  NaturesEnum.HARDY,
  NaturesEnum.HASTY,
  NaturesEnum.IMPISH,
  NaturesEnum.JOLLY,
  NaturesEnum.LAX,
  NaturesEnum.LONELY,
  NaturesEnum.MILD,
  NaturesEnum.MODEST,
  NaturesEnum.NAIVE,
  NaturesEnum.NAUGHTY,
  NaturesEnum.QUIET,
  NaturesEnum.QUIRKY,
  NaturesEnum.RASH,
  NaturesEnum.RELAXED,
  NaturesEnum.SASSY,
  NaturesEnum.SERIOUS,
  NaturesEnum.TIMID,
];

export interface NaturesDataInterface {
  name: string;
  increase: StatsEnum;
  decrease: StatsEnum;
}

export type NaturesDataType = { [key: string]: NaturesDataInterface };

export const NaturesData: NaturesDataType = {
  [NaturesEnum.ADAMANT]: { name: NaturesEnum.ADAMANT, increase: StatsEnum.Atk,   decrease: StatsEnum.SpAtk },
  [NaturesEnum.BASHFUL]: { name: NaturesEnum.BASHFUL, increase: StatsEnum.SpAtk, decrease: StatsEnum.SpAtk },
  [NaturesEnum.BOLD   ]: { name: NaturesEnum.BOLD,    increase: StatsEnum.Def,   decrease: StatsEnum.Atk   },
  [NaturesEnum.BRAVE  ]: { name: NaturesEnum.BRAVE,   increase: StatsEnum.Atk,   decrease: StatsEnum.Spe   },
  [NaturesEnum.CALM   ]: { name: NaturesEnum.CALM,    increase: StatsEnum.SpDef, decrease: StatsEnum.Atk   },
  [NaturesEnum.CAREFUL]: { name: NaturesEnum.CAREFUL, increase: StatsEnum.SpDef, decrease: StatsEnum.SpAtk },
  [NaturesEnum.DOCILE ]: { name: NaturesEnum.DOCILE,  increase: StatsEnum.Def,   decrease: StatsEnum.Def   },
  [NaturesEnum.GENTLE ]: { name: NaturesEnum.GENTLE,  increase: StatsEnum.SpDef, decrease: StatsEnum.Def   },
  [NaturesEnum.HARDY  ]: { name: NaturesEnum.HARDY,   increase: StatsEnum.Atk,   decrease: StatsEnum.Atk   },
  [NaturesEnum.HASTY  ]: { name: NaturesEnum.HASTY,   increase: StatsEnum.Atk,   decrease: StatsEnum.Atk   },
  [NaturesEnum.IMPISH ]: { name: NaturesEnum.IMPISH,  increase: StatsEnum.Def,   decrease: StatsEnum.SpAtk },
  [NaturesEnum.JOLLY  ]: { name: NaturesEnum.JOLLY,   increase: StatsEnum.Spe,   decrease: StatsEnum.SpAtk },
  [NaturesEnum.LAX    ]: { name: NaturesEnum.LAX,     increase: StatsEnum.Def,   decrease: StatsEnum.SpDef },
  [NaturesEnum.LONELY ]: { name: NaturesEnum.LONELY,  increase: StatsEnum.Atk,   decrease: StatsEnum.Def   },
  [NaturesEnum.MILD   ]: { name: NaturesEnum.MILD,    increase: StatsEnum.SpAtk, decrease: StatsEnum.Def   },
  [NaturesEnum.MODEST ]: { name: NaturesEnum.MODEST,  increase: StatsEnum.SpAtk, decrease: StatsEnum.Atk   },
  [NaturesEnum.NAIVE  ]: { name: NaturesEnum.NAIVE,   increase: StatsEnum.Spe,   decrease: StatsEnum.SpDef },
  [NaturesEnum.NAUGHTY]: { name: NaturesEnum.NAUGHTY, increase: StatsEnum.Atk,   decrease: StatsEnum.SpDef },
  [NaturesEnum.QUIET  ]: { name: NaturesEnum.QUIET,   increase: StatsEnum.SpAtk, decrease: StatsEnum.Spe   },
  [NaturesEnum.QUIRKY ]: { name: NaturesEnum.QUIRKY,  increase: StatsEnum.SpDef, decrease: StatsEnum.SpDef },
  [NaturesEnum.RASH   ]: { name: NaturesEnum.RASH,    increase: StatsEnum.SpAtk, decrease: StatsEnum.SpDef },
  [NaturesEnum.RELAXED]: { name: NaturesEnum.RELAXED, increase: StatsEnum.Def,   decrease: StatsEnum.Spe   },
  [NaturesEnum.SASSY  ]: { name: NaturesEnum.SASSY,   increase: StatsEnum.SpDef, decrease: StatsEnum.Spe   },
  [NaturesEnum.SERIOUS]: { name: NaturesEnum.SERIOUS, increase: StatsEnum.Spe,   decrease: StatsEnum.Spe   },
  [NaturesEnum.TIMID  ]: { name: NaturesEnum.TIMID,   increase: StatsEnum.Spe,   decrease: StatsEnum.Atk   },
};