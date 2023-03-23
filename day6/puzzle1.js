const u = require('./utils.js');

const input = require('./input.js');
// const input = [
//     'COM)B',
//     'B)C',
//     'C)D',
//     'D)E',
//     'E)F',
//     'B)G',
//     'G)H',
//     'D)I',
//     'E)J',
//     'J)K',
//     'K)L',
// ];

let Rta;

let elements = input.slice();

// console.log(elements);
// elements.sort((a, b) => {
//     return Math.random() - .5;
// });
// console.log(elements);

u.title('Reordering input');

let ordered = u.sortInput(elements);
// console.log(ordered);

u.title('Making sub-paths');

let paths = u.makePaths(ordered);
// console.log(paths);

console.log('paths', paths.length);
Rta = 0;
for (let p of paths) {
  console.log(p.toString(), '(' + p.totalOrbits().toString() + ')');
  Rta += p.totalOrbits();
}

u.title('Rta ' + Rta);
// Rta 322508
