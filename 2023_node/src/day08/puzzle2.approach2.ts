// I first attempted to make it the hard way, the only way I came up with.
// Trying to walk one step for every starting node simultaneously and check
// if all of them are in a ending node.But I realized that that way it'll
// last forever!! In fact it's been running since 5 hours ago and there are
// 77787000000 steps wolked(the 0.5 %).
// After some research, people mentioned that given some conditions of the input,
// like:
// * every starting node ends up in the same ending node,
// * every path from the starting node to the ending node is the same lenght
// * the path's length is a multiple of the directions (pattern: LRLRLRLLRRLRRL...)
// so a possible solution approach would be to calculate the lcm (least common
// multiple) for every starting node path.

import { Puzzle1 } from "./puzzle1";

interface WalkProps {
  currentNode: string,
  steps: number,
};

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

  walk2(currentNode: string, steps: number = 0): WalkProps {
    const direction = this.getDirection(steps);
    const nextNetworkNode = this.getNextNetworkNode(currentNode, direction);
    const nextStep = steps + 1;
    if (this.isEndingNode(nextNetworkNode) || nextStep >= this.walkSegmentMaxSteps)
      return { currentNode: nextNetworkNode, steps: nextStep } as WalkProps;
    return this.walk2(nextNetworkNode, nextStep);
  }

  getPath(startNode: string, totalLoops: number = 10): WalkProps[] {
    let completedLoops: WalkProps[] = [];
    let walkProps = {
      currentNode: startNode,
      steps: 0,
    } as WalkProps;

    do {
      // console.log('Before', walkProps);
      walkProps = this.walk2(walkProps.currentNode, walkProps.steps);
      if (this.isEndingNode(walkProps.currentNode)) {
        completedLoops.push(walkProps);
      }
      // console.log('After', walkProps);
    } while (completedLoops.length < totalLoops);

    return completedLoops;
  }

  private _areAllEndingNodesEquals(loops: WalkProps[]): boolean {
    const firstLoopEndingNode = loops[0].currentNode;
    return loops.every(l => l.currentNode === firstLoopEndingNode);
  }

  private _areLoopsLengthEquals(loops: WalkProps[]): boolean {
    const firstLoopLength = loops[0].steps;
    return loops.every((l, i) => l.steps === firstLoopLength * (i + 1));
  }

  private _loopsNeededToBeMultipleOfPatternLength(loops: WalkProps[]): number {
    let ret = 0;
    for (let i = 0; i < loops.length; i++) {
      if (loops[i].steps % this.pattern.length === 0) {
        ret = i + 1;
        break;
      }
    }
    return ret;
  }

  private _checkConditions(loops: WalkProps[]): any {
    const sameEndingNode = this._areAllEndingNodesEquals(loops);
    const sameLength = this._areLoopsLengthEquals(loops);
    const loopsNeededToBeMultipleOfPatternLength = this._loopsNeededToBeMultipleOfPatternLength(loops);
    const loopsAndPatternLCM = loopsNeededToBeMultipleOfPatternLength * loops[0].steps;
    return {
      sameEndingNode,
      sameLength,
      loopsNeededToBeMultipleOfPatternLength,
      loopsAndPatternLCM,
    };
  }

  solve(): number {
    const loopsPerStartingNode = 10;
    const startingNodesPathAttributes = this.startingNodes.map(sn => {
      const loops = this.getPath(sn, loopsPerStartingNode);
      return {
        ...this._checkConditions(loops),
        startingNode: sn,
        endingNode: loops[0].currentNode, // if this._checkConditions(loops).sameEndingNode is false, then this doesn't make sense
        length: loops[0].steps,
      };
    });

    const calculateLCM: number[] = startingNodesPathAttributes.map(pathAttr => {
      if (pathAttr.sameEndingNode && pathAttr.sameLength) return pathAttr.loopsAndPatternLCM;
      return 0;
    });

    return calculateLCM.reduce((p, c) => lcm(p, c));
  }
};


// Function to calculate GCD using the Euclidean algorithm
const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Function to calculate LCM using the formula LCM(a, b) = (a * b) / GCD(a, b)
const lcm = (a: number, b: number): number => {
  return Math.abs(a * b) / gcd(a, b);
}
