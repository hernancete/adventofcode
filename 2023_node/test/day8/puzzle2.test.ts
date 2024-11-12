import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day8/puzzle2';

const inputSample = './input3.txt';
const inputSampleLRPattern = ['L', 'R'];
const inputSampleDirection = ['L', 'R'];
const inputSampleNetwork = [
  { name: '11A', L: '11B', R: 'XXX' },
  { name: '11B', L: 'XXX', R: '11Z' },
  { name: '11Z', L: '11B', R: 'XXX' },
  { name: '22A', L: '22B', R: 'XXX' },
  { name: '22B', L: '22C', R: '22C' },
  { name: '22C', L: '22Z', R: '22Z' },
  { name: '22Z', L: '22B', R: '22B' },
  { name: 'XXX', L: 'XXX', R: 'XXX' },
];
const inputSampleNextNode = [
  { current: '11A', nextDirection: 'L', nextNode: '11B' },
  { current: '11B', nextDirection: 'R', nextNode: '11Z' },
  { current: '11Z', nextDirection: 'L', nextNode: '11B' },
  { current: '22A', nextDirection: 'R', nextNode: 'XXX' },
  { current: '22B', nextDirection: 'L', nextNode: '22C' },
  { current: '22C', nextDirection: 'R', nextNode: '22Z' },
  { current: '22Z', nextDirection: 'L', nextNode: '22B' },
  { current: 'XXX', nextDirection: 'R', nextNode: 'XXX' },
];
const inputSampleStartingPoints = ['11A', '22A'];
const answer = 6;

describe('Parsing the input', () => {

  test('Should get the left-right pattern', () => {
    const puzzle1 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle1.pattern).toBeInstanceOf(Array);
    expect(puzzle1.pattern).toHaveLength(2);
    expect(puzzle1.pattern).toEqual(expect.arrayContaining(inputSampleLRPattern));
  });

  test('Should parse the network nodes', () => {
    const puzzle1 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle1.network).toBeInstanceOf(Object);
    expect(Object.keys(puzzle1.network)).toHaveLength(8);
    expect(puzzle1.network).toHaveProperty('11A');
    expect(puzzle1.network).toHaveProperty('11Z');
    expect(puzzle1.network).toHaveProperty('22B');
    expect(puzzle1.network).toHaveProperty('22Z');
  });

  test('Should parse the network nodes and set its left and right paths', () => {
    const puzzle1 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const network of inputSampleNetwork) {
      expect(puzzle1.network).toHaveProperty(network.name, expect.objectContaining({ L: network.L, R: network.R }));
    }
  });
});

describe('Walking the network', () => {

  test('Should get the next direction given the current one', () => {
    const puzzle1 = new Puzzle2(getAbsPath(__dirname, inputSample));

    inputSampleDirection.forEach((direction, directionIndex) => {
      expect(puzzle1.getDirection(directionIndex)).toBe(direction);
    });
  });

  test('Should get the next step given the current one and the next direction', () => {
    const puzzle1 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const n of inputSampleNextNode) {
      expect(puzzle1.getNextNetworkNode(n.current, n.nextDirection)).toBe(n.nextNode);
    }
  });

  test('Should get the starting nodes', () => {
    const puzzle1 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle1.loadStartingNodes();

    expect(puzzle1.startingNodes).toBeInstanceOf(Array);
    expect(puzzle1.startingNodes).toHaveLength(2);
    expect(puzzle1.startingNodes).toEqual(expect.arrayContaining(inputSampleStartingPoints));
  });
});

describe('Solving the puzzle', () => {

  test.skip('Should solve the puzzle', () => {
    const puzzle1 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle1.solve()).toBe(answer);
  });
});
