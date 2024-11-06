import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1, Card } from '../../src/day4/puzzle1';
import { readFileLines } from '../../src/shared/utils';

const inputSample = './input.txt';
const inputSampleCardLines = [
  { line: 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53', card: 1, winning: [41, 48, 83, 86, 17], numbers: [83, 86, 6, 31, 17, 9, 48, 53], coincidences: [48, 83, 17, 86], points: 8 },
  { line: 'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19', card: 2, winning: [13, 32, 20, 16, 61], numbers: [61, 30, 68, 82, 17, 32, 24, 19], coincidences: [32, 61], points: 2 },
  { line: 'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1', card: 3, winning: [1, 21, 53, 59, 44], numbers: [69, 82, 63, 72, 16, 21, 14, 1], coincidences: [1, 21], points: 2 },
  { line: 'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83', card: 4, winning: [41, 92, 73, 84, 69], numbers: [59, 84, 76, 51, 58, 5, 54, 83], coincidences: [84], points: 1 },
  { line: 'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36', card: 5, winning: [87, 83, 26, 28, 32], numbers: [88, 30, 70, 12, 93, 22, 82, 36], coincidences: [], points: 0 },
  { line: 'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11', card: 6, winning: [31, 18, 13, 56, 72], numbers: [74, 77, 10, 23, 35, 67, 36, 11], coincidences: [], points: 0 },
];

describe('Parsing cards', () => {

  test('Should get winning numbers', () => {

    for (const iscl of inputSampleCardLines) {
      const card = new Card(iscl.line);
      const winning = card.getWinningNumbers();

      expect(winning).toBeInstanceOf(Array);
      expect(winning).toHaveLength(iscl.winning.length);
      expect(winning).toEqual(expect.arrayContaining(iscl.winning));
    }
  });

  test('Should get my numbers', () => {

    for (const iscl of inputSampleCardLines) {
      const card = new Card(iscl.line);
      const numbers = card.getNumbers();

      expect(numbers).toBeInstanceOf(Array);
      expect(numbers).toHaveLength(iscl.numbers.length);
      expect(numbers).toEqual(expect.arrayContaining(iscl.numbers));
    }
  });

});
