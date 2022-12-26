import { Client } from 'tmi.js';
import { BOT_AUTH } from './config/bot-auth';
import { BattleHandler } from './models/classes/battle-handler.model';
import { Message } from './models/classes/message.model';
import * as cmds from './models/functions/commands';
import { State } from './models/state/state';
import { INIT_NATURE_MAP, INIT_TYPE_CHART_MAP } from './models/functions/init_app';
import { LobbyHandler } from './models/classes/lobby-handler.model';
import { BATTLE_COMMANDS } from './models/messages/battleCommands.messages';
import { PokemonClient } from 'pokenode-ts';
import { Pokemon } from './models/classes/pokemon.model';

export const appState = new State();
export const TypeMap = INIT_TYPE_CHART_MAP();
export const NatureMap = INIT_NATURE_MAP();

const client = Client(BOT_AUTH);
const battleHandler = new BattleHandler(client);
const lobbyHandler = new LobbyHandler(client, battleHandler);

client.connect();

client.on('message', (channel, userstate, message, self) => {
  if (self || appState.isPauseCommands) { return; }

  if (!appState.channel) {
    appState.channel = channel;
  }

  const messageModel = new Message(message);
  const api = new PokemonClient();

  if (cmds.listBattleCommands(messageModel.command)) {
    appState.pauseCommands();
    BATTLE_COMMANDS.forEach((msg, idx) => {
      client.say(channel, msg);
    });
  }

  if (cmds.enterBattle(messageModel.command)) {
    lobbyHandler.enterBattle(channel, userstate?.username);
  }

  if (cmds.choosePokemon(messageModel.command)) {
    if (!messageModel.areParamsEmpty() || !appState.hasBothPlayers()) {
      api.getPokemonByName(
        messageModel.paramAtIndex(0).toLowerCase()
      ).then((p) => {
        const pokemon: Pokemon = new Pokemon().fromApi(p);
        appState.assignPokemonToPlayer(userstate.username, pokemon);
      }).catch((err) => {
        client.say(channel, `Error: Issue pulling data for Pokemon: "${messageModel.paramAtIndex(0)}".`);
      });
    }
  }

  if (cmds.attack(messageModel.command)) {
  }

  if (message === '!clearState') {
    appState.clear();
    client.say(channel, 'cleared.');
  }

});
