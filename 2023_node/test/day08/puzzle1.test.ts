import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day08/puzzle1';

const inputSample = './input.txt';
const inputSampleLRPattern = ['R', 'L'];
const inputSampleDirection = ['R', 'L'];
const input2Sample = './input2.txt';
const input2SampleLRPattern = ['L', 'L', 'R'];
const input2SampleDirection = ['L', 'L', 'R'];
const inputSampleNetwork = [
  { name: 'AAA', L: 'BBB', R: 'CCC' },
  { name: 'BBB', L: 'DDD', R: 'EEE' },
  { name: 'CCC', L: 'ZZZ', R: 'GGG' },
  { name: 'DDD', L: 'DDD', R: 'DDD' },
  { name: 'EEE', L: 'EEE', R: 'EEE' },
  { name: 'GGG', L: 'GGG', R: 'GGG' },
  { name: 'ZZZ', L: 'ZZZ', R: 'ZZZ' },
];
const inputSampleNextNode = [
  { current: 'AAA', nextDirection: 'L', nextNode: 'BBB' },
  { current: 'BBB', nextDirection: 'R', nextNode: 'EEE' },
  { current: 'BBB', nextDirection: 'L', nextNode: 'DDD' },
  { current: 'CCC', nextDirection: 'R', nextNode: 'GGG' },
  { current: 'EEE', nextDirection: 'L', nextNode: 'EEE' },
  { current: 'GGG', nextDirection: 'R', nextNode: 'GGG' },
  { current: 'ZZZ', nextDirection: 'R', nextNode: 'ZZZ' },
];
const answer = 2;
const answer2 = 6;

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

    inputSampleDirection.forEach((direction, directionIndex) => {
      expect(puzzle1.getDirection(directionIndex)).toBe(direction);
    });
    input2SampleDirection.forEach((direction, directionIndex) => {
      expect(otherPuzzle1.getDirection(directionIndex)).toBe(direction);
    });
  });

  test('Should get the next step given the current one and the next direction', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));

    for (const n of inputSampleNextNode) {
      expect(puzzle1.getNextNetworkNode(n.current, n.nextDirection)).toBe(n.nextNode);
    }
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const otherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.solve()).toBe(answer);
    expect(otherPuzzle1.solve()).toBe(answer2);
  });
});
