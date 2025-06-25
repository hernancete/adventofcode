from src.day6.puzzle1 import (
    OBSTACLE,
    PATH_STEP,
    Puzzle1,
    Position,
)


FREE_PATH = '.'

class Puzzle2_take2(Puzzle1):

    def check_in_loop(self, position, direction):
        obstacles_hitten: dict[set[Position]] = {
            '^': set(),
            '>': set(),
            'v': set(),
            '<': set(),
        }

        while True:
            position, finished = self.get_walk_function(direction)(position)
            if finished:
                return False
            else:
                obstacle_pos = position.step(direction)
                if obstacle_pos in obstacles_hitten[direction]:
                    return True
                else:
                    obstacles_hitten[direction].add(obstacle_pos)
                direction = self.turn_clockwise(direction)


    def solve(self):
        self.read_input_lines()
        start, direction = self.get_starting_point_and_direction()

        obstacles_yielding_loops: set = set()

        for x in range(len(self.matrix[0])):
            for y in range(len(self.matrix)):

                if self.matrix[y][x] in [FREE_PATH, PATH_STEP, direction]:
                    self.matrix[y][x] = OBSTACLE
                    self.matrix_t[x][y] = OBSTACLE

                    if self.check_in_loop(start, direction):
                        obstacles_yielding_loops.add(Position(x, y))

                    self.matrix[y][x] = FREE_PATH
                    self.matrix_t[x][y] = FREE_PATH

        # print(obstacles_yielding_loops)
        return len(obstacles_yielding_loops)
