import { Puzzle1 } from "./puzzle1";

const spelledDigits = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

export class Puzzle2 extends Puzzle1 {

  reverseString(str: string): string {
    return str.split('').reverse().join('');
  }

  spelledToDigit(spelled: string): string {
    return ((spelledDigits.indexOf(spelled) || 0) + 1).toString();
  }

  getFirstDigit(line: string): string {
    const matches = line.match(/([0-9]{1}|one|two|three|four|five|six|seven|eight|nine)/g);

    if (matches && matches[0]) {
      // matches[0].length === 1 meaning the match was a digit (single character) instead of a spelled number (3 or more characters)
      return matches[0].length === 1 ? matches[0] : this.spelledToDigit(matches[0]);
    }
    return '0';
  }

  getLastDigit(line: string): string {
    const reversedLine = this.reverseString(line);
    const matches = reversedLine.match(/([0-9]{1}|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/g);
    if (matches && matches[0]) {
      return matches[0].length === 1 ? matches[0] : this.spelledToDigit(this.reverseString(matches[0]));
    }
    return '0';
  }

};
