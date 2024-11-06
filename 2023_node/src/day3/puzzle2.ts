import { Puzzle1 } from "./puzzle1";

export interface gear {
  line: number,
  index: number,
};

export class Puzzle2 extends Puzzle1 {

  gearRegex = /\*/g;

  getPotentialGearsInline(lineIndex: number): Array<gear> {
    const gears: gear[] = [];
    const matches = this.input[lineIndex].matchAll(this.gearRegex);
    [...matches].forEach(m => {
      gears.push({
        line: lineIndex,
        index: m.index,
      });
    });
    return gears;
  }
};
