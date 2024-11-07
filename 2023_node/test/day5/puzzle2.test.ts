import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day5/puzzle2';

const inputSample = './input.txt';
const inputSampleSeedsAndLocations = [
  { seed: 79, location: 82 },
  { seed: 14, location: 43 },
  { seed: 55, location: 86 },
  { seed: 13, location: 35 },
  { seed: 82, location: 46 },
];
const answer = 46;

describe('Parsing the input', () => {

  test('Should load the seeds', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.seeds).toBeInstanceOf(Array);
    expect(puzzle2.seeds).toHaveLength(27);
    expect(puzzle2.seeds).toEqual(expect.arrayContaining([79, 80, 81, 91, 92, 55, 56, 66, 67]));
    expect(puzzle2.seeds).toEqual(expect.not.arrayContaining([14, 13]));
  });
});

describe('Solving the puzzle', () => {

  test('Should get the location for every input seed', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const s of inputSampleSeedsAndLocations) {
      expect(puzzle2.map(s.seed)).toBe(s.location);
    }
  });

  test('Should solve the puzzle', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    expect(puzzle2.solve()).toBe(answer);
  });
});
