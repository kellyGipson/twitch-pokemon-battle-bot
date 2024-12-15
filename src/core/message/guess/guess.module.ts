import { CommandsEnum } from "../../../models/battle-bot/commands.enum";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { IModule } from "../../../models/module/i-module";
import { NoArgsError } from "../../../shared/errors/no-args-error";
import { MoreThanOneArgError } from "../../../shared/errors/too-many-args-error";
import { GuessShinyCore } from "./guess.core";

export const GuessShinyModule: IModule = {
  core: GuessShinyCore,
  command: CommandsEnum.shoutouts,
  condition: (params: MessageModuleParams) => true,
  errorHandlers: [
    MoreThanOneArgError,
    NoArgsError,
  ],
};
