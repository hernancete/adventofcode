import { describe, test, expect } from '@jest/globals';
import { Puzzle1 } from '../../src/day1/puzzle1';

import path from 'path';

const inputSample = './test/day1/inputSample.txt';
const inputSampleNoNewLine = './test/day1/inputSampleNoNewLine.txt';
const thirdInputLine = 'ninevbmltwo69';

const inputSampleDigits = [
  ['1', '1'],
  ['6', '6'],
  ['6', '9'],
  ['9', '1'],
  ['3', '1'],
  ['5', '5'],
  ['7', '9'],
  ['1', '9'],
  ['3', '3'],
  ['2', '2'],
];

const FIRST_DIGIT_KEY = 0;
const LAST_DIGIT_KEY = 1;

describe('Day1 Puzzle1', () => {
  test('First dummy test', () => {
    expect(1).toBe(1);
  });

  describe('Reading input file', () => {

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

  describe('Getting individual digits', () => {
    test('Should get the first digit', () => {
      const puzzle1: Puzzle1 = new Puzzle1();
      const input = puzzle1.readInput(path.resolve(inputSample));

      for (const i in input) {
        expect(puzzle1.getFirstDigit(input[i])).toBe(inputSampleDigits[i][FIRST_DIGIT_KEY]);
      }
    });

    test('Should get the last digit', () => {
      const puzzle1: Puzzle1 = new Puzzle1();
      const input = puzzle1.readInput(path.resolve(inputSample));

      for (const i in input) {
        expect(puzzle1.getLastDigit(input[i])).toBe(inputSampleDigits[i][LAST_DIGIT_KEY]);
      }
    });

  });


});
