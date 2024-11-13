import path from 'path';
import { Puzzle2 } from "./puzzle2";

const inputFile = path.resolve(path.join(__dirname, './input.txt'))

const puzzle2 = new Puzzle2(inputFile);
puzzle2.getGears();
const answer = puzzle2.solve();
console.log(answer);
