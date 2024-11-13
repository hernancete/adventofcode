export class Race {

  time: number;
  record: number = 0;

  constructor(time: number) {
    this.time = time;
  }

  setRecord(record: number) {
    this.record = record;
  }

  calculateWinningOptions(): any[] {
    const ret: number[] = [];
    for (let t = 1; t < this.time - 1; t++) {
      if (t * (this.time - t) > this.record) ret.push(t);
    }
    return ret;
  }
};
