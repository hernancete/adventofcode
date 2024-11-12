import { Puzzle } from "../shared/puzzle";

interface WalkProps {
  currentNode: string,
  currentPatternIndex: number,
  steps: number,
};

export class Puzzle1 extends Puzzle {

  pattern: string[] = [];
  network: any = {};

  startNode: string = 'AAA';
  endNode: string = 'ZZZ';
  walkSegmentMaxSteps: number = 100;

  constructor(inputFile: string) {
    super(inputFile);
    this.pattern = this.input[0].split('');
    this._parseNetwork();
  }

  private _parseNetwork() {
    this.input.slice(1).forEach(i => {
      // AAA = (BBB, CCC)
      // 123 = (456, A7Z)
      const [nameMatch, lMatch, rMatch] = [...i.matchAll(/([A-Z0-9]{3})/g)];
      this.network[nameMatch[0]] = { L: lMatch[0], R: rMatch[0] };
    })
  }

  getDirection(currentPatternIndex: number): string {
    return this.pattern[currentPatternIndex % this.pattern.length];
  }

  getNextNetworkNode(currentNetworkNode: string, nextDirection: string): string {
    return this.network[currentNetworkNode][nextDirection];
  }

  walk(currentNode: string, currentPatternIndex: number = 0, steps: number = 0): WalkProps {
    if (currentNode === this.endNode || steps >= this.walkSegmentMaxSteps)
      return { currentNode, currentPatternIndex, steps } as WalkProps;
    const direction = this.getDirection(currentPatternIndex);
    const nextNetworkNode = this.getNextNetworkNode(currentNode, direction);
    return this.walk(nextNetworkNode, currentPatternIndex + 1, steps + 1);
  }

  solve(): number {
    let steps = 0;
    let finished = false;
    let walkProps = {
      currentNode: this.startNode,
      currentPatternIndex: 0,
      steps: 0,
    } as WalkProps;

    do {
      // console.log('Before', walkProps);
      walkProps = this.walk(walkProps.currentNode, walkProps.currentPatternIndex, 0);
      steps += walkProps.steps;
      finished = walkProps.currentNode === this.endNode;
      // console.log('After', walkProps);
    } while (!finished);

    return steps;
  }
};
