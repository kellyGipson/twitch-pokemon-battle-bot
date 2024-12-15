import { s } from "../..";

export class CliError {
  constructor(message: string) {
    s.cli.say(s.channel, `Cli Error 🤔: ${message}`);
  }
}
