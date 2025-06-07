import os
from src.day1.puzzle1 import Puzzle1

test_path = 'tests/day1/'
input_file = os.path.abspath(test_path + 'input.txt')


def test_read_input():
    p1 = Puzzle1()
    p1.read_input(input_file)
    assert len(p1.list1) == 6
    assert len(p1.list2) == 6
