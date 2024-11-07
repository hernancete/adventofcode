import { describe, test, expect } from '@jest/globals';
import { getAbsPath } from '../utils';
import { Puzzle2 } from '../../src/day4/puzzle2';

const inputSamle = './input.txt';

describe('Duplicating cards', () => {

  test('Should get the N following cards for a given card', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSamle));
    puzzle2.loadCards();
    const following2 = puzzle2.getNFollowingCards(1, 2);

    expect(following2).toBeInstanceOf(Array);
    expect(following2).toHaveLength(2);
    expect(following2).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'Card 3' }),
      expect.objectContaining({ name: 'Card 4' })
    ]));
  });

  test('Should duplicate the N following cards, where N is the coincidences amount', () => {
    const puzzle2 = new Puzzle2(getAbsPath(__dirname, inputSamle));
    puzzle2.loadCards();
    puzzle2.duplicateCardsByCoincidence();

    expect(puzzle2.cardsDups).not.toHaveProperty('Card 1');
    expect(puzzle2.cardsDups).toHaveProperty('Card 2', 1);
    expect(puzzle2.cardsDups).toHaveProperty('Card 3', 3);
    expect(puzzle2.cardsDups).toHaveProperty('Card 4', 7);
    expect(puzzle2.cardsDups).toHaveProperty('Card 5', 13);
    expect(puzzle2.cardsDups).not.toHaveProperty('Card 6');
  });
});
