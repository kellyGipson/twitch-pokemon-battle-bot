export enum StatsEnum {
  HP = 'HP',
  Atk = 'Atk',
  SpAtk = 'SpAtk',
  Def = 'Def',
  SpDef = 'SpDef',
  Spe = 'Spd',
}

export interface IStats {
  [StatsEnum.HP   ]: number;
  [StatsEnum.Atk  ]: number;
  [StatsEnum.SpAtk]: number;
  [StatsEnum.Def  ]: number;
  [StatsEnum.SpDef]: number;
  [StatsEnum.Spe  ]: number;
}
