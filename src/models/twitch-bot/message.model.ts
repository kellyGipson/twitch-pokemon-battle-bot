import { head, merge } from 'lodash';

export class Message {
  private _command: string;
  private _args: string[];
  private _originalMessage: string;
  
  constructor(message: string) {
    merge(this, this._parseMessage(message.toLowerCase()));
  }

  areParamsEmpty(): boolean {
    return this.args.length === 0;
  }

  get originalMessage(): string {
    return this._originalMessage;
  }

  get command(): string {
    return this._command;
  }
  
  get args(): string[] {
    return this._args;
  }

  paramAtIndex(index: number): string {
    if (this._args.length === 0 || !this._args.find((s, idx) => idx === index)) {
      return '';
    }
    return this._args.find((s, idx) => idx === index);
  }

  private _parseMessage(message: string): MessageInterface {
    if (!message) { return; }

    return {
      _command: head(message.split(' ')),
      _params: message.split(' ').filter((s, idx) => idx > 0),
      _originalMessage: message,
    };
  }
}

interface MessageInterface {
  _command: string;
  _params: string[];
  _originalMessage: string;
}
{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}