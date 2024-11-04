import { describe, test, expect } from '@jest/globals';
import { Puzzle2 } from "../../src/day1/puzzle2";
import path from 'path';

const inputSample = './test/day1/inputSample.txt';
const inputSampleDigits = [
  ['5', '1', 51],
  ['6', '4', 64],
  ['9', '9', 99],
  ['9', '8', 98],
  ['5', '1', 51],
  ['9', '5', 95],
  ['3', '9', 39],
  ['1', '9', 19],
  ['5', '3', 53],
  ['2', '7', 27],
];

const FIRST_DIGIT_KEY = 0;
const LAST_DIGIT_KEY = 1;

describe('Reading both digits and spelled numbers', () => {

  test('Should return the digit spelled', () => {
    const spelledDigits = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    const puzzle2 = new Puzzle2(path.resolve(inputSample));
    for (const i in spelledDigits) {
      expect(puzzle2.spelledToDigit(spelledDigits[i])).toBe((parseInt(i) + 1).toString());
    }
  })

  test('Should read first digit as digit or spelled number', () => {
    const puzzle2 = new Puzzle2(path.resolve(inputSample));
    for (const i in puzzle2.input) {
      expect(puzzle2.getFirstDigit(puzzle2.input[i])).toBe(inputSampleDigits[i][FIRST_DIGIT_KEY]);
    }
  });

});
