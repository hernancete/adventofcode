import { readFileLines } from './utils';

export abstract class Puzzle {

  input: string[];

  constructor(inputFile: string) {
    this.input = readFileLines(inputFile);
  }

  solve(): number {
    return 0;
  }
};
