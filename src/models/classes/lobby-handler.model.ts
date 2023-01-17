import { Client } from 'tmi.js';
import { s } from '../..';
import { BattleHandler } from './battle-handler.model';

export class LobbyHandler {
  private _client: Client;
  private _battleHandler: BattleHandler;
  
  constructor(
    client: Client,
    battleHandler: BattleHandler
  ) {
    this._client = client;
    this._battleHandler = battleHandler;
  }

  async enterBattle(channel: string, username: string): Promise<void> {
    if (s.attemptAssignP1(username)) {
      await this._client.say(channel,
        `${username} has entered the battle as Player 1. 20 seconds remaining for Player 2 to join.`
      ).then((_) => {
        this._beginJoinTimer(channel);
      });
      return;
    }

    if (s.attemptAssignP2(username)) {
      await this._client.say(channel,
        `${username} has entered the battle as Player 2. Beginning battle.`
      ).then((_) => {
        this._battleHandler.startBattle();
      });
      return;
    }
  }

  private _beginJoinTimer(channel: string): void {
    setTimeout(() => {
      if (!s.playerTwo) {
        this._cancelBattle(channel);
      }
    }, 20000)
  }

  private async _cancelBattle(channel: string): Promise<void> {
    s.clear();
    this._client.say(channel, `Time's up! No Player Two.`);
  }
}
