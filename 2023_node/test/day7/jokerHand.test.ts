import { describe, test, expect } from '@jest/globals';
import { JokerHand } from '../../src/day7/jokerHand';

const sampleHands = [
  { hand: '32T3K', bid: 765, type: 'OnePair', ordered: 'KT332' },
  { hand: 'T55J5', bid: 684, type: 'FourOfAKind', ordered: 'T555J' },
  { hand: 'KK677', bid: 28, type: 'TwoPair', ordered: 'KK776' },
  { hand: 'KTJJT', bid: 220, type: 'FourOfAKind', ordered: 'KTTJJ' },
  { hand: 'QQQJA', bid: 483, type: 'FourOfAKind', ordered: 'AQQQJ' },
];
const moreSampleHands = [
  { hand: 'AAAAA', type: 'FiveOfAKind' },
  { hand: 'AAAA7', type: 'FourOfAKind' },
  { hand: 'AAA33', type: 'FullHuse' },
  { hand: 'AAA65', type: 'ThreeOfAKind' },
  { hand: 'AAKK8', type: 'TwoPair' },
  { hand: 'AA234', type: 'OnePair' },
  { hand: 'AKQJT', type: 'OnePair' },
  { hand: '55555', type: 'FiveOfAKind' },
  { hand: '99K99', type: 'FourOfAKind' },
  { hand: '23232', type: 'FullHuse' },
  { hand: '4JJ3J', type: 'FourOfAKind' },
  { hand: '8QQA8', type: 'TwoPair' },
  { hand: '796K6', type: 'OnePair' },
  { hand: '9843Q', type: 'HighCard' },
  { hand: 'JJJJJ', type: 'FiveOfAKind' },
  { hand: '3JJJJ', type: 'FiveOfAKind' },
  { hand: '33JJJ', type: 'FiveOfAKind' },
  { hand: '34JJJ', type: 'FourOfAKind' },
  { hand: '333JJ', type: 'FiveOfAKind' },
  { hand: '334JJ', type: 'FourOfAKind' },
  { hand: '345JJ', type: 'ThreeOfAKind' },
  { hand: '3333J', type: 'FiveOfAKind' },
  { hand: '3334J', type: 'FourOfAKind' },
  { hand: '3344J', type: 'FullHuse' },
  { hand: '3456J', type: 'OnePair' },
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

  test('Should find the hand type', () => {
    for (const h of [...sampleHands, ...moreSampleHands]) {
      const hand = new JokerHand(h.hand);

      expect(hand.type).toBe(h.type);
    }
  });
});

