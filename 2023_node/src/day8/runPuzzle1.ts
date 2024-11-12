import path from 'path';
import { Puzzle1 } from "./puzzle1";

const inputFile = path.resolve(path.join(__dirname, './input.txt'));

const puzzle1 = new Puzzle1(inputFile);
const answer = puzzle1.solve();
console.log(answer);
