import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day6/puzzle2';

const inputSample = './input.txt';
const answer = 71503;

describe('Parseing the input', () => {

  test('Should parse the input and set the only big race', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.race).toEqual(expect.objectContaining({
      time: 71530,
      record: 940200,
    }));
  });
});
