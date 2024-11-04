import fs from 'fs';
import path from 'path';

export class Puzzle1 {

  inputFile: string;
  input: string[] = [];

  constructor(inputFile: string) {
    this.inputFile = inputFile.startsWith('/') ? inputFile : path.resolve(path.join(__dirname, inputFile));
    this.readInput();
  }

  readInput(): string[] {
    console.log('INPUT FILE', this.inputFile);
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

  buildNumber(line: string): number {
    const first = this.getFirstDigit(line);
    const last = this.getLastDigit(line);
    const numberString: string = `${first}${last}`;
    return parseInt(numberString);
  }

  solve(): number {
    return this.input.reduce((prev, curr) => prev + this.buildNumber(curr), 0);
  }

}