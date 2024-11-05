import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day2/puzzle2';

const inputSample = './input.txt';
const inputSampleParsed = [
  { id: 1, minPower: 48 },
  { id: 2, minPower: 12 },
  { id: 3, minPower: 1560 },
  { id: 4, minPower: 630 },
  { id: 5, minPower: 36 },
];

describe('Reading the input', () => {

  test('Should read the input', () => {
    const puzzle1 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle1.input).not.toBeNull();
    expect(puzzle1.input).toBeInstanceOf(Array);
    expect(puzzle1.input.length).toBe(5);
  });
});

describe('Getting minimum set of cubes\' power', () => {

  test('Should get the minimum set of cubes\' power of game record', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const i in puzzle2.input) {
      expect(puzzle2.parseGameRecordMinPower(puzzle2.input[i])).toBe(inputSampleParsed[i].minPower);
    }
  });
});
