import re
from src.utils.puzzle import Puzzle


class Puzzle1(Puzzle):

    def get_mul_ops(self):
        mul_ops = []
        for line in self.lines:
            mul_ops += re.findall(r'mul\([0-9]{1,3}\,[0-9]{1,3}\)', line)
        return mul_ops

    def eval_mul_op(self, mul_op):
        numbers = re.findall(r'(\d+)', mul_op)
        return int(numbers[0]) * int(numbers[1])

    def solve(self):
        self.read_input_lines()
        mul_ops = self.get_mul_ops()
        evaluated_mul = [self.eval_mul_op(x) for x in mul_ops]
        return sum(evaluated_mul)
