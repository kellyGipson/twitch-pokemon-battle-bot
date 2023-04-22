import { Module } from "../../models/module/module.model";
import { RedeemShinyRollModule } from "./redeem-shiny-roll/redeem-shiny-roll.module";

export const RedeemModule: Module[] = [
  RedeemShinyRollModule,
];
