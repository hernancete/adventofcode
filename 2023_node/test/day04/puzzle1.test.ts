import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day04/puzzle1';

const inputSample = './input.txt';
const answer = 13;

describe('Solving the puzzle', () => {

  test('Should load all the cards', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    puzzle1.loadCards();

    expect(puzzle1.cards).toBeInstanceOf(Array);
    expect(puzzle1.cards).toHaveLength(6);
  });

  test('Should solve the puzzle', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    puzzle1.loadCards();

    expect(puzzle1.solve()).toBe(answer);
  });
});
