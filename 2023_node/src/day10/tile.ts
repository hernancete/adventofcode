// Counterintuitively, this Tile class isn't a parent class of PipeTile.
import { Location } from "./utils";

export class Tile {

  location: Location;
  type: string | undefined;

  constructor(location: Location = { lat: 0, lon: 0 }) {
    this.location = location;
  }

  setType(type: string) {
    this.type = type;
  }

  amIInTheBorder(height: number = 0, width: number = 0): boolean {
    return (
      this.location.lat === 0 ||
      this.location.lon === 0 ||
      this.location.lat === height - 1 ||
      this.location.lon === width - 1
    );
  }
};
