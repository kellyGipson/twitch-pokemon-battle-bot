import { merge } from 'lodash';
import { Pokemon } from "./pokemon.model";

export class Player {
  username: string;
  pokemonChosen: Pokemon;
  
  constructor(player: Partial<Player>) {
    if (!player?.username) { return; }
    
    merge(this, player);
  }

  choosePokemon(pokemon: Pokemon): void {
    if (!pokemon) { return; }
    
    this.pokemonChosen = pokemon;
  }
}
