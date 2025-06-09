import pytest
import os
from src.day2.puzzle1 import Puzzle1

test_path = 'tests/day2/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 2


def test_read_input():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert isinstance(p.lines, list), 'lines should be a list'


@pytest.mark.parametrize("record", [
    ([1, 2, 3, 4, 5]),
    ([9, 8, 7, 4, 1]),
])
def test_record_is_safe(record):
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert p.is_record_safe(record)


@pytest.mark.parametrize("record", [
    ([1, 2, 3, 4, 9]),
    ([1, 11, 13, 14, 15]),
    ([9, 8, 8]),
    ([1]),
])
def test_record_is_no_safe(record):
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert not p.is_record_safe(record)


def test_solve():
    p = Puzzle1(input_file)
    assert p.solve() == answer
