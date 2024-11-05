import { readFileLines } from '../shared/utils';

export interface motorPart {
  value: number,
  startIndx?: number,
  endIndx?: number,
}

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
};
