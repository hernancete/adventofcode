import { Location, Directions } from "./utils";

const tilesConnectingToNorth = ['|', 'J', 'L'];
const tilesConnectingToSouth = ['|', '7', 'F'];
const tilesConnectingToEast = ['-', 'L', 'F'];
const tilesConnectingToWeast = ['-', 'J', '7'];

interface Connections {
  N: boolean,
  S: boolean,
  E: boolean,
  W: boolean,
};

const at = {
  NW: { lat: -1, lon: -1 } as Location,
  N: { lat: -1, lon: 0 } as Location,
  NE: { lat: -1, lon: 1 } as Location,
  W: { lat: 0, lon: -1 } as Location,
  E: { lat: 0, lon: 1 } as Location,
  SW: { lat: 1, lon: -1 } as Location,
  S: { lat: 1, lon: 0 } as Location,
  SE: { lat: 1, lon: 1 } as Location,
}

const tileSides = {
  '|': { A: [at['NW'], at['W'], at['SW']], B: [at['NE'], at['E'], at['SE']] },
  '-': { A: [at['NW'], at['N'], at['NE']], B: [at['SW'], at['S'], at['SE']] },
  '7': { A: [at['NW'], at['N'], at['NE'], at['E'], at['SE']], B: [at['SW']] },
  'F': { A: [at['NW'], at['N'], at['NE'], at['W'], at['NW']], B: [at['SE']] },
  'J': { A: [at['NW']], B: [at['NE'], at['E'], at['SW'], at['S'], at['SE']] },
  'L': { A: [at['NE']], B: [at['NW'], at['W'], at['SW'], at['S'], at['SE']] },
};

const whichSideAreYouNeighbour: any = {
  '|': { S: { L: tileSides['|'].A, R: tileSides['|'].B }, N: { L: tileSides['|'].B, R: tileSides['|'].A } },
  '-': { W: { L: tileSides['-'].A, R: tileSides['-'].B }, E: { L: tileSides['-'].B, R: tileSides['-'].A } },
  '7': { W: { L: tileSides['7'].A, R: tileSides['7'].B }, S: { L: tileSides['7'].B, R: tileSides['7'].A } },
  'F': { E: { L: tileSides['F'].B, R: tileSides['F'].A }, S: { L: tileSides['F'].A, R: tileSides['F'].B } },
  'J': { W: { L: tileSides['J'].A, R: tileSides['J'].B }, N: { L: tileSides['J'].B, R: tileSides['J'].A } },
  'L': { E: { L: tileSides['L'].B, R: tileSides['L'].A }, N: { L: tileSides['L'].A, R: tileSides['L'].B } },
}

export class PipeTile {

  tile: string;
  connectedTo: Connections;
  location: Location;
  from: Directions | undefined; // used when walking throw a pipe tile to set from which connection it start walking from

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

  getSides(from: Directions) {
    return {
      L: whichSideAreYouNeighbour[this.tile][from].L.map((l: Location): Location => ({ lat: this.location.lat + l.lat, lon: this.location.lon + l.lon })),
      R: whichSideAreYouNeighbour[this.tile][from].R.map((r: Location): Location => ({ lat: this.location.lat + r.lat, lon: this.location.lon + r.lon })),
    };
  }
};
