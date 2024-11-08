import { Puzzle } from "../shared/puzzle";
import { Race } from "./race";

export class Puzzle1 extends Puzzle {

  races: Race[] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this.races = this._parseRaces();
  }

  private _parseRaces(): Race[] {
    const races: Race[] = [];
    const times = this.input[0].replace(/Time: +/, '').split(/ +/).map(t => parseInt(t));
    const records = this.input[1].replace(/Distance: +/, '').split(/ +/).map(d => parseInt(d));
    for (let i in times) {
      const race = new Race(times[i]);
      race.setRecord(records[i]);
      races.push(race);
    }
    return races;
  }

  solve(): number {
    return this.races.reduce((prev, curr) => {
      return prev * curr.calculateWinningOptions().length;
    }, 1);
  }
};
