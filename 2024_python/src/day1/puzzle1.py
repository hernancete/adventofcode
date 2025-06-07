import re


class Puzzle1:
    def read_input(self, input_file):
        self.list1 = []
        self.list2 = []
        with open(input_file, 'r') as f:
            for line in f:
                loc_id_1, loc_id_2 = re.split(r'[\s]+', line.strip())
                self.list1.append(loc_id_1)
                self.list2.append(loc_id_2)
