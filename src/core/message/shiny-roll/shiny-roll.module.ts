import { Module } from "../../../models/module/module.model";
import { ShinyRollCore } from "./shiny-roll.core";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { s } from "../../..";
import { isShinyRollCmd } from "../../../models/battle-bot/commands";

export const ShinyRollModule: Module = {
  core: ShinyRollCore,
  condition: (params: MessageModuleParams) => isShinyRollCmd(params.message.command),
  beforeExec: (params: MessageModuleParams) => s.userIsRedeemingMap.delete(params.userstate.username),
};
