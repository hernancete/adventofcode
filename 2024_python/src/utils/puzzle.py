class Puzzle:

    def __init__(self, input_file=None):
        self.input_file = input_file

    def read_input_lines(self):
        with open(self.input_file, 'r') as file:
            self.lines = [line.strip() for line in file]

    def _lines_to_matrix(self):
        self.matrix = [list(line) for line in self.lines]
        self.h = len(self.matrix)
        self.w = len(self.matrix[0])

    def solve(self):
        raise NotImplementedError
