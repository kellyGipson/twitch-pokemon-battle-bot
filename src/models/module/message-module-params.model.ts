import { ChatUserstate } from "tmi.js";
import { BaseModuleParams } from "./base-module-params.model";
import { Message } from "../twitch-bot/message.model";

export class MessageModuleParams extends BaseModuleParams {
  userstate: ChatUserstate;
  message: Message;
  self: boolean;

  constructor(data: Partial<MessageModuleParams>) {
    super(data);
  }
}