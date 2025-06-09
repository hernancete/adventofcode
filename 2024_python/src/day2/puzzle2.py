from src.day2.puzzle1 import Puzzle1

MIN_GAP = 1
MAX_GAP = 3


# class RecordUnsafeException(Exception):
#     def __init__(self, index):
#         self.unsafe_index = index
#         super().__init__(index)


class Puzzle2(Puzzle1):

    # def is_record_safe_strict(self, record):
    #     assert isinstance(record, list)
    #     if not len(record) >= 2:
    #         return False
    #     x = record[1] - record[0]
    #     sign = (x > 0) - (x < 0)
    #     for i in range(0, len(record) - 1):
    #         gap = record[i+1] - record[i]
    #         if not (
    #             ((gap > 0) - (gap < 0)) == sign and
    #             (MIN_GAP <= abs(gap) <= MAX_GAP)
    #         ):
    #             raise RecordUnsafeException(i)
    #     return True

    # def is_record_safe(self, record):
    #     try:
    #         return self.is_record_safe_strict(record)
    #     except RecordUnsafeException as e:
    #         del_index = e.unsafe_index
    #         try:
    #             new_record = record[:del_index] + record[del_index+1:]
    #             print('new_record', new_record)
    #             return self.is_record_safe_strict(new_record)
    #         except RecordUnsafeException:
    #             try:
    #                 new_record2 = record[:del_index+1] + record[del_index+1+1:]
    #                 print('new_record2', new_record2)
    #                 return self.is_record_safe_strict(new_record2)
    #             except Exception:
    #                 print(record)
    #                 return False

    def is_dampened_record_safe(self, record):
        for i in range(len(record)):
            new_record = record[:i] + record[i+1:]
            if self.is_record_safe(new_record):
                return True
        return False

    def solve(self):
        self.read_input_lines()
        records = [list(map(int, x.split())) for x in self.lines]
        safe_records = [x for x in records if self.is_dampened_record_safe(x)]
        return len(safe_records)
