import os
from puzzle1 import Puzzle1

src_path = 'src/day1/'
input_file = os.path.abspath(src_path + 'input.txt')

p1 = Puzzle1(input_file)
print(p1.solve())
