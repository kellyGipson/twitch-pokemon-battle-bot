import { IModule } from "../../models/module/i-module";
import { BackupShinyRollFileModule } from "./backup-shiny-roll-file/backup-shiny-roll-file.module";
import { ClearStateModule } from "./clear-state/clear-state.module";
import { ClearUserRollsModule } from "./clear-user-rolls/clear-user-rolls.module";
import { CombinedShinyRollModule } from "./combined-shiny-roll/combined-shiny-roll.module";
import { ShinyPhaseModule } from "./shiny-phase/shiny-phase.module";
import { SpimMockModule } from "./spim-mock/spim-mock.module";
import { ToggleSpimMockModule } from "./toggle-spim-mock/toggle-spim-mock.module";

export const MessageModules: IModule[] = [
  CombinedShinyRollModule,
  ToggleSpimMockModule,
  SpimMockModule,
  ClearStateModule,
  ClearUserRollsModule,
  ShinyPhaseModule,
  BackupShinyRollFileModule,
];
