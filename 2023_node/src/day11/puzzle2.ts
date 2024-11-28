import { Puzzle1 } from "./puzzle1";

export class Puzzle2 extends Puzzle1 {

  expandedBy: number = 0;
  emptyRows: number[] = [];
  emptyCols: number[] = [];

  setExpandedBy(expansion: number) {
    this.expandedBy = expansion;
  }

  expand() {
    this.universe = this.input.map(row => row.split(''));
  }

  findEmptyRows() {
    this.emptyRows = super.shouldExpandVertically();
  }

  findEmptyCols() {
    this.emptyCols = super.shouldExpandHorizontally();
  }

  howManyEmptyRowsBetween(rowA: number, rowB: number): number {
    return this.emptyRows.filter(row => row > rowA && row < rowB).length;
  }

  howManyEmptyColsBetween(colA: number, colB: number): number {
    return this.emptyCols.filter(col => col > colA && col < colB).length;
  }

  findMinuminDistanceBetweenGalaxyPairs() {
    this.findEmptyRows();
    this.findEmptyCols();
    for (let gp = 0; gp < this.galaxyPairs.length; gp++) {
      const rowA = Math.min(this.galaxyPairs[gp].galaxy1.row, this.galaxyPairs[gp].galaxy2.row);
      const rowB = Math.max(this.galaxyPairs[gp].galaxy1.row, this.galaxyPairs[gp].galaxy2.row);
      const colA = Math.min(this.galaxyPairs[gp].galaxy1.col, this.galaxyPairs[gp].galaxy2.col);
      const colB = Math.max(this.galaxyPairs[gp].galaxy1.col, this.galaxyPairs[gp].galaxy2.col);
      const expandVertically = this.howManyEmptyRowsBetween(rowA, rowB);
      const expandHorizontally = this.howManyEmptyColsBetween(colA, colB);
      this.galaxyPairs[gp].distance =
        Math.abs(this.galaxyPairs[gp].galaxy1.row - this.galaxyPairs[gp].galaxy2.row) +
        Math.abs(this.galaxyPairs[gp].galaxy1.col - this.galaxyPairs[gp].galaxy2.col) +
        expandVertically * this.expandedBy +
        expandHorizontally * this.expandedBy;
    }
  }
};
