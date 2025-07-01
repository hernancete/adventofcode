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

    def get_antinodes(self, other, armonic=1):
        assert isinstance(other, Position)
        xdist = self.x - other.x
        ydist = self.y - other.y

        return (
            Position(self.x + armonic * xdist, self.y + armonic * ydist),
            Position(other.x - armonic * xdist, other.y - armonic * ydist),
            )

    def is_inside(self, bounds):
        return (
            0 <= self.x <= bounds.x and
            0 <= self.y <= bounds.y
        )

    def get_all_antinodes(self, other, bounds):
        antinodes = list()
        armonic = 0
        while True:
            armonic += 1
            antinodes_armonic = self.get_antinodes(other, armonic)
            at_least_one_inside = False
            if antinodes_armonic[0].is_inside(bounds):
                antinodes.append(antinodes_armonic[0])
                at_least_one_inside = True
            if antinodes_armonic[1].is_inside(bounds):
                antinodes.append(antinodes_armonic[1])
                at_least_one_inside = True
            if not at_least_one_inside:
                break

        return antinodes
