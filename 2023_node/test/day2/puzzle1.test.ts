import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle1 } from '../../src/day2/puzzle1';

const inputSample = './input.txt';
const inputSampleParsed = [
  { id: 1, maxBlue: 6, maxRed: 4, maxGreen: 2, feasible: true },
  { id: 2, maxBlue: 4, maxRed: 1, maxGreen: 3, feasible: true },
  { id: 3, maxBlue: 6, maxRed: 20, maxGreen: 13, feasible: false },
  { id: 4, maxBlue: 15, maxRed: 14, maxGreen: 3, feasible: false },
  { id: 5, maxBlue: 2, maxRed: 6, maxGreen: 3, feasible: true },
];

const gameRules = { blue: 14, red: 12, green: 13 };

test('Should read the input', () => {
  const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

  expect(puzzle1.input).not.toBeNull();
  expect(puzzle1.input).toBeInstanceOf(Array);
  expect(puzzle1.input.length).toBe(5);
});

describe('Parsing game records', () => {

  test('Should return game record id', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      expect(puzzle1.parseLineId(puzzle1.input[i])).toBe(inputSampleParsed[i].id);
    }
  });

  test('Should get game record max blue cubes', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      expect(puzzle1.parseLineMaxBlue(puzzle1.input[i])).toBe(inputSampleParsed[i].maxBlue);
    }
  });

  test('Should get game record max red cubes', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      expect(puzzle1.parseLineMaxRed(puzzle1.input[i])).toBe(inputSampleParsed[i].maxRed);
    }
  });

  test('Should get game record max green cubes', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      expect(puzzle1.parseLineMaxGreen(puzzle1.input[i])).toBe(inputSampleParsed[i].maxGreen);
    }
  });
});

describe('Evaluating game feasibility', () => {

  test('Should save the game rules', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const rules = puzzle1.setGameRules(gameRules);

    expect(rules).toHaveProperty('blue', 14);
    expect(rules).toHaveProperty('red', 12);
    expect(rules).toHaveProperty('green', 13);
    expect(puzzle1.rules).toHaveProperty('blue', 14);
    expect(puzzle1.rules).toHaveProperty('red', 12);
    expect(puzzle1.rules).toHaveProperty('green', 13);
  });

  test('Should evaluate if game is feasible', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    puzzle1.setGameRules(gameRules);

    for (const i in puzzle1.input) {
      expect(
        puzzle1.evaluateGameRecordFeasibilityByCubeAmount(puzzle1.input[i])
      ).toBe(inputSampleParsed[i].feasible);
    }
  });
});
