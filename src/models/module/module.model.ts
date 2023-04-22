import { BaseModuleParams } from "./base-module-params.model";
import { ModuleFnType } from "./module-fn.type";

export interface Module {
  core: ModuleFnType;
  condition: (params: BaseModuleParams) => boolean;
  beforeExec?: (params: BaseModuleParams) => void;
};
