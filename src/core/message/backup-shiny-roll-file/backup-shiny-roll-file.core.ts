import { s } from "../../..";
import { MessageModuleFnType } from "../../../models/module/message-module-fn.type";
import { ShinyRollFileManager } from "../../../models/shiny-roll/shiny-roll-file-manager/shiny-roll-file-manager.model";

export const BackupShinyRollFileCore: MessageModuleFnType = (params) => {
  new ShinyRollFileManager().backUpCountFile();
  s.cli.say(params.channel, 'Backed up Shiny Rolls...');
};
