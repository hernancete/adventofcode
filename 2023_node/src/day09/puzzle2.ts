import { Puzzle1 } from "./puzzle1";

export class Puzzle2 extends Puzzle1 {

  historyDiffsFirstDigits: number[][] = [];

  getTheDiffBetweenTheFirstTwoValuesOfEachDiffSequence(historyIndex: number) {
    let diffs: number[] = [...this.history[historyIndex]];
    while (true) {
      diffs = this.calculateDiffsBetweenConsecutiveValues(diffs);
      if (this.checkIfEveryValueIsZero(diffs)) break;
      if (!this.historyDiffsFirstDigits[historyIndex]) this.historyDiffsFirstDigits[historyIndex] = [];
      this.historyDiffsFirstDigits[historyIndex].push(diffs.at(0)!);
    }
  }

  getBackwardForecastValue(historyIndex: number): number {
    return this.history[historyIndex].at(0)! - this.historyDiffsFirstDigits[historyIndex].reverse().reduce((prev, curr) => curr - prev, 0);
  }

  solve(): number {
    return this.history.reduce((prev, curr, index) => {
      this.getTheDiffBetweenTheFirstTwoValuesOfEachDiffSequence(index);
      return prev + this.getBackwardForecastValue(index);
    }, 0);
  }
};
