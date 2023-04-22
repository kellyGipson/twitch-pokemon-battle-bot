import { s } from "../../..";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { SpimMockCore } from "./spim-mock.core";

export const SpimMockModule = {
  core: SpimMockCore,
  condition: (params: MessageModuleParams) => params.userstate.username === 'spimtmot733' && s.mockSpimTrue,
};
