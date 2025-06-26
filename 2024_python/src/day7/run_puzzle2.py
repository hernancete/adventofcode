import os
from puzzle2 import Puzzle2

src_path = 'src/day7/'
input_file = os.path.abspath(src_path + 'input.txt')

p = Puzzle2(input_file)
print(p.solve())
