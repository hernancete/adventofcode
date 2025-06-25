import re
from src.utils.puzzle import Puzzle
from src.day6.position import Position


OBSTACLE = '#'
PATH_STEP = 'X'
DIRECTIONS = ['^', '>', 'v', '<']


class Puzzle1(Puzzle):

    def read_input_lines(self):
        super().read_input_lines()
        self.matrix = [list(line) for line in self.lines]
        self.matrix_t = list(map(list, zip(*self.matrix)))
        self.width = len(self.matrix[0])
        self.height = len(self.matrix)

    def get_starting_point_and_direction(self):
        pattern = "|".join(map(re.escape, DIRECTIONS))
        for index, _ in enumerate(self.lines):
            match = re.search(pattern, self.lines[index])
            if match:
                start = Position(match.start(), index)
                direction = match.group()
                break
        return (start, direction)

    def walk_right(self, start):
        for i in range(start.x, self.width):
            self.matrix[start.y][i] = PATH_STEP
            try:
                if self.matrix[start.y][i + 1] == OBSTACLE:
                    return Position(i, start.y), False
            except IndexError:
                pass
        return Position(i, start.y), True

    def walk_left(self, start):
        for i in range(start.x, -1, -1):
            self.matrix[start.y][i] = PATH_STEP
            if i == 0:
                break
            if self.matrix[start.y][i - 1] == OBSTACLE:
                return Position(i, start.y), False
        return Position(i, start.y), True

    def _mark_path_vertically(self, start, stop):
        for i in range(start.y, stop.y + 1):
            self.matrix[i][start.x] = PATH_STEP

    def walk_down(self, start):
        # Traspose start point, use trasposed matrix and treat this walk as a "to right" one
        start_t = start.traspose()
        match = re.search(r"{}".format(OBSTACLE), ''.join(self.matrix_t[start_t.y][start_t.x:]))
        if match:
            stop_t = Position(start_t.x + match.start() - 1, start_t.y)
            finished = False
        else:
            stop_t = Position(self.height - 1, start_t.y)
            finished = True

        stop = stop_t.traspose()

        self._mark_path_vertically(start, stop)

        return stop, finished

    def walk_up(self, start):
        # Traspose start point, use trasposed matrix and treat this walk as a "to left" one
        start_t = start.traspose()
        reversed_line = self.matrix_t[start_t.y][:start_t.x + 1][::-1]
        match = re.search(r"{}".format(OBSTACLE), ''.join(reversed_line))
        if match:
            stop_t = Position(start_t.x + 1 - match.start(), start_t.y)
            finished = False
        else:
            stop_t = Position(0, start_t.y)
            finished = True

        stop = stop_t.traspose()

        self._mark_path_vertically(stop, start)

        return stop, finished

    def turn_clockwise(self, direction):
        return DIRECTIONS[(DIRECTIONS.index(direction) + 1) % len(DIRECTIONS)]

    def get_walk_function(self, direction):
        return {
            '^': self.walk_up ,
            '>': self.walk_right ,
            'v': self.walk_down ,
            '<': self.walk_left ,
        }.get(direction)

    def count_path_steps(self):
        path_steps = 0
        for i in self.matrix:
            path_steps += i.count(PATH_STEP)
        return path_steps

    def solve(self):
        self.read_input_lines()
        start, direction = self.get_starting_point_and_direction()
        while True:
            start, finished = self.get_walk_function(direction)(start)
            if finished:
                break
            direction = self.turn_clockwise(direction)
        return self.count_path_steps()
