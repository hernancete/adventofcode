import { describe, test, expect } from '@jest/globals';
import { Tile } from '../../src/day10/tile';

describe('Setting up a tile', () => {

  test('Should set the default location if not provided', () => {
    const tile = new Tile();

    expect(tile.location).toEqual({ lat: 0, lon: 0 });
  });

  test('Should set the location', () => {
    const tile0 = new Tile({ lat: 0, lon: 0 });
    const tile1 = new Tile({ lat: 1, lon: 2 });
    const tile2 = new Tile({ lat: 3, lon: 4 });
    const tile3 = new Tile({ lat: 2, lon: 1 });

    expect(tile0.location).toEqual({ lat: 0, lon: 0 });
    expect(tile1.location).toEqual({ lat: 1, lon: 2 });
    expect(tile2.location).toEqual({ lat: 3, lon: 4 });
    expect(tile3.location).toEqual({ lat: 2, lon: 1 });
  });
});
