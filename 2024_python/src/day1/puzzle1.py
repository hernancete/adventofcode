import re


class Puzzle1:

    def __init__(self, input_file=None):
        self.input_file = input_file

    def read_input(self):
        self.list1 = []
        self.list2 = []
        with open(self.input_file, 'r') as f:
            for line in f:
                loc_id_1, loc_id_2 = re.split(r'[\s]+', line.strip())
                self.list1.append(int(loc_id_1))
                self.list2.append(int(loc_id_2))

    def sort_lists(self):
        self.list1.sort()
        self.list2.sort()

    def meassure_dist(self, a, b):
        return abs(b - a)

    def solve(self):
        self.read_input()
        self.sort_lists()
        total_dist = 0
        for i, _ in enumerate(self.list1):
            total_dist += self.meassure_dist(self.list1[i], self.list2[i])
        return total_dist
