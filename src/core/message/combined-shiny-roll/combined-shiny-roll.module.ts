import { IModule } from "../../../models/module/i-module";
import { CombinedShinyRollCore } from "./combined-shiny-roll.core";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { s } from "../../..";
import { CommandsEnum } from "../../../models/battle-bot/commands.enum";

export const CombinedShinyRollModule: IModule = {
  core: CombinedShinyRollCore,
  command: CommandsEnum.shinyroll,
  beforeExec: (params: MessageModuleParams) => {
    s.userIsRedeemingMap.delete(params.userstate.username)
  },
};
