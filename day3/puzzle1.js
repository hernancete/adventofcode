const utils = require("./utils.js");

// const w1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
// const w2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
// const w1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
// const w2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];
const w1 = utils.w1Dirs;
const w2 = utils.w2Dirs;

let p1 = utils.makePath(w1);
let p2 = utils.makePath(w2);

let intersections = utils.getIntesections(p1.slice(1), p2.slice(1));
let manhattanDistance = intersections.map(utils.manhattanDistance);
// console.log(p1);
// console.log(p2);
console.log(intersections);
console.log(manhattanDistance.sort((a, b) => a - b));

// Rta 303
