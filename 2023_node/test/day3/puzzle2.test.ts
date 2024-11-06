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

describe('Looking for gears', () => {

  test('Should get potential gears in a line', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    const firstLineIndex = 0;
    const secondLineIndex = 1;
    const fifhtLineIndex = 4;
    const firstLineGears = puzzle2.getPotentialGearsInline(firstLineIndex);
    const secondLineGears = puzzle2.getPotentialGearsInline(secondLineIndex);
    const fifthLineGears = puzzle2.getPotentialGearsInline(fifhtLineIndex);

    expect(firstLineGears).toBeInstanceOf(Array);
    expect(firstLineGears).toHaveLength(0);
    expect(secondLineGears).toBeInstanceOf(Array);
    expect(secondLineGears).toHaveLength(1);
    expect(secondLineGears).toEqual(expect.arrayContaining([expect.objectContaining({ line: 1, index: 3 })]));
    expect(fifthLineGears).toBeInstanceOf(Array);
    expect(fifthLineGears).toHaveLength(1);
    expect(fifthLineGears).toEqual(expect.arrayContaining([expect.objectContaining({ line: 4, index: 3 })]));
  });
});
