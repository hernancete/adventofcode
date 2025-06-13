import pytest
import os
from src.day5.puzzle1 import Puzzle1


test_path = 'tests/day5/'
input_file = os.path.abspath(test_path + 'input.txt')
answer = 143


def test_read_input():
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert isinstance(p.ordering_rules, list)
    assert len(p.ordering_rules) == 21
    assert isinstance(p.updates, list)
    assert len(p.updates) == 6


@pytest.mark.parametrize("page_a, page_b, expected", [
    (97, 61, True),
    (53, 29, True),
    (13, 75, False),
    (29, 13, True),
    (75, 97, False),
    (47, 61, True),
    (53, 61, False),
    (13, 29, False),
])
def test_check_if_two_pages_are_ordered(page_a, page_b, expected):
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert p.is_ordered(page_a, page_b) == expected


@pytest.mark.parametrize("update, expected", [
    ("75,47,61,53,29", True),
    ("97,61,53,29,13", True),
    ("75,29,13", True),
    ("75,97,47,61,53", False),
    ("61,13,29", False),
    ("97,13,75,29,47", False),
])
def test_update_is_ordered(update, expected):
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert p.is_update_ordered(update) == expected


@pytest.mark.parametrize("update, expected", [
    ("75,47,61,53,29", "61"),
    ("97,61,53,29,13", "53"),
    ("75,29,13", "29"),
    ("75,97,47,61,53", "47"),
    ("61,13,29", "13"),
    ("97,13,75,29,47", "75"),
])
def test_get_udpdate_middle_page(update, expected):
    p = Puzzle1(input_file)
    p.read_input_lines()
    assert p.get_middle_page(update) == expected

def test_solve():
    p = Puzzle1(input_file)
    result = p.solve()
    assert result == answer
