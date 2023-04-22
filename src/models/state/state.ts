import { INIT_TYPE_CHART_MAP, INIT_NATURE_MAP } from '../battle-bot/init_app';
import * as tmi from 'tmi.js';
import { BOT_AUTH } from '../../config/bot-auth';
import { BattleHandler } from '../battle-bot/battle-handler.model';
import { LobbyHandler } from '../battle-bot/lobby-handler.model';
import { Player } from '../battle-bot/player.model';
import { Pokemon } from '../battle-bot/pokemon.model';

export class State {
  readonly cli = tmi.Client(BOT_AUTH);
  readonly battleHandler = new BattleHandler(this.cli);
  readonly lobbyHandler = new LobbyHandler(this.cli, this.battleHandler);
  readonly TypeMap = INIT_TYPE_CHART_MAP();
  readonly NatureMap = INIT_NATURE_MAP();
  userAlreadyRolledMap = new Map<string, boolean>();
  subAlreadyRolledMap = new Map<string, boolean>();
  userIsRedeemingMap = new Map<string, boolean>();
  playerOne: Player = null;
  playerTwo: Player = null;
  winner: Player = null;
  channel: string = null;
  mockSpimTrue: boolean = false;
  
  private _isPauseCommands: boolean = false;
  get isPauseCommands() {
    return this._isPauseCommands;
  }

  constructor() {}

  findPlayerByUsername(username: string): Player {
    if (this.playerOne.username === username) return this.playerOne;
    if (this.playerTwo.username === username) return this.playerTwo;

    return undefined;
  }

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
    this.userAlreadyRolledMap = new Map<string, boolean>();
    this.subAlreadyRolledMap = new Map<string, boolean>();
    this.userIsRedeemingMap = new Map<string, boolean>();
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

  clearUsernameShinyroll(username: string): void {
    this.userAlreadyRolledMap.delete(username);
    this.subAlreadyRolledMap.delete(username);
    this.userIsRedeemingMap.delete(username);
  }
}
