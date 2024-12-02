import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1, getLocationAlternatives } from '../../src/day12/puzzle1';

const sampleAInputFile = getAbsPath(__dirname, 'input.txt');
const sampleARecords = [
  { springs: '#.#.###', groups: [1, 1, 3] },
  { springs: '.#...#....###.', groups: [1, 1, 3] },
  { springs: '.#.###.#.######', groups: [1, 3, 1, 6] },
  { springs: '####.#...#...', groups: [4, 1, 1] },
  { springs: '#....######..#####.', groups: [1, 6, 5] },
  { springs: '.###.##....#', groups: [3, 2, 1] },
];
const someLocationOptions = [
  { springs: '???.###', groupLength: 1, locations: [[0, 1], [1, 2], [2, 3]] },
  { springs: '???.###', groupLength: 3, locations: [[0, 3], [4, 7]] },
  { springs: '???.###', groupLength: 4, locations: [] },
  { springs: '.??..??...?##.', groupLength: 1, locations: [[1, 2], [2, 3], [5, 6], [6, 7]] },
  { springs: '.??..??...?##.', groupLength: 2, locations: [[1, 3], [5, 7], [11, 13]] },
  { springs: '.??..??...?##.', groupLength: 3, locations: [[10, 13]] },
  { springs: '????.######..#####.', groupLength: 1, locations: [[0, 1], [1, 2], [2, 3], [3, 4]] },
  { springs: '????.######..#####.', groupLength: 2, locations: [[0, 2], [1, 3], [2, 4]] },
  { springs: '????.######..#####.', groupLength: 3, locations: [[0, 3], [1, 4]] },
  { springs: '????.######..#####.', groupLength: 4, locations: [[0, 4]] },
  { springs: '????.######..#####.', groupLength: 5, locations: [[13, 18]] },
  { springs: '????.######..#####.', groupLength: 6, locations: [[5, 11]] },
];

describe('Parsing the input', () => {

  test('Should identify springs and groups', () => {
    const puzzle1 = new Puzzle1(sampleAInputFile);
    puzzle1.parseRecords();

    expect(puzzle1.records).toBeInstanceOf(Array);
    expect(puzzle1.records).toHaveLength(6);
    for (let r: number = 0; r < sampleARecords.length; r++) {
      expect(puzzle1.records[r]).toEqual(expect.objectContaining({
        springs: sampleARecords[r].springs,
        groups: expect.arrayContaining(sampleARecords[r].groups),
      }));
    }
  });

  test('Should get all group location options', () => {
    for (const slo of someLocationOptions) {
      const options = getLocationAlternatives(slo.springs, slo.groupLength);
      expect(options).toEqual(slo.locations);
    }
  });
});
