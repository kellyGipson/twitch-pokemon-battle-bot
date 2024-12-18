import { CommandsEnum } from "../../../models/battle-bot/commands.enum";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { IModule } from "../../../models/module/i-module";
import { ClearStateCore } from "./clear-state.core";

export const ClearStateModule: IModule = {
  core: ClearStateCore,
  command: CommandsEnum.clearstate,
  condition: (params: MessageModuleParams) => (
    params.userstate.username.toLowerCase() === 'poipkmn' ||
    params.userstate.username.toLowerCase() === 'nightbot' ||
    params.userstate.username.toLowerCase() === 'streamelements'
  ),
};
