import os
from src.day1.puzzle2 import Puzzle2

src_path = 'src/day1/'
input_file = os.path.abspath(src_path + 'input.txt')

p = Puzzle2(input_file)
print(p.solve())
