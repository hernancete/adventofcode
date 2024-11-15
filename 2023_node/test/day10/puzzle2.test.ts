import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle2 } from '../../src/day10/puzzle2';
import { PipeTile } from '../../src/day10/pipeTile';
import { Tile } from '../../src/day10/tile';

const inputSampleB = getAbsPath(__dirname, './input2.txt');
const inputSampleC = getAbsPath(__dirname, './input3.txt');
const inputSampleBPipeTileLocations = [
  [false, false, true, true, false],
  [false, true, true, true, false],
  [true, true, false, true, true],
  [true, true, true, true, true],
  [true, true, false, false, false],
]
const inputSampleCPipeTileLocations = [
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
    for (const lat in inputSampleCPipeTileLocations) {
      for (const lon in inputSampleCPipeTileLocations[lat]) {
        if (['P', 'S'].includes(inputSampleCPipeTileLocations[lat][lon])) {
          expect(puzzle2C.land[lat][lon]).toBeInstanceOf(PipeTile);
        }
        else {
          expect(puzzle2C.land[lat][lon]).toBeInstanceOf(Tile);
        }
      }
    }
  });
});

