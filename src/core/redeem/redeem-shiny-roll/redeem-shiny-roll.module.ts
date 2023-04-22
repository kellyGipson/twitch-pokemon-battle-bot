import { Module } from "../../../models/module/module.model";
import { RedeemShinyRollCore } from "./redeem-shiny-roll.core";

export const RedeemShinyRollModule: Module = {
  core: RedeemShinyRollCore,
  condition: () => true,
};
