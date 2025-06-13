import pytest
import os
from src.day5.puzzle2 import Puzzle2


test_path = 'tests/day5/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 123


@pytest.mark.parametrize("update, expected", [
    ("75,97,47,61,53", "97,75,47,61,53"),
    ("61,13,29", "61,29,13"),
    ("97,13,75,29,47", "97,75,47,29,13"),
])
def test_order_update(update, expected):
    p = Puzzle2(input_file)
    p.read_input_lines()
    assert p.order_update(update) == expected


def test_solve():
    p = Puzzle2(input_file)
    result = p.solve()
    assert result == answer
