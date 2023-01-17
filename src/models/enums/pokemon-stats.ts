export enum StatsEnum {
  HP = 'HP',
  Atk = 'Atk',
  SpAtk = 'SpAtk',
  Def = 'Def',
  SpDef = 'SpDef',
  Spe = 'Spe',
}

export interface IStats {
  [StatsEnum.HP   ]: number;
  [StatsEnum.Atk  ]: number;
  [StatsEnum.SpAtk]: number;
  [StatsEnum.Def  ]: number;
  [StatsEnum.SpDef]: number;
  [StatsEnum.Spe  ]: number;
}

export const emptyStats: IStats = {
  [StatsEnum.HP   ]: 0,
  [StatsEnum.Atk  ]: 0,
  [StatsEnum.SpAtk]: 0,
  [StatsEnum.Def  ]: 0,
  [StatsEnum.SpDef]: 0,
  [StatsEnum.Spe  ]: 0,
}