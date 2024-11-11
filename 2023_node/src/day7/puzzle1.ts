import { Puzzle } from "../shared/puzzle";
import { Hand, cardsOrder } from "./hand";

const cardTypes = ['HighCard', 'OnePair', 'TwoPair', 'ThreeOfAKind', 'FullHuse', 'FourOfAKind', 'FiveOfAKind'];

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

  sortHands() {
    this.hands.sort((a, b) => {
      if (a.type !== b.type) {
        return cardTypes.indexOf(b.type) - cardTypes.indexOf(a.type);
      }
      const sortedA = a.sort().split('');
      const sortedB = b.sort().split('');
      let i = 0;
      let ret = 0;
      do {
        ret = cardsOrder.indexOf(sortedB[i]) - cardsOrder.indexOf(sortedA[i]);
        i++;
      } while (ret !== 0 && i < sortedA.length);
      return ret;
    });
  }
};
