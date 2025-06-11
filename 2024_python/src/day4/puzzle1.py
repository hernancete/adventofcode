import re
from src.utils.puzzle import Puzzle

WORD = 'XMAS'


class Puzzle1(Puzzle):

    def read_input_lines(self):
        super().read_input_lines()
        self.matrix = []
        for i in self.lines:
            self.matrix.append(list(i))

    def find_word_inline(self, line, word=WORD):
        return len(re.findall(word, line))

    def find_word_inline_backwards(self, line, word=WORD):
        return len(re.findall(word, line[::-1]))

    def tilt_right(self):
        heith = len(self.matrix)
        tilted = []
        for i in range(heith):
            j = heith - i - 1
            tilted.append(
                ['0'] * j + self.matrix[i] + ['0'] * i
            )
        return tilted

    def tilt_left(self):
        heith = len(self.matrix)
        tilted = []
        for i in range(heith):
            j = heith - i - 1
            tilted.append(
                ['0'] * i + self.matrix[i] + ['0'] * j
            )
        return tilted

    def traspose(self, matrix):
        return [list(row) for row in list(zip(*matrix))]

    def solve(self):
        self.read_input_lines()
        h = sum([self.find_word_inline(''.join(line)) for line in self.matrix])
        h_back = sum([self.find_word_inline_backwards(''.join(line)) for line in self.matrix])
        v = sum([self.find_word_inline(''.join(line)) for line in self.traspose(self.matrix)])
        v_back = sum([self.find_word_inline_backwards(''.join(line)) for line in self.traspose(self.matrix)])
        diag_r = sum([self.find_word_inline(''.join(line)) for line in self.traspose(self.tilt_right())])
        diag_r_back = sum([self.find_word_inline_backwards(''.join(line)) for line in self.traspose(self.tilt_right())])
        diag_l = sum([self.find_word_inline(''.join(line)) for line in self.traspose(self.tilt_left())])
        diag_l_back = sum([self.find_word_inline_backwards(''.join(line)) for line in self.traspose(self.tilt_left())])
        return h + h_back + v + v_back + diag_r + diag_r_back + diag_l + diag_l_back
