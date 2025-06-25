import os
from puzzle2_take2 import Puzzle2_take2

src_path = 'src/day6/'
input_file = os.path.abspath(src_path + 'input.txt')

p = Puzzle2_take2(input_file)
print(p.solve())
