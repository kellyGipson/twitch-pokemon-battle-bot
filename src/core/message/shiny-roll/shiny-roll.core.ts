import { s } from "../../..";
import { shinyRoll } from "../../../models/functions/shiny-roll";
import { MessageModuleFnType } from "../../../models/module/message-module-fn.type";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { RollTypesEnum } from "../../../models/shiny-roll/roll-types.model";

export const ShinyRollCore: MessageModuleFnType = (params: MessageModuleParams) => {
  if (s.userIsRedeemingMap.get(params.userstate.username)) { return; }
  
  if (!!s.userAlreadyRolledMap.get(params.userstate.username)) {
    s.cli.say(params.channel, `${params.userstate.username} has already rolled within the hour.`);
    return;
  }

  s.userAlreadyRolledMap.set(params.userstate.username, true);

  shinyRoll(params.channel, params.userstate, RollTypesEnum.shinyroll);
};
