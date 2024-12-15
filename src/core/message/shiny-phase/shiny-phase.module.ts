import { CommandsEnum } from "../../../models/battle-bot/commands.enum";
import { IModule } from "../../../models/module/i-module";
import { ShinyPhaseCore } from "./shiny-phase.core";

export const ShinyPhaseModule: IModule = {
  core: ShinyPhaseCore,
  command: CommandsEnum.phase,
};
