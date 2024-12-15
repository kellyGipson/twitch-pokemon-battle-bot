import { CommandsEnum } from "../../../models/battle-bot/commands.enum";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { IModule } from "../../../models/module/i-module";
import { BackupShinyRollFileCore } from "./backup-shiny-roll-file.core";

export const BackupShinyRollFileModule: IModule = {
  core: BackupShinyRollFileCore,
  command: CommandsEnum.backup,
  condition: (params: MessageModuleParams) => (
    params.userstate.username.toLowerCase() === 'poipkmn' ||
    params.userstate.username.toLowerCase() === 'nightbot' ||
    params.userstate.username.toLowerCase() === 'streamelements'
  ),
};
