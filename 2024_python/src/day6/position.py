class Position:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        if isinstance(other, Position):
            return self.x == other.x and self.y == other.y
        return False

    def __hash__(self):
        return self.to_scalar()

    def __repr__(self):
        return "({}, {})".format(self.x, self.y)

    def traspose(self):
        return Position(self.y, self.x)

    def to_scalar(self):
        return self.x * 1000 + self.y

    def step(self, direction):
        if direction == '>': return Position(self.x + 1, self.y)
        if direction == '<': return Position(self.x - 1, self.y)
        if direction == '^': return Position(self.x, self.y - 1)
        if direction == 'v': return Position(self.x, self.y + 1)