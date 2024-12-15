import { s } from "../..";
import { MessageModuleParams } from "../../models/module/message-module-params.model";
import { BaseAutoError } from "./base-auto-error";

export class NoArgsError extends BaseAutoError {
  static catch(params: MessageModuleParams): void {
    if (!params?.message?.args?.length) {
      s.cli.say(s.channel, `NoArgsError: Arguments were required in the command but were not provided.`);
    }
  }
}
