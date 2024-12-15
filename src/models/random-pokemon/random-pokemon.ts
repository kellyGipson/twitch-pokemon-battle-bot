import { PokemonClient } from "pokenode-ts";
import { Pokemon } from "pokenode-ts";
import { numberBetween1andMax } from "../functions/generator-random-number";

export class RandomPokemonExeggutor {
  async exeggcute(): Promise<Pokemon | void> {
    let pokemon: Pokemon;
    const pokemonId = numberBetween1andMax(493);
    
    return new PokemonClient().getPokemonById(pokemonId);
  }
}