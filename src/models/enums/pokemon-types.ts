export enum TypesEnum {
  NORMAL = 'NORMAL',
  FIRE = 'FIRE',
  WATER = 'WATER',
  GRASS = 'GRASS',
  ELECTRIC = 'ELECTRIC',
  ICE = 'ICE',
  FIGHTING = 'FIGHTING',
  POISON = 'POISON',
  GROUND = 'GROUND',
  FLYING = 'FLYING',
  PSYCHIC = 'PSYCHIC',
  BUG = 'BUG',
  ROCK = 'ROCK',
  GHOST = 'GHOST',
  DRAGON = 'DRAGON',
  DARK = 'DARK',
  STEEL = 'STEEL',
  FAIRY = 'FAIRY',
}

export const Types: TypesEnum[] = [
  TypesEnum.NORMAL,
  TypesEnum.FIRE,
  TypesEnum.WATER,
  TypesEnum.GRASS,
  TypesEnum.ELECTRIC,
  TypesEnum.ICE,
  TypesEnum.FIGHTING,
  TypesEnum.POISON,
  TypesEnum.GROUND,
  TypesEnum.FLYING,
  TypesEnum.PSYCHIC,
  TypesEnum.BUG,
  TypesEnum.ROCK,
  TypesEnum.GHOST,
  TypesEnum.DRAGON,
  TypesEnum.DARK,
  TypesEnum.STEEL,
  TypesEnum.FAIRY,
];

export interface TypeChartInterface {
    weaknesses: TypesEnum[],
    resistances: TypesEnum[],
    immunities: TypesEnum[],
}

