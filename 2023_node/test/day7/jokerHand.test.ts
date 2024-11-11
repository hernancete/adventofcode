import { describe, test, expect } from '@jest/globals';
import { JokerHand } from '../../src/day7/jokerHand';

const sampleHands = [
  { hand: '32T3K', bid: 765, type: 'OnePair', ordered: 'KT332' },
  { hand: 'T55J5', bid: 684, type: 'FourOfAKind', ordered: 'T555J' },
  { hand: 'KK677', bid: 28, type: 'TwoPair', ordered: 'KK776' },
  { hand: 'KTJJT', bid: 220, type: 'FourOfAKind', ordered: 'KTTJJ' },
  { hand: 'QQQJA', bid: 483, type: 'FourOfAKind', ordered: 'AQQQJ' },
];

describe('Creating joker hand', () => {

  test('Should create a hand', () => {
    for (const h of sampleHands) {
      const jokerHand = new JokerHand(h.hand);

      expect(jokerHand.hand).toBe(h.hand);
    }
  });

  test('Should load the bid', () => {
    for (const h of sampleHands) {
      const hand = new JokerHand(h.hand);
      hand.loadBid(h.bid);

      expect(hand.bid).toBe(h.bid);
    }
  });

  test('Should have a bid of 0 if no bid was loaded', () => {
    for (const h of sampleHands) {
      const hand = new JokerHand(h.hand);

      expect(hand.bid).toBe(0);
    }
  });
});

