import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day3/puzzle2';

const inputSample = './input.txt';
const inputSampleThirdLine = '..35..633.';

describe('Reading the input', () => {

  test('Should read the input', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.input).not.toBeNull();
    expect(puzzle2.input).toBeInstanceOf(Array);
    expect(puzzle2.input.length).toBe(10);
    expect(puzzle2.input).toContain(inputSampleThirdLine);
  });
});
