import { merge } from 'lodash';
import { Pokemon as pokenotePokemon } from 'pokenode-ts';
import { NatureMap } from '../..';
import { NaturesDataInterface, PokemonNatures } from '../enums/pokemon-natures';
import { TypesEnum } from '../enums/pokemon-types';

export class Pokemon {
  name: string;
  types: TypesEnum[];
  level: number = 50;
  nature: NaturesDataInterface;
  moves: string[];

  // stats after calc
  finalHP: number;
  finalAtk: number;
  finalSpAtk: number;
  finalDef: number;
  finalSpDef: number;
  finalSpd: number;

  // base stats
  HP: number;
  Atk: number;
  SpAtk: number;
  Def: number;
  SpDef: number;
  Spe: number;

  // random
  ivHP: number;
  ivAtk: number;
  ivSpAtk: number;
  ivDef: number;
  ivSpDef: number;
  ivSpd: number;
  
  constructor(pokemon?: Partial<Pokemon>) {    
    if (!pokemon) { return; }
    
    merge(this, pokemon);

    this.nature  = this._initNature();
    this.ivHP    = this._initIV();
    this.ivAtk   = this._initIV();
    this.ivSpAtk = this._initIV();
    this.ivDef   = this._initIV();
    this.ivSpDef = this._initIV();
    this.ivSpd   = this._initIV();
  }

  fromApi(p: pokenotePokemon): Pokemon {
    return new Pokemon({
      name:  p.name,
      types: p.types.sort((t) => t.slot).map((t) => t.type.name.toUpperCase() as TypesEnum),
      moves: p.moves.map((m) => m.move.name),
      HP:    p.stats.find((s) => s.stat.name === 'hp')?.base_stat,
      Atk:   p.stats.find((s) => s.stat.name === 'attack')?.base_stat,
      Def:   p.stats.find((s) => s.stat.name === 'defense')?.base_stat,
      SpAtk: p.stats.find((s) => s.stat.name === 'special-attack')?.base_stat,
      SpDef: p.stats.find((s) => s.stat.name === 'special-defense')?.base_stat,
      Spe:   p.stats.find((s) => s.stat.name === 'speed')?.base_stat,
    });
  }

  private _initNature(): NaturesDataInterface {
    const randomNatureIndex = Math.ceil(Math.random() * 24);
    return NatureMap.get(PokemonNatures[randomNatureIndex]);
  }

  private _initIV(): number {
    return Math.ceil((Math.random() + 1) * 31);
  }
}
