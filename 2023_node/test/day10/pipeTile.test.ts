import { describe, test, expect } from '@jest/globals';
import { PipeTile } from '../../src/day10/pipeTile';

const tiles = [
  { tile: '|', connectedTo: { N: true, S: true, E: false, W: false } },
  { tile: '-', connectedTo: { N: false, S: false, E: true, W: true } },
  { tile: '7', connectedTo: { N: false, S: true, E: false, W: true } },
  { tile: 'F', connectedTo: { N: false, S: true, E: true, W: false } },
  { tile: 'J', connectedTo: { N: true, S: false, E: false, W: true } },
  { tile: 'L', connectedTo: { N: true, S: false, E: true, W: false } },
];

describe('Setting up a tile', () => {

  test('Should set the tile', () => {
    for (const t of tiles) {
      const tile = new PipeTile(t.tile);
      expect(tile.tile).toBe(t.tile);
    }
  });

  test('Should set the connections to neighbours', () => {
    for (const t of tiles) {
      const tile = new PipeTile(t.tile);
      expect(tile.connectedTo).toEqual(t.connectedTo);
    }
  });

  test('Should set the default location if not provided', () => {
    const tile = new PipeTile('L');

    expect(tile.location).toEqual([0, 0]);
  });

  test('Should set the location', () => {
    const tile0 = new PipeTile('L', [0, 0]);
    const tile1 = new PipeTile('L', [1, 2]);
    const tile2 = new PipeTile('F', [3, 4]);
    const tile3 = new PipeTile('F', [2, 1]);

    expect(tile0.location).toEqual([0, 0]);
    expect(tile1.location).toEqual([1, 2]);
    expect(tile2.location).toEqual([3, 4]);
    expect(tile3.location).toEqual([2, 1]);
  });
});
