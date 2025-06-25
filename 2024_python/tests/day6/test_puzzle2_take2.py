import pytest
import os
from src.day6.puzzle2_take2 import Puzzle2_take2, Position


test_path = 'tests/day6/'
input_file = os.path.abspath(test_path + 'input.txt')
input_file2 = os.path.abspath(test_path + 'input2.txt')
input_file3 = os.path.abspath(test_path + 'input3.txt')
answer = 6
answer2 = 1
answer3 = 0
input_file_loop = os.path.abspath(test_path + 'input_loop.txt')
input_file_loop2 = os.path.abspath(test_path + 'input_loop2.txt')
input_file_loop3 = os.path.abspath(test_path + 'input_loop3_x6_y7.txt')
input_file_no_loop = os.path.abspath(test_path + 'input_no_loop.txt')


@pytest.mark.parametrize("input_file, expected_result", [
    (input_file_loop, True),
    (input_file_loop2, True),
    (input_file_loop3, True),
    (input_file, False),
    (input_file_no_loop, False),
])
def test_check_if_loop(input_file, expected_result):
    p = Puzzle2_take2(input_file)
    p.read_input_lines()
    start, direction = p.get_starting_point_and_direction()
    in_loop = p.check_in_loop(start, direction)
    assert in_loop == expected_result


@pytest.mark.parametrize("input_file, expected_answer", [
    (input_file2, answer2),
    (input_file3, answer3),
    (input_file, answer),
])
def test_solve2(input_file, expected_answer):
    p = Puzzle2_take2(input_file)
    assert p.solve() == expected_answer
