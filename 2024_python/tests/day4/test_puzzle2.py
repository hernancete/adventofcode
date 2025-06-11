import pytest
import os
from src.day4.puzzle2 import Puzzle2

test_path = 'tests/day4/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 9


@pytest.mark.parametrize("line, expected_centers", [
    ("MMMSXXMASM", [7]),
    ("MSAMXMSMSA", []),
    ("AMXSXMAAMM", []),
    ("MSAMASMSMX", [4]),
    ("XMASAMXAMM", [2]),
    ("MASMASMASM", [1, 4, 7]),
])
def test_find_word_inline(line, expected_centers):
    p = Puzzle2(input_file)
    centers = p.find_word_inline(line)
    assert centers == expected_centers


@pytest.mark.parametrize("line, expected_centers", [
    ("MMMSXXMASM", []),
    ("MSAMXMSMSA", [2]),
    ("AMXSXMAAMM", []),
    ("MSAMASMSMX", [2]),
    ("XMASAMXAMM", [4]),
    ("SAMSAMSAMS", [1, 4, 7]),
])
def test_find_word_inline_backwards(line, expected_centers):
    p = Puzzle2(input_file)
    centers = p.find_word_inline_backwards(line)
    assert centers == expected_centers


def test_tilt_up():
    matrix = [list('abc'),
              list('def')]
    expected = [list('00c'),
                list('0bf'),
                list('ae0'),
                list('d00')]
    p = Puzzle2(input_file)
    tilted_up = p.tilt_up(matrix)
    assert tilted_up == expected


def test_tilt_down():
    matrix = [list('abc'),
              list('def')]
    expected = [list('a00'),
                list('db0'),
                list('0ec'),
                list('00f')]
    p = Puzzle2(input_file)
    tilted_down = p.tilt_down(matrix)
    assert tilted_down == expected


def test_get_diagonal_right_centers():
    matrix = [
        list("MMMSXXMASM"),
        list("MSAMXMSMSA"),
        list("AMXSXMAAMM"),
        list("MSAMASMSMX"),
        list("XMASAMXAMM"),
    ]
    expected = [(7, 2),
                (6, 2),
                (2, 1),
                (4, 3),
                (2, 3),]
    p = Puzzle2(input_file)
    diagonal_right_centers = p.get_diagonal_right_centers(matrix)
    assert diagonal_right_centers == expected


def test_get_diagonal_left_centers():
    matrix = [
        list("MMMSXXMASM"),
        list("MSAMXMSMSA"),
        list("AMXSXMAAMM"),
        list("MSAMASMSMX"),
        list("XMASAMXAMM"),
    ]
    expected = [(2, 1),
                (2, 3),
                (4, 3),
                (6, 2),
                (7, 2),]
    p = Puzzle2(input_file)
    diagonal_left_centers = p.get_diagonal_left_centers(matrix)
    assert diagonal_left_centers == expected


def test_solve():
    p = Puzzle2(input_file)
    assert p.solve() == answer
