import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day09/puzzle1';

const inputSample = './input.txt';

describe('Parsing the input', () => {

  test('Should parse the history records', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.history).toBeInstanceOf(Array);
    expect(puzzle1.history).toHaveLength(3);
    expect(puzzle1.history[0]).toEqual(expect.arrayContaining([6, 9, 12]));
    expect(puzzle1.history[1]).toEqual(expect.arrayContaining([1, 3, 6, 10]));
    expect(puzzle1.history[2]).toEqual(expect.arrayContaining([21, 30, 45]));
  });
});

describe('Forecasting the next history value', () => {

  test('Should calculate the difference between every two consecutive history values', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    let diffs: number[];

    diffs = puzzle1.calculateDiffsBetweenConsecutiveValues([0, 3, 6, 9, 12, 15]);
    expect(diffs).toEqual(expect.arrayContaining([3, 3, 3, 3, 3]));
    diffs = puzzle1.calculateDiffsBetweenConsecutiveValues([3, 3, 3, 3, 3]);
    expect(diffs).toEqual(expect.arrayContaining([0, 0, 0, 0]));

    diffs = puzzle1.calculateDiffsBetweenConsecutiveValues([1, 3, 6, 10, 15, 21]);
    expect(diffs).toEqual(expect.arrayContaining([2, 3, 4, 5, 6]));
    diffs = puzzle1.calculateDiffsBetweenConsecutiveValues([2, 3, 4, 5, 6]);
    expect(diffs).toEqual(expect.arrayContaining([1, 1, 1, 1]));
    diffs = puzzle1.calculateDiffsBetweenConsecutiveValues([1, 1, 1, 1]);
    expect(diffs).toEqual(expect.arrayContaining([0, 0, 0]));
  });

  test('Should check if every value of a set is zero', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.checkIfEveryValueIsZero([0, 3, 6, 9, 12, 15])).toEqual(false);
    expect(puzzle1.checkIfEveryValueIsZero([3, 3, 3, 3, 3])).toEqual(false);
    expect(puzzle1.checkIfEveryValueIsZero([0, 0, 0, 0])).toEqual(true);
    expect(puzzle1.checkIfEveryValueIsZero([1, 3, 6, 10, 15, 21])).toEqual(false);
    expect(puzzle1.checkIfEveryValueIsZero([2, 3, 4, 5, 6])).toEqual(false);
    expect(puzzle1.checkIfEveryValueIsZero([1, 1, 1, 1])).toEqual(false);
    expect(puzzle1.checkIfEveryValueIsZero([0, 0, 0])).toEqual(true);
  });

  test('Should get the last digit of every set of differences', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    puzzle1.getTheDiffBetweenTheLastTwoValuesOfEachDiffSequence(0);
    puzzle1.getTheDiffBetweenTheLastTwoValuesOfEachDiffSequence(1);
    puzzle1.getTheDiffBetweenTheLastTwoValuesOfEachDiffSequence(2);

    expect(puzzle1.historyDiffsLastDigits[0]).toEqual(expect.arrayContaining([3]));
    expect(puzzle1.historyDiffsLastDigits[1]).toEqual(expect.arrayContaining([6, 1]));
    expect(puzzle1.historyDiffsLastDigits[2]).toEqual(expect.arrayContaining([15, 6, 2]));
  });

  test('Should get the forecast for every history', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    puzzle1.getTheDiffBetweenTheLastTwoValuesOfEachDiffSequence(0);
    const forecast0: number = puzzle1.getForecastValue(0);
    puzzle1.getTheDiffBetweenTheLastTwoValuesOfEachDiffSequence(1);
    const forecast1: number = puzzle1.getForecastValue(1);
    puzzle1.getTheDiffBetweenTheLastTwoValuesOfEachDiffSequence(2);
    const forecast2: number = puzzle1.getForecastValue(2);

    expect(forecast0).toBe(18);
    expect(forecast1).toBe(28);
    expect(forecast2).toBe(68);
  });
});
