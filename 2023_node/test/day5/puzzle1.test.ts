import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day5/puzzle1';

const inputSample = './input.txt';

describe('Parsing the input', () => {

  test('Should load the seeds', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.seeds).toBeInstanceOf(Array);
    expect(puzzle1.seeds).toHaveLength(4);
    expect(puzzle1.seeds).toEqual(expect.arrayContaining([79, 14, 55, 13]));
  });

  test('Should load the mappers, just create them, do not load the ranges on them', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.mappers).toBeInstanceOf(Array);
    expect(puzzle1.mappers).toHaveLength(7);
  });
});
