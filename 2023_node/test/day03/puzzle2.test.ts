import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day03/puzzle2';

const inputSample = './input.txt';
const inputSampleThirdLine = '..35..633.';
const inputSamplePotentialGears = [
  { gear: { line: 1, index: 3 }, inline: [], above: [467], below: [35] },
  { gear: { line: 4, index: 3 }, inline: [617], above: [], below: [] },
  { gear: { line: 8, index: 5 }, inline: [], above: [755], below: [598] },
];
const answer = 467835;

describe('Reading the input', () => {

  test('Should read the input', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.input).not.toBeNull();
    expect(puzzle2.input).toBeInstanceOf(Array);
    expect(puzzle2.input.length).toBe(10);
    expect(puzzle2.input).toContain(inputSampleThirdLine);
  });
});

describe('Looking for gears', () => {

  test('Should get potential gears in a line', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    const firstLineIndex = 0;
    const secondLineIndex = 1;
    const fifhtLineIndex = 4;
    const firstLineGears = puzzle2.getPotentialGearsPerLine(firstLineIndex);
    const secondLineGears = puzzle2.getPotentialGearsPerLine(secondLineIndex);
    const fifthLineGears = puzzle2.getPotentialGearsPerLine(fifhtLineIndex);

    expect(firstLineGears).toBeInstanceOf(Array);
    expect(firstLineGears).toHaveLength(0);
    expect(secondLineGears).toBeInstanceOf(Array);
    expect(secondLineGears).toHaveLength(1);
    expect(secondLineGears).toEqual(expect.arrayContaining([expect.objectContaining({ line: 1, index: 3 })]));
    expect(fifthLineGears).toBeInstanceOf(Array);
    expect(fifthLineGears).toHaveLength(1);
    expect(fifthLineGears).toEqual(expect.arrayContaining([expect.objectContaining({ line: 4, index: 3 })]));
  });

  test('Should get adjacent part numbers inline', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const pg of inputSamplePotentialGears) {
      const adjPartNumbInline = puzzle2.getAdjacentPartNumbersInline(pg.gear);
      expect(adjPartNumbInline).toBeInstanceOf(Array);
      expect(adjPartNumbInline).toHaveLength(pg.inline.length);
      expect(adjPartNumbInline).toEqual(expect.arrayContaining(pg.inline));
    }
  });

  test('Should get adjacent part numbers above', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const pg of inputSamplePotentialGears) {
      const adjPartNumbInline = puzzle2.getAdjacentPartNumbersAbove(pg.gear);
      expect(adjPartNumbInline).toBeInstanceOf(Array);
      expect(adjPartNumbInline).toHaveLength(pg.above.length);
      expect(adjPartNumbInline).toEqual(expect.arrayContaining(pg.above));
    }
  });

  test('Should get adjacent part numbers below', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const pg of inputSamplePotentialGears) {
      const adjPartNumbInline = puzzle2.getAdjacentPartNumbersBelow(pg.gear);
      expect(adjPartNumbInline).toBeInstanceOf(Array);
      expect(adjPartNumbInline).toHaveLength(pg.below.length);
      expect(adjPartNumbInline).toEqual(expect.arrayContaining(pg.below));
    }
  });
});

describe('Solving the puzzle', () => {

  test('Should get every gear, no potential ones', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    const gears = puzzle2.getGears();
    expect(gears).toBeInstanceOf(Array);
    expect(gears).toHaveLength(2);
    expect(gears).toEqual(expect.arrayContaining([
      expect.objectContaining(inputSamplePotentialGears[0].gear),
      expect.objectContaining(inputSamplePotentialGears[2].gear),
    ]));
  });

  test('Should solve the puzzle', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.getGears();

    expect(puzzle2.solve()).toBe(answer);
  });
});
