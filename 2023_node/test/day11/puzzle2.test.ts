import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day11/puzzle2';

const sampleA = getAbsPath(__dirname, './input.txt');
const sampleAEmptyRows = 2;
const sampleAEmptyRowsIndexes = [3, 7];
const sampleANonEmptyRowsIndexes = [0, 1, 2, 4, 5, 6, 8, 9];
const sampleAEmptyCols = 3;
const sampleAEmptyColsIndexes = [2, 5, 8];
const sampleANonEmptyColsIndexes = [0, 1, 3, 4, 6, 7, 9];
const answer = 374;
const answer10 = 1030;
const answer100 = 8410;

// Sample A universe
//   v  v  v
// ...1......
// .......2..
// 3.........
// .......... <
// ......4...
// .5........
// .........6
// .......... <
// .......7..
// 8...9.....

describe('Working with galaxies', () => {

  test('Should find the empty rows and cols', () => {
    const puzzle2 = new Puzzle2(sampleA);
    puzzle2.expand();
    puzzle2.findEmptyRows();
    puzzle2.findEmptyCols();

    expect(puzzle2.emptyRows).toHaveLength(sampleAEmptyRows);
    expect(puzzle2.emptyRows).toEqual(expect.arrayContaining(sampleAEmptyRowsIndexes));
    expect(puzzle2.emptyRows).toEqual(expect.not.arrayContaining(sampleANonEmptyRowsIndexes));
    expect(puzzle2.emptyCols).toHaveLength(sampleAEmptyCols);
    expect(puzzle2.emptyCols).toEqual(expect.arrayContaining(sampleAEmptyColsIndexes));
    expect(puzzle2.emptyCols).toEqual(expect.not.arrayContaining(sampleANonEmptyColsIndexes));
  });

  test('Should find the minimum distance between every galaxy pair when no expanded (expanded by 0)', () => {
    const puzzle2 = new Puzzle2(sampleA);
    puzzle2.expand();
    puzzle2.findGalaxies();
    puzzle2.findGalaxyPairs();
    puzzle2.setExpandedBy(0);
    puzzle2.findMinuminDistanceBetweenGalaxyPairs();

    expect(puzzle2.galaxyPairs).toBeInstanceOf(Array);
    expect(puzzle2.galaxyPairs).toHaveLength(36);
    expect(puzzle2.galaxyPairs[0]).toHaveProperty('distance', 5); // 1-2
    expect(puzzle2.galaxyPairs[1]).toHaveProperty('distance', 5); // 1-3
    expect(puzzle2.galaxyPairs[7]).toHaveProperty('distance', 10); // 1-9
    expect(puzzle2.galaxyPairs[13]).toHaveProperty('distance', 15); // 2-8
    expect(puzzle2.galaxyPairs[5]).toHaveProperty('distance', 12); // 1-7
    expect(puzzle2.galaxyPairs[18]).toHaveProperty('distance', 13); // 3-6
    expect(puzzle2.galaxyPairs[35]).toHaveProperty('distance', 4); // 8-9
  });

  test('Should find the minimum distance between every galaxy pair when expanded by 2', () => {
    const puzzle2 = new Puzzle2(sampleA);
    puzzle2.expand();
    puzzle2.findGalaxies();
    puzzle2.findGalaxyPairs();
    puzzle2.setExpandedBy(2);
    puzzle2.findMinuminDistanceBetweenGalaxyPairs();

    expect(puzzle2.galaxyPairs[0]).toHaveProperty('distance', 6); // 1-2
    expect(puzzle2.galaxyPairs[1]).toHaveProperty('distance', 6); // 1-3
    expect(puzzle2.galaxyPairs[7]).toHaveProperty('distance', 12); // 1-9
    expect(puzzle2.galaxyPairs[13]).toHaveProperty('distance', 19); // 2-8
    expect(puzzle2.galaxyPairs[5]).toHaveProperty('distance', 15); // 1-7
    expect(puzzle2.galaxyPairs[18]).toHaveProperty('distance', 17); // 3-6
    expect(puzzle2.galaxyPairs[35]).toHaveProperty('distance', 5); // 8-9
  });

  test('Should find the minimum distance between every galaxy pair when expanded by 10', () => {
    const puzzle2 = new Puzzle2(sampleA);
    puzzle2.expand();
    puzzle2.findGalaxies();
    puzzle2.findGalaxyPairs();
    puzzle2.setExpandedBy(10);
    puzzle2.findMinuminDistanceBetweenGalaxyPairs();

    expect(puzzle2.galaxyPairs[0]).toHaveProperty('distance', 14); // 1-2 (expanded rows: 0, expanded cols: 1)
    expect(puzzle2.galaxyPairs[1]).toHaveProperty('distance', 14); // 1-3 (expanded rows: 0, expanded cols: 1)
    expect(puzzle2.galaxyPairs[7]).toHaveProperty('distance', 28); // 1-9 (expanded rows: 2, expanded cols: 0)
    expect(puzzle2.galaxyPairs[13]).toHaveProperty('distance', 51); // 2-8 (expanded rows: 2, expanded cols: 2)
    expect(puzzle2.galaxyPairs[5]).toHaveProperty('distance', 39); // 1-7 (expanded rows: 2, expanded cols: 1)
    expect(puzzle2.galaxyPairs[18]).toHaveProperty('distance', 49); // 3-6 (expanded rows: 1, expanded cols: 3)
    expect(puzzle2.galaxyPairs[35]).toHaveProperty('distance', 13); // 8-9 (expanded rows: 0, expanded cols: 1)
  });

  test('Should find the minimum distance between every galaxy pair when expanded by 100', () => {
    const puzzle2 = new Puzzle2(sampleA);
    puzzle2.expand();
    puzzle2.findGalaxies();
    puzzle2.findGalaxyPairs();
    puzzle2.setExpandedBy(100);
    puzzle2.findMinuminDistanceBetweenGalaxyPairs();

    expect(puzzle2.galaxyPairs[0]).toHaveProperty('distance', 104); // 1-2 (expanded rows: 0, expanded cols: 1)
    expect(puzzle2.galaxyPairs[1]).toHaveProperty('distance', 104); // 1-3 (expanded rows: 0, expanded cols: 1)
    expect(puzzle2.galaxyPairs[7]).toHaveProperty('distance', 208); // 1-9 (expanded rows: 2, expanded cols: 0)
    expect(puzzle2.galaxyPairs[13]).toHaveProperty('distance', 411); // 2-8 (expanded rows: 2, expanded cols: 2)
    expect(puzzle2.galaxyPairs[5]).toHaveProperty('distance', 309); // 1-7 (expanded rows: 2, expanded cols: 1)
    expect(puzzle2.galaxyPairs[18]).toHaveProperty('distance', 409); // 3-6 (expanded rows: 1, expanded cols: 3)
    expect(puzzle2.galaxyPairs[35]).toHaveProperty('distance', 103); // 8-9 (expanded rows: 0, expanded cols: 1)
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const puzzle2 = new Puzzle2(sampleA);

    puzzle2.setExpandedBy(2);
    puzzle2.reset();
    expect(puzzle2.solve()).toBe(answer);

    puzzle2.setExpandedBy(10);
    puzzle2.reset();
    expect(puzzle2.solve()).toBe(answer10);

    puzzle2.setExpandedBy(100);
    puzzle2.reset();
    expect(puzzle2.solve()).toBe(answer100);
  });
});
