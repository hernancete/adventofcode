import { Puzzle1 } from "./puzzle1";
import { PipeTile } from "./pipeTile";
import { Tile } from "./tile";

export class Puzzle2 extends Puzzle1 {

  land: any[][] = [];

  fillLandWithPipeTiles() {
    this.traceWalk();
    this.path.forEach(location => {
      if (!Array.isArray(this.land[location.lat])) this.land[location.lat] = [];
      this.land[location.lat][location.lon] = new PipeTile(this.input[location.lat][location.lon], { lat: location.lat, lon: location.lon });
    });
  }

  fillLandWithTiles() {
    for (let lat = 0; lat < this.input.length; lat++) {
      if (!Array.isArray(this.land[lat])) this.land[lat] = [];
      for (let lon = 0; lon < this.input[lat].length; lon++) {
        if (this.land[lat][lon] && this.land[lat][lon] instanceof PipeTile) continue;
        this.land[lat][lon] = new Tile({ lat, lon });
      }
    }
  }

  setNonPipeTilesType() {
    for (let lat = 0; lat < this.land.length; lat++) {
      for (const tile of this.land[lat]) {
        if (tile instanceof PipeTile) continue;
        if (tile.amIInTheBorder(this.land.length, this.land[lat].length)) {
          tile.setType('O');
        }
      }
    }
  }
};
