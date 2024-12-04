import { Puzzle1 } from "./puzzle1"

export class Puzzle2 extends Puzzle1 {

  unfoldRecords() {
    this.records.forEach((record, i) => {
      this.records[i].springs += `?${record.springs}`.repeat(4);
      for (let r = 0; r < 5; r++) this.records[i].groups.push(record.groups);
      this.records[i].groups.flat();
    });
  }
};
