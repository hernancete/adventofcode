import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day07/puzzle2';
import { JokerHand } from '../../src/day07/jokerHand';

const inputSample = './input.txt';
const input2Sample = './input2.txt';
const inputSampleBids = [765, 684, 28, 220, 483];
const inputSampleOrdered = [
  '32T3K',
  'KK677',
  'T55J5',
  'QQQJA',
  'KTJJT',
];
const input2SampleHands = [
  { hand: '9843Q', type: 'HighCard', rank: 1 },
  { hand: '3456J', type: 'OnePair', rank: 2 },
  { hand: '796K6', type: 'OnePair', rank: 3 },
  { hand: 'AKQJT', type: 'OnePair', rank: 4 },
  { hand: 'AA234', type: 'OnePair', rank: 5 },
  { hand: '8QQA8', type: 'TwoPair', rank: 6 },
  { hand: 'AAKK8', type: 'TwoPair', rank: 7 },
  { hand: '345JJ', type: 'ThreeOfAKind', rank: 8 },
  { hand: 'AAA65', type: 'ThreeOfAKind', rank: 9 },
  { hand: '23232', type: 'FullHuse', rank: 10 },
  { hand: '3344J', type: 'FullHuse', rank: 11 },
  { hand: 'AAA33', type: 'FullHuse', rank: 12 },
  { hand: '3334J', type: 'FourOfAKind', rank: 13 },
  { hand: '334JJ', type: 'FourOfAKind', rank: 14 },
  { hand: '34JJJ', type: 'FourOfAKind', rank: 15 },
  { hand: '4JJ3J', type: 'FourOfAKind', rank: 16 },
  { hand: '99K99', type: 'FourOfAKind', rank: 17 },
  { hand: 'AAAA7', type: 'FourOfAKind', rank: 18 },
  { hand: 'JJJJJ', type: 'FiveOfAKind', rank: 19 },
  { hand: '3JJJJ', type: 'FiveOfAKind', rank: 20 },
  { hand: '33JJJ', type: 'FiveOfAKind', rank: 21 },
  { hand: '333JJ', type: 'FiveOfAKind', rank: 22 },
  { hand: '3333J', type: 'FiveOfAKind', rank: 23 },
  { hand: '55555', type: 'FiveOfAKind', rank: 24 },
  { hand: 'AAAAA', type: 'FiveOfAKind', rank: 25 },
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

  test('Should get the correct rank', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, input2Sample));
    puzzle2.sortHands();

    for (const i in puzzle2.hands) {
      expect(puzzle2.hands[i].type).toBe(input2SampleHands[i].type);
      expect(puzzle2.hands[i].hand).toBe(input2SampleHands[i].hand);
      expect(parseInt(i) + 1).toBe(input2SampleHands[i].rank);
    }
  });

  test('Should solve the puzzle', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.sortHands();

    expect(puzzle2.solve()).toBe(answer);
  });
});
