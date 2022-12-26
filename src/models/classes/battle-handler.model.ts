import { Client } from "tmi.js";
import { appState } from "../..";
import { CommandsEnum } from "../enums/commands.enum";

export class BattleHandler {
  private _client: Client;
  
  constructor(client: Client) {
    this._client = client;
  }

  async startBattle(): Promise<void> {
    await this._client.say(appState.channel,
      `Please enter the name of the Pokemon you'd like to use with '${CommandsEnum.choosePokemon}'.`
    );
  }
}
