import { assign } from "lodash";

export class BaseModuleParams {
  channel: string;

  constructor(data: Partial<BaseModuleParams>) {
    assign(this, data);
  }
}
