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

  // parseLine(line: string): Object {
  //   return { id: 1, blue: 0, red: 0, green: 0 };
  // }
};
