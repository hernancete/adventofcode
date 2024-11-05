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

    const blueMatches = line.match(/([0-9]+) blue/g);
    const maxBlue = Math.max(...(blueMatches?.map(mb => parseInt(mb.replace(' blue', ''))) || [0]))

    const redMatches = line.match(/([0-9]+) red/g);
    const maxRed = Math.max(...(redMatches?.map(mr => parseInt(mr.replace(' red', ''))) || [0]))

    const greenMatches = line.match(/([0-9]+) green/g);
    const maxGreen = Math.max(...(greenMatches?.map(mg => parseInt(mg.replace(' green', ''))) || [0]))

    return { id, maxBlue, maxRed, maxGreen };
  }
};
