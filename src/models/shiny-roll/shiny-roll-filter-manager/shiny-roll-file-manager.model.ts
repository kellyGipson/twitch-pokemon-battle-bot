import { readFile, readFileSync, writeFile } from 'fs';
import { ShinyRollFileModel, ShinyRollFileUserModel } from '../shiny-roll-file.model';

export class ShinyRollFileManager {
  readonly document = 'C:/Users/thoma/Desktop/Usr/Dev/twitch bots/chat-battle/data/';
  readonly shinyRollTxt = 'shiny-roll.json';
  readonly shinyRollCountTxt = 'shiny-roll-count.txt';
  
  addShinyRoll(shinyRoll: ShinyRollFileUserModel): void {
    const tempFile = this.read();
    if (!tempFile) { console.log('!tempFile'); return; }

    const file = new ShinyRollFileModel(tempFile);

    file.rolls.push(new ShinyRollFileUserModel(shinyRoll));
    file.totalCount = file?.rolls?.length;

    // console.log(file);
    
    writeFile(`${this.document}${this.shinyRollTxt}`, JSON.stringify(file), this._handleError);
    this._writeCount(file.totalCount);
  }

  private _writeCount(count: number) {
    writeFile(`${this.document}${this.shinyRollCountTxt}`, `Shiny Rolls: ${count.toString()}`, this._handleError);
  }

  read(): ShinyRollFileModel {
    let file: ShinyRollFileModel;

    const buffer = readFileSync(`${this.document}${this.shinyRollTxt}`)

    const data: ShinyRollFileModel = JSON.parse(buffer.toString());
    file = new ShinyRollFileModel(data);

    return file;
  }

  private _handleError(err: NodeJS.ErrnoException) {
    if (err) { console.log(err); }
  }
}
