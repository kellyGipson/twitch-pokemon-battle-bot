import { Player } from "../classes/player.model";
import { Pokemon } from "../classes/pokemon.model";

export class State {
  playerOne: Player = null;
  playerTwo: Player = null;
  winner: Player = null;
  channel: string = null;
  private _isPauseCommands: boolean = false;
  get isPauseCommands() {
    return this._isPauseCommands;
  }

  constructor() {}

  assignPokemonToPlayer(username: string, pokemon: Pokemon): void {
    if (this.playerOne?.username === username) {
      this.playerOne?.setPokemon(pokemon);
    }

    if (this.playerTwo?.username === username) {
      this.playerTwo?.setPokemon(pokemon);
    }
  }

  bothPlayersSelectedPokemon(): boolean {
    return this.playerOne.hasChosenPokemon() && this.playerTwo.hasChosenPokemon();
  }

  pauseCommands(): void {
    this._isPauseCommands = true;
    setTimeout(() => {
      this._isPauseCommands = false;
    }, 10000);
  }

  clear(): void {
    this.playerOne = null;
    this.playerTwo = null;
    this.winner = null;
  }

  hasBothPlayers(): boolean {
    return !!this.playerOne && !!this.playerTwo;
  }

  /**
   * @returns 'True' if the state was updated
   */
  attemptAssignP1(username: string): boolean {
    if (!!this.playerOne || this.playerTwo?.username === username) { return false; }

    this.playerOne = new Player({ username });
    return true;
  }

  /**
   * @returns 'True' if the state was updated
   */
  attemptAssignP2(username: string): boolean {
    if (!!this.playerTwo || this.playerOne?.username === username) { return false; }

    this.playerTwo = new Player({ username });
    return true;
  }
}
