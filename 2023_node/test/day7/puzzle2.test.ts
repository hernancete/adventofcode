import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day7/puzzle2';
import { JokerHand } from '../../src/day7/jokerHand';

const inputSample = './input.txt';
const inputSampleBids = [765, 684, 28, 220, 483];
const inputSampleOrdered = [
  '32T3K',
  'KK677',
  'T55J5',
  'QQQJA',
  'KTJJT',
];
const answer = 5905;

describe('Parsing the input', () => {

  test('Should parse the input', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.input).toBeInstanceOf(Array);
    expect(puzzle2.input).toHaveLength(5);
    expect(puzzle2.hands).toBeInstanceOf(Array);
    expect(puzzle2.hands).toHaveLength(5);
  });

  test('Should load bid for every hand', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.hands).toBeInstanceOf(Array);
    expect(puzzle2.hands).toHaveLength(5);
    expect.assertions(7);
    inputSampleBids.forEach((bid, indx) => {
      expect(puzzle2.hands[indx].bid).toBe(bid);
    });
  });
});

describe('Solving the puzzle', () => {

  test('Should order the hands by ascendant strength', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.sortHands();
    for (const h in inputSampleOrdered) {
      const orderedHand = new JokerHand(inputSampleOrdered[h]);
      expect(puzzle2.hands[h].isEqual(orderedHand)).toBeTruthy();
    }
  });

  test('Should solve the puzzle', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.sortHands();

    expect(puzzle2.solve()).toBe(answer);
  });
});
