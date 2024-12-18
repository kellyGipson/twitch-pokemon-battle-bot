import { s } from "../../..";
import { RedeemModuleFnType } from "../../../models/module/redeem-module-fn.type";
import { RedeemModuleParams } from "../../../models/module/redeem-module-params.model";

export const RedeemShinyRollCore: RedeemModuleFnType = (params: RedeemModuleParams) => {
  let giveAnotherRoll: boolean = false;
  if (!s.userAlreadyRolledMap.get(params.username)) {
    giveAnotherRoll = true;
  }
  s.cli.say(params.channel, `${params.username} has unlocked an additional shiny roll.`);
  
  if (!giveAnotherRoll) {
    s.clearUsernameShinyroll(params.username);
  }
  s.userIsRedeemingMap.set(params.username, true);
};
