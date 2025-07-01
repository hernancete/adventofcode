import re
from itertools import combinations
from src.utils.puzzle import Puzzle
from src.day8.position import Position


GROUND = '.'


class Puzzle1(Puzzle):

    def read_input_lines(self):
        super().read_input_lines()
        self._lines_to_matrix()

    def get_antenna_locations_in_line(self, line):
        antennas = re.finditer(r"([^\.]{1})", line)
        antennas_loc: dict = {}
        for a in antennas:
            if a.group() in antennas_loc:
                antennas_loc[a.group()].add(a.start())
            else:
                antennas_loc[a.group()] = set([a.start(),])
        return antennas_loc

    def get_antenna_locations(self):
        self.antennas: dict = {}
        for y_pos, line in enumerate(self.lines):
            for name, x_positions in self.get_antenna_locations_in_line(line).items():
                if name not in self.antennas:
                    self.antennas[name] = list()
                self.antennas[name] += [ Position(x_pos, y_pos) for x_pos in x_positions ]


    def combine_antenna_positions(self, antennas):
        return list(combinations(antennas, 2))

    def solve(self):
        self.read_input_lines()
        self.get_antenna_locations()
        antinodes: set = set()

        for antenna_positions in self.antennas.values():
            if len(antenna_positions) < 1:
                continue
            antenna_pos_combs = self.combine_antenna_positions(antenna_positions)
            for comb in antenna_pos_combs:
                anti_nodes = comb[0].get_antinodes(comb[1])
                antinodes.update([ an for an in anti_nodes if an.is_inside(Position(self.w - 1, self.h - 1)) ])
        return len(antinodes)
