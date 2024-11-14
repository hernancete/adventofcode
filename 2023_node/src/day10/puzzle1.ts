import { Puzzle } from "../shared/puzzle";

export class Puzzle1 extends Puzzle {

  startingPoint: number[] = []; // [row, col]
  startingPointType: string = '';

  constructor(inputFile: string) {
    super(inputFile);
    this._findStartingPoint();
  }

  protected _findStartingPoint() {
    for (let r = 0; r < this.input.length; r++) {
      const sIndex = this.input[r].search('S');
      if (sIndex !== -1) {
        this.startingPoint[0] = r;
        this.startingPoint[1] = sIndex;
        break;
      }
    }
  }

  getStartingPointType(): string {
    const northConnections = ['|', '7', 'F'];
    const southConnections = ['|', 'J', 'L'];
    const weastConnections = ['-', 'L', 'F'];
    const eastConnections = ['-', 'J', '7'];
    const connectedToNorth = this.startingPoint[0] > 0 && northConnections.includes(this.input[this.startingPoint[0] - 1].at(this.startingPoint[1])!);
    const connectedToSouth = this.startingPoint[0] < this.input.length - 1 && southConnections.includes(this.input[this.startingPoint[0] + 1].at(this.startingPoint[1])!);
    const connectedToWeast = this.startingPoint[1] > 0 && weastConnections.includes(this.input[this.startingPoint[0]].at(this.startingPoint[1] - 1)!);
    const connectedToEast = this.startingPoint[1] < this.input[0].length && eastConnections.includes(this.input[this.startingPoint[0]].at(this.startingPoint[1] + 1)!);

    if (connectedToNorth && connectedToSouth) this.startingPointType = '|';
    else if (connectedToEast && connectedToWeast) this.startingPointType = '-';
    else if (connectedToNorth && connectedToWeast) this.startingPointType = 'J';
    else if (connectedToNorth && connectedToEast) this.startingPointType = 'L';
    else if (connectedToSouth && connectedToWeast) this.startingPointType = '7';
    else if (connectedToSouth && connectedToEast) this.startingPointType = 'F';
    return this.startingPointType;
  }
};
