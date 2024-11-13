import { Puzzle } from "../shared/puzzle";

export class Puzzle1 extends Puzzle {

  history: number[][] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this._parseInput();
  }

  protected _parseInput() {
    this.input.forEach(i => {
      this.history.push(i.split(/ +/g).map(n => parseInt(n)));
    });
  }
};
