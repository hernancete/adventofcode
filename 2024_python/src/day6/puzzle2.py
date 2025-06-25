from src.day6.puzzle1 import Puzzle1, Position


def get_direction(start, stop):
    if stop.x > start.x: return '>'
    if stop.x < start.x: return '<'
    if stop.y > start.y: return 'v'
    if stop.y < start.y: return '^'


class Puzzle2(Puzzle1):
    walks: dict

    def __init__(self, input_file=None):
        super().__init__(input_file)
        self.walks = {
            '^': [],
            '>': [],
            'v': [],
            '<': [],
        }
        self.new_obstacles = set()

    def fill_walk_path(self, start, stop):
        direction = get_direction(start, stop)
        if direction == '>':
            for i in range(start.x, stop.x + 1):
                pos = Position(i, start.y)
                if not self.check_prior_walk(pos, direction):
                    self.walks[direction].append(pos.to_scalar())
        if direction == '<':
            for i in range(start.x, stop.x - 1, -1):
                pos = Position(i, start.y)
                if not self.check_prior_walk(pos, direction):
                    self.walks[direction].append(pos.to_scalar())
        if direction == '^':
            for i in range(start.y, stop.y - 1, -1):
                pos = Position(start.x, i)
                if not self.check_prior_walk(pos, direction):
                    self.walks[direction].append(pos.to_scalar())
        if direction == 'v':
            for i in range(start.y, stop.y + 1):
                pos = Position(start.x, i)
                if not self.check_prior_walk(pos, direction):
                    self.walks[direction].append(pos.to_scalar())

    def check_prior_walk(self, position, direction):
        return position.to_scalar() in self.walks[direction]

    def walk_up(self, start):
        stop, finished = super().walk_up(start)
        self.fill_walk_path(start, stop)
        self.new_obstacles |= self.check_prior_walk_crossing_path(start, stop)
        return stop, finished

    def walk_right(self, start):
        stop, finished = super().walk_right(start)
        self.fill_walk_path(start, stop)
        self.new_obstacles |= self.check_prior_walk_crossing_path(start, stop)
        return stop, finished

    def walk_down(self, start):
        stop, finished = super().walk_down(start)
        self.fill_walk_path(start, stop)
        self.new_obstacles |= self.check_prior_walk_crossing_path(start, stop)
        return stop, finished

    def walk_left(self, start):
        stop, finished = super().walk_left(start)
        self.fill_walk_path(start, stop)
        self.new_obstacles |= self.check_prior_walk_crossing_path(start, stop)
        return stop, finished

    def check_prior_walk_crossing_path(self, start, stop):
        ret = set()
        direction = get_direction(start, stop)
        print('check_prior_walk_crossing_path()', start, stop, direction)
        turned_direction = self.turn_clockwise(direction)
        if direction == '>':
            for i in range(start.x, stop.x + 1):
                pos = Position(i, start.y)
                if self.check_prior_walk(pos, turned_direction):
                    ret.add(pos.step(direction))
        if direction == '<':
            for i in range(start.x, stop.x - 1, -1):
                pos = Position(i, start.y)
                print(pos, self.walks[turned_direction])
                if self.check_prior_walk(pos, turned_direction):
                    ret.add(pos.step(direction))
        if direction == '^':
            for i in range(start.y, stop.y - 1, -1):
                pos = Position(start.x, i)
                if self.check_prior_walk(pos, turned_direction):
                    ret.add(pos.step(direction))
        if direction == 'v':
            for i in range(start.y, stop.y + 1):
                pos = Position(start.x, i)
                if self.check_prior_walk(pos, turned_direction):
                    ret.add(pos.step(direction))
        print('check_prior_walk_crossing_path()', 'new_obstacles', ret)
        return ret

    def solve(self):
        super().solve()
        return len(self.new_obstacles)
