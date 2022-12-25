import { Player } from "../classes/player.model";

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

    this.playerOne = new Player({ username });
    return true;
  }

  updatePlayerPokemon(pokemon) {

  }
}
