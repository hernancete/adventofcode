
const tilesConnectingToNorth = ['|', 'J', 'L'];
const tilesConnectingToSouth = ['|', '7', 'F'];
const tilesConnectingToEast = ['-', 'L', 'F'];
const tilesConnectingToWeast = ['-', 'J', '7'];

export enum Directions {
  N = 'N',
  S = 'S',
  E = 'E',
  W = 'W',
};

interface Connections {
  N: boolean,
  S: boolean,
  E: boolean,
  W: boolean,
};

export interface Location {
  lat: number, // row
  lon: number, // col
};

export class PipeTile {

  tile: string;
  connectedTo: Connections;
  location: Location;

  constructor(tile: string, location: Location = { lat: 0, lon: 0 }) {
    this.tile = tile;
    this.connectedTo = this.calculateConnections();
    this.location = location;
  }

  calculateConnections(): Connections {
    return {
      N: tilesConnectingToNorth.includes(this.tile),
      S: tilesConnectingToSouth.includes(this.tile),
      E: tilesConnectingToEast.includes(this.tile),
      W: tilesConnectingToWeast.includes(this.tile),
    }
  }

  private getNeighbourLocation(at: Directions): Location {
    switch (at) {
      case Directions.N: return { lat: this.location.lat - 1, lon: this.location.lon };
      case Directions.S: return { lat: this.location.lat + 1, lon: this.location.lon };
      case Directions.E: return { lat: this.location.lat, lon: this.location.lon + 1 };
      case Directions.W: return { lat: this.location.lat, lon: this.location.lon - 1 };
      default: return this.location;
    }
  }

  getWayOutDirection(cammingFrom: Directions): Directions {
    switch (this.tile) {
      case '|':
        if (cammingFrom === Directions.N) return Directions.S;
        else if (cammingFrom === Directions.S) return Directions.N;
        break;
      case '-':
        if (cammingFrom === Directions.E) return Directions.W;
        else if (cammingFrom === Directions.W) return Directions.E;
        break;
      case '7':
        if (cammingFrom === Directions.S) return Directions.W;
        else if (cammingFrom === Directions.W) return Directions.S;
        break;
      case 'F':
        if (cammingFrom === Directions.S) return Directions.E;
        else if (cammingFrom === Directions.E) return Directions.S;
        break;
      case 'J':
        if (cammingFrom === Directions.N) return Directions.W;
        else if (cammingFrom === Directions.W) return Directions.N;
        break;
      case 'L':
        if (cammingFrom === Directions.N) return Directions.E;
        else if (cammingFrom === Directions.E) return Directions.N;
        break;
    }
    throw new Error('Invalid starting direction');
  }

  walkTheTile(from: Directions): Location {
    return this.getNeighbourLocation(this.getWayOutDirection(from));
  }
};
