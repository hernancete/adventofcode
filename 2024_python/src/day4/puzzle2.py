import re
from src.day4.puzzle1 import Puzzle1

WORD = 'MAS'


class Puzzle2(Puzzle1):

    def find_word_inline(self, line, word=WORD):
        return [match.start() + 1 for match in re.finditer(word, line)]

    def find_word_inline_backwards(self, line, word=WORD):
        return [len(line) - (match.start() + 1) - 1 for match in re.finditer(word, line[::-1])][::-1]

    def tilt_right(self, matrix):
        heith = len(matrix)
        tilted = []
        for i in range(heith):
            j = heith - i - 1
            tilted.append(
                ['0'] * j + matrix[i] + ['0'] * i
            )
        return tilted

    def tilt_left(self, matrix):
        heith = len(matrix)
        tilted = []
        for i in range(heith):
            j = heith - i - 1
            tilted.append(
                ['0'] * i + matrix[i] + ['0'] * j
            )
        return tilted

    def traspose(self, matrix):
        return [list(row) for row in list(zip(*matrix))]

    def tilt_up(self, matrix):
        trasposed = self.traspose(matrix)
        tilted_rigth = self.tilt_right(trasposed)
        tilted_up = self.traspose(tilted_rigth)
        return tilted_up

    def tilt_down(self, matrix):
        trasposed = self.traspose(matrix)
        tilted_left = self.tilt_left(trasposed)
        tilted_down = self.traspose(tilted_left)
        return tilted_down

    def get_diagonal_right_centers(self, matrix):
        w = len(matrix[0])
        tilted_up = self.tilt_up(matrix)
        up_forward_centers = []
        for line_idx, line in enumerate(tilted_up):
            centers = self.find_word_inline(''.join(line)) + self.find_word_inline_backwards(''.join(line))
            up_forward_centers += [(center, line_idx - (w - center - 1)) for center in centers]
        return up_forward_centers

    def get_diagonal_left_centers(self, matrix):
        tilted_down = self.tilt_down(matrix)
        up_forward_centers = []
        for line_idx, line in enumerate(tilted_down):
            centers = self.find_word_inline(''.join(line)) + self.find_word_inline_backwards(''.join(line))
            up_forward_centers += [(center, line_idx - center) for center in centers]
        return up_forward_centers

    def solve(self):
        self.read_input_lines()
        diag_right_centers = self.get_diagonal_right_centers(self.matrix)
        diag_left_centers = self.get_diagonal_left_centers(self.matrix)
        common = set(diag_right_centers) & set(diag_left_centers)
        return len(common)
