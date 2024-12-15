import { Userstate } from "tmi.js";
import { s } from "../..";
import { RollTypesEnum } from "../shiny-roll/roll-types.model";
import { numberBetween1andMax } from "./generator-random-number";
import { isShiny } from "./is-shiny";

export const shinyRollFn = () => numberBetween1andMax(8192);

export const shinyRoll = (channel: string, userstate: Userstate, rollType: RollTypesEnum): void => {
  const randomShinyResult = shinyRollFn();
  const message = isShiny(randomShinyResult) ?
    `${userstate['display-name']} rolled ${randomShinyResult}! 🎉🎉🎉` :
    `${userstate['display-name']} rolled ${randomShinyResult}`;

  s.cli.say(channel, message);
}
