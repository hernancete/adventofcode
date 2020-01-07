
const u = require('./utils.js');

const YOU = 'YOU';
const SAN = 'SAN';

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
//     'K)YOU',
//     'I)SAN',
// ];

let Rta;

let elements = input.slice();

u.title('Reordering input');

let ordered = u.sortInput(elements);
// console.log(ordered);

u.title('Making sub-paths');

let paths = u.makePaths(ordered);
// console.log(paths);

u.title('Finding the paths of Santa and yours');

const yourPath = u.getBelongingPath(paths, YOU);
const santaPath = u.getBelongingPath(paths, SAN);
console.log('yourPath', yourPath);
console.log('santaPath', santaPath);

u.title('Finding the parent\'s paths of Santa and yours');

const yourParentsPath = u.getParentRecursive([yourPath,], paths);
const santaParentsPath = u.getParentRecursive([santaPath,], paths);
console.log('yourParentsPath', yourParentsPath);
console.log('santaParentsPath', santaParentsPath);

let youngestCommonPath;
let i;
for (i in yourParentsPath) {
    if (yourParentsPath[i].name == santaParentsPath[i].name) youngestCommonPath = yourParentsPath[i];
    else break;
}
console.log('youngestCommonPath', youngestCommonPath);

let yourOffset = yourPath.offsetOf(YOU);
let santaOffset = santaPath.offsetOf(SAN);
let youngestCommonPath_yourRootOffset = youngestCommonPath.offsetOf(yourParentsPath[i].root);
let youngestCommonPath_santaRootOffset = youngestCommonPath.offsetOf(santaParentsPath[i].root);

// el offset de YOU menos 1 (porque es el del cuerpo que orbito) - el offset del root del 1er path diferente de los paths comunes entre YOU y SANTA
// +
// el offset de SANTA menos 1 (porque es el del cuerpo que orbita santa) - el offset del root del 1er path diferente de los paths comunes entre YOU y SANTA
// +
// la diferencia entre los offset de los roots de los 1ros paths de YOU y SANTA que divergen

Rta = yourOffset - 1 - youngestCommonPath_yourRootOffset + santaOffset - youngestCommonPath_santaRootOffset + (youngestCommonPath_yourRootOffset - youngestCommonPath_santaRootOffset) - 2;
console.log('Rta', Rta);

// Rta 370
