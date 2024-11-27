import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day11/puzzle1';

const sampleA = getAbsPath(__dirname, './input.txt');

describe('Parsing the input', () => {

  test('Should parse the input', () => {
    const puzzle1 = new Puzzle1(sampleA);

    expect(puzzle1.input).toBeInstanceOf(Array);
    expect(puzzle1.input).toHaveLength(10);
    expect(typeof puzzle1.input[0]).toBe('string');
    expect(puzzle1.input[0]).toHaveLength(10);
    expect(puzzle1.input[0]).toMatch(/^[\.#]{10}$/);
  });
});
