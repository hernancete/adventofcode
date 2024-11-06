import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle } from '../../src/shared/puzzle';

const inputSample = './input.txt';
const inputSampleSixthLine = 'by the util';

class MyPuzzle extends Puzzle { };

describe('Reading the input', () => {

  test('Should read the input', () => {
    const myPuzzle = new MyPuzzle(getAbsPath(__dirname, inputSample));

    expect(myPuzzle.input).not.toBeNull();
    expect(myPuzzle.input).toBeInstanceOf(Array);
    expect(myPuzzle.input.length).toBe(8);
    expect(myPuzzle.input).toContain(inputSampleSixthLine);
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const myPuzzle = new MyPuzzle(getAbsPath(__dirname, inputSample));

    expect(myPuzzle.solve()).toBe(0);
  });
});
