import { Puzzle1 } from "./puzzle1";

export class Puzzle2 extends Puzzle1 {

  parseGameRecordMinPower(gameRecord: string): number {
    const maxBlue = this.parseGameRecordMaxBlue(gameRecord);
    const maxRed = this.parseGameRecordMaxRed(gameRecord);
    const maxGreen = this.parseGameRecordMaxGreen(gameRecord);
    return maxBlue * maxRed * maxGreen;
  }
}
