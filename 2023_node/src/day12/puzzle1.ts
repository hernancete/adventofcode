import { Puzzle } from "../shared/puzzle";

const DAMAGED = '#';
const UNKNOWN = '?';

export const getLocationAlternatives = (records: string, groupLength: number): number[][] => {
  const locations: number[][] = [];
  const regex = new RegExp(`^[${DAMAGED}\\${UNKNOWN}]{${groupLength}}$`);
  for (let i = 0; i <= records.length - groupLength; i++) {
    if (i > 0 && records.at(i - 1) === DAMAGED) continue;
    if (i < records.length - groupLength && records.at(i + groupLength) === DAMAGED) continue;
    if (regex.test(records.slice(i, i + groupLength))) {
      locations.push([i, i + groupLength]);
    }
  }
  return locations;
}

// thank you ChatGPT!
const cartesianProduct = <T>(arrays: T[][]): T[][] => {
  return arrays.reduce((a: T[][], b: T[]) =>
    a.flatMap(d => b.map(e => [...d, e])),
    [[]]);
}

export class Puzzle1 extends Puzzle {

  records: any[] = [];

  parseRecords() {
    this.input.forEach(row => {
      const [springs, groups] = row.split(' ', 2);
      this.records.push({
        springs,
        groups: groups.split(',').map(g => parseInt(g)),
      });
    });
  }

  calculateDamagedGroupLocationOptions() {
    this.records.forEach((record, recordIndex) => {
      // const record = this.records[0];
      const ret: any[] = [];
      // for every group, get the location options
      // with that, build "all the alternatives" (combinations) and then filter only the valid ones:
      // - every group should be at least a spring apart
      // - no damaged spring can left outside groups (maybe not needed)

      // for every group, get the location options
      const groupsLocationOptions: number[][][] = record.groups.map((groupLen: number) => getLocationAlternatives(record.springs, groupLen));

      // build the alternatives
      let combinedLocationOptions: number[][][] = cartesianProduct(groupsLocationOptions);
      // console.log('all combinations', combinedLocationOptions);

      // filter the ones that not overlap with each other
      combinedLocationOptions = combinedLocationOptions.filter(groupLocationOption => {
        try {
          groupLocationOption.reduce((prev: number, curr: number[]) => {
            if (curr[0] > prev) return curr[1];
            throw new Error('Overlaping');
          }, -1 as number);
          return true;
        } catch (e) {
          return false;
        }
      });
      // console.log('non overlaping', combinedLocationOptions);

      this.records[recordIndex].locationOptions = combinedLocationOptions;
    });
  }
}
