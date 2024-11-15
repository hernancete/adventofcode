// Counterintuitively, this Tile class isn't a parent class of PipeTile.
import { Location } from "./utils";

export class Tile {

  location: Location;

  constructor(location: Location = { lat: 0, lon: 0 }) {
    this.location = location;
  }
};
