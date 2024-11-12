import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day8/puzzle2.approach2';

const inputSample = './input3.txt';
const answer = 6;

describe('Go to the bifes', () => {

  test('Should solve the puzzle', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.loadStartingNodes();
    expect(puzzle2.solve()).toBe(answer);
  });
});
