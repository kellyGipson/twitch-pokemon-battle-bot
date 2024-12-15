import { shinyRollFn } from "../functions/shiny-roll";

export class PhaseExeggutor {
  private _lastShinyNumber: number = 0;
  private _count: number = 0;
  
  exeggcute(): number {
    while(this._lastShinyNumber !== 8192) {
      this._lastShinyNumber = shinyRollFn();
      this._count++;
    }

    return this._count;
  }
}
