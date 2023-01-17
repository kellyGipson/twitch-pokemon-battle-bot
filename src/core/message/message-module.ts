import { ShinyRollCore } from "./shiny-roll/shiny-roll.core";
import { SpimMockCore } from "./spim-mock/spim-mock.core";
import { ToggleSpimMockCore } from "./toggle-spim-mock/toggle-spim-mock.core";
import { MessageModuleFnType } from "../../models/types/module.types";

export const MessageModule: MessageModuleFnType[] = [
  ShinyRollCore,
  ToggleSpimMockCore,
  SpimMockCore,
];
