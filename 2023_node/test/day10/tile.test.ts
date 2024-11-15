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

  test('Should optionally load an attribute type', () => {
    const tile0 = new Tile();
    const tile1 = new Tile();
    const tile2 = new Tile();
    const tile3 = new Tile();
    tile1.setType('in');
    tile2.setType('out');
    tile3.setType('other');

    expect(tile0.type).toBeUndefined();
    expect(tile1.type).toBe('in');
    expect(tile2.type).toBe('out');
    expect(tile3.type).toBe('other');
  });
});

describe('Finding position in land', () => {

  test('Should know if located in the border of land', () => {
    const tile0 = new Tile();
    const tile1 = new Tile({ lat: 1, lon: 1 });
    const tile2 = new Tile({ lat: 4, lon: 1 });
    const tile3 = new Tile({ lat: 2, lon: 4 });

    expect(tile0.amIInTheBorder(2, 2)).toBe(true);
    expect(tile1.amIInTheBorder(5, 5)).toBe(false);
    expect(tile2.amIInTheBorder(5, 5)).toBe(true);
    expect(tile3.amIInTheBorder(5, 5)).toBe(true);

    expect(tile2.amIInTheBorder(6, 6)).toBe(false);
    expect(tile3.amIInTheBorder(6, 6)).toBe(false);

    expect(tile2.amIInTheBorder(5, 10)).toBe(true);
    expect(tile3.amIInTheBorder(5, 10)).toBe(false);

    expect(tile2.amIInTheBorder(10, 5)).toBe(false);
    expect(tile3.amIInTheBorder(10, 5)).toBe(true);
  });
});
