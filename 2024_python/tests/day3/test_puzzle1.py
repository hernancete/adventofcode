import pytest
import os
from src.day3.puzzle1 import Puzzle1

test_path = 'tests/day3/'
input_file = os.path.abspath(test_path + 'input.txt')
input_file2 = os.path.abspath(test_path + 'input2.txt')
answer = 161
answer2 = 280


def test_read_input():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert isinstance(p.lines, list), 'lines should be a list'


def test_get_uncorrupt_mul_ops():
    p = Puzzle1(input_file)
    p.read_input_lines()
    mul_ops = p.get_mul_ops()
    assert isinstance(mul_ops, list)
    assert len(mul_ops) == 4


def test_get_uncorrupt_mul_ops2():
    p = Puzzle1(input_file2)
    p.read_input_lines()
    mul_ops = p.get_mul_ops()
    assert isinstance(mul_ops, list)
    assert len(mul_ops) == 7


@pytest.mark.parametrize("mul_op,expected", [
    ('mul(2,4)', 8),
    ('mul(5,5)', 25),
    ('mul(11,8)', 88),
    ('mul(8,5)', 40),
])
def test_parse_mul_ops(mul_op, expected):
    p = Puzzle1(input_file)
    result = p.eval_mul_op(mul_op)
    assert result == expected


def test_solve():
    p = Puzzle1(input_file)
    assert p.solve() == answer


def test_solve2():
    p = Puzzle1(input_file2)
    assert p.solve() == answer2
