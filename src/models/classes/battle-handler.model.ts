import { Client } from "tmi.js";
import { appState } from "../..";

export class BattleHandler {
  private _client: Client;
  
  constructor(client: Client) {
    this._client = client;
  }

  async startBattle(): Promise<void> {
    await this._client.say(appState.channel, "Please enter the name of the Pokemon you'd like to use with '!choose'.");
  }
}
