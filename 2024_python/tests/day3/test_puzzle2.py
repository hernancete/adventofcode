# import pytest
import os
from src.day3.puzzle2 import Puzzle2

test_path = 'tests/day3/'
input_file = os.path.abspath(test_path + 'input3.txt')
answer = 48


def test_read_input():
    p = Puzzle2(input_file)
    p.read_input_lines()
    assert isinstance(p.lines, list), 'lines should be a list'


def test_sanitize_input_lines():
    p = Puzzle2(input_file)
    p.read_input_lines()
    assert p.lines[0] == 'xmul(2,4)&mul[3,7]!^?mul(8,5))'


def test_get_uncorrupt_mul_ops():
    p = Puzzle2(input_file)
    p.read_input_lines()
    mul_ops = p.get_mul_ops()
    assert isinstance(mul_ops, list)
    assert len(mul_ops) == 2


def test_solve():
    p = Puzzle2(input_file)
    assert p.solve() == answer
