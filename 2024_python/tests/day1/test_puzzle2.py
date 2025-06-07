import pytest
import os
from src.day1.puzzle2 import Puzzle2

test_path = 'tests/day1/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 31


def test_should_read_input():
    p2 = Puzzle2(input_file)
    p2.read_input()
    assert len(p2.list1) == 6
    assert len(p2.list2) == 6


def test_input_should_contain_correct_values():
    p = Puzzle2(input_file)
    p.read_input()
    assert p.list1 == [3, 4, 2, 1, 3, 3]
    assert p.list2 == [4, 3, 5, 3, 9, 3]


@pytest.mark.parametrize("id,expected", [
    (1, 0),
    (2, 0),
    (3, 3),
    (4, 1),
])
def test_meassure_distance(id, expected):
    p = Puzzle2(input_file)
    p.read_input()
    assert p.count_list2_appearences(id) == expected


def test_solve():
    p = Puzzle2(input_file)
    assert p.solve() == answer
