import { Puzzle1, reverseDirection } from "./puzzle1";
import { PipeTile } from "./pipeTile";
import { Tile } from "./tile";
import { Location } from "./utils";

interface Boundaries {
  minLat: number,
  maxLat: number,
  minLon: number,
  maxLon: number,
};

const outsideBoundaries = (location: Location, boundaries: Boundaries): boolean => {
  return (
    location.lat < boundaries.minLat ||
    location.lat > boundaries.maxLat ||
    location.lon < boundaries.minLon ||
    location.lon > boundaries.maxLon
  );
}

export class Puzzle2 extends Puzzle1 {

  land: any[][] = [];
  landHeight: number;
  landWidth: number;

  constructor(inputFile: string) {
    super(inputFile);
    this.landHeight = this.input.length;
    this.landWidth = this.input[0].length;
  }

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

  whichSideIsInside(): string {
    let figuredOut = false;
    let borderDepth = 0;
    let side;

    borderloop: do {
      // checking the West and East borders
      for (let i = 0 + borderDepth; i < this.landWidth - 1 - borderDepth; i++) {
        let lon = i;
        for (let lat of [0, this.landHeight - 1 - borderDepth]) {
          if (this.land[lat][lon] instanceof PipeTile) {
            figuredOut = true;
            const sides = this.land[lat][lon].getSides(this.land[lat][lon].from!);
            // check if some of the L sides is out of land (or land minus borderDepth)
            const isOutsideOnTheLeft = sides.L.some((l: Location) => outsideBoundaries(l, {
              minLat: borderDepth,
              maxLat: this.landHeight - 1 - borderDepth,
              minLon: borderDepth,
              maxLon: this.landWidth - 1 - borderDepth,
            }));
            side = isOutsideOnTheLeft ? 'R' : 'L';
            break borderloop;
          }
        }
      }

      // checking the North and South borders
      for (let i = 0 + borderDepth; i < this.landHeight - 1 - borderDepth; i++) {
        let lat = i;
        for (let lon of [0, this.landWidth - 1 - borderDepth]) {
          if (this.land[lat][lon] instanceof PipeTile) {
            figuredOut = true;
            const sides = this.land[lat][lon].getSides(this.land[lat][lon].from!);
            // check if some of the L sides is out of land (or land minus borderDepth)
            const isOutsideOnTheLeft = sides.L.some((l: Location) => outsideBoundaries(l, {
              minLat: borderDepth,
              maxLat: this.landHeight - 1 - borderDepth,
              minLon: borderDepth,
              maxLon: this.landWidth - 1 - borderDepth,
            }));
            side = isOutsideOnTheLeft ? 'R' : 'L';
            break borderloop;
          }
        }
      }

      borderDepth++;

    } while (!figuredOut);
    return side as string;
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
