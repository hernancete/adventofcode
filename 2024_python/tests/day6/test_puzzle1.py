import pytest
import os
from src.day6.puzzle1 import Puzzle1


test_path = 'tests/day6/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 41


def test_read_input():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert isinstance(p.lines, list)
    assert len(p.lines) == 10
    assert len(p.lines[0]) == 10


def test_get_starting_point_and_direction():
    p = Puzzle1(input_file)
    p.read_input_lines()
    start, direction = p.get_starting_point_and_direction()
    assert start == (4, 6)
    assert direction == '^'
    assert ''.join(p.matrix[6]) == '.#..X.....'


# def test_walk_up():
#     p = Puzzle1(input_file)
#     p.read_input_lines()
#     start, direction = p.get_starting_point_and_direction()

