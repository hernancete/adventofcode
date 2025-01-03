import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle2 } from '../../src/day10/puzzle2';
import { PipeTile } from '../../src/day10/pipeTile';
import { Tile } from '../../src/day10/tile';

const inputSampleA = getAbsPath(__dirname, './input.txt');
const inputSampleB = getAbsPath(__dirname, './input2.txt');
const inputSampleC = getAbsPath(__dirname, './input3.txt');
const inputSampleBPipeTileLocations = [
  [false, false, true, true, false],
  [false, true, true, true, false],
  [true, true, false, true, true],
  [true, true, true, true, true],
  [true, true, false, false, false],
];
const inputSampleATileTypes = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'S', 'P', 'P', 'O'],
  ['O', 'P', 'I', 'P', 'O'],
  ['O', 'P', 'P', 'P', 'O'],
  ['O', 'O', 'O', 'O', 'O'],
];
const inputSampleBTileTypes = [
  ['O', 'O', 'P', 'P', 'O'],
  ['O', 'P', 'P', 'P', 'O'],
  ['S', 'P', 'I', 'P', 'P'],
  ['P', 'P', 'P', 'P', 'P'],
  ['P', 'P', 'O', 'O', 'O'],
];
const inputSampleBTilesFrom = [
  ['-', '-', 'S', 'W', '-'],
  ['-', 'S', 'W', 'N', '-'],
  ['S', 'W', '-', 'N', 'W'],
  ['S', 'E', 'E', 'E', 'N'],
  ['E', 'N', '-', '-', '-'],
];
const inputSampleCTileTypes = [
  ['O', 'P', 'P', 'P', 'S', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['O', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['O', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'O'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'I', 'P', 'P', 'P', 'P', 'O'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'I', 'I', 'I', 'I', 'P', 'P', 'P', 'P', 'O', 'O'],
  ['O', 'O', 'O', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'I', 'I', 'I', 'P', 'P', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'I', 'I', 'P', 'P', 'P', 'P', 'P'],
  ['O', 'O', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['O', 'O', 'O', 'O', 'O', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['O', 'O', 'O', 'O', 'O', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'O', 'O'],
];
const answerA = 1;
const answerB = 1;
const answerC = 10;

describe('Building the whole land as individual tiles', () => {

  test('Should mark every tile belonging the main loop as a pipe tile', () => {
    const puzzle2 = new Puzzle2(inputSampleB);
    puzzle2.fillLandWithPipeTiles();

    for (const lat in inputSampleBPipeTileLocations) {
      for (const lon in inputSampleBPipeTileLocations[lat]) {
        if (inputSampleBPipeTileLocations[lat][lon]) {
          expect(puzzle2.land[lat][lon]).toBeInstanceOf(PipeTile);
        }
        else {
          expect(puzzle2.land[lat][lon]).not.toBeInstanceOf(PipeTile);
        }
      }
    }
  });

  test('Should mark every pipe tile\'s from attribute', () => {
    const puzzle2 = new Puzzle2(inputSampleB);
    puzzle2.fillLandWithPipeTiles();

    for (const lat in inputSampleBTilesFrom) {
      for (const lon in inputSampleBTilesFrom[lat]) {
        if (inputSampleBTilesFrom[lat][lon] !== '-') {
          expect(puzzle2.land[lat][lon]).toBeInstanceOf(PipeTile);
          expect(puzzle2.land[lat][lon].from).toBe(inputSampleBTilesFrom[lat][lon]);
        }
      }
    }
  });

  test('Should mark every tile not belonging the main loop as a tile', () => {
    const puzzle2B = new Puzzle2(inputSampleB);
    puzzle2B.fillLandWithPipeTiles();
    puzzle2B.fillLandWithTiles();

    const puzzle2C = new Puzzle2(inputSampleC);
    puzzle2C.fillLandWithPipeTiles();
    puzzle2C.fillLandWithTiles();

    for (const lat in inputSampleBPipeTileLocations) {
      for (const lon in inputSampleBPipeTileLocations[lat]) {
        if (inputSampleBPipeTileLocations[lat][lon]) {
          expect(puzzle2B.land[lat][lon]).toBeInstanceOf(PipeTile);
        }
        else {
          expect(puzzle2B.land[lat][lon]).toBeInstanceOf(Tile);
        }
      }
    }
    for (const lat in inputSampleCTileTypes) {
      for (const lon in inputSampleCTileTypes[lat]) {
        if (['P', 'S'].includes(inputSampleCTileTypes[lat][lon])) {
          expect(puzzle2C.land[lat][lon]).toBeInstanceOf(PipeTile);
        }
        else {
          expect(puzzle2C.land[lat][lon]).toBeInstanceOf(Tile);
        }
      }
    }
  });

  test('Should set type of every non-pipe tile in the land\'s border as O (out)', () => {
    const inputSampleBBorders = [
      [0, 0], [0, 4], [4, 0], [4, 4],
      [0, 1], [0, 2], [0, 3],
      [1, 0], [2, 0], [3, 0],
      [4, 1], [4, 2], [4, 3],
      [1, 4], [2, 4], [3, 4],
    ];
    const inputSampleCBorders = [
      [0, 0], [0, 19], [9, 0], [9, 19],
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [0, 16], [0, 17], [0, 18],
      [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0],
      [9, 1], [9, 2], [9, 3], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9], [9, 10], [9, 11], [9, 12], [9, 13], [9, 14], [9, 15], [9, 16], [9, 17], [9, 18],
      [1, 19], [2, 19], [3, 19], [4, 19], [5, 19], [6, 19], [7, 19], [8, 19],
    ];

    const puzzle2B = new Puzzle2(inputSampleB);
    puzzle2B.fillLandWithPipeTiles();
    puzzle2B.fillLandWithTiles();
    puzzle2B.insideIsOn = puzzle2B.whichSideIsInside();
    puzzle2B.setNonPipeTilesType();

    const puzzle2C = new Puzzle2(inputSampleC);
    puzzle2C.fillLandWithPipeTiles();
    puzzle2C.fillLandWithTiles();
    puzzle2C.insideIsOn = puzzle2C.whichSideIsInside();
    puzzle2C.setNonPipeTilesType();

    for (const l of inputSampleBBorders) {
      const lat = l[0];
      const lon = l[1];
      if (!['P', 'S'].includes(inputSampleBTileTypes[lat][lon])) {
        expect(puzzle2B.land[lat][lon]).toBeInstanceOf(Tile);
        expect(puzzle2B.land[lat][lon]).toHaveProperty('type', 'O');
      }
    }
    for (const l of inputSampleCBorders) {
      const lat = l[0];
      const lon = l[1];
      if (!['P', 'S'].includes(inputSampleCTileTypes[lat][lon])) {
        expect(puzzle2C.land[lat][lon]).toBeInstanceOf(Tile);
        expect(puzzle2C.land[lat][lon]).toHaveProperty('type', 'O');
      }
    }
  });

  test('Should figure out if the in-side is whether to the right or left when walking through the main loop', () => {
    const puzzle2A = new Puzzle2(inputSampleA);
    puzzle2A.fillLandWithPipeTiles();
    puzzle2A.fillLandWithTiles();

    const puzzle2B = new Puzzle2(inputSampleB);
    puzzle2B.fillLandWithPipeTiles();
    puzzle2B.fillLandWithTiles();

    const puzzle2C = new Puzzle2(inputSampleC);
    puzzle2C.fillLandWithPipeTiles();
    puzzle2C.fillLandWithTiles();

    expect(puzzle2A.whichSideIsInside()).toBe('R');
    expect(puzzle2B.whichSideIsInside()).toBe('R');
    expect(puzzle2C.whichSideIsInside()).toBe('R');
  });

  test('Should set type of every non-pipe tile as in or out', () => {
    const puzzle2A = new Puzzle2(inputSampleA);
    puzzle2A.fillLandWithPipeTiles();
    puzzle2A.fillLandWithTiles();
    puzzle2A.insideIsOn = puzzle2A.whichSideIsInside();
    puzzle2A.setNonPipeTilesType();

    const puzzle2B = new Puzzle2(inputSampleB);
    puzzle2B.fillLandWithPipeTiles();
    puzzle2B.fillLandWithTiles();
    puzzle2B.insideIsOn = puzzle2B.whichSideIsInside();
    puzzle2B.setNonPipeTilesType();

    const puzzle2C = new Puzzle2(inputSampleC);
    puzzle2C.fillLandWithPipeTiles();
    puzzle2C.fillLandWithTiles();
    puzzle2C.insideIsOn = puzzle2C.whichSideIsInside();
    puzzle2C.setNonPipeTilesType();

    for (const lat in inputSampleATileTypes) {
      for (const lon in inputSampleATileTypes[lat]) {
        if (['P', 'S'].includes(inputSampleATileTypes[lat][lon])) {
          expect(puzzle2A.land[lat][lon]).toBeInstanceOf(PipeTile);
        }
        else {
          expect(puzzle2A.land[lat][lon]).toBeInstanceOf(Tile);
          expect(puzzle2A.land[lat][lon]).toHaveProperty('type', inputSampleATileTypes[lat][lon]);
        }
      }
    }
    for (const lat in inputSampleBTileTypes) {
      for (const lon in inputSampleBTileTypes[lat]) {
        if (['P', 'S'].includes(inputSampleBTileTypes[lat][lon])) {
          expect(puzzle2B.land[lat][lon]).toBeInstanceOf(PipeTile);
        }
        else {
          expect(puzzle2B.land[lat][lon]).toBeInstanceOf(Tile);
          expect(puzzle2B.land[lat][lon]).toHaveProperty('type', inputSampleBTileTypes[lat][lon]);
        }
      }
    }
    for (const lat in inputSampleCTileTypes) {
      for (const lon in inputSampleCTileTypes[lat]) {
        if (['P', 'S'].includes(inputSampleCTileTypes[lat][lon])) {
          expect(puzzle2C.land[lat][lon]).toBeInstanceOf(PipeTile);
        }
        else {
          expect(puzzle2C.land[lat][lon]).toBeInstanceOf(Tile);
          expect(puzzle2C.land[lat][lon]).toHaveProperty('type', inputSampleCTileTypes[lat][lon]);
        }
      }
    }
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const puzzle2A = new Puzzle2(inputSampleA);
    const puzzle2B = new Puzzle2(inputSampleB);
    const puzzle2C = new Puzzle2(inputSampleC);

    expect(puzzle2A.solve()).toBe(answerA);
    expect(puzzle2B.solve()).toBe(answerB);
    expect(puzzle2C.solve()).toBe(answerC);
  });
});
