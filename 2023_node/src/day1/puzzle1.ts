import fs from 'fs';

export class Puzzle1 {

  inputFile: string;
  input: string[] = [];

  constructor(inputFile: string) {
    this.inputFile = inputFile;
    this.readInput();
  }

  readInput(): string[] {
    const input = fs.readFileSync(this.inputFile, 'utf8');
    const inputLines = input.split('\n').filter(l => l);
    this.input = inputLines;
    return this.input;
  }

  getFirstDigit(line: string): string {
    const matches = line.match(/[0-9]{1}/g);
    return matches ? matches[0] : '0';
  }

  getLastDigit(line: string): string {
    const matches = line.match(/[0-9]{1}/g);
    return matches ? matches.at(-1) as string : '0';
  }

}