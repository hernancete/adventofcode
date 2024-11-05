import { readFileLines } from "../shared/utils";

export class Puzzle1 {

  input: string[];
  rules: any = {};

  constructor(inputFile: string) {
    this.input = readFileLines(inputFile);
  }

  parseGameRecordId(line: string): number {
    // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
    const matches = line.match(/Game ([0-9]+):/);
    const id = parseInt(matches ? matches[1] : '1');
    return id;
  }

  parseGameRecordMaxBlue(line: string): number {
    const blueMatches = line.match(/([0-9]+) blue/g);
    const maxBlue = Math.max(...(blueMatches?.map(mb => parseInt(mb.replace(' blue', ''))) || [0]))
    return maxBlue;
  }

  parseGameRecordMaxRed(line: string): number {
    const redMatches = line.match(/([0-9]+) red/g);
    const maxRed = Math.max(...(redMatches?.map(mr => parseInt(mr.replace(' red', ''))) || [0]))
    return maxRed;
  }

  parseGameRecordMaxGreen(line: string): number {
    const greenMatches = line.match(/([0-9]+) green/g);
    const maxGreen = Math.max(...(greenMatches?.map(mg => parseInt(mg.replace(' green', ''))) || [0]))
    return maxGreen;
  }

  setGameRules(rules: any): any {
    this.rules = rules;
    return this.rules;
  }

  evaluateGameRecordFeasibilityByCubeAmount(gameRecord: string): boolean {
    const maxBlue = this.parseGameRecordMaxBlue(gameRecord);
    const maxRed = this.parseGameRecordMaxRed(gameRecord);
    const maxGreen = this.parseGameRecordMaxGreen(gameRecord);
    return maxBlue <= this.rules.blue && maxRed <= this.rules.red && maxGreen <= this.rules.green;
  }

  solve(): number {
    return this.input.reduce((prev, curr) => {
      if (this.evaluateGameRecordFeasibilityByCubeAmount(curr)) {
        return prev + this.parseGameRecordId(curr);
      }
      return prev;
    }, 0);
  }
};
