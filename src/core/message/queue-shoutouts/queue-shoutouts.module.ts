import { CommandsEnum } from "../../../models/battle-bot/commands.enum";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { IModule } from "../../../models/module/i-module";
import { QueueShoutoutsCore } from "./queue-shoutouts.core";

export const QueueShoutoutsModule: IModule = {
  core: QueueShoutoutsCore,
  command: CommandsEnum.shoutouts,
  condition: (params: MessageModuleParams) => (
    params.userstate.username.toLowerCase() === 'poipkmn' || params.userstate.mod
  ),
};
