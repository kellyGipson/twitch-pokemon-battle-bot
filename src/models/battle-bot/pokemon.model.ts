import { keysIn, merge } from 'lodash';
import { Pokemon as pokenotePokemon } from 'pokenode-ts';
import { s } from '../..';
import { TypesEnum } from './pokemon-types';
import { NaturesDataInterface, PokemonNatures } from './pokemon-natures';
import { IStats, emptyStats } from './pokemon-stats';

export interface IPokemon {
  name: string;
  types: TypesEnum[];
  level?: number;
  nature?: NaturesDataInterface;
  moves: string[];
  ability: string;

  baseStats: IStats;
  ivs?: IStats;
  evs?: IStats;
  calculatedStats?: IStats;
}

export class Pokemon {
  name: string;
  types: TypesEnum[];
  level: number = 50;
  nature: NaturesDataInterface;
  moves: string[];
  ability: string;

  baseStats: IStats = emptyStats;
  ivs: IStats = emptyStats;
  evs: IStats = emptyStats;
  calculatedStats: IStats = emptyStats;
  
  constructor(pokemon?: IPokemon) {    
    if (!pokemon) { return; }
    
    merge(this, pokemon);

    this.nature  = this._initNature();
    keysIn(this.ivs).forEach((key) => this.ivs[key] = this._initIV());
    console.log(this.ivs);
  }

  fromApi(p: pokenotePokemon): Pokemon {
    return new Pokemon({
      name:  p.name,
      types: p.types.sort((t) => t.slot).map((t) => t.type.name.toUpperCase() as TypesEnum),
      moves: p.moves.map((m) => m.move.name),
      baseStats: {
        HP:    p.stats.find((s) => s.stat.name === 'hp')?.base_stat,
        Atk:   p.stats.find((s) => s.stat.name === 'attack')?.base_stat,
        Def:   p.stats.find((s) => s.stat.name === 'defense')?.base_stat,
        SpAtk: p.stats.find((s) => s.stat.name === 'special-attack')?.base_stat,
        SpDef: p.stats.find((s) => s.stat.name === 'special-defense')?.base_stat,
        Spe:   p.stats.find((s) => s.stat.name === 'speed')?.base_stat,
      },
      ability: p.abilities.find((a) => a.is_hidden).ability.name,
    });
  }

  private _initNature(): NaturesDataInterface {
    const randomNatureIndex = Math.ceil(Math.random() * 24);
    return s.NatureMap.get(PokemonNatures[randomNatureIndex]);
  }

  private _initIV(): number {
    return Math.ceil((Math.random() + 1) * 31);
  }
}
