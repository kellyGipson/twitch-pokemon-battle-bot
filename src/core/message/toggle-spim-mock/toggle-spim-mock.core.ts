import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/module/message-module-fn.type";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";

export const ToggleSpimMockCore: MessageModuleFnType = (params: MessageModuleParams) => {
  s.mockSpimTrue = !s.mockSpimTrue;
  s.cli.say(params.channel, s.mockSpimTrue ? 'Now mocking Spim' : 'No longer mocking Spim');
};
