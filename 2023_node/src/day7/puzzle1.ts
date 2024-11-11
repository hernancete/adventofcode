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
      const hlParts = hl.split(/ +/);
      const hand = new Hand(hlParts[0]);
      hand.loadBid(parseInt(hlParts[1]));
      this.hands.push(hand);
    });
  }
};
