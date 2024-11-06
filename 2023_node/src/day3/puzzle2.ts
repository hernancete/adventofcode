import { Puzzle1 } from "./puzzle1";

export interface gear {
  line: number,
  index: number,
  adjacents?: number[],
};

export class Puzzle2 extends Puzzle1 {

  gearRegex = /\*/g;
  gears: gear[] = [];

  getPotentialGearsPerLine(lineIndex: number): Array<gear> {
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

  private getAdjacentPartNumbersOtherLine(gear: gear, line: string): number[] {
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

  getGears(): gear[] {
    this.gears.splice(0, this.gears.length);  // empty the gears array
    this.input.forEach((line, indx) => {
      const potentialGears = this.getPotentialGearsPerLine(indx);
      potentialGears.forEach(pg => {
        const adjInline = this.getAdjacentPartNumbersInline(pg);
        const adjAbove = this.getAdjacentPartNumbersAbove(pg);
        const adjBelow = this.getAdjacentPartNumbersBelow(pg);
        if (adjInline.length + adjAbove.length + adjBelow.length === 2) {
          this.gears.push({
            ...pg,
            adjacents: [
              ...adjInline,
              ...adjAbove,
              ...adjBelow
            ]
          });
        }
      });
    });
    return this.gears;
  }

  solve(): number {
    return this.gears.reduce((prev, curr) => {
      return prev + (curr.adjacents?.reduce((p, c) => p * c, 1) || 0);
    }, 0);
  }
};
