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

  getAdjacentPartNumbersInline(gear: gear): number[] {
    const adjPartNumbers: number[] = [];
    const partNumbersInline = this.getPotentialMotorParts(this.input[gear.line]);
    partNumbersInline.forEach(pni => {
      if (pni.endIndx === gear.index - 1) adjPartNumbers.push(pni.value);
      else if (pni.startIndx === gear.index + 1) adjPartNumbers.push(pni.value);
    });
    return adjPartNumbers;
  }

  getAdjacentPartNumbersOtherLine(gear: gear, line: string): number[] {
    const adjPartNumbers: number[] = [];
    const partNumbersOtherLine = this.getPotentialMotorParts(line);
    partNumbersOtherLine.forEach(pnol => {
      if (
        (pnol.startIndx! >= gear.index - 1 && pnol.startIndx! <= gear.index + 1) ||
        (pnol.endIndx! >= gear.index - 1 && pnol.endIndx! <= gear.index + 1)
      )
        adjPartNumbers.push(pnol.value);
    });
    return adjPartNumbers;
  }

  getAdjacentPartNumbersAbove(gear: gear): number[] {
    if (gear.line === 0) return [];
    return this.getAdjacentPartNumbersOtherLine(gear, this.input[gear.line - 1]);
  }

  getAdjacentPartNumbersBelow(gear: gear): number[] {
    if (gear.line === this.input.length - 1) return [];
    return this.getAdjacentPartNumbersOtherLine(gear, this.input[gear.line + 1]);
  }
};
