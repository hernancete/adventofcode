import { describe, test, expect } from '@jest/globals';
import { Mapper } from '../../src/day5/mapper';

const inputMapList1 = '50 98 2';
const inputMapList2 = '52 50 48';

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
});
