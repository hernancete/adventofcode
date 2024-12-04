import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle1, getLocationAlternatives } from '../../src/day12/puzzle1';

const sampleAInputFile = getAbsPath(__dirname, 'input.txt');
const sampleBInputFile = getAbsPath(__dirname, 'input2.txt');
const sampleCInputFile = getAbsPath(__dirname, 'input3.txt');
const sampleDInputFile = getAbsPath(__dirname, 'input4.txt');
const sampleEInputFile = getAbsPath(__dirname, 'input5.txt');
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
const sampleDLocationAlternatives = [
  [
    // 01234567890123
    // ???????.???#?? 6,1,2
    [[0, 6], [8, 9], [10, 12]],
    [[0, 6], [8, 9], [11, 13]],
    [[0, 6], [9, 10], [11, 13]],
    [[1, 7], [8, 9], [10, 12]],
    [[1, 7], [8, 9], [11, 13]],
    [[1, 7], [9, 10], [11, 13]],
  ],
  [
    // 0123456789
    // #?.#???.?? 2,4,1
    [[0, 2], [3, 7], [8, 9]],
    [[0, 2], [3, 7], [9, 10]],
  ],
  [
    // 01234567890123
    // ?####????.?.?? 4,3,2
    [[1, 5], [6, 9], [12, 14]],
  ],
  [
    // 0123456789
    // ?????#???? 6,1
    [[0, 6], [7, 8]],
    [[0, 6], [8, 9]],
    [[0, 6], [9, 10]],
    [[1, 7], [8, 9]],
    [[1, 7], [9, 10]],
    [[2, 8], [9, 10]],
  ],
  [
    // 01234567890123456
    // ????.???????#?#.? 1,5
    [[0, 1], [5, 10]],
    [[0, 1], [6, 11]],
    [[0, 1], [8, 13]],
    [[0, 1], [10, 15]],
    [[1, 2], [5, 10]],
    [[1, 2], [6, 11]],
    [[1, 2], [8, 13]],
    [[1, 2], [10, 15]],
    [[2, 3], [5, 10]],
    [[2, 3], [6, 11]],
    [[2, 3], [8, 13]],
    [[2, 3], [10, 15]],
    [[3, 4], [5, 10]],
    [[3, 4], [6, 11]],
    [[3, 4], [8, 13]],
    [[3, 4], [10, 15]],
    [[5, 6], [8, 13]],
    [[5, 6], [10, 15]],
    [[6, 7], [8, 13]],
    [[6, 7], [10, 15]],
    [[7, 8], [10, 15]],
    [[8, 9], [10, 15]],
  ],
  [
    // 0123456789012345
    // .#???##.?#??#??? 6,5
    [[1, 7], [8, 13]],
    [[1, 7], [9, 14]],
    [[1, 7], [11, 16]],
  ],
  [
    // 0123456789012345678
    // ??#?#?????????????. 8,4,1
    [[0, 8], [9, 13], [14, 15]],
    [[0, 8], [9, 13], [15, 16]],
    [[0, 8], [9, 13], [16, 17]],
    [[0, 8], [9, 13], [17, 18]],
    [[0, 8], [10, 14], [15, 16]],
    [[0, 8], [10, 14], [16, 17]],
    [[0, 8], [10, 14], [17, 18]],
    [[0, 8], [11, 15], [16, 17]],
    [[0, 8], [11, 15], [17, 18]],
    [[0, 8], [12, 16], [17, 18]],
    [[1, 9], [10, 14], [15, 16]],
    [[1, 9], [10, 14], [16, 17]],
    [[1, 9], [10, 14], [17, 18]],
    [[1, 9], [11, 15], [16, 17]],
    [[1, 9], [11, 15], [17, 18]],
    [[1, 9], [12, 16], [17, 18]],
    [[2, 10], [11, 15], [16, 17]],
    [[2, 10], [11, 15], [17, 18]],
    [[2, 10], [12, 16], [17, 18]],
  ],
  [
    // 0123456789
    // .??????#?? 1,1,1
    [[1, 2], [3, 4], [5, 6]],
    [[1, 2], [3, 4], [7, 8]],
    [[1, 2], [3, 4], [9, 10]],
    [[1, 2], [4, 5], [7, 8]],
    [[1, 2], [4, 5], [9, 10]],
    [[1, 2], [5, 6], [7, 8]],
    [[1, 2], [5, 6], [9, 10]],
    [[1, 2], [7, 8], [9, 10]],
    [[2, 3], [4, 5], [7, 8]],
    [[2, 3], [4, 5], [9, 10]],
    [[2, 3], [5, 6], [7, 8]],
    [[2, 3], [5, 6], [9, 10]],
    [[2, 3], [7, 8], [9, 10]],
    [[3, 4], [5, 6], [7, 8]],
    [[3, 4], [5, 6], [9, 10]],
    [[3, 4], [7, 8], [9, 10]],
    [[4, 5], [7, 8], [9, 10]],
    [[5, 6], [7, 8], [9, 10]],
  ],
  [
    // 012345678901234567
    // ??????????#???##?. 1,1,10
    [[0, 1], [2, 3], [6, 16]],
    [[0, 1], [2, 3], [7, 17]],
    [[0, 1], [3, 4], [6, 16]],
    [[0, 1], [3, 4], [7, 17]],
    [[0, 1], [4, 5], [6, 16]],
    [[0, 1], [4, 5], [7, 17]],
    [[0, 1], [5, 6], [7, 17]],
    [[1, 2], [3, 4], [6, 16]],
    [[1, 2], [3, 4], [7, 17]],
    [[1, 2], [4, 5], [6, 16]],
    [[1, 2], [4, 5], [7, 17]],
    [[1, 2], [5, 6], [7, 17]],
    [[2, 3], [4, 5], [6, 16]],
    [[2, 3], [4, 5], [7, 17]],
    [[2, 3], [5, 6], [7, 17]],
    [[3, 4], [5, 6], [7, 17]],
  ],
  [
    // 0123456789012
    // ???##????.??? 1,4,1,2
    [[0, 1], [2, 6], [7, 8], [10, 12]],
    [[0, 1], [2, 6], [7, 8], [11, 13]],
    [[0, 1], [2, 6], [8, 9], [10, 12]],
    [[0, 1], [2, 6], [8, 9], [11, 13]],
    [[0, 1], [3, 7], [8, 9], [10, 12]],
    [[0, 1], [3, 7], [8, 9], [11, 13]],
    [[1, 2], [3, 7], [8, 9], [10, 12]],
    [[1, 2], [3, 7], [8, 9], [11, 13]],
  ],
  [
    // 01234567890123456789
    // .???#??.##???????##? 5,3,1,6
    [[1, 6], [8, 11], [12, 13], [14, 20]],
    [[2, 7], [8, 11], [12, 13], [14, 20]],
  ],
  [
    // 012345678901
    // ?#??#???.??? 1,1,1
    [[1, 2], [4, 5], [6, 7]],
    [[1, 2], [4, 5], [7, 8]],
    [[1, 2], [4, 5], [9, 10]],
    [[1, 2], [4, 5], [10, 11]],
    [[1, 2], [4, 5], [11, 12]],
    [[1, 2], [6, 7], [9, 10]],
    [[1, 2], [6, 7], [10, 11]],
    [[1, 2], [6, 7], [11, 12]],
    [[1, 2], [7, 8], [9, 10]],
    [[1, 2], [7, 8], [10, 11]],
    [[1, 2], [7, 8], [11, 12]],
    [[1, 2], [9, 10], [11, 12]],
    [[4, 5], [6, 7], [9, 10]],
    [[4, 5], [6, 7], [10, 11]],
    [[4, 5], [6, 7], [11, 12]],
    [[4, 5], [7, 8], [9, 10]],
    [[4, 5], [7, 8], [10, 11]],
    [[4, 5], [7, 8], [11, 12]],
    [[4, 5], [9, 10], [11, 12]],
    [[6, 7], [9, 10], [11, 12]],
    [[7, 8], [9, 10], [11, 12]],
  ],
  [
    // 012345678901
    // .??..?????#. 1,4,1
    [[1, 2], [5, 9], [10, 11]],
    [[2, 3], [5, 9], [10, 11]],
  ],
  [
    // 01234567890
    // ???#?????.. 1,3,1
    [[0, 1], [2, 5], [6, 7]],
    [[0, 1], [2, 5], [7, 8]],
    [[0, 1], [2, 5], [8, 9]],
    [[0, 1], [3, 6], [7, 8]],
    [[0, 1], [3, 6], [8, 9]],
    [[1, 2], [3, 6], [7, 8]],
    [[1, 2], [3, 6], [8, 9]],
  ],
  [
    // 0123456789012345678
    // ?#???.?#???#?..#??# 2,1,5,1,2
    [[0, 2], [3, 4], [7, 12], [15, 16], [17, 19]],
    [[0, 2], [4, 5], [7, 12], [15, 16], [17, 19]],
    [[1, 3], [4, 5], [7, 12], [15, 16], [17, 19]],
  ],
  [
    // 0123456789012345
    // ?#??#?.???.#???. 1,3,1,2
    [[1, 2], [3, 6], [7, 8], [11, 13]],
    [[1, 2], [3, 6], [7, 8], [13, 15]],
    [[1, 2], [3, 6], [8, 9], [11, 13]],
    [[1, 2], [3, 6], [8, 9], [13, 15]],
    [[1, 2], [3, 6], [9, 10], [11, 13]],
    [[1, 2], [3, 6], [9, 10], [13, 15]],
    [[1, 2], [3, 6], [11, 12], [13, 15]],
    [[1, 2], [7, 10], [11, 12], [13, 15]],
    [[4, 5], [7, 10], [11, 12], [13, 15]],
  ],
  [
    // 01234567890123456
    // .#??#?.???#???#?? 1,1,9
    [[1, 2], [4, 5], [7, 16]],
    [[1, 2], [4, 5], [8, 17]],
  ],
  [
    // 0123456789012
    // ?.?#?##...??? 1,4,1,1
    [[0, 1,], [3, 7], [10, 11], [12, 13]],
  ],
  [
    // 0123456789012345678
    // ??#?#?#??##???????. 3,3,3,1,3
    [[0, 3], [4, 7], [8, 11], [12, 13], [14, 17]],
    [[0, 3], [4, 7], [8, 11], [12, 13], [15, 18]],
    [[0, 3], [4, 7], [8, 11], [13, 14], [15, 18]],
    [[0, 3], [4, 7], [9, 12], [13, 14], [15, 18]],
  ],
];
const sampleELocationAlternatives = [
  [
    // 0123456789012
    // ?..#??????.?? 2,1
    [[3, 5], [6, 7]],
    [[3, 5], [7, 8]],
    [[3, 5], [8, 9]],
    [[3, 5], [9, 10]],
    [[3, 5], [11, 12]],
    [[3, 5], [12, 13]],
    [[5, 7], [8, 9]],
    [[5, 7], [9, 10]],
    [[5, 7], [11, 12]],
    [[5, 7], [12, 13]],
    [[6, 8], [9, 10]],
    [[6, 8], [11, 12]],
    [[6, 8], [12, 13]],
    [[7, 9], [11, 12]],
    [[7, 9], [12, 13]],
    [[8, 10], [11, 12]],
    [[8, 10], [12, 13]],
  ],
  [
    // 012345678901
    // ??#???#?.#?? 6,2
    [[1, 7], [9, 11]],
    [[2, 8], [9, 11]],
  ],
  [
    // 0123456789012
    // .???????#??#? 7,1
    [[2, 9], [11, 12]],
    [[3, 10], [11, 12]],
  ],
  [
    // 01234567890123456789
    // .?????#?#??##.?????? 9,3
    [[1, 10], [14, 17]],
    [[1, 10], [15, 18]],
    [[1, 10], [16, 19]],
    [[1, 10], [17, 20]],
    [[4, 13], [14, 17]],
    [[4, 13], [15, 18]],
    [[4, 13], [16, 19]],
    [[4, 13], [17, 20]],
  ],
  [
    // 012345678901
    // ??#???#.???? 7,1
    [[0, 7], [8, 9]],
    [[0, 7], [9, 10]],
    [[0, 7], [10, 11]],
    [[0, 7], [11, 12]],
  ],
  [
    // 01234567890123
    // ????#?####.?#? 6,2
    [[4, 10], [11, 13]],
    [[4, 10], [12, 14]],
  ],
  [
    // 0123456789012345
    // ???###?#??.???.? 7,1
    [[1, 8], [9, 10]],
    [[1, 8], [11, 12]],
    [[1, 8], [12, 13]],
    [[1, 8], [13, 14]],
    [[1, 8], [15, 16]],
    [[2, 9], [11, 12]],
    [[2, 9], [12, 13]],
    [[2, 9], [13, 14]],
    [[2, 9], [15, 16]],
    [[3, 10], [11, 12]],
    [[3, 10], [12, 13]],
    [[3, 10], [13, 14]],
    [[3, 10], [15, 16]],
  ],
  [
    // 0123456789
    // ????.?#?.? 2,2
    [[0, 2], [5, 7]],
    [[0, 2], [6, 8]],
    [[1, 3], [5, 7]],
    [[1, 3], [6, 8]],
    [[2, 4], [5, 7]],
    [[2, 4], [6, 8]],
  ],
];

