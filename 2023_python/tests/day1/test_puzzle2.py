# assertEqual(a, b)           a == b
# assertNotEqual(a, b)        a != b
# assertTrue(x)               bool(x) is True
# assertFalse(x)              bool(x) is False
# assertIs(a, b)              a is b
# assertIsNot(a, b)           a is not b
# assertIsNone(x)             x is None
# assertIsNotNone(x)          x is not None
# assertIn(a, b)              a in b
# assertNotIn(a, b)           a not in b
# assertIsInstance(a, b)      isinstance(a, b)
# assertNotIsInstance(a, b)   not isinstance(a, b)

import os
from unittest import mock
import unittest
from src.day1.puzzle2 import Puzzle2

INPUT_LINE_KEY = 0
FIRST_DIGIT_KEY = 1
LAST_DIGIT_KEY = 2
DIGITS_KEY = 3


class TestPuzzle2(unittest.TestCase):

    cases = [
        ["7eightggfvfrsrfive77sxxrshdrfive", "7", "5", "75"],
        ["12lkgxnfqd", "1", "2", "12"],
        ["9znqtwo2three5three75", "9", "5", "95"],
        ["seven8six", "7", "6", "76"],
        ["four138six7six1four", "4", "4", "44"],
        ["8vmpqprxdgj", "8", "8", "88"],
        ["8zckvmtmbjtdqprvfxtkmgmmtgck", "8", "8", "88"],
        ["8vlzthree49", "8", "9", "89"],
        ["onesddbmbeightfive523sixtwo", "1", "2", "12"],
        ["9jcfjq3", "9", "3", "93"],
        ["5qlhxfour", "5", "4", "54"],
    ]

    digits_from_sample = [
        "51",
        "64",
        "99",
        "98",
        "51",
        "95",
        "39",
        "19",
        "53",
        "27",
    ]
    sum_digits_from_sample = 596

    def test_read_input(self):
        puzzle2 = Puzzle2()
        puzzle2.read_input()
        self.assertIsNotNone(puzzle2.input)
        self.assertIsInstance(puzzle2.input, list)
        self.assertGreater(len(puzzle2.input), 0)

    def test_get_digit_from_text(self):
        puzzle2 = Puzzle2()
        e0 = puzzle2.text_to_digit('zero')
        e1 = puzzle2.text_to_digit('one')
        e5 = puzzle2.text_to_digit('five')
        e8 = puzzle2.text_to_digit('eight')
        e9 = puzzle2.text_to_digit('nine')
        en = puzzle2.text_to_digit('not_a_number')
        self.assertEqual(e0, '0')
        self.assertEqual(e1, '1')
        self.assertEqual(e5, '5')
        self.assertEqual(e8, '8')
        self.assertEqual(e9, '9')
        self.assertEqual(en, '0')

    def test_get_digit_from_reversed_text(self):
        puzzle2 = Puzzle2()
        e0 = puzzle2.reversed_text_to_digit('orez')
        e1 = puzzle2.reversed_text_to_digit('eno')
        e5 = puzzle2.reversed_text_to_digit('evif')
        e8 = puzzle2.reversed_text_to_digit('thgie')
        e9 = puzzle2.reversed_text_to_digit('enin')
        en = puzzle2.reversed_text_to_digit('not_a_number')
        self.assertEqual(e0, '0')
        self.assertEqual(e1, '1')
        self.assertEqual(e5, '5')
        self.assertEqual(e8, '8')
        self.assertEqual(e9, '9')
        self.assertEqual(en, '0')

    def test_get_first_digit_from_string(self):
        case_digit = "1ghjksdg9"
        case_text = "one2ghjksdg9"
        puzzle2 = Puzzle2()
        first_digit = puzzle2.get_first_digit(case_digit)
        first_text = puzzle2.get_first_digit(case_text)
        self.assertEqual(first_digit, "1")
        self.assertEqual(first_text, "1")

    def test_get_first_digit_from_string_multiple(self):
        puzzle2 = Puzzle2()
        for case in self.cases:
            first = puzzle2.get_first_digit(case[INPUT_LINE_KEY])
            self.assertEqual(first, case[FIRST_DIGIT_KEY])

    def test_get_last_digit_from_string(self):
        case_digit = "1ghjksdg9"
        case_text = "one2ghjksdg8nine"
        puzzle2 = Puzzle2()
        last_digit = puzzle2.get_last_digit(case_digit)
        last_text = puzzle2.get_last_digit(case_text)
        self.assertEqual(last_digit, "9")
        self.assertEqual(last_text, "9")

    def test_get_last_digit_from_string_multiple(self):
        puzzle2 = Puzzle2()
        for case in self.cases:
            last = puzzle2.get_last_digit(case[INPUT_LINE_KEY])
            self.assertEqual(last, case[LAST_DIGIT_KEY])

    @mock.patch.object(Puzzle2, "get_last_digit")
    @mock.patch.object(Puzzle2, "get_first_digit")
    def test_call_first_and_last_digit_get_functions_for_every_imput_line(
        self, get_first_digit_mock, get_last_digit_mock
    ):
        get_first_digit_mock.return_value = "0"
        get_last_digit_mock.return_value = "0"
        puzzle2 = Puzzle2()
        puzzle2.input_filename = os.path.join(os.path.dirname(puzzle2.input_filename), "input_sample.txt")
        puzzle2.read_input()
        puzzle2.get_digits()
        self.assertEqual(get_first_digit_mock.call_count, 10)
        self.assertEqual(get_last_digit_mock.call_count, 10)

    def test_get_digits(self):
        puzzle2 = Puzzle2()
        puzzle2.input_filename = os.path.join(os.path.dirname(puzzle2.input_filename), "input_sample.txt")
        puzzle2.read_input()
        puzzle2.get_digits()
        self.assertEqual(puzzle2.digits, self.digits_from_sample)

    def test_sum_digits(self):
        puzzle2 = Puzzle2()
        puzzle2.input_filename = os.path.join(os.path.dirname(puzzle2.input_filename), "input_sample.txt")
        puzzle2.read_input()
        puzzle2.get_digits()
        puzzle2.sum_digits()
        self.assertEqual(puzzle2.sum, self.sum_digits_from_sample)


if __name__ == "__main__":
    unittest.main()
