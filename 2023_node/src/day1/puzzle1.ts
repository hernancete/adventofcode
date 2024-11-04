import fs from 'fs';

export class Puzzle1 {

  constructor() { }

  readInput(inputFile: string) {
    const input = fs.readFileSync(inputFile, 'utf8');
    const inputLines = input.split('\n').filter(l => l);
    return inputLines;
  }
}