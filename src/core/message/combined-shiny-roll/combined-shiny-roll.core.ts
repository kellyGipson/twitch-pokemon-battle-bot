import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/module/message-module-fn.type";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { ShinyRollRedeemer } from "../../../models/shiny-roll/shiny-roll-redeemer";

export const CombinedShinyRollCore: MessageModuleFnType = (params: MessageModuleParams) => {
  s.cli.say(params.channel, new ShinyRollRedeemer(params.userstate).roll());
  s.userAlreadyRolledMap.set(params.userstate.username, true);
};
