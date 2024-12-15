import { head } from "lodash";
import { s } from "../../..";
import { MessageModuleParams } from "../../../models/module/message-module-params.model";
import { NoArgsError } from "../../../shared/errors/no-args-error";
import { MoreThanOneArgError } from "../../../shared/errors/too-many-args-error";
import { numberFromString } from "../../../utils/operators";

export function GuessShinyCore(params: MessageModuleParams) {
  MoreThanOneArgError.catch(params);
  NoArgsError.catch(params);

  const guess: number = numberFromString(head(params.message.args));
  s.cli.say(s.channel, `${params.userstate['display-name']} guessed ${guess}`);
};
