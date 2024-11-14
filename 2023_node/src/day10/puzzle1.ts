import { Puzzle } from "../shared/puzzle";
import { PipeTile, Location } from "./pipeTile";

export class Puzzle1 extends Puzzle {

  startingPointLocation: Location;
  startingPointType: string = '';
  startingTile: PipeTile;

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
};
