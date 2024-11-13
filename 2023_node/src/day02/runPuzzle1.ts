import path from 'path';
import { Puzzle1 } from "./puzzle1";

const gameRules = { blue: 14, red: 12, green: 13 };
const inputFile = path.resolve(path.join(__dirname, './input.txt'))

const puzzle1 = new Puzzle1(inputFile);
puzzle1.setGameRules(gameRules);
const answer = puzzle1.solve();
console.log(answer);
