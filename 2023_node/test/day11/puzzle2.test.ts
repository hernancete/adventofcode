import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day11/puzzle2';

const sampleA = getAbsPath(__dirname, './input.txt');
// const answer10 = 1030;
// const answer100 = 8410;

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

  test('Should find the minimum distance between every galaxy pair when expanded by 1', () => {
    const puzzle2 = new Puzzle2(sampleA);
    puzzle2.expand();
    puzzle2.findGalaxies();
    puzzle2.findGalaxyPairs();
    puzzle2.setExpandedBy(1);
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

    expect(puzzle2.galaxyPairs[0]).toHaveProperty('distance', 15); // 1-2 (expanded rows: 0, expanded cols: 1)
    expect(puzzle2.galaxyPairs[1]).toHaveProperty('distance', 15); // 1-3 (expanded rows: 0, expanded cols: 1)
    expect(puzzle2.galaxyPairs[7]).toHaveProperty('distance', 30); // 1-9 (expanded rows: 2, expanded cols: 0)
    expect(puzzle2.galaxyPairs[13]).toHaveProperty('distance', 55); // 2-8 (expanded rows: 2, expanded cols: 2)
    expect(puzzle2.galaxyPairs[5]).toHaveProperty('distance', 42); // 1-7 (expanded rows: 2, expanded cols: 1)
    expect(puzzle2.galaxyPairs[18]).toHaveProperty('distance', 53); // 3-6 (expanded rows: 1, expanded cols: 3)
    expect(puzzle2.galaxyPairs[35]).toHaveProperty('distance', 14); // 8-9 (expanded rows: 0, expanded cols: 1)
  });

  test('Should find the minimum distance between every galaxy pair when expanded by 100', () => {
    const puzzle2 = new Puzzle2(sampleA);
    puzzle2.expand();
    puzzle2.findGalaxies();
    puzzle2.findGalaxyPairs();
    puzzle2.setExpandedBy(100);
    puzzle2.findMinuminDistanceBetweenGalaxyPairs();

    expect(puzzle2.galaxyPairs[0]).toHaveProperty('distance', 105); // 1-2 (expanded rows: 0, expanded cols: 1)
    expect(puzzle2.galaxyPairs[1]).toHaveProperty('distance', 105); // 1-3 (expanded rows: 0, expanded cols: 1)
    expect(puzzle2.galaxyPairs[7]).toHaveProperty('distance', 210); // 1-9 (expanded rows: 2, expanded cols: 0)
    expect(puzzle2.galaxyPairs[13]).toHaveProperty('distance', 415); // 2-8 (expanded rows: 2, expanded cols: 2)
    expect(puzzle2.galaxyPairs[5]).toHaveProperty('distance', 312); // 1-7 (expanded rows: 2, expanded cols: 1)
    expect(puzzle2.galaxyPairs[18]).toHaveProperty('distance', 413); // 3-6 (expanded rows: 1, expanded cols: 3)
    expect(puzzle2.galaxyPairs[35]).toHaveProperty('distance', 104); // 8-9 (expanded rows: 0, expanded cols: 1)
  });
});
