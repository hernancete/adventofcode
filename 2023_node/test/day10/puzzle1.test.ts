import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle1 } from '../../src/day10/puzzle1';

const inputSample = './input.txt';
const input2Sample = './input2.txt';

describe('Parsing the input', () => {

  test('Should find the starting point location', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const anotherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.startingPointLocation).toEqual({ lat: 1, lon: 1 });
    expect(anotherPuzzle1.startingPointLocation).toEqual({ lat: 2, lon: 0 });
  });

  test('Should get the starting point type', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const anotherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.startingPointType).toBe('F');
    expect(anotherPuzzle1.startingPointType).toBe('F');
  });
});
