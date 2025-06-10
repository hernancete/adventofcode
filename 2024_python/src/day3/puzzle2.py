import re
from src.day3.puzzle1 import Puzzle1


class Puzzle2(Puzzle1):

    def sanitize_input(self):
        for i in range(len(self.lines)):
            self.lines[i] = re.sub(r'don\'t\(\).*do\(\)', '', self.lines[i])

    def read_input_lines(self):
        super().read_input_lines()
        self.sanitize_input()
