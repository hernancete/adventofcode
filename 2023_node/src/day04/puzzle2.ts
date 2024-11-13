import { Card } from "./card";
import { Puzzle1 } from "./puzzle1";

export class Puzzle2 extends Puzzle1 {

  cardsDups: any = {};

  getNFollowingCards(cardIndx: number, amount: number): Card[] {
    return this.cards.slice(cardIndx + 1, cardIndx + 1 + amount);
  }

  duplicateCardsByCoincidence() {
    this.cards.forEach((card, cardIndex) => {
      card.getWinningNumbers();
      card.getNumbers();
      const coincidences = card.getCoincidencesAmount();
      if (coincidences) {
        // calculate which cards we need to add a copy
        const cardsToDuplicate: Card[] = this.getNFollowingCards(cardIndex, coincidences);
        cardsToDuplicate.forEach(ctd => {
          // we should add a copy for the original card and for every copy of it (if any)
          const duplicateTimes = 1 + (card.name in this.cardsDups ? this.cardsDups[card.name] : 0);
          this.cardsDups[ctd.name] = ctd.name in this.cardsDups ? this.cardsDups[ctd.name] + duplicateTimes : duplicateTimes;
        });
      }
    });
  }

  solve(): number {
    let totalCards = this.cards.length;
    Object.keys(this.cardsDups).forEach(cardName => {
      totalCards += this.cardsDups[cardName];
    });
    return totalCards;
  }
};
