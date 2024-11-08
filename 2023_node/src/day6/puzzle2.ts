import { Puzzle } from "../shared/puzzle";
import { Race } from "./race";

export class Puzzle2 extends Puzzle {

  race: Race;

  constructor(inputFile: string) {
    super(inputFile);
    this.race = this._parseRace();
  }

  private _parseRace(): Race {
    const time = parseInt(this.input[0].replace(/Time: +/, '').replace(/ +/g, ''));
    const record = parseInt(this.input[1].replace(/Distance: +/, '').replace(/ +/g, ''));
    const race = new Race(time);
    race.setRecord(record);
    return race;
  }
};
