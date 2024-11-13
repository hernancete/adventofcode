import { describe, test, expect } from '@jest/globals';
import { JokerHand } from '../../src/day07/jokerHand';

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

describe('Operating with hands', () => {

  test('Should sort the hand\'s cards descendingly', () => {
    for (const h of sampleHands) {
      const hand = new JokerHand(h.hand);

      expect(hand.sort()).toBe(h.ordered);
    }
  });

  test('Should know if two hands are the same, even in different order', () => {
    const hand1 = new JokerHand('99K99');
    const hand2 = new JokerHand('23232');
    const hand3 = new JokerHand('4JJ3J');
    const hand4 = new JokerHand('8QQA8');
    const hand5 = new JokerHand('22332'); // same as hand2
    const hand6 = new JokerHand('34JJJ'); // same as hand3
    const hand7 = new JokerHand('23456');
    const hand8 = new JokerHand('65432'); // same as hand7

    expect(hand1.isEqual(hand2)).toBeFalsy();
    expect(hand2.isEqual(hand1)).toBeFalsy();
    expect(hand3.isEqual(hand4)).toBeFalsy();
    expect(hand5.isEqual(hand2)).toBeTruthy();
    expect(hand6.isEqual(hand3)).toBeTruthy();
    expect(hand7.isEqual(hand8)).toBeTruthy();
    expect(hand1.isEqual(hand1)).toBeTruthy();
  });
});
