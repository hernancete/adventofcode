import { Puzzle1 } from "./puzzle1";


export class Puzzle2 extends Puzzle1 {

  startingNodes: string[] = [];
  private startingNodesRegex = /..A/;
  private endingNodesRegex = /..Z/;

  loadStartingNodes() {
    Object.keys(this.network).forEach(n => {
      if (this.startingNodesRegex.test(n)) this.startingNodes.push(n);
    });
  }

  isEndingNode(node: string): boolean {
    return this.endingNodesRegex.test(node);
  }
};
