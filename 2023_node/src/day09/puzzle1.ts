import { Puzzle } from "../shared/puzzle";

export class Puzzle1 extends Puzzle {

  history: number[][] = [];
  historyDiffsLastDigits: number[][] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this._parseInput();
  }

  protected _parseInput() {
    this.input.forEach(i => {
      this.history.push(i.split(/ +/g).map(n => parseInt(n)));
    });
  }

  calculateDiffsBetweenConsecutiveValues(values: number[]): number[] {
    if (values.length < 2) return values;
    const diff: number[] = [];
    for (let i = 1; i < values.length; i++) {
      diff.push(values[i] - values[i - 1]);
    }
    return diff;
  }

  checkIfEveryValueIsZero(values: number[]): boolean {
    return values.every(v => v === 0);
  }

  getTheDiffBetweenTheLastTwoValuesOfEachDiffSequence(historyIndex: number) {
    let diffs: number[] = [...this.history[historyIndex]];
    while (true) {
      diffs = this.calculateDiffsBetweenConsecutiveValues(diffs);
      if (this.checkIfEveryValueIsZero(diffs)) break;
      if (!this.historyDiffsLastDigits[historyIndex]) this.historyDiffsLastDigits[historyIndex] = [];
      this.historyDiffsLastDigits[historyIndex].push(diffs.at(-1)!);
    }
  }

  getForecastValue(historyIndex: number): number {
    return this.history[historyIndex].at(-1)! + this.historyDiffsLastDigits[historyIndex].reduce((prev, curr) => prev + curr, 0);
  }

  solve(): number {
    return this.history.reduce((prev, curr, index) => {
      this.getTheDiffBetweenTheLastTwoValuesOfEachDiffSequence(index);
      return prev + this.getForecastValue(index);
    }, 0);
  }
};
