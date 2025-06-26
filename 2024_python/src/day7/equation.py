from itertools import product


def op_mul(a, b):
    return a * b


def op_sum(a, b):
    return a + b


def op_concat(a, b):
    return int(str(a) + str(b))


do_the_math = {
    '+': op_sum,
    '*': op_mul,
    '||': op_concat,
}


class Equation:
    def __init__(self, result: int, operands: tuple[int]):
        self.result = result
        self.operands = operands

    def __eq__(self, other):
        if not isinstance(other, Equation):
            return False
        return (
            self.result == other.result
            and self.operands == other.operands
        )

    def __repr__(self):
        return str(self.result) + " = " + ", ".join(map(str, self.operands))

    @classmethod
    def from_string(cls, equation: str):
        [result, ops] = equation.split(':')
        operands = map(int, ops.strip().split(' '))
        return cls(int(result), tuple(operands))

    def calculate(self, operators: tuple):
        assert (len(operators) + 1) == len(self.operands)
        result = self.operands[0]
        for i, op in enumerate(operators):
            result = do_the_math[op](result, self.operands[i + 1])
        return result

    @staticmethod
    def combine_operators(operators: list, n: int):
        return list(product(operators, repeat=n))

    def solve(self, operators: tuple=('+', '*')):
        if len(self.operands) == 1:
            return self.operands[0]

        comb = Equation.combine_operators(operators, len(self.operands) - 1)

        for c in comb:
            try:
                if self.calculate(c) == self.result:
                    return self.result
            except:
                pass

        return None