export const TypeChart = {
  NORMAL: {
    weaknesses: [ TypesEnum.FIGHTING ],
    resistances: [],
    immunities: [ TypesEnum.GHOST ],
  },
  FIRE: {
    weaknesses: [
      TypesEnum.WATER,
      TypesEnum.GROUND,
      TypesEnum.ROCK
    ],
    resistances: [
      TypesEnum.FIRE,
      TypesEnum.GRASS,
      TypesEnum.ICE,
      TypesEnum.BUG,
      TypesEnum.STEEL,
      TypesEnum.FAIRY
    ],
    immunities: [],
  },
  WATER: {
    weaknesses: [
      TypesEnum.GRASS,
      TypesEnum.ELECTRIC,
    ],
    resistances: [
      TypesEnum.FIRE,
      TypesEnum.WATER,
      TypesEnum.ICE,
      TypesEnum.STEEL,
    ],
    immunities: [],
  },
  GRASS: {
    weaknesses: [
      TypesEnum.FIRE,
      TypesEnum.ICE,
      TypesEnum.POISON,
      TypesEnum.FLYING,
      TypesEnum.BUG,
    ],
    resistances: [
      TypesEnum.WATER,
      TypesEnum.GRASS,
      TypesEnum.ELECTRIC,
      TypesEnum.GROUND,
    ],
    immunities: [],
  },
  ELECTRIC: {
    weaknesses: [ TypesEnum.GROUND ],
    resistances: [
      TypesEnum.ELECTRIC,
      TypesEnum.FLYING,
      TypesEnum.STEEL,
    ],
    immunities: [],
  },
  ICE: {
    weaknesses: [
      TypesEnum.FIRE,
      TypesEnum.FIGHTING,
      TypesEnum.ROCK,
      TypesEnum.STEEL,
    ],
    resistances: [ TypesEnum.ICE ],
    immunities: [],
  },
  FIGHTING: {
    weaknesses: [
      TypesEnum.FLYING,
      TypesEnum.PSYCHIC,
      TypesEnum.FAIRY,
    ],
    resistances: [
      TypesEnum.BUG,
      TypesEnum.ROCK,
      TypesEnum.DARK,
    ],
    immunities: [],
  },
  POISON: {
    weaknesses: [
      TypesEnum.GROUND,
      TypesEnum.PSYCHIC,
    ],
    resistances: [
      TypesEnum.GRASS,
      TypesEnum.FIGHTING,
      TypesEnum.POISON,
      TypesEnum.BUG,
      TypesEnum.FAIRY,
    ],
    immunities: [],
  },
  GROUND: {
    weaknesses: [
      TypesEnum.WATER,
      TypesEnum.GRASS,
      TypesEnum.ICE,
    ],
    resistances: [
      TypesEnum.POISON,
      TypesEnum.ROCK,
    ],
    immunities: [ TypesEnum.ELECTRIC ],
  },
  FLYING: {
    weaknesses: [
      TypesEnum.ELECTRIC,
      TypesEnum.ICE,
      TypesEnum.ROCK,
    ],
    resistances: [
      TypesEnum.GRASS,
      TypesEnum.FIGHTING,
      TypesEnum.BUG,
    ],
    immunities: [ TypesEnum.GROUND ],
  },
  PSYCHIC: {
    weaknesses: [
      TypesEnum.BUG,
      TypesEnum.GHOST,
      TypesEnum.DARK,
    ],
    resistances: [
      TypesEnum.FIGHTING,
      TypesEnum.PSYCHIC,
    ],
    immunities: [],
  },
  BUG: {
    weaknesses: [
      TypesEnum.FIRE,
      TypesEnum.FLYING,
      TypesEnum.ROCK,
    ],
    resistances: [
      TypesEnum.GRASS,
      TypesEnum.FIGHTING,
      TypesEnum.GROUND,
    ],
    immunities: [],
  },
  ROCK: {
    weaknesses: [
      TypesEnum.WATER,
      TypesEnum.GRASS,
      TypesEnum.FIGHTING,
      TypesEnum.GROUND,
    ],
    resistances: [
      TypesEnum.NORMAL,
      TypesEnum.FIRE,
      TypesEnum.POISON,
      TypesEnum.FLYING,
    ],
    immunities: [],
  },
  GHOST: {
    weaknesses: [
      TypesEnum.GHOST,
      TypesEnum.DARK,
    ],
    resistances: [
      TypesEnum.POISON,
      TypesEnum.BUG,
    ],
    immunities: [
      TypesEnum.NORMAL,
      TypesEnum.FIGHTING,
    ],
  },
  DRAGON: {
    weaknesses: [
      TypesEnum.ICE,
      TypesEnum.DRAGON,
      TypesEnum.FAIRY,
    ],
    resistances: [
      TypesEnum.FIRE,
      TypesEnum.WATER,
      TypesEnum.GRASS,
      TypesEnum.ELECTRIC,
    ],
    immunities: [],
  },
  DARK: {
    weaknesses: [
      TypesEnum.FIGHTING,
      TypesEnum.BUG,
    ],
    resistances: [
      TypesEnum.GHOST,
      TypesEnum.DARK,
    ],
    immunities: [ TypesEnum.PSYCHIC ],
  },
  STEEL: {
    weaknesses: [
      TypesEnum.FIRE,
      TypesEnum.FIGHTING,
      TypesEnum.GROUND,
    ],
    resistances: [
      TypesEnum.NORMAL,
      TypesEnum.GRASS,
      TypesEnum.ICE,
      TypesEnum.FLYING,
      TypesEnum.PSYCHIC,
      TypesEnum.BUG,
      TypesEnum.ROCK,
      TypesEnum.DRAGON,
      TypesEnum.STEEL,
      TypesEnum.FAIRY,
    ],
    immunities: [ TypesEnum.POISON ],
  },
  FAIRY: {
    weaknesses: [
      TypesEnum.STEEL,
      TypesEnum.FAIRY,
    ],
    resistances: [
      TypesEnum.FIGHTING,
      TypesEnum.BUG,
      TypesEnum.DARK
    ],
    immunities: [ TypesEnum.DRAGON ],
  },
}