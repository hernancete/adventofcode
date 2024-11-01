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
from day1.puzzle1 import Puzzle1

INPUT_LINE_KEY = 0
FIRST_DIGIT_KEY = 1
LAST_DIGIT_KEY = 2
DIGITS_KEY = 3


class TestPuzzle1(unittest.TestCase):

    cases = [
        ["1ghjksdgv", "1", "1", "11"],
        ["1ghjksdg9", "1", "9", "19"],
        ["gh3jkfgb9", "3", "9", "39"],
        ["ghjkffg89", "8", "9", "89"],
        ["ghjkffgb9", "9", "9", "99"],
        ["ghjk5fgbb", "5", "5", "55"],
        ["1ghjkfgbb", "1", "1", "11"],
        ["ghjkffgbb", "0", "0", "00"],
        ["123456789", "1", "9", "19"],
    ]

    digits_from_sample = [
        "11",
        "66",
        "69",
        "91",
        "31",
        "55",
        "79",
        "19",
        "33",
        "22",
    ]
    sum_digits_from_sample = 476

    def test_read_input(self):
        puzzle1 = Puzzle1()
        puzzle1.read_input()
        self.assertIsNotNone(puzzle1.input)
        self.assertIsInstance(puzzle1.input, list)
        self.assertGreater(len(puzzle1.input), 0)

    def test_get_first_digit_from_string(self):
        case = "1ghjksdg9"
        puzzle1 = Puzzle1()
        first = puzzle1.get_first_digit(case)
        self.assertEqual(first, "1")

    def test_get_first_digit_from_string_multiple(self):
        puzzle1 = Puzzle1()
        for case in self.cases:
            first = puzzle1.get_first_digit(case[INPUT_LINE_KEY])
            self.assertEqual(first, case[FIRST_DIGIT_KEY])

    def test_get_last_digit_from_string(self):
        case = "1ghjksdg9"
        puzzle1 = Puzzle1()
        last = puzzle1.get_last_digit(case)
        self.assertEqual(last, "9")

    def test_get_last_digit_from_string_multiple(self):
        puzzle1 = Puzzle1()
        for case in self.cases:
            last = puzzle1.get_last_digit(case[INPUT_LINE_KEY])
            self.assertEqual(last, case[LAST_DIGIT_KEY])

    @mock.patch.object(Puzzle1, "get_last_digit")
    @mock.patch.object(Puzzle1, "get_first_digit")
    def test_call_first_and_last_digit_get_functions_for_every_imput_line(
        self, get_first_digit_mock, get_last_digit_mock
    ):
        get_first_digit_mock.return_value = "0"
        get_last_digit_mock.return_value = "0"
        puzzle1 = Puzzle1()
        puzzle1.input_filename = os.path.join(os.path.dirname(puzzle1.input_filename), "input_sample.txt")
        puzzle1.read_input()
        puzzle1.get_digits()
        self.assertEqual(get_first_digit_mock.call_count, 10)
        self.assertEqual(get_last_digit_mock.call_count, 10)

    def test_get_digits(self):
        puzzle1 = Puzzle1()
        puzzle1.input_filename = os.path.join(os.path.dirname(puzzle1.input_filename), "input_sample.txt")
        puzzle1.read_input()
        puzzle1.get_digits()
        self.assertEqual(puzzle1.digits, self.digits_from_sample)

    def test_sum_digits(self):
        puzzle1 = Puzzle1()
        puzzle1.input_filename = os.path.join(os.path.dirname(puzzle1.input_filename), "input_sample.txt")
        puzzle1.read_input()
        puzzle1.get_digits()
        puzzle1.sum_digits()
        self.assertEqual(puzzle1.sum, self.sum_digits_from_sample)


if __name__ == "__main__":
    unittest.main()
