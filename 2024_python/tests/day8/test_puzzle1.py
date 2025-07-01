import pytest
import os
from src.day8.puzzle1 import Position, Puzzle1

test_path = 'tests/day8/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 14


@pytest.mark.parametrize("pos1, pos2, expected", [
    (Position(4, 3), Position(5, 5), (Position(3, 1), Position(6, 7))),
    (Position(4, 3), Position(8, 4), (Position(0, 2), Position(12, 5))),
    (Position(5, 5), Position(8, 4), (Position(2, 6), Position(11, 3))),
])
def test_calculate_antinodes(pos1, pos2, expected):
    antinodes = pos1.get_antinodes(pos2)
    assert expected[0] in antinodes
    assert expected[1] in antinodes


@pytest.mark.parametrize("pos, expected", [
    (Position(1, 1), True),
    (Position(15, 1), False),
    (Position(0, -1), False),
    (Position(9, 9), True),
    (Position(15, 103), False),
])
def test_position_in_bounds(pos, expected):
    bounds = Position(9, 9)
    assert pos.is_inside(bounds) == expected


def test_read_input_as_matrix():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert ''.join(p.matrix[1]) == '........0...'
    assert ''.join(p.matrix[5]) == '......A.....'
    assert ''.join(p.matrix[7]) == '............'
    assert ''.join(p.matrix[9]) == '.........A..'


def test_get_antenna_positions_in_line():
    p = Puzzle1(input_file)
    p.read_input_lines()
    antennas_loc = p.get_antenna_locations_in_line('..0Ar.+.A.A..')
    assert antennas_loc['0'] == set([2,])
    assert antennas_loc['A'] == set([3, 8, 10,])
    assert antennas_loc['r'] == set([4,])
    assert antennas_loc['+'] == set([6,])


def test_get_antenna_positions_in_empty_line():
    p = Puzzle1(input_file)
    p.read_input_lines()
    antennas_loc = p.get_antenna_locations_in_line('................')
    assert len(antennas_loc) == 0


def test_get_antenna_positions():
    p = Puzzle1(input_file)
    p.read_input_lines()
    p.get_antenna_locations()
    assert len(p.antennas['0']) == 4
    assert len(p.antennas['A']) == 3
    assert Position(8, 1) in p.antennas['0']
    assert Position(5, 2) in p.antennas['0']
    assert Position(7, 3) in p.antennas['0']
    assert Position(4, 4) in p.antennas['0']
    assert Position(8, 8) in p.antennas['A']
    assert Position(9, 9) in p.antennas['A']


def test_get_antenna_combination_per_antenna_freq():
    p = Puzzle1(input_file)
    p.read_input_lines()
    p.get_antenna_locations()
    comb_0 = p.combine_antenna_positions(p.antennas['0'])
    comb_A = p.combine_antenna_positions(p.antennas['A'])
    assert len(comb_0) == 6
    assert (Position(8, 1), Position(5, 2)) in comb_0
    assert (Position(8, 1), Position(7, 3)) in comb_0
    assert (Position(8, 1), Position(4, 4)) in comb_0
    assert (Position(5, 2), Position(7, 3)) in comb_0
    assert (Position(5, 2), Position(4, 4)) in comb_0
    assert (Position(7, 3), Position(4, 4)) in comb_0
    assert (Position(8, 1), Position(8, 1)) not in comb_0
    assert len(comb_A) == 3
    assert (Position(6, 5), Position(8, 8)) in comb_A
    assert (Position(6, 5), Position(9, 9)) in comb_A
    assert (Position(8, 8), Position(9, 9)) in comb_A


def test_solve():
    p = Puzzle1(input_file)
    assert p.solve() == answer
