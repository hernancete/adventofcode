import { Puzzle1 } from "./puzzle1";
import { PipeTile } from "./pipeTile";

export class Puzzle2 extends Puzzle1 {

  land: any[][] = [];

  fillLandWithPipeTiles() {
    this.traceWalk();
    this.path.forEach(location => {
      if (!Array.isArray(this.land[location.lat])) this.land[location.lat] = [];
      this.land[location.lat][location.lon] = new PipeTile(this.input[location.lat][location.lon], { lat: location.lat, lon: location.lon });
    });
  }
};
