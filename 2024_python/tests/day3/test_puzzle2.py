import pytest
import os
from src.day3.puzzle2 import Puzzle2

test_path = 'tests/day3/'
input_file3 = os.path.abspath(test_path + 'input3.txt')
input_file4 = os.path.abspath(test_path + 'input4.txt')
input_file5 = os.path.abspath(test_path + 'input5.txt')
input_file5_curated = os.path.abspath(test_path + 'input5_curated.txt')
input_file6 = os.path.abspath(test_path + 'input6.txt')
input_file6_curated = os.path.abspath(test_path + 'input6_curated.txt')
input_file7 = os.path.abspath(test_path + 'input7.txt')
input_file7_curated = os.path.abspath(test_path + 'input7_curated.txt')
input_file8 = os.path.abspath(test_path + 'input8.txt')
input_file8_curated = os.path.abspath(test_path + 'input8_curated.txt')
input_file9 = os.path.abspath(test_path + 'input9.txt')
input_file9_curated = os.path.abspath(test_path + 'input9_curated.txt')
input_file10 = os.path.abspath(test_path + 'input10.txt')
input_file10_curated = os.path.abspath(test_path + 'input10_curated.txt')
answer3 = 48
answer4 = 215
answer5 = 22386235
answer6 = 23071317
answer7 = 13074654
answer8 = 5425849
answer9 = 17291475
answer10 = 17577149


def test_read_input():
    p = Puzzle2(input_file3)
    p.read_input_lines()
    assert isinstance(p.lines, list), 'lines should be a list'


def test_sanitize_input_lines():
    p = Puzzle2(input_file3)
    p.read_input_lines()
    assert p.lines[0] == 'xmul(2,4)&mul[3,7]!^?mul(8,5))'


def test_sanitize_input_lines2():
    p = Puzzle2(input_file4)
    p.read_input_lines()
    assert p.lines[0] == 'xmul(2,4)%&mul[3,7]!@^mul(8,5))xnot_mul(2,5)+mul(32,64]then(mul(100,1)mul(3,3))xmul(2,4)&mul[3,7]!^?mul(8,5))'


def test_get_uncorrupt_mul_ops():
    p = Puzzle2(input_file3)
    p.read_input_lines()
    mul_ops = p.get_mul_ops()
    assert isinstance(mul_ops, list)
    assert len(mul_ops) == 2


@pytest.mark.parametrize("input_f,response", [
    (input_file3, answer3),
    (input_file4, answer4),
    (input_file5, answer5),
    (input_file5_curated, answer5),
    (input_file6, answer6),
    (input_file6_curated, answer6),
    (input_file7, answer7),
    (input_file7_curated, answer7),
    (input_file8, answer8),
    (input_file8_curated, answer8),
    (input_file9, answer9),
    (input_file9_curated, answer9),
    (input_file10, answer10),
    (input_file10_curated, answer10),
])
def test_solve(input_f, response):
    p = Puzzle2(input_f)
    assert p.solve() == response
