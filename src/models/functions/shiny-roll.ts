import { Userstate } from "tmi.js";
import { s } from "../..";
import { RollTypesEnum } from "../shiny-roll/roll-types.model";
import { ShinyRollFileManager } from "../shiny-roll/shiny-roll-filter-manager/shiny-roll-file-manager.model";
import { ShinyRollFileUserModel } from "../shiny-roll/shiny-roll-file.model";

export const shinyRoll = (channel: string, userstate: Userstate, rollType: RollTypesEnum): void => {
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

  new ShinyRollFileManager().addShinyRoll(new ShinyRollFileUserModel({
    user: userstate["display-name"],
    numberRolled: randomShinyResult,
    rollType,
  }));
}
