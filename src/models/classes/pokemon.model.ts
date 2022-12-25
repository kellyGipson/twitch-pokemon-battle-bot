import { merge } from 'lodash';
import { TypesEnum } from '../enums/pokemon-types';

export class Pokemon {
  name: string;
  types: TypesEnum[];
  level: number = 50;

  finalHP: number;
  finalAtk: number;
  finalSpAtk: number;
  finalDef: number;
  finalSpDef: number;
  finalSpd: number;

  HP: number;
  Atk: number;
  SpAtk: number;
  Def: number;
  SpDef: number;
  Spd: number;

  ivHP: number;
  ivAtk: number;
  ivSpAtk: number;
  ivDef: number;
  ivSpDef: number;
  ivSpd: number;

  evHP: number;
  evAtk: number;
  evSpAtk: number;
  evDef: number;
  evSpDef: number;
  evSpd: number;
  
  constructor(pokemon: Pokemon) {
    if (!pokemon) { return; }
    
    merge(this, pokemon);
  }
}
