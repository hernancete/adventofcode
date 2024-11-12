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
const inputSampleStartingNodes = ['11A', '22A'];
const inputSampleEndingNodes = [
  { name: '11A', endingNode: false },
  { name: '11B', endingNode: false },
  { name: '11Z', endingNode: true },
  { name: '22A', endingNode: false },
  { name: '22B', endingNode: false },
  { name: '22C', endingNode: false },
  { name: '22Z', endingNode: true },
  { name: 'XXX', endingNode: false },
];
const answer = 6;

describe('Parsing the input', () => {

  test('Should get the left-right pattern', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.pattern).toBeInstanceOf(Array);
    expect(puzzle2.pattern).toHaveLength(2);
    expect(puzzle2.pattern).toEqual(expect.arrayContaining(inputSampleLRPattern));
  });

  test('Should parse the network nodes', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    expect(puzzle2.network).toBeInstanceOf(Object);
    expect(Object.keys(puzzle2.network)).toHaveLength(8);
    expect(puzzle2.network).toHaveProperty('11A');
    expect(puzzle2.network).toHaveProperty('11Z');
    expect(puzzle2.network).toHaveProperty('22B');
    expect(puzzle2.network).toHaveProperty('22Z');
  });

  test('Should parse the network nodes and set its left and right paths', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const network of inputSampleNetwork) {
      expect(puzzle2.network).toHaveProperty(network.name, expect.objectContaining({ L: network.L, R: network.R }));
    }
  });
});

describe('Walking the network', () => {

  test('Should get the next direction given the current one', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    inputSampleDirection.forEach((direction, directionIndex) => {
      expect(puzzle2.getDirection(directionIndex)).toBe(direction);
    });
  });

  test('Should get the next step given the current one and the next direction', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const n of inputSampleNextNode) {
      expect(puzzle2.getNextNetworkNode(n.current, n.nextDirection)).toBe(n.nextNode);
    }
  });

  test('Should get the starting nodes', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.loadStartingNodes();

    expect(puzzle2.startingNodes).toBeInstanceOf(Array);
    expect(puzzle2.startingNodes).toHaveLength(2);
    expect(puzzle2.startingNodes).toEqual(expect.arrayContaining(inputSampleStartingNodes));
  });

  test('Should check if a node is an ending node', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));

    for (const en of inputSampleEndingNodes) {
      expect(puzzle2.isEndingNode(en.name)).toBe(en.endingNode);
    }
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSample));
    puzzle2.loadStartingNodes();

    expect(puzzle2.solve()).toBe(answer);
  });
});
