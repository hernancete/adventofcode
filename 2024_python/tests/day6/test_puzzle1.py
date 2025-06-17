import pytest
import os
from src.day6.puzzle1 import Puzzle1, Position


test_path = 'tests/day6/'
input_file = os.path.abspath(test_path + 'input.txt')
input_file2 = os.path.abspath(test_path + 'input_partially_walked.txt')
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
    assert start == Position(4, 6)
    assert direction == '^'


def test_walk_right_upto_obstacle():
    p = Puzzle1(input_file)
    p.read_input_lines()
    stop, finished = p.walk_right(Position(1, 1))
    assert ''.join(p.matrix[0]) == '....#.....'
    assert ''.join(p.matrix[1]) == '.XXXXXXXX#'
    assert ''.join(p.matrix[2]) == '..........'
    assert stop == Position(8, 1)
    assert finished == False


def test_walk_right_upto_eol():
    p = Puzzle1(input_file)
    p.read_input_lines()
    stop, finished = p.walk_right(Position(1, 2))
    assert ''.join(p.matrix[0]) == '....#.....'
    assert ''.join(p.matrix[1]) == '.........#'
    assert ''.join(p.matrix[2]) == '.XXXXXXXXX'
    assert ''.join(p.matrix[3]) == '..#.......'
    assert stop == Position(9, 2)
    assert finished == True


def test_walk_left_upto_obstacle():
    p = Puzzle1(input_file)
    p.read_input_lines()
    stop, finished = p.walk_left(Position(7, 0))
    assert ''.join(p.matrix[0]) == '....#XXX..'
    assert ''.join(p.matrix[1]) == '.........#'
    assert ''.join(p.matrix[2]) == '..........'
    assert stop == Position(5, 0)
    assert finished == False


def test_walk_left_upto_eol():
    p = Puzzle1(input_file)
    p.read_input_lines()
    stop, finished = p.walk_left(Position(7, 1))
    assert ''.join(p.matrix[0]) == '....#.....'
    assert ''.join(p.matrix[1]) == 'XXXXXXXX.#'
    assert stop == Position(0, 1)
    assert finished == True


def test_walk_down_upto_obstacle():
    p = Puzzle1(input_file)
    p.read_input_lines()
    stop, finished = p.walk_down(Position(1, 1))
    assert ''.join(p.matrix[0]) == '....#.....'
    assert ''.join(p.matrix[1]) == '.X.......#'
    assert ''.join(p.matrix[2]) == '.X........'
    assert ''.join(p.matrix[3]) == '.X#.......'
    assert ''.join(p.matrix[4]) == '.X.....#..'
    assert ''.join(p.matrix[5]) == '.X........'
    assert ''.join(p.matrix[6]) == '.#..^.....'
    assert ''.join(p.matrix[7]) == '........#.'
    assert stop == Position(1, 5)
    assert finished == False


def test_walk_down_upto_eol():
    p = Puzzle1(input_file)
    p.read_input_lines()
    stop, finished = p.walk_down(Position(3, 5))
    assert ''.join(p.matrix[3]) == '..#.......'
    assert ''.join(p.matrix[4]) == '.......#..'
    assert ''.join(p.matrix[5]) == '...X......'
    assert ''.join(p.matrix[6]) == '.#.X^.....'
    assert ''.join(p.matrix[7]) == '...X....#.'
    assert ''.join(p.matrix[8]) == '#..X......'
    assert ''.join(p.matrix[9]) == '...X..#...'
    assert stop == Position(3, 9)
    assert finished == True


def test_walk_up_upto_obstacle():
    p = Puzzle1(input_file)
    p.read_input_lines()
    stop, finished = p.walk_up(Position(4, 6))
    assert ''.join(p.matrix[0]) == '....#.....'
    assert ''.join(p.matrix[1]) == '....X....#'
    assert ''.join(p.matrix[2]) == '....X.....'
    assert ''.join(p.matrix[3]) == '..#.X.....'
    assert ''.join(p.matrix[4]) == '....X..#..'
    assert ''.join(p.matrix[5]) == '....X.....'
    assert ''.join(p.matrix[6]) == '.#..X.....'
    assert ''.join(p.matrix[7]) == '........#.'
    assert stop == Position(4, 1)
    assert finished == False


def test_walk_up_upto_eol():
    p = Puzzle1(input_file)
    p.read_input_lines()
    stop, finished = p.walk_up(Position(5, 6))
    assert ''.join(p.matrix[0]) == '....#X....'
    assert ''.join(p.matrix[1]) == '.....X...#'
    assert ''.join(p.matrix[2]) == '.....X....'
    assert ''.join(p.matrix[3]) == '..#..X....'
    assert ''.join(p.matrix[4]) == '.....X.#..'
    assert ''.join(p.matrix[5]) == '.....X....'
    assert ''.join(p.matrix[6]) == '.#..^X....'
    assert ''.join(p.matrix[7]) == '........#.'
    assert stop == Position(5, 0)
    assert finished == True



@pytest.mark.parametrize("current_direction, expected_direction", [
    ('^', '>'),
    ('>', 'v'),
    ('v', '<'),
    ('<', '^'),
])
def test_turn_clockwise(current_direction, expected_direction):
    p = Puzzle1(input_file)
    p.read_input_lines()
    new_direction = p.turn_clockwise(current_direction)
    assert new_direction == expected_direction


@pytest.mark.parametrize("direction, expected_method_name", [
    ('^', 'walk_up'),
    ('>', 'walk_right'),
    ('v', 'walk_down'),
    ('<', 'walk_left'),
])
def test_get_walk_function(direction, expected_method_name):
    p = Puzzle1(input_file)
    p.read_input_lines()
    walk_function = p.get_walk_function(direction)
    assert walk_function.__name__ == expected_method_name


def test_count_path_steps():
    p = Puzzle1(input_file2)
    p.read_input_lines()
    path_steps = p.count_path_steps()
    assert path_steps == 28


def test_final_path():
    p = Puzzle1(input_file)
    p.solve()
    assert ''.join(p.matrix[0]) == '....#.....'
    assert ''.join(p.matrix[1]) == '....XXXXX#'
    assert ''.join(p.matrix[2]) == '....X...X.'
    assert ''.join(p.matrix[3]) == '..#.X...X.'
    assert ''.join(p.matrix[4]) == '..XXXXX#X.'
    assert ''.join(p.matrix[5]) == '..X.X.X.X.'
    assert ''.join(p.matrix[6]) == '.#XXXXXXX.'
    assert ''.join(p.matrix[7]) == '.XXXXXXX#.'
    assert ''.join(p.matrix[8]) == '#XXXXXXX..'
    assert ''.join(p.matrix[9]) == '......#X..'


def test_solve():
    p = Puzzle1(input_file)
    result = p.solve()
    assert result == answer
