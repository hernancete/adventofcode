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

  solve(): number {
    let step = 0;
    let currentPatternIndex = 0;
    let currentNodes = [...this.startingNodes];
    // console.log(currentNodes);
    do {
      currentNodes = currentNodes.map(node => {
        const direction = this.getDirection(currentPatternIndex);
        const nextNetworkNode = this.getNextNetworkNode(node, direction);
        return nextNetworkNode;
      });
      currentPatternIndex++;
      step++;
      // if (step % 10000000 === 0) console.log(step);
    } while (!currentNodes.every(n => this.isEndingNode(n)));
    return step;
  }
};
