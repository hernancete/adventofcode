import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1, getLocationAlternatives } from '../../src/day12/puzzle1';

const sampleAInputFile = getAbsPath(__dirname, 'input.txt');
const sampleBInputFile = getAbsPath(__dirname, 'input2.txt');
const sampleCInputFile = getAbsPath(__dirname, 'input3.txt');
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
  { springs: '?###????????', groupLength: 1, locations: [[5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12]] },
  { springs: '?###????????', groupLength: 2, locations: [[5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12]] },
  { springs: '?###????????', groupLength: 3, locations: [[1, 4], [5, 8], [6, 9], [7, 10], [8, 11], [9, 12]] },
  { springs: '?###????????', groupLength: 4, locations: [[0, 4], [1, 5], [5, 9], [6, 10], [7, 11], [8, 12]] },
];
const sampleALocationAlternatives = [
  [
    // #.#.### 1,1,3
    [[0, 1], [2, 3], [4, 7]],
  ],
  [
    // .#...#....###. 1,1,3
    [[1, 2], [5, 6], [10, 13]],
  ],
  [
    // .#.###.#.###### 1,3,1,6
    [[1, 2], [3, 6], [7, 8], [9, 15]],
  ],
  [
    // ####.#...#... 4,1,1
    [[0, 4], [5, 6], [9, 10]],
  ],
  [
    // #....######..#####. 1,6,5
    [[0, 1], [5, 11], [13, 18]],
  ],
  [
    // .###.##....# 3,2,1
    [[1, 4], [5, 7], [11, 12]],
  ],
];
const sampleBLocationAlternatives = [
  [
    // ???.### 1,1,3
    [[0, 1], [2, 3], [4, 7]],
  ],
  [
    // .??..??...?##. 1,1,3
    [[1, 2], [5, 6], [10, 13]],
    [[1, 2], [6, 7], [10, 13]],
    [[2, 3], [5, 6], [10, 13]],
    [[2, 3], [6, 7], [10, 13]],
  ],
  [
    // ?#?#?#?#?#?#?#? 1,3,1,6
    [[1, 2], [3, 6], [7, 8], [9, 15]],
  ],
  [
    // ????.#...#... 4,1,1
    [[0, 4], [5, 6], [9, 10]],
  ],
  [
    // ????.######..#####. 1,6,5
    [[0, 1], [5, 11], [13, 18]],
    [[1, 2], [5, 11], [13, 18]],
    [[2, 3], [5, 11], [13, 18]],
    [[3, 4], [5, 11], [13, 18]],
  ],
  [
    // ?###???????? 3,2,1
    [[1, 4], [5, 7], [8, 9]],
    [[1, 4], [5, 7], [9, 10]],
    [[1, 4], [5, 7], [10, 11]],
    [[1, 4], [5, 7], [11, 12]],
    [[1, 4], [6, 8], [9, 10]],
    [[1, 4], [6, 8], [10, 11]],
    [[1, 4], [6, 8], [11, 12]],
    [[1, 4], [7, 9], [10, 11]],
    [[1, 4], [7, 9], [11, 12]],
    [[1, 4], [8, 10], [11, 12]],
  ],
];
const sampleCLocationAlternatives = [
  ...sampleBLocationAlternatives,
  [
    // ?###???????? 4,2,1
    [[0, 4], [5, 7], [8, 9]],
    [[0, 4], [5, 7], [9, 10]],
    [[0, 4], [5, 7], [10, 11]],
    [[0, 4], [5, 7], [11, 12]],
    [[0, 4], [6, 8], [9, 10]],
    [[0, 4], [6, 8], [10, 11]],
    [[0, 4], [6, 8], [11, 12]],
    [[0, 4], [7, 9], [10, 11]],
    [[0, 4], [7, 9], [11, 12]],
    [[0, 4], [8, 10], [11, 12]],
    [[1, 5], [6, 8], [9, 10]],
    [[1, 5], [6, 8], [10, 11]],
    [[1, 5], [6, 8], [11, 12]],
    [[1, 5], [7, 9], [10, 11]],
    [[1, 5], [7, 9], [11, 12]],
    [[1, 5], [8, 10], [11, 12]],
  ],
];
const answerA = 6;
const answerB = 21;
const answerC = 37;

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
});

describe('Working with spring groups', () => {

  test('Should get all group location options for a given spring record', () => {
    for (const slo of someLocationOptions) {
      const options = getLocationAlternatives(slo.springs, slo.groupLength);
      expect(options).toEqual(slo.locations);
    }
  });

  test('Should get all possible group location options combinations for a given srping record and damaged groups', () => {
    const puzzle1A = new Puzzle1(sampleAInputFile);
    puzzle1A.parseRecords();
    puzzle1A.calculateDamagedGroupLocationOptions();

    const puzzle1B = new Puzzle1(sampleBInputFile);
    puzzle1B.parseRecords();
    puzzle1B.calculateDamagedGroupLocationOptions();

    const puzzle1C = new Puzzle1(sampleCInputFile);
    puzzle1C.parseRecords();
    puzzle1C.calculateDamagedGroupLocationOptions();

    for (let l = 0; l < sampleALocationAlternatives.length; l++) {
      expect(puzzle1A.records[l].locationOptions).toEqual(expect.arrayContaining(sampleALocationAlternatives[l]));
    }
    for (let l = 0; l < sampleBLocationAlternatives.length; l++) {
      expect(puzzle1B.records[l].locationOptions).toEqual(expect.arrayContaining(sampleBLocationAlternatives[l]));
    }
    for (let l = 0; l < sampleCLocationAlternatives.length; l++) {
      expect(puzzle1C.records[l].locationOptions).toEqual(expect.arrayContaining(sampleCLocationAlternatives[l]));
    }
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const puzzle1A = new Puzzle1(sampleAInputFile);
    const puzzle1B = new Puzzle1(sampleBInputFile);
    const puzzle1C = new Puzzle1(sampleCInputFile);

    expect(puzzle1A.solve()).toBe(answerA);
    expect(puzzle1B.solve()).toBe(answerB);
    expect(puzzle1C.solve()).toBe(answerC);
  });
});
