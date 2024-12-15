import { State } from './models/state/state';
import { MessageModules } from './core/message/message-module';
import { RedeemModule } from './core/redeem/redeem-module';
import { Message } from './models/twitch-bot/message.model';
import { RedeemModuleParams } from './models/module/redeem-module-params.model';
import { MessageModuleParams } from './models/module/message-module-params.model';
import { CommandsEnum } from './models/battle-bot/commands.enum';
import { IModule } from './models/module/i-module';
import { ShinyRollPrimeTimeTimer } from './models/shiny-roll/prime-time/prime-time-timer';

console.log('Starting up the twitch bot');

export const s = new State();
new ShinyRollPrimeTimeTimer().run();

s.cli.connect();

s.cli.on('redeem', (channel, username, rewardType, tags) => {
  RedeemModule.forEach((module) => {
    const redeemParams = new RedeemModuleParams({ channel, username, rewardType, tags });
    
    if (module.condition(redeemParams)) {
      (module?.errorHandlers || []).forEach((errHandler) => errHandler.catch(redeemParams));
      module.core(redeemParams);
    }
  });
});

s.cli.on('message', (channel, userstate, message, self) => {
  if (self) { return; }

  const messageModel = new Message(message);
  s.messageRegistry.register(messageModel);
  const messageParams = new MessageModuleParams({ channel, userstate, message: messageModel, self });
  
  MessageModules.forEach((module) => {
    if (commandCheck(module, messageModel) && moduleCheck(module, messageParams)) {
      (module?.errorHandlers || []).forEach((errHandler) => errHandler.catch(messageParams));
      module.core(messageParams);
    }
  });
});

const moduleCheck = (module: IModule, messageParams: MessageModuleParams) => {
  if (!module.condition) { return true; }

  return module.condition(messageParams);
};

const commandCheck = (module: IModule, message: Message) => moduleNoCommand(module) || commandMatches(module, message);

const commandMatches = (module: IModule, message: Message) => module.command === message.command.toLowerCase();

const moduleNoCommand = (module: IModule) => module.command === CommandsEnum.NO_COMMAND;
