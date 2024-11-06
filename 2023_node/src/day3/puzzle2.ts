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

  getAdjacentPartNumbersAbove(gear: gear): number[] {
    const adjPartNumbers: number[] = [];
    if (gear.line === 0) return adjPartNumbers;
    const partNumbersAbove = this.getPotentialMotorParts(this.input[gear.line - 1]);
    partNumbersAbove.forEach(pna => {
      if (
        (pna.startIndx! >= gear.index - 1 && pna.startIndx! <= gear.index + 1) ||
        (pna.endIndx! >= gear.index - 1 && pna.endIndx! <= gear.index + 1)
      )
        adjPartNumbers.push(pna.value);
    });
    return adjPartNumbers;
  }
};
