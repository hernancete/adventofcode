import pytest
import os
from src.day2.puzzle2 import Puzzle2

test_path = 'tests/day2/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 4


def test_read_input():
    p = Puzzle2(input_file)
    p.read_input_lines()
    assert isinstance(p.lines, list), 'lines should be a list'


@pytest.mark.parametrize("record", [
    ([1, 2, 3, 4, 5]),
    ([9, 8, 7, 4, 1]),
    ([1, 2, 3, 4, 9]),
    ([1, 11, 13, 14, 15]),
    ([1, 2, 3, 4, 4, 5, 6]),
    ([67, 69, 70, 71, 72, 75, 74]),
    ([20, 21, 24, 26, 28, 28]),
    ([43, 45, 48, 50, 53, 57]),
    ([40, 41, 43, 44, 43, 45]),
])
def test_record_is_safe(record):
    p = Puzzle2(input_file)
    p.read_input_lines()
    assert p.is_dampened_record_safe(record)


@pytest.mark.parametrize("record", [
    ([9, 8, 8, 8]),
    ([100, 50, 40, 39, 38, 37]),
    ([1]),
])
def test_record_is_no_safe(record):
    p = Puzzle2(input_file)
    p.read_input_lines()
    assert not p.is_dampened_record_safe(record)


def test_solve():
    p = Puzzle2(input_file)
    assert p.solve() == answer
