from src.day7.equation import Equation
from src.utils.puzzle import Puzzle


class Puzzle1(Puzzle):

    def read_input_lines(self):
        super().read_input_lines()
        self.equations: list = [Equation.from_string(line) for line in self.lines]

    def solve(self):
        self.read_input_lines()
        solvable_eq_results = [ 0 if eq.solve() is None else eq.result for eq in self.equations ]
        return sum(solvable_eq_results)
