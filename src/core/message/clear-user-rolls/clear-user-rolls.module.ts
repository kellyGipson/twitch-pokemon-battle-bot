import { CommandsEnum } from "../../../models/battle-bot/commands.enum";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { IModule } from "../../../models/module/i-module";
import { ClearPlayerCore } from "./clear-user-rolls.core";

export const ClearUserRollsModule: IModule = {
  core: ClearPlayerCore,
  command: CommandsEnum.clearuserrolls,
  condition: (params: MessageModuleParams) => (
    params.userstate.username.toLowerCase() === 'poipkmn' ||
    params.userstate.username.toLowerCase() === 'nightbot'
  )
};
