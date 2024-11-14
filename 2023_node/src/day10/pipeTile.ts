
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

export class PipeTile {

  tile: string;
  connectedTo: Connections;

  constructor(tile: string) {
    this.tile = tile;
    this.connectedTo = this.calculateConnections();
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
