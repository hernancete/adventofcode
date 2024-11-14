
const tilesConnectingToNorth = ['|', 'J', 'L'];
const tilesConnectingToSouth = ['|', '7', 'F'];
const tilesConnectingToEast = ['-', 'L', 'F'];
const tilesConnectingToWeast = ['-', 'J', '7'];

interface Connections {
  N: boolean,
  S: boolean,
  E: boolean,
  W: boolean,
}

// interface Location {
//   lat: number, // row
//   lon: number, // col
// }

export class PipeTile {

  tile: string;
  connectedTo: Connections;
  location: number[] = [];
  // location: Location;

  // constructor(tile: string, location: Location = { lat: 0, lon: 0 }) {
  //   this.tile = tile;
  //   this.connectedTo = this.calculateConnections();
  //   this.location = location;
  // }
  constructor(tile: string, location = [0, 0]) {
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
};
