import { Puzzle } from "../shared/puzzle";

export class Puzzle1 extends Puzzle {

  startingPoint: number[] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this._findStartingPoint();
  }

  protected _findStartingPoint() {
    for (let r = 0; r < this.input.length; r++) {
      const sIndex = this.input[r].search('S');
      if (sIndex !== -1) {
        this.startingPoint[0] = r;
        this.startingPoint[1] = sIndex;
        break;
      }
    }
  }
};
