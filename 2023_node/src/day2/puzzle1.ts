import { readFileLines } from "../shared/utils";

export class Puzzle1 {

  input: string[];
  rules: Object = {};

  constructor(inputFile: string) {
    this.input = readFileLines(inputFile);
  }

  parseLineId(line: string): Object {
    // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
    const matches = line.match(/Game ([0-9]+):/);
    const id = parseInt(matches ? matches[1] : '1');
    return id;
  }

  parseLineMaxBlue(line: string): Object {
    const blueMatches = line.match(/([0-9]+) blue/g);
    const maxBlue = Math.max(...(blueMatches?.map(mb => parseInt(mb.replace(' blue', ''))) || [0]))
    return maxBlue;
  }

  parseLineMaxRed(line: string): Object {
    const redMatches = line.match(/([0-9]+) red/g);
    const maxRed = Math.max(...(redMatches?.map(mr => parseInt(mr.replace(' red', ''))) || [0]))
    return maxRed;
  }

  parseLineMaxGreen(line: string): Object {
    const greenMatches = line.match(/([0-9]+) green/g);
    const maxGreen = Math.max(...(greenMatches?.map(mg => parseInt(mg.replace(' green', ''))) || [0]))
    return maxGreen;
  }

  setGameRules(rules: any): any {
    this.rules = rules;
    return this.rules;
  }
};
