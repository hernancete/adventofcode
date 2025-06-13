from src.utils.puzzle import Puzzle


class Puzzle1(Puzzle):

    def read_input_lines(self):
        super().read_input_lines()
        self.ordering_rules = [row for row in self.lines if '|' in row]
        self.updates = [row for row in self.lines if ',' in row]

    def is_ordered(self, a, b):
        return "{}|{}".format(a, b) in self.ordering_rules

    def is_update_ordered(self, update):
        update_a = update.split(',')
        for i in range(len(update_a) - 1):
            if not self.is_ordered(update_a[i], update_a[i + 1]):
                return False
        return True

    def get_middle_page(self, update):
        update_a = update.split(',')
        if len(update_a) % 2 == 0:
            raise Exception
        return update_a[int((len(update_a) - 1 )/2)]

    def solve(self):
        self.read_input_lines()
        all_middles = [
            self.get_middle_page(update)
            for update in self.updates
            if self.is_update_ordered(update)
            ]
        return sum(list(map(int, all_middles)))
