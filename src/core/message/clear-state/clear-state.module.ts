import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { Module } from "../../../models/module/module.model";
import { ClearStateCore } from "./clear-state.core";

export const ClearStateModule: Module = {
  core: ClearStateCore,
  condition: (params: MessageModuleParams) =>
    params.message.command.toLowerCase() === '!clearstate' &&
    (
      params.userstate.username.toLowerCase() === 'recursivepoi' ||
      params.userstate.username.toLowerCase() === 'nightbot'
    ),
};
