import { s } from "../..";
import { MessageModuleParams } from "../../models/module/message-module-params.model";
import { BaseAutoError } from "./base-auto-error";

export class MoreThanOneArgError extends BaseAutoError {
  static catch(params: MessageModuleParams): void {
    if (params?.message?.args?.length > 1) {
      s.cli.say(s.channel, `MoreThanOneArgError: More than one argument sent in the command.`);
    }
  }
}
