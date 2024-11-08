import { Puzzle1 } from "./puzzle1";

export class Puzzle2 extends Puzzle1 {

  seedRanges: any[] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this._parseSeedRanges();
  }

  protected _parseSeedRanges() {
    for (let r = 0; r < this.seeds.length; r += 2) {
      this.seedRanges.push({ start: this.seeds[r], length: this.seeds[r + 1] });
    }
  }
};
