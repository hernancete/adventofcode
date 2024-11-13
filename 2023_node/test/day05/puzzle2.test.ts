import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day05/puzzle2';

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

  test('Should load the seeds ranges', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.seedRanges).toBeInstanceOf(Array);
    expect(puzzle2.seedRanges).toHaveLength(2);
    expect(puzzle2.seedRanges).toEqual(expect.arrayContaining([
      expect.objectContaining({ start: 79, length: 14 }),
      expect.objectContaining({ start: 55, length: 13 }),
    ]));
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
