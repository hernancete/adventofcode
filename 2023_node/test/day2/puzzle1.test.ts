import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle1 } from '../../src/day2/puzzle1';


const inputSample = './input.txt';

test('Should read the input', () => {
  const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

  expect(puzzle1.input).not.toBeNull();
  expect(puzzle1.input).toBeInstanceOf(Array);
  expect(puzzle1.input.length).toBe(5);
});
