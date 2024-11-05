import { readFileLines } from '../shared/utils';

export interface motorPart {
  value: number,
  startIndx?: number,
  endIndx?: number,
}

export const symbolsRegex = /[^0-9\.]/;

export class Puzzle1 {

  input: string[];

  constructor(inputFile: string) {
    this.input = readFileLines(inputFile);
  }

  getPotentialMotorParts(line: string): motorPart[] {
    const motorParts: motorPart[] = [];
    const matches = line.matchAll(/([0-9])+/g);
    if (!matches) return motorParts;

    [...matches].forEach((m) => {
      motorParts.push({
        value: parseInt(m[0]),
        startIndx: m.index,
        endIndx: m.index + m[0].length - 1,
      });
    });
    return motorParts;
  }

  isThereAnAdjacentSymbolInline(potentialMotorPart: motorPart, line: string): boolean {
    if (potentialMotorPart.startIndx! > 0) {
      if (symbolsRegex.test(line[potentialMotorPart.startIndx! - 1])) {
        return true;
      }
    }
    if (potentialMotorPart.endIndx! < line.length - 1) {
      if (symbolsRegex.test(line[potentialMotorPart.endIndx! + 1])) {
        return true;
      }
    }
    return false;
  }

  private isThereAnAdjacentSymbolInOtherLine(potentialMotorPart: motorPart, line: string): boolean {
    const startIndx = potentialMotorPart.startIndx === 0 ? 0 : potentialMotorPart.startIndx! - 1;
    const endIndx = potentialMotorPart.endIndx === line.length - 1 ? line.length - 1 : potentialMotorPart.endIndx! + 1;
    return symbolsRegex.test(line.slice(startIndx, endIndx + 1));
  }

  isThereAnAdjacentSymbolAbove(potentialMotorPart: motorPart, lineIndex: number): boolean {
    const line = this.input[lineIndex - 1];
    return this.isThereAnAdjacentSymbolInOtherLine(potentialMotorPart, line);
  }

  isThereAnAdjacentSymbolBelow(potentialMotorPart: motorPart, lineIndex: number): boolean {
    const line = this.input[lineIndex + 1];
    return this.isThereAnAdjacentSymbolInOtherLine(potentialMotorPart, line);
  }
};
