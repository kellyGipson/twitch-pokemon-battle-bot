import { RedeemModuleFnType } from "../../../models/types/module.types";
import { s } from "../../..";

export const RedeemShinyRollCore: RedeemModuleFnType = (channel, username, rewardType, tags) => {
  if (rewardType === '27ff6a5e-d7c9-4561-8004-e398da603aa1') {
    let giveAnotherRoll: boolean = false;
    if (!s.userAlreadyRolledMap.get(username)) {
      giveAnotherRoll = true;
    }
    s.cli.say(channel, `${username} has unlocked an additional shiny roll.`);
    
    if (!giveAnotherRoll) {
      s.userAlreadyRolledMap.delete(username);
    }
    s.userIsRedeemingMap.set(username, true);
  }
};
