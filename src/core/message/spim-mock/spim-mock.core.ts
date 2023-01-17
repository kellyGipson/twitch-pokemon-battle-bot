import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/types/module.types";

export const SpimMockCore: MessageModuleFnType = (channel, userstate, message, self) => {
  if (userstate.username === 'spimtmot733' && s.mockSpimTrue) {
    let spimMsg: string = '';
    for(let i = 0; i < message.command.length; i++) {
      const character = (i % 2 === 0) ?
        message.command[i] :
        message.command[i].toUpperCase();
      spimMsg = spimMsg + character;
    }
    
    s.cli.say(channel, spimMsg);
  }
};
