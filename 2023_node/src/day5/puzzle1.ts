import { Puzzle } from "../shared/puzzle";
import { Mapper } from "./mapper";

export class Puzzle1 extends Puzzle {

  seeds: number[] = [];
  mappers: Mapper[] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this._parseInput();
  }

  protected _parseInput() {
    let parsing: number = -1;
    for (const i of this.input) {
      // load seeds
      if (i.startsWith('seeds')) {
        this._parseSeeds(i);
      } else if (i.endsWith('map:')) {
        this.mappers.push(new Mapper);
        parsing = this.mappers.length - 1; // we are parsing the mapper[parsing]
      } else if (i.length) {
        this.mappers[parsing].loadRange(i);
      }
    }
  }

  protected _parseSeeds(seedsLine: string) {
    this.seeds = seedsLine.replace('seeds: ', '').split(/ +/).map(s => parseInt(s));
  }

  map(seed: number): number {
    let ret = seed;
    for (const m of this.mappers) {
      ret = m.map(ret);
    }
    return ret;
  }

  solve(): number {
    // return this.seeds.reduce((prev, curr) => Math.min(prev, this.map(curr)), 1000000000);
    return this.seeds.map(s => this.map(s)).sort((a, b) => a - b).at(0) as number;
  }
};
