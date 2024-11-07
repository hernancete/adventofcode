import { Puzzle1 } from "./puzzle1";

export class Puzzle2 extends Puzzle1 {

  protected _parseSeeds(seedsLine: string): number[] {
    const seedsRanges = seedsLine.replace('seeds: ', '').split(/ +/).map(s => parseInt(s));
    const ret: number[] = [];
    for (let r = 0; r < seedsRanges.length; r += 2) {
      for (let s: number = seedsRanges[r]; s < seedsRanges[r] + seedsRanges[r + 1]; s++) {
        ret.push(s);
      }
    }
    return ret;
  }
};
