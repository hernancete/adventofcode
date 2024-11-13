import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day06/puzzle1';

const inputSample = './input.txt';
const answer = 288;

describe('Parseing the input', () => {

  test('Should parse the input and set the races', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.races).toBeInstanceOf(Array);
    expect(puzzle1.races).toHaveLength(3);
    expect(puzzle1.races[0]).toHaveProperty('time', 7);
    expect(puzzle1.races[0]).toHaveProperty('record', 9);
    expect(puzzle1.races[1]).toHaveProperty('time', 15);
    expect(puzzle1.races[1]).toHaveProperty('record', 40);
    expect(puzzle1.races[2]).toHaveProperty('time', 30);
    expect(puzzle1.races[2]).toHaveProperty('record', 200);
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.solve()).toBe(answer);
  });
});
