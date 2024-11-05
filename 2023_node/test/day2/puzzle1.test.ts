import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle1 } from '../../src/day2/puzzle1';

const inputSample = './input.txt';
const inputSampleParsed = [
  { id: 1, maxBlue: 6, maxRed: 4, maxGreen: 2 },
  { id: 2, maxBlue: 4, maxRed: 1, maxGreen: 3 },
  { id: 3, maxBlue: 6, maxRed: 20, maxGreen: 13 },
  { id: 4, maxBlue: 15, maxRed: 14, maxGreen: 3 },
  { id: 5, maxBlue: 2, maxRed: 6, maxGreen: 3 },
];

test('Should read the input', () => {
  const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

  expect(puzzle1.input).not.toBeNull();
  expect(puzzle1.input).toBeInstanceOf(Array);
  expect(puzzle1.input.length).toBe(5);
});

describe('Parsing game records', () => {

  test('Should return game record id', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      expect(puzzle1.parseLine(puzzle1.input[i])).toHaveProperty('id', inputSampleParsed[i].id);
    }
  });

  test('Should get game record max blue cubes', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      expect(puzzle1.parseLine(puzzle1.input[i])).toHaveProperty('maxBlue', inputSampleParsed[i].maxBlue);
    }
  });

  test('Should get game record max red cubes', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      expect(puzzle1.parseLine(puzzle1.input[i])).toHaveProperty('maxRed', inputSampleParsed[i].maxRed);
    }
  });

  test('Should get game record max green cubes', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      expect(puzzle1.parseLine(puzzle1.input[i])).toHaveProperty('maxGreen', inputSampleParsed[i].maxGreen);
    }
  });
});
