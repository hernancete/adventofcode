import { Puzzle } from "../shared/puzzle";

export class Puzzle1 extends Puzzle {

  pattern: string[] = [];
  network: any = {};

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

  getNextDirection(currentPatternIndex: number): string {
    return this.pattern[(currentPatternIndex + 1) % this.pattern.length];
  }
};
