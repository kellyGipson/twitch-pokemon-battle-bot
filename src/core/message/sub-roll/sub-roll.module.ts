import { s } from "../../..";
import { isSubRollCmd } from "../../../models/battle-bot/commands";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { Module } from "../../../models/module/module.model";
import { SubRollCore } from "./sub-roll.core";

export const SubRollModule: Module = {
  core: SubRollCore,
  condition: (params: MessageModuleParams) => isSubRollCmd(params.message.command) && params.userstate.subscriber,
  beforeExec: (params: MessageModuleParams) => s.userIsRedeemingMap.delete(params.userstate.username),
};
