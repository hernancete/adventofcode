import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day09/puzzle1';

const inputSample = './input.txt';

describe('Parsing the input', () => {

  test('Should parse the history records', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.history).toBeInstanceOf(Array);
    expect(puzzle1.history).toHaveLength(3);
    expect(puzzle1.history[0]).toEqual(expect.arrayContaining([6, 9, 12]));
    expect(puzzle1.history[1]).toEqual(expect.arrayContaining([1, 3, 6, 10]));
    expect(puzzle1.history[2]).toEqual(expect.arrayContaining([21, 30, 45]));
  });
});
