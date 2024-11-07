import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day5/puzzle1';

const inputSample = './input.txt';
const sampleSeed = 10; // 10 -> 10 -> 49 -> 38 -> 31 -> 31 -> 32 -> 32
const sampleLocation = 32;

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

  test('Should load the ranges in every mapper', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.mappers[0]).toHaveProperty('ranges');
    expect(puzzle1.mappers[0].ranges).toHaveLength(2);
    expect(puzzle1.mappers[1].ranges).toHaveLength(3);
    expect(puzzle1.mappers[2].ranges).toHaveLength(4);
    expect(puzzle1.mappers[3].ranges).toHaveLength(2);
    expect(puzzle1.mappers[4].ranges).toHaveLength(3);
    expect(puzzle1.mappers[5].ranges).toHaveLength(2);
    expect(puzzle1.mappers[6].ranges).toHaveLength(2);
    expect(puzzle1.mappers[6].ranges[0]).toEqual(expect.objectContaining({
      sourceFrom: 56,
      sourceTo: 92,
      destFrom: 60,
      destTo: 96,
    }));
  });
});

describe('Solving the puzzle', () => {

  test('Should pass a seed for every mapper and get the location info', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.map(sampleSeed)).toBe(sampleLocation);
  });
});
