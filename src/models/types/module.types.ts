import { ChatUserstate } from "tmi.js";
import { Message } from "../classes/message.model";

export type RedeemModuleFnType = (
  channel: string,
  username: string,
  rewardType: string,
  tags: ChatUserstate
) => void;

export type MessageModuleFnType = (
  channel: string,
  userstate:
  ChatUserstate,
  message: Message,
  self: boolean
) => void;