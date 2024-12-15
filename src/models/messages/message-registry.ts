import { Duration } from "../../shared/duration";
import { Message } from "../twitch-bot/message.model";

export class MessageRegistry {
  private messages: Message[] = [];

  constructor() {
    setInterval(this.dumpMessages.bind(this), Duration.ONE_HOUR);
  }

  public register(msg: Message): number {
    return this.messages.push(msg);
  }

  public hasAtLeastDefault(): boolean {
    return this.hasAtLeast(5);
  }

  public hasAtLeast(msgAmount: number): boolean {
    return this.messagesCount >= msgAmount;
  }

  get messagesCount(): number {
    return this.messages.length;
  }

  private dumpMessages(): void {
    this.messages = [];
  }
}
