import { head, merge } from 'lodash';

export class Message {
  private _command: string;
  private _params: string[]
  
  constructor(message: string) {
    merge(this, this._parseMessage(message.toLowerCase()));
  }

  areParamsEmpty(): boolean {
    return this.params.length === 0;
  }

  get command(): string {
    return this._command;
  }
  
  get params(): string[] {
    return this._params;
  }

  paramAtIndex(index: number): string {
    if (this._params.length === 0 || !this._params.find((s, idx) => idx === index)) {
      return '';
    }
    return this._params.find((s, idx) => idx === index);
  }

  private _parseMessage(message: string): MessageInterface {
    if (!message) { return; }

    return {
      _command: head(message.split(' ')),
      _params: message.split(' ').filter((s, idx) => idx > 0)
    };
  }
}

interface MessageInterface {
  _command: string;
  _params: string[];
}
