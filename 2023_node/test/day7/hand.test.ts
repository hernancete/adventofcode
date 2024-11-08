import { describe, test, expect } from '@jest/globals';
import { Hand } from '../../src/day7/hand';

const sampleHands = [
  { hand: '32T3K', bid: 765 },
  { hand: 'T55J5', bid: 684 },
  { hand: 'KK677', bid: 28 },
  { hand: 'KTJJT', bid: 220 },
  { hand: 'QQQJA', bid: 483 },
];

describe('Creating hand', () => {

  test('Should create a hand', () => {
    for (const h of sampleHands) {
      const hand = new Hand(h.hand);

      expect(hand.hand).toBe(h.hand);
    }
  });
});