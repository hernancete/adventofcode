import { describe, test, expect } from '@jest/globals';
import path from 'path';

import { readFileLines } from '../../src/shared/utils';

describe('Reading file line by line', () => {

  const inputFile = './input.txt';

  test('Should read file', () => {
    const lines = readFileLines(path.resolve(path.join(__dirname, inputFile)));

    expect(lines).not.toBeNull();
    expect(lines).toBeInstanceOf(Array);
    expect(lines.length).toBe(8);
    expect(lines).toContain('to be read');
    expect(lines).toContain('Bye!');
  });
});
