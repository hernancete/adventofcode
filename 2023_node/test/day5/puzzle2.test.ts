import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day5/puzzle2';

const inputSample = './input.txt';

describe('Parsing the input', () => {

  test('Should load the seeds', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.seeds).toBeInstanceOf(Array);
    expect(puzzle2.seeds).toHaveLength(27);
    expect(puzzle2.seeds).toEqual(expect.arrayContaining([79, 80, 81, 91, 92, 55, 56, 66, 67]));
    expect(puzzle2.seeds).toEqual(expect.not.arrayContaining([14, 13]));
  });
});
