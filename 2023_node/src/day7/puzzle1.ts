import { Puzzle } from "../shared/puzzle";
import { Hand } from "./hand";

export class Puzzle1 extends Puzzle {

  hands: Hand[] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this._loadHands();
  }

  private _loadHands() {
    this.input.forEach(hl => {
      this.hands.push(new Hand(hl.slice(0, 5)));
    });
  }
};
