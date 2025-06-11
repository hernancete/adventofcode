import pytest
import os
from src.day4.puzzle1 import Puzzle1

test_path = 'tests/day4/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 18


def test_input_as_matrix():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert isinstance(p.matrix, list)
    assert isinstance(p.matrix[0], list)


def test_matrix_size():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert len(p.matrix) == 10
    assert len(p.matrix[0]) == 10


@pytest.mark.parametrize("line, expected_count", [
    ("MMMSXXMASM", 1),
    ("MSAMXMSMSA", 0),
    ("AMXSXMAAMM", 0),
    ("MSAMASMSMX", 0),
    ("XMASAMXAMM", 1),
])
def test_find_word_inline(line, expected_count):
    p = Puzzle1(input_file)
    count = p.find_word_inline(line)
    assert count == expected_count


@pytest.mark.parametrize("line, expected_count", [
    ("MMMSXXMASM", 0),
    ("MSAMXMSMSA", 1),
    ("AMXSXMAAMM", 0),
    ("MSAMASMSMX", 0),
    ("XMASAMXAMM", 1),
])
def test_find_word_inline_backwards(line, expected_count):
    p = Puzzle1(input_file)
    count = p.find_word_inline_backwards(line)
    assert count == expected_count


def test_tilt_matrix_right():
    p = Puzzle1(input_file)
    p.read_input_lines()
    tilted = p.tilt_right()
    expected = [
        list('000000000MMMSXXMASM'),
        list('00000000MSAMXMSMSA0'),
        list('0000000AMXSXMAAMM00'),
        list('000000MSAMASMSMX000'),
        list('00000XMASAMXAMM0000'),
        list('0000XXAMMXXAMA00000'),
        list('000SMSMSASXSS000000'),
        list('00SAXAMASAAA0000000'),
        list('0MAMMMXMMMM00000000'),
        list('MXMXAXMASX000000000'),
    ]
    assert tilted == expected


def test_tilt_matrix_left():
    p = Puzzle1(input_file)
    p.read_input_lines()
    tilted = p.tilt_left()
    expected = [
        list('MMMSXXMASM000000000'),
        list('0MSAMXMSMSA00000000'),
        list('00AMXSXMAAMM0000000'),
        list('000MSAMASMSMX000000'),
        list('0000XMASAMXAMM00000'),
        list('00000XXAMMXXAMA0000'),
        list('000000SMSMSASXSS000'),
        list('0000000SAXAMASAAA00'),
        list('00000000MAMMMXMMMM0'),
        list('000000000MXMXAXMASX'),
    ]
    assert tilted == expected


def test_traspose_matrix():
    p = Puzzle1(input_file)
    p.read_input_lines()
    trasposed = p.traspose(p.matrix)
    expected = [
        list('MMAMXXSSMM'),
        list('MSMSMXMAAX'),
        list('MAXAAASXMM'),
        list('SMSMSMMAMX'),
        list('XXXAAMSMMA'),
        list('XMMSMXAAXX'),
        list('MSAMXXSSMM'),
        list('AMASAAXAMA'),
        list('SSMMMMSAMS'),
        list('MAMXMASAMX'),
    ]
    assert trasposed == expected


def test_solve():
    p = Puzzle1(input_file)
    assert p.solve() == answer
