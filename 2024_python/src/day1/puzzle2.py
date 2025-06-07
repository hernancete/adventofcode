from src.day1.puzzle1 import Puzzle1


class Puzzle2(Puzzle1):

    def count_list2_appearences(self, id):
        return self.list2.count(id)

    def solve(self):
        self.read_input()
        similarity = 0
        for i in self.list1:
            similarity += self.count_list2_appearences(i) * i
        return similarity