const answerA = 6;
const answerB = 21;
const answerC = 37;
const answerD = 152;

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

describe.only('Working with spring groups', () => {

  test('Should get all group location options for a given spring record', () => {
    for (const slo of someLocationOptions) {
      const options = getLocationAlternatives(slo.springs, slo.groupLength);
      expect(options).toEqual(slo.locations);
    }
  });

  test('Should get all possible group location options combinations for a given srping record and damaged groups - inputA', () => {
    const puzzle1A = new Puzzle1(sampleAInputFile);
    puzzle1A.parseRecords();
    puzzle1A.calculateDamagedGroupLocationOptions();

    for (let l = 0; l < sampleALocationAlternatives.length; l++) {
      expect(puzzle1A.records[l].locationOptions).toEqual(sampleALocationAlternatives[l]);
    }
  });

  test('Should get all possible group location options combinations for a given srping record and damaged groups - inputB', () => {
    const puzzle1B = new Puzzle1(sampleBInputFile);
    puzzle1B.parseRecords();
    puzzle1B.calculateDamagedGroupLocationOptions();
    for (let l = 0; l < sampleBLocationAlternatives.length; l++) {
      expect(puzzle1B.records[l].locationOptions).toEqual(sampleBLocationAlternatives[l]);
    }
  });

  test('Should get all possible group location options combinations for a given srping record and damaged groups - inputC', () => {
    const puzzle1C = new Puzzle1(sampleCInputFile);
    puzzle1C.parseRecords();
    puzzle1C.calculateDamagedGroupLocationOptions();
    for (let l = 0; l < sampleCLocationAlternatives.length; l++) {
      expect(puzzle1C.records[l].locationOptions).toEqual(sampleCLocationAlternatives[l]);
    }
  });

  test('Should get all possible group location options combinations for a given srping record and damaged groups - inputD', () => {
    const puzzle1D = new Puzzle1(sampleDInputFile);
    puzzle1D.parseRecords();
    puzzle1D.calculateDamagedGroupLocationOptions();
    for (let l = 0; l < sampleDLocationAlternatives.length; l++) {
      expect(puzzle1D.records[l].locationOptions).toEqual(sampleDLocationAlternatives[l]);
    }
  });

  test('Should get all possible group location options combinations for a given srping record and damaged groups - inputE', () => {
    const puzzle1E = new Puzzle1(sampleEInputFile);
    puzzle1E.parseRecords();
    puzzle1E.calculateDamagedGroupLocationOptions();
    for (let l = 0; l < sampleELocationAlternatives.length; l++) {
      expect(puzzle1E.records[l].locationOptions).toEqual(sampleELocationAlternatives[l]);
    }
  });
});

describe('Solving the puzzle', () => {

  test('Should solve the puzzle', () => {
    const puzzle1A = new Puzzle1(sampleAInputFile);
    const puzzle1B = new Puzzle1(sampleBInputFile);
    const puzzle1C = new Puzzle1(sampleCInputFile);
    const puzzle1D = new Puzzle1(sampleDInputFile);

    expect(puzzle1A.solve()).toBe(answerA);
    expect(puzzle1B.solve()).toBe(answerB);
    expect(puzzle1C.solve()).toBe(answerC);
    expect(puzzle1D.solve()).toBe(answerD);
  });
});
