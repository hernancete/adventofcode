import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1 } from '../../src/day11/puzzle1';

const sampleA = getAbsPath(__dirname, './input.txt');
const sampleAVerticallyExpandIndexes = [3, 7];
const sampleAVerticallyNotExpandIndexes = [0, 1, 2, 4, 5, 6, 8, 9];
const sampleAHorizontallyExpandIndexes = [2, 5, 8];
const sampleAHorizontallyNotExpandIndexes = [0, 1, 3, 4, 6, 7, 9];
const sampleAExpandedUniverseRow0 = '....#........';
const sampleAExpandedUniverseRow1 = '.........#...';
const sampleAExpandedUniverseRow6 = '.#...........';
const sampleAExpandedUniverseRow11 = '#....#.......';

// expanded sample A universe
// ....#........
// .........#...
// #............
// .............
// .............
// ........#....
// .#...........
// ............#
// .............
// .............
// .........#...
// #....#.......

describe('Parsing the input', () => {

  test('Should parse the input', () => {
    const puzzle1 = new Puzzle1(sampleA);

    expect(puzzle1.input).toBeInstanceOf(Array);
    expect(puzzle1.input).toHaveLength(10);
    expect(typeof puzzle1.input[0]).toBe('string');
    expect(puzzle1.input[0]).toHaveLength(10);
    expect(puzzle1.input[0]).toMatch(/^[\.#]{10}$/);
  });
});

describe('Expanding the universe', () => {

  test('Should expand vertically', () => {
    const puzzle1 = new Puzzle1(sampleA);
    const verticallyExpandIndexes = puzzle1.shouldExpandVertically();
    expect(verticallyExpandIndexes).toEqual(expect.arrayContaining(sampleAVerticallyExpandIndexes));
    expect(verticallyExpandIndexes).toEqual(expect.not.arrayContaining(sampleAVerticallyNotExpandIndexes));
  });

  test('Should expand horizontally', () => {
    const puzzle1 = new Puzzle1(sampleA);
    const horizontallyExpandIndexes = puzzle1.shouldExpandHorizontally();
    expect(horizontallyExpandIndexes).toEqual(expect.arrayContaining(sampleAHorizontallyExpandIndexes));
    expect(horizontallyExpandIndexes).toEqual(expect.not.arrayContaining(sampleAHorizontallyNotExpandIndexes));
  });

  test('Should expand the universe', () => {
    const puzzle1 = new Puzzle1(sampleA);
    puzzle1.expand();

    expect(puzzle1.universe).toBeInstanceOf(Array);
    expect(puzzle1.universe).toHaveLength(12);
    expect(puzzle1.universe[0]).toBeInstanceOf(Array);
    expect(puzzle1.universe[0]).toHaveLength(13);
    expect(puzzle1.universe[0]).toEqual(sampleAExpandedUniverseRow0.split(''));
    expect(puzzle1.universe[1]).toEqual(sampleAExpandedUniverseRow1.split(''));
    expect(puzzle1.universe[6]).toEqual(sampleAExpandedUniverseRow6.split(''));
    expect(puzzle1.universe[11]).toEqual(sampleAExpandedUniverseRow11.split(''));
  });
});

describe('Working with galaxies', () => {

  test('Should find and identify every galaxy', () => {
    const puzzle1 = new Puzzle1(sampleA);
    puzzle1.expand();
    puzzle1.findGalaxies();

    expect(puzzle1.galaxies).toBeInstanceOf(Array);
    expect(puzzle1.galaxies).toHaveLength(9);
    expect(puzzle1.galaxies[0]).toEqual(expect.objectContaining({ row: 0, col: 4 }));
    expect(puzzle1.galaxies[2]).toEqual(expect.objectContaining({ row: 2, col: 0 }));
    expect(puzzle1.galaxies[5]).toEqual(expect.objectContaining({ row: 7, col: 12 }));
    expect(puzzle1.galaxies[8]).toEqual(expect.objectContaining({ row: 11, col: 5 }));
  });
});
