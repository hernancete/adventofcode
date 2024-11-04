import fs from 'fs';

export class Puzzle1 {

  constructor() { }

  readInput(inputFile: string): string[] {
    const input = fs.readFileSync(inputFile, 'utf8');
    const inputLines = input.split('\n').filter(l => l);
    return inputLines;
  }

  getFirstDigit(line: string): string {
    const matches = line.match(/[0-9]{1}/g);
    return matches ? matches[0] : '0';
  }

}