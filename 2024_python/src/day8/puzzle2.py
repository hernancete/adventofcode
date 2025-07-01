from src.day8.puzzle1 import Position, Puzzle1


class Puzzle2(Puzzle1):

    def solve(self):
        self.read_input_lines()
        self.get_antenna_locations()
        bounds = Position(self.w - 1, self.h - 1)
        antinodes: set = set()

        for antenna_pos in self.antennas.values():
            antinodes.update(antenna_pos)

        for antenna_positions in self.antennas.values():
            if len(antenna_positions) < 1:
                continue
            antenna_pos_combs = self.combine_antenna_positions(antenna_positions)
            for comb in antenna_pos_combs:
                anti_nodes = comb[0].get_all_antinodes(comb[1], bounds)
                antinodes.update([ an for an in anti_nodes ])
        return len(antinodes)

