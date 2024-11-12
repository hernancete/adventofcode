import { Puzzle } from "../shared/puzzle";

export class Puzzle1 extends Puzzle {

  pattern: string[] = [];
  network: any = {};

  startNode: string = 'AAA';
  endNode: string = 'ZZZ';

  constructor(inputFile: string) {
    super(inputFile);
    this.pattern = this.input[0].split('');
    this._parseNetwork();
  }

  private _parseNetwork() {
    this.input.slice(1).forEach(i => {
      // AAA = (BBB, CCC)
      const [nameMatch, lMatch, rMatch] = [...i.matchAll(/([A-Z]{3})/g)];
      this.network[nameMatch[0]] = { L: lMatch[0], R: rMatch[0] };
    })
  }

  getDirection(currentPatternIndex: number): string {
    return this.pattern[currentPatternIndex % this.pattern.length];
  }

  getNextNetworkNode(currentNetworkNode: string, nextDirection: string): string {
    return this.network[currentNetworkNode][nextDirection];
  }

  walk(currentNode: string, currentPatternIndex: number = 0, steps: number = 0): number {
    if (currentNode === this.endNode) return steps;
    const direction = this.getDirection(currentPatternIndex);
    const nextNetworkNode = this.getNextNetworkNode(currentNode, direction);
    return this.walk(nextNetworkNode, currentPatternIndex + 1, steps + 1);
  }

  solve(): number {
    return this.walk(this.startNode);
  }
};
