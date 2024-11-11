import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day7/puzzle1';

const inputSample = './input.txt';
const inputSampleBids = [765, 684, 28, 220, 483];

describe('Parsing the input', () => {

  test('Should parse the input', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.input).toBeInstanceOf(Array);
    expect(puzzle1.input).toHaveLength(5);
    expect(puzzle1.hands).toBeInstanceOf(Array);
    expect(puzzle1.hands).toHaveLength(5);
  });

  test('Should load bid for every hand', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.hands).toBeInstanceOf(Array);
    expect(puzzle1.hands).toHaveLength(5);
    expect.assertions(7);
    inputSampleBids.forEach((bid, indx) => {
      expect(puzzle1.hands[indx].bid).toBe(bid);
    });
  });
});
