import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1, motorPart } from '../../src/day3/puzzle1';

const inputSample = './input.txt';
const inputSampleThirdLine = '..35..633.';
const inputSampleParsed = [
  {
    len: 2,
    potentialMotorParts: [
      { value: 467, startIndx: 0, endIndx: 2, inline: false },
      { value: 114, startIndx: 5, endIndx: 7, inline: false }
    ]
  },
  {
    len: 0,
    potentialMotorParts: []
  },
  {
    len: 2,
    potentialMotorParts: [
      { value: 35, startIndx: 2, endIndx: 3, inline: false },
      { value: 633, startIndx: 6, endIndx: 8, inline: false }
    ]
  },
  {
    len: 0,
    potentialMotorParts: []
  },
  {
    len: 1,
    potentialMotorParts: [
      { value: 617, startIndx: 0, endIndx: 2, inline: true }
    ]
  },
  {
    len: 1,
    potentialMotorParts: [
      { value: 58, startIndx: 7, endIndx: 8, inline: false }
    ]
  },
  {
    len: 1,
    potentialMotorParts: [
      { value: 592, startIndx: 2, endIndx: 4, inline: false }
    ]
  },
  {
    len: 1,
    potentialMotorParts: [
      { value: 755, startIndx: 6, endIndx: 8, inline: false }
    ]
  },
  {
    len: 0,
    potentialMotorParts: []
  },
  {
    len: 2,
    potentialMotorParts: [
      { value: 664, startIndx: 1, endIndx: 3, inline: false },
      { value: 598, startIndx: 5, endIndx: 7, inline: false }
    ]
  },
];

describe('Reading the input', () => {

  test('Should read the input', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.input).not.toBeNull();
    expect(puzzle1.input).toBeInstanceOf(Array);
    expect(puzzle1.input.length).toBe(10);
    expect(puzzle1.input).toContain(inputSampleThirdLine);
  });
});

describe('Parsing motor parts', () => {

  test('Should get potential motor parts', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      const potentialMotorParts = puzzle1.getPotentialMotorParts(puzzle1.input[i]);
      expect(potentialMotorParts).toBeInstanceOf(Array);
      expect(potentialMotorParts).toHaveLength(inputSampleParsed[i].len);
    }
  });

  test('Should get number values of potential motor parts', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    const potentialMotorPartsThirdLine = puzzle1.getPotentialMotorParts(puzzle1.input[2]);
    expect(potentialMotorPartsThirdLine[0]).toHaveProperty('value', 35);
    expect(potentialMotorPartsThirdLine[1]).toHaveProperty('value', 633);

    const potentialMotorPartsFifthLine = puzzle1.getPotentialMotorParts(puzzle1.input[4]);
    expect(potentialMotorPartsFifthLine[0]).toHaveProperty('value', 617);
  });

  test('Should get number values, start and end indexes of potential motor parts', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    const potentialMotorPartsThirdLine = puzzle1.getPotentialMotorParts(puzzle1.input[2]);
    expect(potentialMotorPartsThirdLine[0]).toHaveProperty('value', 35);
    expect(potentialMotorPartsThirdLine[0]).toHaveProperty('startIndx', 2);
    expect(potentialMotorPartsThirdLine[0]).toHaveProperty('endIndx', 3);
    expect(potentialMotorPartsThirdLine[1]).toHaveProperty('value', 633);
    expect(potentialMotorPartsThirdLine[1]).toHaveProperty('startIndx', 6);
    expect(potentialMotorPartsThirdLine[1]).toHaveProperty('endIndx', 8);

    const potentialMotorPartsFifthLine = puzzle1.getPotentialMotorParts(puzzle1.input[4]);
    expect(potentialMotorPartsFifthLine[0]).toHaveProperty('value', 617);
    expect(potentialMotorPartsFifthLine[0]).toHaveProperty('startIndx', 0);
    expect(potentialMotorPartsFifthLine[0]).toHaveProperty('endIndx', 2);
  });
});

describe('Looking for adjacent symbols', () => {

  test('Should get adjacent symbols on the same line', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const i in puzzle1.input) {
      const potentialMotorParts = puzzle1.getPotentialMotorParts(puzzle1.input[i]);
      potentialMotorParts.forEach(((pmp, pmpIndx) => {
        const adjacentSymbolInline = puzzle1.isThereAnAdjacentSymbolInline(pmp, puzzle1.input[i]);
        expect(adjacentSymbolInline).toBe(inputSampleParsed[i].potentialMotorParts[pmpIndx].inline);
      }));
    }
  });
});
