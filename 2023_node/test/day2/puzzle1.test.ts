import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle1 } from '../../src/day2/puzzle1';

const inputSample = './input.txt';
const inputSampleParsed = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
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
});
