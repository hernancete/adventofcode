import pytest
import os
from src.day2.puzzle1 import Puzzle1

test_path = 'tests/day2/'
input_file = os.path.abspath(test_path + 'input.txt')


def test_read_input():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert isinstance(p.lines, list), 'lines should be a list'


def test_is_record_safe():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert p.is_record_safe([1, 2, 3, 4, 5])
    assert not p.is_record_safe([1, 2, 3, 4, 9])
    assert not p.is_record_safe([1, 11, 13, 14, 15])
    assert p.is_record_safe([9, 8, 7, 4, 1])
    assert not p.is_record_safe([9, 8, 8])
    with pytest.raises(Exception):
        p.is_record_safe([1])
