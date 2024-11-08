import { Puzzle1 } from "./puzzle1";

export class Puzzle2 extends Puzzle1 {

  seedRanges: any[] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this._parseSeedRanges();
  }

  private _parseSeedRanges() {
    for (let r = 0; r < this.seeds.length; r += 2) {
      this.seedRanges.push({ start: this.seeds[r], length: this.seeds[r + 1] });
    }
    console.log(this.seedRanges);
  }

  solve(): number {
    const minLocationsInRange: number[] = [];
    for (const sr in this.seedRanges) {
      // console.log('---------range', this.seedRanges[sr]);
      let minLocationInRange;
      let i = this.seedRanges[sr].start;
      do {
        const location = this.map(i);
        // if (i % 10000000 === 0) console.log('seed', i, '=>', location);
        minLocationInRange = minLocationInRange
          ? Math.min(minLocationInRange, location)
          : location;
        i++;
      } while (i < this.seedRanges[sr].start + this.seedRanges[sr].length);
      if (minLocationInRange) minLocationsInRange.push(minLocationInRange);
    }
    return minLocationsInRange.sort((a, b) => a - b).at(0) as number;
  }
};
