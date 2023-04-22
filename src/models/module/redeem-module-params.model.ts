import { ChatUserstate } from "tmi.js";
import { BaseModuleParams } from "./base-module-params.model";

export class RedeemModuleParams extends BaseModuleParams {
  username: string;
  rewardType: string;
  tags: ChatUserstate;

  constructor(data: Partial<RedeemModuleParams>) {
    super(data);
  }
}