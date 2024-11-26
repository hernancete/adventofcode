import { Puzzle } from "../shared/puzzle";
import { PipeTile } from "./pipeTile";
import { Location, Directions } from "./utils";

function reverseDirection(dir: Directions): Directions {
  if (dir === Directions.N) return Directions.S;
  else if (dir === Directions.S) return Directions.N;
  else if (dir === Directions.E) return Directions.W;
  else return Directions.E; // dir === Directions.W
}

export class Puzzle1 extends Puzzle {

  startingPointLocation: Location;
  startingPointType: string = '';
  startingTile: PipeTile;
  path: Location[] = [];

  constructor(inputFile: string) {
    super(inputFile);
    this.startingPointLocation = this._findStartingLocation();
    this.startingPointType = this._getStartingPointType();
    this.startingTile = this._getStartingTile();
  }

  protected _findStartingLocation(): Location {
    const startingPointLocation: Location = { lat: 0, lon: 0 };
    outerloop: for (let r = 0; r < this.input.length; r++) {
      const sIndex = this.input[r].search('S');
      if (sIndex !== -1) {
        startingPointLocation.lat = r;
        startingPointLocation.lon = sIndex;
        break outerloop;
      }
    }
    return startingPointLocation;
  }

  protected _getStartingPointType(): string {
    const northConnections = ['|', '7', 'F'];
    const southConnections = ['|', 'J', 'L'];
    const weastConnections = ['-', 'L', 'F'];
    const eastConnections = ['-', 'J', '7'];
    const connectedToNorth = this.startingPointLocation.lat > 0 && northConnections.includes(this.input[this.startingPointLocation.lat - 1].at(this.startingPointLocation.lon)!);
    const connectedToSouth = this.startingPointLocation.lat < this.input.length - 1 && southConnections.includes(this.input[this.startingPointLocation.lat + 1].at(this.startingPointLocation.lon)!);
    const connectedToWeast = this.startingPointLocation.lon > 0 && weastConnections.includes(this.input[this.startingPointLocation.lat].at(this.startingPointLocation.lon - 1)!);
    const connectedToEast = this.startingPointLocation.lon < this.input[0].length && eastConnections.includes(this.input[this.startingPointLocation.lat].at(this.startingPointLocation.lon + 1)!);

    if (connectedToNorth && connectedToSouth) this.startingPointType = '|';
    else if (connectedToEast && connectedToWeast) this.startingPointType = '-';
    else if (connectedToNorth && connectedToWeast) this.startingPointType = 'J';
    else if (connectedToNorth && connectedToEast) this.startingPointType = 'L';
    else if (connectedToSouth && connectedToWeast) this.startingPointType = '7';
    else if (connectedToSouth && connectedToEast) this.startingPointType = 'F';
    return this.startingPointType;
  }

  protected _getStartingTile(): PipeTile {
    return new PipeTile(this.startingPointType, this.startingPointLocation);
  }

  chooseStartingDirection(): Directions {
    if (this.startingTile.connectedTo.N) return Directions.N;
    if (this.startingTile.connectedTo.E) return Directions.E;
    if (this.startingTile.connectedTo.S) return Directions.S;
    else return Directions.W;
  }

  protected _getTypeOf(location: Location): string {
    return this.input[location.lat].at(location.lon)!;
  }

  traceWalk(): Location[] {
    let inTheEnd = false;
    let tile: PipeTile = this.startingTile;
    tile.from = tile.getWayOutDirection(this.chooseStartingDirection());
    do {
      this.path.push(tile.location);
      const nextLocation = tile.walkTheTile(tile.from!);
      const nextDirection = tile.getWayOutDirection(tile.from!);
      // console.log(`I'm in ${JSON.stringify(tile.location)}, I'm a ${tile.tile}, I'm comming from ${tile.from!} so next location is ${JSON.stringify(nextLocation)} through ${nextDirection}`);
      if (
        nextLocation.lat === this.startingPointLocation.lat &&
        nextLocation.lon === this.startingPointLocation.lon
      ) {
        inTheEnd = true;
      }
      else {
        const nextType = this._getTypeOf(nextLocation);
        tile = new PipeTile(nextType, nextLocation);
        tile.from = reverseDirection(nextDirection);
      }
    } while (!inTheEnd);

    return this.path;
  }

  solve(): number {
    this.traceWalk();
    return Math.floor(this.path.length / 2);
  }
};
