import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { IModule } from "../../../models/module/i-module";
import { ToggleSpimMockCore } from "./toggle-spim-mock.core";

export const ToggleSpimMockModule: IModule = {
  core: ToggleSpimMockCore,
  command: '!togglemockspim',
  condition: (params: MessageModuleParams) => params.userstate.username === 'poipkmn'
};
