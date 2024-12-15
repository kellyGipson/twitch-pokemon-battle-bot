import { MessageModuleParams } from "../../models/module/message-module-params.model";
import { RedeemModuleParams } from "../../models/module/redeem-module-params.model";

export class BaseAutoError {
  static catch(params: MessageModuleParams | RedeemModuleParams): void {}
}
