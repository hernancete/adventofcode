import { describe, test, expect } from '@jest/globals';
import { Mapper } from '../../src/day05/mapper';

const inputMapList1 = '50 98 2';
const inputMapList2 = '52 50 48';
const mappings = [
  [98, 50],
  [99, 51],
  [50, 52],
  [70, 72],
  [97, 99],
  [0, 0],
  [1, 1],
  [120, 120],
];
const MAPPING_SOURCE_KEY = 0;
const MAPPING_DEST_KEY = 1;

describe('Creating mappers', () => {

  test('Should load map lists into map ranges', () => {
    const mapper = new Mapper();
    mapper.loadRange(inputMapList1);
    mapper.loadRange(inputMapList2);

    expect(mapper.ranges).toBeInstanceOf(Array);
    expect(mapper.ranges).toHaveLength(2);
    expect(mapper.ranges).toEqual(expect.arrayContaining([
      expect.objectContaining({ sourceFrom: 98, sourceTo: 99, destFrom: 50, destTo: 51 }),
      expect.objectContaining({ sourceFrom: 50, sourceTo: 97, destFrom: 52, destTo: 99 }),
    ]));
  });

  test('Should map some source category input to a corresopnding destination category item', () => {
    const mapper = new Mapper();
    mapper.loadRange(inputMapList1);
    mapper.loadRange(inputMapList2);

    for (const m of mappings) {
      expect(mapper.map(m[MAPPING_SOURCE_KEY])).toBe(m[MAPPING_DEST_KEY]);
    }
  });
});
