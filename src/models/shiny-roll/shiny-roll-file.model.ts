import { assign } from "lodash";
import { RollTypesEnum } from "./roll-types.model";

export class ShinyRollFileModel {
  totalCount: number;
  rolls: ShinyRollFileUserModel[];

  constructor(data: Partial<ShinyRollFileModel>) {    
    assign(this, data);
  }
}

export class ShinyRollFileUserModel {
  user: string;
  numberRolled: number;
  rollType: RollTypesEnum = RollTypesEnum.shinyroll;

  constructor(data: Partial<ShinyRollFileUserModel>) {
    assign(this, data);
  }
}
