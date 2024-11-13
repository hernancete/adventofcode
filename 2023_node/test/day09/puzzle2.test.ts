import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day09/puzzle2';

const inputSample = './input.txt';
const answer = 2;

describe('Parsing the input', () => {

  test('Should parse the history records', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.history).toBeInstanceOf(Array);
    expect(puzzle2.history).toHaveLength(3);
    expect(puzzle2.history[0]).toEqual(expect.arrayContaining([6, 9, 12]));
    expect(puzzle2.history[1]).toEqual(expect.arrayContaining([1, 3, 6, 10]));
    expect(puzzle2.history[2]).toEqual(expect.arrayContaining([21, 30, 45]));
  });
});

describe('Forecasting the next history value', () => {

  test('Should calculate the difference between every two consecutive history values', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    let diffs: number[];

    diffs = puzzle2.calculateDiffsBetweenConsecutiveValues([0, 3, 6, 9, 12, 15]);
    expect(diffs).toEqual(expect.arrayContaining([3, 3, 3, 3, 3]));
    diffs = puzzle2.calculateDiffsBetweenConsecutiveValues([3, 3, 3, 3, 3]);
    expect(diffs).toEqual(expect.arrayContaining([0, 0, 0, 0]));

    diffs = puzzle2.calculateDiffsBetweenConsecutiveValues([1, 3, 6, 10, 15, 21]);
    expect(diffs).toEqual(expect.arrayContaining([2, 3, 4, 5, 6]));
    diffs = puzzle2.calculateDiffsBetweenConsecutiveValues([2, 3, 4, 5, 6]);
    expect(diffs).toEqual(expect.arrayContaining([1, 1, 1, 1]));
    diffs = puzzle2.calculateDiffsBetweenConsecutiveValues([1, 1, 1, 1]);
    expect(diffs).toEqual(expect.arrayContaining([0, 0, 0]));
  });

  test('Should check if every value of a set is zero', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.checkIfEveryValueIsZero([0, 3, 6, 9, 12, 15])).toEqual(false);
    expect(puzzle2.checkIfEveryValueIsZero([3, 3, 3, 3, 3])).toEqual(false);
    expect(puzzle2.checkIfEveryValueIsZero([0, 0, 0, 0])).toEqual(true);
    expect(puzzle2.checkIfEveryValueIsZero([1, 3, 6, 10, 15, 21])).toEqual(false);
    expect(puzzle2.checkIfEveryValueIsZero([2, 3, 4, 5, 6])).toEqual(false);
    expect(puzzle2.checkIfEveryValueIsZero([1, 1, 1, 1])).toEqual(false);
    expect(puzzle2.checkIfEveryValueIsZero([0, 0, 0])).toEqual(true);
  });

  test('Should get the first digit of every set of differences', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.getTheDiffBetweenTheFirstTwoValuesOfEachDiffSequence(0);
    puzzle2.getTheDiffBetweenTheFirstTwoValuesOfEachDiffSequence(1);
    puzzle2.getTheDiffBetweenTheFirstTwoValuesOfEachDiffSequence(2);

    expect(puzzle2.historyDiffsFirstDigits[0]).toEqual(expect.arrayContaining([3]));
    expect(puzzle2.historyDiffsFirstDigits[1]).toEqual(expect.arrayContaining([2, 1]));
    expect(puzzle2.historyDiffsFirstDigits[2]).toEqual(expect.arrayContaining([3, 0, 2]));
  });

  test('Should get the backward forecast for every history', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.getTheDiffBetweenTheFirstTwoValuesOfEachDiffSequence(0);
    const backwardForecast0: number = puzzle2.getBackwardForecastValue(0);
    puzzle2.getTheDiffBetweenTheFirstTwoValuesOfEachDiffSequence(1);
    const backwardForecast1: number = puzzle2.getBackwardForecastValue(1);
    puzzle2.getTheDiffBetweenTheFirstTwoValuesOfEachDiffSequence(2);
    const backwardForecast2: number = puzzle2.getBackwardForecastValue(2);

    expect(backwardForecast0).toBe(-3);
    expect(backwardForecast1).toBe(0);
    expect(backwardForecast2).toBe(5);
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.solve()).toBe(answer);
  });
});
