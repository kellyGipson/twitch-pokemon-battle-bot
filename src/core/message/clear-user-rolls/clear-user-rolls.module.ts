import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { Module } from "../../../models/module/module.model";
import { ClearPlayerCore } from "./clear-user-rolls.core";

export const ClearUserRollsModule: Module = {
  core: ClearPlayerCore,
  condition: (params: MessageModuleParams) =>
    params.message.command.toLowerCase() === '!clearuserrolls' &&
    (
      params.userstate.username.toLowerCase() === 'recursivepoi' ||
      params.userstate.username.toLowerCase() === 'nightbot'
    )
};
