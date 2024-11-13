import path from 'path';
import { Puzzle1 } from "./puzzle1";

const puzzle1 = new Puzzle1(path.resolve(path.join(__dirname, './input.txt')));
puzzle1.sortHands();
const answer = puzzle1.solve();
console.log(answer);
