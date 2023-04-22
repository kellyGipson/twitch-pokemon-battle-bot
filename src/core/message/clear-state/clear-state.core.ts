import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/module/message-module-fn.type";

export const ClearStateCore: MessageModuleFnType = (params) => {
  s.clear();
  s.cli.say(params.channel, 'State Cleared. All Shiny Rolls unlocked.');
};
