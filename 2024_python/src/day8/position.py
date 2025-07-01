class Position:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        if isinstance(other, Position):
            return self.x == other.x and self.y == other.y
        return False

    def __repr__(self):
        return "Position({}, {})".format(self.x, self.y)

    def __hash__(self):
        return self.__to_scalar()

    def __to_scalar(self):
        return self.x * 1000 + self.y

    def get_antinodes(self, other):
        assert isinstance(other, Position)
        xdist = self.x - other.x
        ydist = self.y - other.y

        return (
            Position(self.x + xdist, self.y + ydist),
            Position(other.x - xdist, other.y - ydist),
            )

    def is_inside(self, bounds):
        return (
            0 <= self.x <= bounds.x and
            0 <= self.y <= bounds.y
        )