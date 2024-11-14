import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle1 } from '../../src/day10/puzzle1';

const inputSample = './input.txt';
const input2Sample = './input2.txt';
const inputSamplePath = [
  { lat: 1, lon: 1 },
  { lat: 1, lon: 2 },
  { lat: 1, lon: 3 },
  { lat: 2, lon: 3 },
  { lat: 3, lon: 3 },
  { lat: 3, lon: 2 },
  { lat: 3, lon: 1 },
  { lat: 2, lon: 1 },
];
const input2SamplePath = [
  { lat: 2, lon: 0 },
  { lat: 2, lon: 1 },
  { lat: 1, lon: 1 },
  { lat: 1, lon: 2 },
  { lat: 0, lon: 2 },
  { lat: 0, lon: 3 },
  { lat: 1, lon: 3 },
  { lat: 2, lon: 3 },
  { lat: 2, lon: 4 },
  { lat: 3, lon: 4 },
  { lat: 3, lon: 3 },
  { lat: 3, lon: 2 },
  { lat: 3, lon: 1 },
  { lat: 4, lon: 1 },
  { lat: 4, lon: 0 },
  { lat: 3, lon: 0 },
];

describe('Parsing the input', () => {

  test('Should find the starting point location', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const anotherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.startingPointLocation).toEqual({ lat: 1, lon: 1 });
    expect(anotherPuzzle1.startingPointLocation).toEqual({ lat: 2, lon: 0 });
  });

  test('Should get the starting point type', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const anotherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.startingPointType).toBe('F');
    expect(anotherPuzzle1.startingPointType).toBe('F');
  });

  test('Should set the starting tile', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const anotherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.startingTile).toEqual(
      expect.objectContaining({ tile: 'F', location: { lat: 1, lon: 1 }, connectedTo: { N: false, S: true, E: true, W: false } })
    );
    expect(anotherPuzzle1.startingTile).toEqual(
      expect.objectContaining({ tile: 'F', location: { lat: 2, lon: 0 }, connectedTo: { N: false, S: true, E: true, W: false } })
    );
  });
});

describe('Walking the pipe', () => {

  test('Should choose some way to start walking', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const anotherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));
    const startWalkingTowards1 = puzzle1.chooseStartingDirection();
    const startWalkingTowards2 = anotherPuzzle1.chooseStartingDirection();

    expect(['E', 'S'].includes(startWalkingTowards1)).toBe(true);
    expect(['E', 'S'].includes(startWalkingTowards2)).toBe(true);
  });

  test('Should walk the pipe all the way through until reaching the starting point, tracing the path', () => {
    const puzzle1 = new Puzzle1(getAbsPath(__dirname, inputSample));
    const anotherPuzzle1 = new Puzzle1(getAbsPath(__dirname, input2Sample));

    expect(puzzle1.traceWalk()).toEqual(inputSamplePath);
    expect(anotherPuzzle1.traceWalk()).toEqual(input2SamplePath);
  });
});
