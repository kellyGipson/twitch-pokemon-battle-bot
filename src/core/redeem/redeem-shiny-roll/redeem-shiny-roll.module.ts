import { CommandsEnum } from "../../../models/battle-bot/commands.enum";
import { IModule } from "../../../models/module/i-module";
import { RedeemModuleParams } from "../../../models/module/redeem-module-params.model";
import { RedeemShinyRollCore } from "./redeem-shiny-roll.core";

export const RedeemShinyRollModule: IModule = {
  core: RedeemShinyRollCore,
  command: CommandsEnum.NO_COMMAND,
  condition: (params: RedeemModuleParams) => params.rewardType === '27ff6a5e-d7c9-4561-8004-e398da603aa1',
};
