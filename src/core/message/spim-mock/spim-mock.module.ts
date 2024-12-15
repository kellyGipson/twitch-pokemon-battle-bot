import { s } from "../../..";
import { CommandsEnum } from "../../../models/battle-bot/commands.enum";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { SpimMockCore } from "./spim-mock.core";

export const SpimMockModule = {
  core: SpimMockCore,
  command: CommandsEnum.NO_COMMAND,
  condition: (params: MessageModuleParams) => params.userstate.username === 'spimtmot733' && s.mockSpimTrue,
};
