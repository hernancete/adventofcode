import { Puzzle } from "../shared/puzzle";

interface cardParts {
  card: string,
  winning: string,
  numbers: string,
}

export class Card {
  private _cardLine: string;
  private _parts: cardParts;
  winningNumbers: number[] = [];

  constructor(cardLine: string) {
    this._cardLine = cardLine;
    this._parts = this.parseCardParts(this._cardLine);
  }

  private parseCardParts(cardLine: string): cardParts {
    const parts = cardLine.split(/[:\|]/).map(p => p.trim());
    return {
      card: parts[0],
      winning: parts[1],
      numbers: parts[2],
    };
  }

  getWinningNumbers(): number[] {
    this.winningNumbers = this._parts.winning.split(' ').map(p => parseInt(p));
    return this.winningNumbers;
  }
};

export class Puzzle1 extends Puzzle { };
