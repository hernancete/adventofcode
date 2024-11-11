import path from 'path';
import { Puzzle2 } from "./puzzle2";

const puzzle2 = new Puzzle2(path.resolve(path.join(__dirname, './input.txt')));
puzzle2.sortHands();
const answer = puzzle2.solve();
console.log(answer);
