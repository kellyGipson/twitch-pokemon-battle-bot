import { Module } from "../../models/module/module.model";
import { ClearStateModule } from "./clear-state/clear-state.module";
import { ClearUserRollsModule } from "./clear-user-rolls/clear-user-rolls.module";
import { ShinyRollModule } from "./shiny-roll/shiny-roll.module";
import { SpimMockModule } from "./spim-mock/spim-mock.module";
import { SubRollModule } from "./sub-roll/sub-roll.module";
import { ToggleSpimMockModule } from "./toggle-spim-mock/toggle-spim-mock.module";

export const MessageModule: Module[] = [
  ShinyRollModule,
  SubRollModule,
  ToggleSpimMockModule,
  SpimMockModule,
  ClearStateModule,
  ClearUserRollsModule,
];
