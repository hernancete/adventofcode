import { describe, test, expect } from '@jest/globals';
import { Hand } from '../../src/day07/hand';

// FiveOfAKind:   AAAAA
// FourOfAKind:   AAAA7
// FullHuse:      AAA33
// ThreeOfAKind:  AAA65
// TwoPair:       AAKK8
// OnePair:       AA234
// HighCard:      AKQJT

const sampleHands = [
  { hand: '32T3K', bid: 765, type: 'OnePair', ordered: 'KT332' },
  { hand: 'T55J5', bid: 684, type: 'ThreeOfAKind', ordered: 'JT555' },
  { hand: 'KK677', bid: 28, type: 'TwoPair', ordered: 'KK776' },
  { hand: 'KTJJT', bid: 220, type: 'TwoPair', ordered: 'KJJTT' },
  { hand: 'QQQJA', bid: 483, type: 'ThreeOfAKind', ordered: 'AQQQJ' },
];
const moreSampleHands = [
  { hand: 'AAAAA', type: 'FiveOfAKind' },
  { hand: 'AAAA7', type: 'FourOfAKind' },
  { hand: 'AAA33', type: 'FullHuse' },
  { hand: 'AAA65', type: 'ThreeOfAKind' },
  { hand: 'AAKK8', type: 'TwoPair' },
  { hand: 'AA234', type: 'OnePair' },
  { hand: 'AKQJT', type: 'HighCard' },
  { hand: '55555', type: 'FiveOfAKind' },
  { hand: '99K99', type: 'FourOfAKind' },
  { hand: '23232', type: 'FullHuse' },
  { hand: '4JJ3J', type: 'ThreeOfAKind' },
  { hand: '8QQA8', type: 'TwoPair' },
  { hand: '796K6', type: 'OnePair' },
  { hand: '9843Q', type: 'HighCard' },
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

  test('Should load the bid', () => {
    for (const h of sampleHands) {
      const hand = new Hand(h.hand);
      hand.loadBid(h.bid);

      expect(hand.bid).toBe(h.bid);
    }
  });

  test('Should have a bid of 0 if no bid was loaded', () => {
    for (const h of sampleHands) {
      const hand = new Hand(h.hand);

      expect(hand.bid).toBe(0);
    }
  });
});

describe('Operating with hands', () => {

  test('Should sort the hand\'s cards descendingly', () => {
    for (const h of sampleHands) {
      const hand = new Hand(h.hand);

      expect(hand.sort()).toBe(h.ordered);
    }
  });

  test('Should know if two hands are the same, even in different order', () => {
    const hand1 = new Hand('99K99');
    const hand2 = new Hand('23232');
    const hand3 = new Hand('4JJ3J');
    const hand4 = new Hand('8QQA8');
    const hand5 = new Hand('22332'); // same as hand2
    const hand6 = new Hand('34JJJ'); // same as hand3
    const hand7 = new Hand('23456');
    const hand8 = new Hand('65432'); // same as hand7

    expect(hand1.isEqual(hand2)).toBeFalsy();
    expect(hand2.isEqual(hand1)).toBeFalsy();
    expect(hand3.isEqual(hand4)).toBeFalsy();
    expect(hand5.isEqual(hand2)).toBeTruthy();
    expect(hand6.isEqual(hand3)).toBeTruthy();
    expect(hand7.isEqual(hand8)).toBeTruthy();
    expect(hand1.isEqual(hand1)).toBeTruthy();
  });
});
