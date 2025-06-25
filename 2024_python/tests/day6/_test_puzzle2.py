import pytest
import os
from src.day6.puzzle2 import Puzzle2, Position


test_path = 'tests/day6/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 6


def test_fill_walks_up():
    p = Puzzle2(input_file)
    p.read_input_lines()
    p.fill_walk_path(Position(4, 6), Position(4, 1))
    direction = '^'
    assert 4006 in p.walks[direction]
    assert 4005 in p.walks[direction]
    assert 4004 in p.walks[direction]
    assert 4003 in p.walks[direction]
    assert 4001 in p.walks[direction]
    assert 4000 not in p.walks[direction]
    assert 3005 not in p.walks[direction]

def test_fill_walks_right():
    p = Puzzle2(input_file)
    p.read_input_lines()
    p.fill_walk_path(Position(4, 1), Position(8, 1))
    direction = '>'
    assert 4001 in p.walks[direction]
    assert 5001 in p.walks[direction]
    assert 6001 in p.walks[direction]
    assert 7001 in p.walks[direction]
    assert 8001 in p.walks[direction]
    assert 4000 not in p.walks[direction]
    assert 3005 not in p.walks[direction]


def test_fill_walks_down():
    p = Puzzle2(input_file)
    p.read_input_lines()
    p.fill_walk_path(Position(8, 1), Position(8, 6))
    direction = 'v'
    assert 8001 in p.walks[direction]
    assert 8002 in p.walks[direction]
    assert 8003 in p.walks[direction]
    assert 8004 in p.walks[direction]
    assert 8005 in p.walks[direction]
    assert 8006 in p.walks[direction]
    assert 4000 not in p.walks[direction]
    assert 3005 not in p.walks[direction]


def test_fill_walks_left():
    p = Puzzle2(input_file)
    p.read_input_lines()
    p.fill_walk_path(Position(8, 6), Position(2, 6))
    direction = '<'
    assert 8006 in p.walks[direction]
    assert 7006 in p.walks[direction]
    assert 6006 in p.walks[direction]
    assert 5006 in p.walks[direction]
    assert 4006 in p.walks[direction]
    assert 3006 in p.walks[direction]
    assert 2006 in p.walks[direction]
    assert 4000 not in p.walks[direction]
    assert 3005 not in p.walks[direction]


def test_fill_walks_when_walking_up():
    p = Puzzle2(input_file)
    p.read_input_lines()
    start, direction = p.get_starting_point_and_direction()
    p.get_walk_function(direction)(start)
    assert 4006 in p.walks[direction]
    assert 4005 in p.walks[direction]
    assert 4004 in p.walks[direction]
    assert 4003 in p.walks[direction]
    assert 4001 in p.walks[direction]
    assert 4000 not in p.walks[direction]
    assert 3005 not in p.walks[direction]


def test_fill_walks_when_walking_right():
    p = Puzzle2(input_file)
    p.read_input_lines()
    direction = '>'
    p.get_walk_function(direction)(Position(4, 1))
    assert 4001 in p.walks[direction]
    assert 5001 in p.walks[direction]
    assert 6001 in p.walks[direction]
    assert 7001 in p.walks[direction]
    assert 8001 in p.walks[direction]
    assert 4000 not in p.walks[direction]
    assert 3005 not in p.walks[direction]


def test_fill_walks_when_walking_down():
    p = Puzzle2(input_file)
    p.read_input_lines()
    direction = 'v'
    p.get_walk_function(direction)(Position(8, 1))
    assert 8001 in p.walks[direction]
    assert 8002 in p.walks[direction]
    assert 8003 in p.walks[direction]
    assert 8004 in p.walks[direction]
    assert 8005 in p.walks[direction]
    assert 8006 in p.walks[direction]
    assert 4000 not in p.walks[direction]
    assert 3005 not in p.walks[direction]


def test_fill_walks_when_walking_left():
    p = Puzzle2(input_file)
    p.read_input_lines()
    direction = '<'
    p.get_walk_function(direction)(Position(8, 6))
    assert 8006 in p.walks[direction]
    assert 7006 in p.walks[direction]
    assert 6006 in p.walks[direction]
    assert 5006 in p.walks[direction]
    assert 4006 in p.walks[direction]
    assert 3006 in p.walks[direction]
    assert 2006 in p.walks[direction]
    assert 4000 not in p.walks[direction]
    assert 3005 not in p.walks[direction]


def test_solve():
    p = Puzzle2(input_file)
    result = p.solve()
    assert result == answer
