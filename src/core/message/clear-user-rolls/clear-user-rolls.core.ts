import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/module/message-module-fn.type";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";

export const ClearPlayerCore: MessageModuleFnType = (params: MessageModuleParams) => {
  if (!params.message.paramAtIndex(1)) { return; }

  s.clearUsernameShinyroll(params.message.paramAtIndex(1).toLowerCase());
  s.cli.say(params.channel, `Shiny Rolls unlocked for user ${params.message.paramAtIndex(1)}.`);
};
