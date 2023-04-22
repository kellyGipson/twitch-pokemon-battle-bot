import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { ToggleSpimMockCore } from "./toggle-spim-mock.core";

export const ToggleSpimMockModule = {
  core: ToggleSpimMockCore,
  condition: (params: MessageModuleParams) =>
    params.userstate.username === 'recursivepoi' &&
    params.message.command === '!togglemockspim',
};
