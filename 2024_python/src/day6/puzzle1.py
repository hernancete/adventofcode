import re
from src.utils.puzzle import Puzzle


DIRECTIONS = ['^', 'v', '>', '<']

class Puzzle1(Puzzle):

    def read_input_lines(self):
        super().read_input_lines()
        self.matrix = [list(line) for line in self.lines]

    def get_starting_point_and_direction(self):
        pattern = "|".join(map(re.escape, DIRECTIONS))

        for index, _ in enumerate(self.lines):
            match = re.search(pattern, self.lines[index])
            if match:
                start = (match.start(), index)
                direction = match.group()
                break
        self.matrix[start[1]][start[0]] = 'X'
        return (start, direction)
