from src.common.utils import Puzzle

MIN_GAP = 1
MAX_GAP = 3


class Puzzle1(Puzzle):

    def is_record_safe(self, record):
        assert isinstance(record, list)
        if not len(record) >= 2:
            return False

        x = record[1] - record[0]
        sign = (x > 0) - (x < 0)
        for i in range(0, len(record) - 1):
            gap = record[i+1] - record[i]
            if not (
                ((gap > 0) - (gap < 0)) == sign and
                (MIN_GAP <= abs(gap) <= MAX_GAP)
            ):
                return False
        return True

    def solve(self):
        self.read_input_lines()
        records = [list(map(int, x.split())) for x in self.lines]
        safe_records = [x for x in records if self.is_record_safe(x)]
        return len(safe_records)
