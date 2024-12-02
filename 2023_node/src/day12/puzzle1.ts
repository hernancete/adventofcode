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
}
