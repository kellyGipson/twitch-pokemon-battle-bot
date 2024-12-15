import { BaseAutoError } from "../../shared/errors/base-auto-error";
import { BaseModuleParams } from "./base-module-params.model";
import { ModuleFnType } from "./module-fn.type";

export interface IModule {
  core: ModuleFnType;
  command: string;
  condition?: (params: BaseModuleParams) => boolean;
  beforeExec?: (params: BaseModuleParams) => void;
  errorHandlers?: typeof BaseAutoError[];
};
