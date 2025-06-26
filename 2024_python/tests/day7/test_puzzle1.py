import os
from src.day7.puzzle1 import Puzzle1, Equation


test_path = 'tests/day7/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 3749


def test_read_equations():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert p.equations[0] == Equation(190, (10, 19))
    assert p.equations[1] == Equation(3267, (81, 40, 27))
    assert p.equations[3] == Equation(156, (15, 6))
    assert p.equations[6] == Equation(192, (17, 8, 14))


def test_eq_calculate():
    e1 = Equation(190, (10, 19))
    e2 = Equation(3267, (81, 40, 27))
    assert e1.calculate(['*']) == 190
    assert e1.calculate(['+']) == 29
    assert e2.calculate(['*', '*']) == 87480
    assert e2.calculate(['*', '+']) == 3267
    assert e2.calculate(['+', '*']) == 3267
    assert e2.calculate(['+', '+']) == 148


def test_eq_combine_operators_n3():
    operators = ['+', '*']
    comb = Equation.combine_operators(operators, 3)
    assert ('+', '*', '+') in comb
    assert ('+', '*', '*') in comb
    assert ('+', '+', '+') in comb
    assert ('*', '*', '+') in comb
    assert ('*', '*', '*') in comb
    assert ('*', '*') not in comb


def test_eq_combine_operators_n1():
    operators = ['+', '*']
    comb = Equation.combine_operators(operators, 1)
    assert ('+',) in comb
    assert ('*',) in comb


def test_eq_solvable():
    e1 = Equation(190, (10, 19))
    e2 = Equation(3267, (81, 40, 27))
    e3 = Equation(156, (15, 6))
    e4 = Equation(192, (17, 8, 14))
    assert e1.solve() == 190
    assert e2.solve() == 3267
    assert e3.solve() == None
    assert e4.solve() == None


def test_solve():
    p = Puzzle1(input_file)
    assert p.solve() == answer
