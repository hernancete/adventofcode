from src.day7.puzzle1 import Puzzle1, Equation


class Puzzle2(Puzzle1):

    def solve(self):
        operators = ('+', '*', '||')
        self.read_input_lines()
        solvable_eq_results = [ 0 if eq.solve(operators) is None else eq.result for eq in self.equations ]
        return sum(solvable_eq_results)
