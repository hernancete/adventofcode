import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day8/puzzle1';

const inputSample = './input.txt';
const inputSampleLRPattern = ['R', 'L'];
const inputSampleNextDirection = ['L', 'R'];
const input2Sample = './input2.txt';
const input2SampleLRPattern = ['L', 'L', 'R'];
const input2SampleNextDirection = ['L', 'R', 'L'];
const inputSampleNetwork = [
  { name: 'AAA', L: 'BBB', R: 'CCC' },
  { name: 'BBB', L: 'DDD', R: 'EEE' },
  { name: 'CCC', L: 'ZZZ', R: 'GGG' },
  { name: 'DDD', L: 'DDD', R: 'DDD' },
  { name: 'EEE', L: 'EEE', R: 'EEE' },
  { name: 'GGG', L: 'GGG', R: 'GGG' },
  { name: 'ZZZ', L: 'ZZZ', R: 'ZZZ' },
];

describe('Parsing the input', () => {

  test('Should get the left-right pattern', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const otherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.pattern).toBeInstanceOf(Array);
    expect(puzzle1.pattern).toHaveLength(2);
    expect(puzzle1.pattern).toEqual(expect.arrayContaining(inputSampleLRPattern));
    expect(otherPuzzle1.pattern).toBeInstanceOf(Array);
    expect(otherPuzzle1.pattern).toHaveLength(3);
    expect(otherPuzzle1.pattern).toEqual(expect.arrayContaining(input2SampleLRPattern));
  });

  test('Should parse the network nodes', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    expect(puzzle1.network).toBeInstanceOf(Object);
    expect(Object.keys(puzzle1.network)).toHaveLength(7);
    expect(puzzle1.network).toHaveProperty('AAA');
    expect(puzzle1.network).toHaveProperty('CCC');
    expect(puzzle1.network).toHaveProperty('EEE');
    expect(puzzle1.network).toHaveProperty('ZZZ');
  });

  test('Should parse the network nodes and set its left and right paths', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const network of inputSampleNetwork) {
      expect(puzzle1.network).toHaveProperty(network.name, expect.objectContaining({ L: network.L, R: network.R }));
    }
  });
});

describe('Walking the network', () => {

  test('Should get the next direction given the current one', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const otherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    inputSampleNextDirection.forEach((nextDirection, currentDirectionIndex) => {
      expect(puzzle1.getNextDirection(currentDirectionIndex)).toBe(nextDirection);
    });
    input2SampleNextDirection.forEach((nextDirection, currentDirectionIndex) => {
      expect(otherPuzzle1.getNextDirection(currentDirectionIndex)).toBe(nextDirection);
    });
  });
});
