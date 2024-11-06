import { Puzzle } from "../shared/puzzle";

interface cardParts {
  card: string,
  winning: string,
  numbers: string,
}

const pointsTable = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2046, 4092];

export class Card {
  private _raw: string;
  private _parts: cardParts;
  winningNumbers: number[] = [];
  numbers: number[] = [];

  constructor(raw: string) {
    this._raw = raw;
    this._parts = this.parseCardParts(this._raw);
  }

  private parseCardParts(raw: string): cardParts {
    const parts = raw.split(/[:\|]/).map(p => p.trim());
    return {
      card: parts[0],
      winning: parts[1],
      numbers: parts[2],
    };
  }

  getWinningNumbers(): number[] {
    this.winningNumbers = this._parts.winning.split(/ +/).map(p => parseInt(p));
    return this.winningNumbers;
  }

  getNumbers(): number[] {
    this.numbers = this._parts.numbers.split(/ +/).map(p => parseInt(p));
    return this.numbers;
  }

  getPoints(): number {
    const coincidences = this.numbers.reduce((prev, curr) => {
      return prev + (this.winningNumbers.includes(curr) ? 1 : 0);
    }, 0);
    return pointsTable[coincidences];
  }
};

export class Puzzle1 extends Puzzle {

  cards: Card[] = [];

  loadCards(): Card[] {
    this.input.forEach(raw => this.cards.push(new Card(raw)));
    return this.cards;
  }

};
