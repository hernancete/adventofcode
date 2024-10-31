class Tile {
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }
}

class Grid {
  constructor() {
    this.tiles = [];
    this.grid = [];
    this._h = 0;
  }

  addTile(tile) {
    this.tiles.push(tile);
    if (this.grid[tile.x] === undefined) this.grid[tile.x] = [];
    this.grid[tile.x][tile.y] = tile.id;
    if (tile.y > this._h) this._h = tile.y;
  }
}

module.exports = {
  Tile,
  Grid,
};
