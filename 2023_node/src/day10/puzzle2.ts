import { Puzzle1, reverseDirection } from "./puzzle1";
import { PipeTile } from "./pipeTile";
import { Tile } from "./tile";

export class Puzzle2 extends Puzzle1 {

  land: any[][] = [];

  walk(): PipeTile[] {
    const ret: PipeTile[] = [];
    let inTheEnd = false;
    let tile: PipeTile = this.startingTile;
    tile.from = tile.getWayOutDirection(this.chooseStartingDirection());
    do {
      ret.push(tile);
      const nextLocation = tile.walkTheTile(tile.from!);
      const nextDirection = tile.getWayOutDirection(tile.from!);
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

    return ret;
  }

  fillLandWithPipeTiles() {
    const walk = this.walk();
    walk.forEach(pipe => {
      if (!Array.isArray(this.land[pipe.location.lat])) this.land[pipe.location.lat] = [];
      // this.land[pipe.location.lat][pipe.location.lon] = new PipeTile(this.input[pipe.location.lat][pipe.location.lon], { lat: pipe.location.lat, lon: pipe.location.lon });
      this.land[pipe.location.lat][pipe.location.lon] = pipe;
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
