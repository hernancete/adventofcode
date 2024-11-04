import { describe, test, expect } from '@jest/globals';
import { Puzzle1 } from '../../src/day1/puzzle1';

import path from 'path';

const inputSample = './test/day1/inputSample.txt';
const inputSampleNoNewLine = './test/day1/inputSampleNoNewLine.txt';
const thirdInputLine = 'ninevbmltwo69';

describe('Day1 Puzzle1', () => {
  test('First dummy test', () => {
    expect(1).toBe(1);
  });

  test('Should read the input', () => {
    const puzzle1 = new Puzzle1();
    const input = puzzle1.readInput(path.resolve(inputSample));

    expect(input).not.toBeNull();
    expect(input).toBeInstanceOf(Array);
    expect(input.length).toBe(10);
    expect(input).toContain(thirdInputLine);
  });

  test('Should read the input with no ending new line', () => {
    const puzzle1 = new Puzzle1();
    const input = puzzle1.readInput(path.resolve(inputSampleNoNewLine));

    expect(input).not.toBeNull();
    expect(input).toBeInstanceOf(Array);
    expect(input.length).toBe(10);
    expect(input).toContain(thirdInputLine);
  });

});
