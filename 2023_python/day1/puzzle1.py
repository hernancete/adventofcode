import os
import re

script_directory = os.path.dirname(os.path.abspath(__file__))


class Puzzle1:
    input_filename = os.path.join(script_directory, 'input.txt')

    def __init__(self):
        self.input = None
        self.digits = []
        self.sum = 0

    def read_input(self):
        f = open(self.input_filename, 'r')
        self.input = f.readlines()
        f.close()

    def get_first_digit(self, line):
        match = re.search('[0-9]{1}', line)
        if match:
            return match.group()
        return '0'

    def get_last_digit(self, line):
        match = re.search('([0-9]{1})[^0-9]*$', line)
        if match:
            return match.group(1)
        return '0'

    def get_digits(self):
        for line in self.input:
            first = self.get_first_digit(line)
            last = self.get_last_digit(line)
            self.digits.append(first + last)

    def sum_digits(self):
        for digit in self.digits:
            self.sum += int(digit)
