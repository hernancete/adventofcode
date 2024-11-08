export class Race {

  time: number;
  record: number = 0;

  constructor(time: number) {
    this.time = time;
  }

  setRecord(record: number) {
    this.record = record;
  }
};
