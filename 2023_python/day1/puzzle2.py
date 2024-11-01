import sys
import os
import re
sys.path.append(os.path.join(os.path.dirname(__file__)))
from puzzle1 import Puzzle1  # noqa: E402


class Puzzle2(Puzzle1):
    text_digits = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ]
    reversed_text_digits = [
        'orez',
        'eno',
        'owt',
        'eerht',
        'ruof',
        'evif',
        'xis',
        'neves',
        'thgie',
        'enin',
    ]

    def __init__(self):
        super().__init__()

    def text_to_digit(self, text):
        try:
            return str(self.text_digits.index(text))
        except Exception:
            return '0'

    def reversed_text_to_digit(self, text):
        try:
            return str(self.reversed_text_digits.index(text))
        except Exception:
            return '0'

    def get_first_digit(self, line):
        match = re.search('([0-9]{1})|(zero|one|two|three|four|five|six|seven|eight|nine)', line)
        # print('group1', match.group(1))
        # print('group2', match.group(2))
        if match:
            if match.group(1):
                return match.group(1)
            else:
                return self.text_to_digit(match.group(2))
        return '0'

    def get_last_digit(self, line):
        reversed_line = line[::-1]
        match = re.search('([0-9]{1})|(orez|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)', reversed_line)
        if match:
            if match.group(1):
                return match.group(1)
            else:
                return self.reversed_text_to_digit(match.group(2))
        return '0'
