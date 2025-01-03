import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day07/puzzle1';
import { Hand } from '../../src/day07/hand';

const inputSample = './input.txt';
const inputSampleBids = [765, 684, 28, 220, 483];
const inputSampleOrdered = [
  '32T3K',
  'KTJJT',
  'KK677',
  'T55J5',
  'QQQJA',
];
const answer = 6440;

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

describe('Solving the puzzle', () => {

  test('Should order the hands by ascendant strength', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    puzzle1.sortHands();
    for (const h in inputSampleOrdered) {
      const orderedHand = new Hand(inputSampleOrdered[h]);
      expect(puzzle1.hands[h].isEqual(orderedHand)).toBeTruthy();
    }
  });

  test('Should solve the puzzle', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    puzzle1.sortHands();

    expect(puzzle1.solve()).toBe(answer);
  });
});
