import os
from src.day7.puzzle2 import Puzzle2, Equation


test_path = 'tests/day7/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 11387


def test_eq_calculate():
    e1 = Equation(190, (10, 19))
    e2 = Equation(3267, (81, 40, 27))
    assert e1.calculate(['||']) == 1019
    assert e2.calculate(['+', '||']) == 12127
    assert e2.calculate(['||', '+']) == 8167
    assert e2.calculate(['*', '||']) == 324027
    assert e2.calculate(['||', '||']) == 814027
    assert e2.calculate(['||', '*']) == 219780


def test_eq_combine_operators_n3():
    operators = ['+', '*', '||']
    comb = Equation.combine_operators(operators, 3)
    assert ('+', '*', '+') in comb
    assert ('+', '||', '+') in comb
    assert ('*', '*', '+') in comb
    assert ('||', '*', '*') in comb
    assert ('*', '*') not in comb


def test_eq_combine_operators_n2():
    operators = ['+', '*', '||']
    comb = Equation.combine_operators(operators, 2)
    assert ('+', '||') in comb
    assert ('*', '||') in comb
    assert ('||', '||') in comb


def test_eq_combine_operators_n1():
    operators = ['+', '*', '||']
    comb = Equation.combine_operators(operators, 1)
    assert ('+',) in comb
    assert ('*',) in comb
    assert ('||',) in comb


def test_eq_solvable():
    operators = ('+', '*', '||')
    e1 = Equation(190, (10, 19))
    e2 = Equation(3267, (81, 40, 27))
    e3 = Equation(156, (15, 6))
    e4 = Equation(192, (17, 8, 14))
    e5 = Equation(21037, (9, 7, 18, 13))
    assert e1.solve(operators) == 190
    assert e2.solve(operators) == 3267
    assert e3.solve(operators) == 156
    assert e4.solve(operators) == 192
    assert e5.solve(operators) == None


def test_solve():
    p = Puzzle2(input_file)
    assert p.solve() == answer
