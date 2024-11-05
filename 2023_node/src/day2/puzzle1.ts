import { readFileLines } from "../shared/utils";

// interface gameRecord {
//   id: number,
//   blue: number,
//   red: number,
//   green: number,
// };

export class Puzzle1 {

  input: string[];

  constructor(inputFile: string) {
    this.input = readFileLines(inputFile);
  }

  parseLine(line: string): Object {
    // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
    const matches = line.match(/Game ([0-9]+):/);
    const id = parseInt(matches ? matches[1] : '1');
    return { id, blue: 0, red: 0, green: 0 };
  }
};
