import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils'
import { Puzzle2 } from '../../src/day10/puzzle2';
import { PipeTile } from '../../src/day10/pipeTile';

const inputSampleB = getAbsPath(__dirname, './input2.txt');
const inputSampleBPipeTileLocations = [
  [false, false, true, true, false],
  [false, true, true, true, false],
  [true, true, false, true, true],
  [true, true, true, true, true],
  [true, true, false, false, false],
]

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
});

