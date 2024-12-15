import { s } from "../../..";
import { Duration } from "../../../shared/duration";

export class ShinyRollPrimeTimeTimer {
  private timeoutRef: NodeJS.Timeout;
  
  public run(): void {
    console.log("ShinyRollPrimeTimeTimer::run");
    if (!s.messageRegistry?.hasAtLeastDefault()) {
      if (this.timeoutRef) {
        console.log("ShinyRollPrimeTimeTimer::unref timeout");
        this.timeoutRef.unref();
      }
      setTimeout(this.run.bind(this), Duration.TWO_MINS);
      return;
    }

    this.intervalFn();
    this.timeoutRef = setTimeout(() => {
      setInterval(this.intervalFn.bind(this), Duration.HALF_HOUR);
    }, Duration.ONE_SEC);
  }
  
  private intervalFn(): void {
    console.log("ShinyRollPrimeTimeTimer::intervalFn");
    console.log(s.messageRegistry.messagesCount);
    if (s.messageRegistry.hasAtLeastDefault()) {
      s.isShinyRollPrimeTime = true;
      setTimeout(() => {
        s.isShinyRollPrimeTime = false;
      }, Duration.TWO_MINS);
    }
  }
}
