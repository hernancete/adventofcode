import { describe, test, expect } from '@jest/globals';
import { Race } from '../../src/day6/race';

const raceSamples = [
  { time: 7, record: 9, winningOptions: [2, 3, 4, 5] },
  { time: 15, record: 40, winningOptions: [4, 5, 6, 7, 8, 9, 10, 11] },
  { time: 30, record: 200, winningOptions: [11, 12, 13, 14, 15, 16, 17, 18, 19] },
];

describe('Creating races', () => {

  test('Should create an instance of race with time duration', () => {
    for (const raceSample of raceSamples) {
      const race = new Race(raceSample.time);

      expect(race.time).toBe(raceSample.time);
    }
  });

  test('Should load record on races', () => {
    for (const raceSample of raceSamples) {
      const race = new Race(raceSample.time);
      race.setRecord(raceSample.record);

      expect(race.record).toBe(raceSample.record);
    }
  });
});
