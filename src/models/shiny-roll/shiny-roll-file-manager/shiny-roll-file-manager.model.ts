import { readFileSync, writeFile } from 'fs';
import { ShinyRollFileModel, ShinyRollFileUserModel } from '../shiny-roll-file.model';
import { exit } from 'process';
import { isShiny } from '../../functions/is-shiny';

export class ShinyRollFileManager {
  readonly document = 'C:/Users/thoma/Desktop/Usr/Dev/twitch bots/chat-battle/frontend/data/';
  readonly shinyRollJson = 'shiny-roll.json';
  readonly shinyRollBackupJson = 'shiny-roll-backup.json';
  readonly shinyRollCountTxt = 'shiny-roll-count.txt';
  
  addShinyRoll(shinyRoll: ShinyRollFileUserModel): void {
    const tempFile = this.read();
    if (!tempFile) { console.log('ShinyRollFileManager.addShinyRoll(): NO tempFile'); return; }

    const file = new ShinyRollFileModel(tempFile);

    file.rolls.push(new ShinyRollFileUserModel(shinyRoll));
    file.totalCount = file?.rolls?.length + 3241;

    writeFile(`${this.document}${this.shinyRollJson}`, JSON.stringify(file), this._handleError);
    this._writeCount(file.totalCount);
  }

  backUpCountFile(): void {
    const tempFile = this.read();
    if (!tempFile) { console.log('ShinyRollFileManager.backUpCountFile(): NO tempFile'); return; }

    const file = new ShinyRollFileModel(tempFile);

    writeFile(`${this.document}${this.shinyRollBackupJson}`, JSON.stringify(file), this._handleError);
  }

  private _writeCount(count: number) {
    writeFile(`${this.document}${this.shinyRollCountTxt}`, `!shinyrolls: ${count.toString()}`, this._handleError);

    if (isShiny(count)) { exit(); }
  }

  read(): ShinyRollFileModel {
    let file: ShinyRollFileModel;

    const buffer = readFileSync(`${this.document}${this.shinyRollJson}`);

    let data: ShinyRollFileModel = null;
    try {
      throw new Error('something');
      data = JSON.parse(buffer.toString());
    } catch (err) {
      console.log('ShinyRollFileManager.read(), failed to read file');
    }
    file = new ShinyRollFileModel(data);

    return file;
  }

  private _handleError(err: NodeJS.ErrnoException) {
    console.log(err, 'Failed to write file in ShinyRollFileManager');
  }
}
