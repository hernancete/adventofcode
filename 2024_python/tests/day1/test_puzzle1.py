import pytest
import os
from src.day1.puzzle1 import Puzzle1

test_path = 'tests/day1/'
input_file = os.path.abspath(test_path + 'input.txt')


def test_should_read_input():
    p1 = Puzzle1(input_file)
    p1.read_input()
    assert len(p1.list1) == 6
    assert len(p1.list2) == 6


def test_input_should_contain_correct_values():
    p1 = Puzzle1(input_file)
    p1.read_input()
    assert p1.list1 == [3, 4, 2, 1, 3, 3]
    assert p1.list2 == [4, 3, 5, 3, 9, 3]


def test_sort_lists():
    p1 = Puzzle1(input_file)
    p1.read_input()
    p1.sort_lists()
    assert p1.list1 == [1, 2, 3, 3, 3, 4]
    assert p1.list2 == [3, 3, 3, 4, 5, 9]


@pytest.mark.parametrize("inputa,inputb,expected", [
    (1, 1, 0),
    (1, 4, 3),
    (9, 2, 7),
    (7, 8, 1),
])
def test_meassure_distance(inputa, inputb, expected):
    p1 = Puzzle1()
    assert p1.meassure_dist(inputa, inputb) == expected


def test_solve():
    p1 = Puzzle1(input_file)
    assert p1.solve() == 11
