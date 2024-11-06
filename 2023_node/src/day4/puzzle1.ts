import { Puzzle } from "../shared/puzzle";
import { Card } from "./card";

export class Puzzle1 extends Puzzle {

  cards: Card[] = [];

  loadCards(): Card[] {
    this.input.forEach(raw => this.cards.push(new Card(raw)));
    return this.cards;
  }

  solve(): number {
    return this.cards.reduce((prev, curr) => {
      curr.getWinningNumbers();
      curr.getNumbers();
      return prev + curr.getPoints();
    }, 0);
  }
};
