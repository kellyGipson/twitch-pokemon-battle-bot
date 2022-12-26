import { merge } from 'lodash';
import { Pokemon } from "./pokemon.model";

export class Player {
  username: string;
  pokemonChosen: Pokemon;
  
  constructor(player: Partial<Player>) {
    if (!player?.username) { return; }
    
    merge(this, player);
  }

  setPokemon(pokemon: Partial<Pokemon>): void {
    if (!this.pokemonChosen) {
      this.pokemonChosen = new Pokemon(pokemon);
    }
  }

  hasChosenPokemon(): boolean {
    return !!this.pokemonChosen;
  }
}
