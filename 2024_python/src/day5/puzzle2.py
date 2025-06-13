from functools import cmp_to_key
from src.day5.puzzle1 import Puzzle1


class Puzzle2(Puzzle1):

    def _sort_func(self, a, b):
        return -1 if self.is_ordered(a, b) else 1


    def order_update(self, update):
        udpate_a = update.split(',')
        return ','.join(sorted(udpate_a, key=cmp_to_key(self._sort_func)))

    def solve(self):
        self.read_input_lines()
        all_middles = [
            self.get_middle_page(self.order_update(update))
            for update in self.updates
            if not self.is_update_ordered(update)
            ]
        return sum(list(map(int, all_middles)))
