import { Puzzle } from "../shared/puzzle";

export class Puzzle1 extends Puzzle {

  universe: string[][] = [];

  shouldExpandVertically(): number[] {
    const indexesToExpand: number[] = this.input.reduce((prev, curr, index) => {
      if (curr.replace(/\./g, '') === '') prev.push(index);
      return prev;
    }, [] as number[]);
    return indexesToExpand;
  }

  shouldExpandHorizontally(): number[] {
    const indexesToExpand: number[] = this.input[0].split('').map((_, i) => i);
    this.input.forEach(row => {
      [...row.matchAll(/#/g)].map(m => {
        const remove = indexesToExpand.indexOf(m.index);
        if (remove !== -1) indexesToExpand.splice(remove, 1);
      });
    });
    return indexesToExpand;
  }

  expand() {
    this.universe = this.input.map(row => row.split(''));
    const verticallyExpandIndexes = this.shouldExpandVertically();
    const horizontallyExpandIndexes = this.shouldExpandHorizontally();
    verticallyExpandIndexes.reverse().forEach(index => this.universe.splice(index, 0, this.universe[index]));
    horizontallyExpandIndexes.reverse().forEach(index => {
      for (let row = 0; row < this.universe.length; row++) {
        this.universe[row].splice(index, 0, this.universe[row][index]);
      }
    });
  }
};
