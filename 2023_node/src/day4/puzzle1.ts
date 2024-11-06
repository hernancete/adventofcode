import { Puzzle } from "../shared/puzzle";

interface cardParts {
  card: string,
  winning: string,
  numbers: string,
}

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

};

export class Puzzle1 extends Puzzle { };
