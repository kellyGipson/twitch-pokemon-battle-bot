import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/types/module.types";

export const ToggleSpimMockCore: MessageModuleFnType = (channel, userstate, message, self) => {
  if (userstate.username === 'recursivepoi' && message.command === '!togglemockspim') {
    s.mockSpimTrue = !s.mockSpimTrue;
    s.cli.say(channel, s.mockSpimTrue ? 'Now mocking Spim' : 'No longer mocking Spim');
  }
};
