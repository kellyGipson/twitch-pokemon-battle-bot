import { Client } from 'tmi.js';
import * as PokeApi from 'pokeapi-typescript';
import { BOT_AUTH } from './config/bot-auth';
import { BattleHandler } from './models/classes/battle-handler.model';
import { Message } from './models/classes/message.model';
import * as cmds from './models/functions/commands';
import { State } from './models/state/state';
import { INIT_NATURE_MAP, INIT_TYPE_CHART_MAP } from './models/functions/init_app';
import { LobbyHandler } from './models/classes/lobby-handler.model';
import { PokemonNatures } from './models/enums/pokemon-natures';
import { BATTLE_COMMANDS } from './models/messages/battleCommands.messages';
import { head } from 'lodash';

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

  // const randomNatureIndex = Math.ceil(Math.random() * 24);
  // console.log(randomNatureIndex, PokemonNatures[randomNatureIndex], NatureMap.get(PokemonNatures[randomNatureIndex]));

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
  }

  if (cmds.attack(messageModel.command)) {
  }

  if (message === '!clearState') {
    appState.clear();
    client.say(channel, 'cleared. bitch.');
  }

});
