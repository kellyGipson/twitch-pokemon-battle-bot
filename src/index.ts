import { Message } from './models/classes/message.model';
import { State } from './models/state/state';
import { MessageModule } from './core/message/message-module';
import { RedeemModule } from './core/redeem/redeem-module';

export const s = new State();

s.cli.connect();

s.cli.on('redeem', (channel, username, rewardType, tags) => {
  RedeemModule.forEach((moduleFn) => moduleFn(channel, username, rewardType, tags));
});

s.cli.on('message', (channel, userstate, message, self) => {    
  if (self || s.isPauseCommands) { return; }
  const messageModel = new Message(message);

  MessageModule.forEach((module) => module(channel, userstate, messageModel, self));

  // const api = new Pokemons.Client();

  // if (cmds.listBattleCommands(messageModel.command)) {
  //   appState.pauseCommands();
  //   BATTLE_COMMANDS.forEach((msg, idx) => {
  //     s.cli.say(channel, msg);
  //   });
  // }

  // if (cmds.enterBattle(messageModel.command)) {
  //   lobbyHandler.enterBattle(channel, userstate?.username);
  // }

  // if (cmds.choosePokemon(messageModel.command)) {
  //   if (!messageModel.areParamsEmpty()) {// add back appState.hasBothPlayers()
  //     api.getPokemonByName(
  //       messageModel.paramAtIndex(0).toLowerCase()
  //     ).then((p) => {
  //     const pokemon: Pokemon = new Pokemon().fromApi(p);
  //     appState.assignPokemonToPlayer(userstate.username, pokemon);
  //     }).catch((err) => {
  //       s.cli.say(channel, `Error: Issue pulling data for Pokemon: '${messageModel.paramAtIndex(0)}'. Please try again.`);
  //     });
  //   }
  // }

  // if (cmds.attack(messageModel.command)) {
  // }

  // if (message === '!clearState') {
  //   appState.clear();
  //   s.cli.say(channel, 'cleared.');
  // }
});
