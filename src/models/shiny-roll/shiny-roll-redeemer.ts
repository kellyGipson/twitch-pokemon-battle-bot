import { Userstate } from "tmi.js";
import { s } from "../..";
import { shinyRollFn } from "../functions/shiny-roll";
import { isShiny } from "../functions/is-shiny";
import { combineStringsWithAnd } from "../../utils/operators";

export class ShinyRollRedeemer {
  userstate: Userstate;
  
  constructor(userstate: Userstate) {
    this.userstate = userstate;
  }

  roll(): string {
    if (!!s.userAlreadyRolledMap.get(this.userstate.username)) {
      return `${this.userstate['display-name']} has already rolled within the hour.`;
    }

    console.log('ShinyRollRedeemer::s.isShinyRollPrimeTime', s.isShinyRollPrimeTime);
    const rolls = new Array((+this.userstate.subscriber + 1) * (+s.isShinyRollPrimeTime + 1))
      .fill(1)
      .map(shinyRollFn)
      .sort()
      .map((roll) => (isShiny(roll)) ? `${roll}! 🎉🎉🎉` : `${roll}`);

    console.log(rolls);
    return `${this.userstate['display-name']} rolled ${combineStringsWithAnd(...rolls)}`;
  }
}
