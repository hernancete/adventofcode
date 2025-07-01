import pytest
import os
from src.day8.puzzle2 import Position, Puzzle2

test_path = 'tests/day8/'
input_file = os.path.abspath(test_path + 'input.txt')
input_file2 = os.path.abspath(test_path + 'input2.txt')
answer = 34
answer2 = 9


@pytest.mark.parametrize("pos1, pos2, expected", [
    (Position(0, 0), Position(3, 1), (Position(6, 2), Position(9, 3))),
    (Position(0, 0), Position(1, 2), (Position(2, 4), Position(3, 6), Position(4, 8))),
    (Position(3, 1), Position(1, 2), (Position(5, 0),)),
])
def test_calculate_all_antinodes(pos1, pos2, expected):
    bounds = Position(9, 9)
    antinodes = pos1.get_all_antinodes(pos2, bounds)
    for exp in expected:
        assert exp in antinodes


def test_solve2():
    p = Puzzle2(input_file2)
    assert p.solve() == answer2


def test_solve():
    p = Puzzle2(input_file)
    assert p.solve() == answer
