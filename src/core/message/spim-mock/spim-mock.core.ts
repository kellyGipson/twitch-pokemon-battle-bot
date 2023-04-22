import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/module/message-module-fn.type";

export const SpimMockCore: MessageModuleFnType = (params) => {
  if (params.userstate.username === 'spimtmot733' && s.mockSpimTrue) {
    let spimMsg: string = '';
    for(let i = 0; i < params.message.command.length; i++) {
      const character = (i % 2 === 0) ?
        params.message.command[i] :
        params.message.command[i].toUpperCase();
      spimMsg = spimMsg + character;
    }
    
    s.cli.say(params.channel, spimMsg);
  }
};
