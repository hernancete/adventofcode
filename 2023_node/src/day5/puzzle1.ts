import { Puzzle } from "../shared/puzzle";
import { Mapper } from "./mapper";

export class Puzzle1 extends Puzzle {

  seeds: number[] = [];
  mappers: Mapper[] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this._parseInput();
  }

  private _parseInput() {
    let parsing: number = -1;
    for (const i of this.input) {
      // load seeds
      if (i.startsWith('seeds')) {
        this.seeds = i.replace('seeds: ', '').split(/ +/).map(s => parseInt(s));
      } else if (i.endsWith('map:')) {
        this.mappers.push(new Mapper);
        parsing = this.mappers.length - 1; // we are parsing the mapper[parsing]
      }
    }
  }
};
