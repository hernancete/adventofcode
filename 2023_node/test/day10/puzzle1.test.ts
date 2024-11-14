import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle1 } from '../../src/day10/puzzle1';

const inputSample = './input.txt';
const input2Sample = './input2.txt';

describe('Parsing the input', () => {

  test('Should find the starting point', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const anotherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.startingPoint).toEqual(expect.arrayContaining([1, 1]));
    expect(anotherPuzzle1.startingPoint).toEqual(expect.arrayContaining([2, 0]));
  })
});
