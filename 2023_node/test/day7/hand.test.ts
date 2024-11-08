import { describe, test, expect } from '@jest/globals';
import { Hand } from '../../src/day7/hand';

// FiveOfAKind:   AAAAA
// FourOfAKind:   AAAA7
// FullHuse:      AAA33
// ThreeOfAKind:  AAA65
// TwoPair:       AAKK8
// OnePair:       AA234
// HighCard:      AKQJT

const sampleHands = [
  { hand: '32T3K', bid: 765, type: 'OnePair' },
  { hand: 'T55J5', bid: 684, type: 'ThreeOfAKind' },
  { hand: 'KK677', bid: 28, type: 'TwoPair' },
  { hand: 'KTJJT', bid: 220, type: 'TwoPair' },
  { hand: 'QQQJA', bid: 483, type: 'ThreeOfAKind' },
];
const moreSampleHands = [
  { hand: 'AAAAA', type: 'FiveOfAKind' },
  { hand: 'AAAA7', type: 'FourOfAKind' },
  { hand: 'AAA33', type: 'FullHuse' },
  { hand: 'AAA65', type: 'ThreeOfAKind' },
  { hand: 'AAKK8', type: 'TwoPair' },
  { hand: 'AA234', type: 'OnePair' },
  { hand: 'AKQJT', type: 'HighCard' },
];

describe('Creating hand', () => {

  test('Should create a hand', () => {
    for (const h of sampleHands) {
      const hand = new Hand(h.hand);

      expect(hand.hand).toBe(h.hand);
    }
  });

  test('Should find the hand type', () => {
    for (const h of [...sampleHands, ...moreSampleHands]) {
      const hand = new Hand(h.hand);

      expect(hand.type).toBe(h.type);
    }
  });
});
