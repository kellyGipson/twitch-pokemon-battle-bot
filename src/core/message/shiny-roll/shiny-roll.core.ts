import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/types/module.types";
import * as cmds from '../../../models/functions/commands';

export const ShinyRollCore: MessageModuleFnType = (channel, userstate, message, self) => {
  s.userIsRedeemingMap.delete(userstate.username);

  if (cmds.shinyRoll(message.command)) {
    if (s.userIsRedeemingMap.get(userstate.username)) { return; }
    
    if (!!s.userAlreadyRolledMap.get(userstate.username)) {
      s.cli.say(channel, `${userstate.username} has already rolled today.`);
      return;
    }

    s.userAlreadyRolledMap.set(userstate.username, true);

    const randomShinyResult = Math.floor(Math.random() * (8192 - 1 + 1));
    
    if (randomShinyResult === 8192) {
      s.cli.say(channel, `${userstate['display-name']} rolled ${randomShinyResult}! 🎉🎉🎉`);
      return;
    }
    if (randomShinyResult === 4096) {
      s.cli.say(channel, `${userstate['display-name']} rolled ${randomShinyResult}! 🎉🎉🎉`);
      return;
    }
    s.cli.say(channel, `${userstate['display-name']} rolled ${randomShinyResult}.`);
  }
};
