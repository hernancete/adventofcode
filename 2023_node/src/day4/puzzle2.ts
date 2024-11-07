import { Card } from "./card";
import { Puzzle1 } from "./puzzle1";

export class Puzzle2 extends Puzzle1 {

  // cardsDups: any = {};

  getNFollowingCards(cardIndx: number, amount: number): Card[] {
    console.log(cardIndx + 1, cardIndx + amount);
    return this.cards.slice(cardIndx + 1, cardIndx + 1 + amount);
  }

  // duplicateCardsByCoincidence() {
  //   this.cardsDups['Card 2'] = 1;
  //   this.cardsDups['Card 3'] = 1;
  //   this.cardsDups['Card 4'] = 1;
  //   this.cardsDups['Card 5'] = 1;
  // }
};
