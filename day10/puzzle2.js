const AsteroidsMap = require('./utils').AsteroidsMap;

const input = [
    '..#..###....#####....###........#',
    '.##.##...#.#.......#......##....#',
    '#..#..##.#..###...##....#......##',
    '..####...#..##...####.#.......#.#',
    '...#.#.....##...#.####.#.###.#..#',
    '#..#..##.#.#.####.#.###.#.##.....',
    '#.##...##.....##.#......#.....##.',
    '.#..##.##.#..#....#...#...#...##.',
    '.#..#.....###.#..##.###.##.......',
    '.##...#..#####.#.#......####.....',
    '..##.#.#.#.###..#...#.#..##.#....',
    '.....#....#....##.####....#......',
    '.#..##.#.........#..#......###..#',
    '#.##....#.#..#.#....#.###...#....',
    '.##...##..#.#.#...###..#.#.#..###',
    '.#..##..##...##...#.#.#...#..#.#.',
    '.#..#..##.##...###.##.#......#...',
    '...#.....###.....#....#..#....#..',
    '.#...###..#......#.##.#...#.####.',
    '....#.##...##.#...#........#.#...',
    '..#.##....#..#.......##.##.....#.',
    '.#.#....###.#.#.#.#.#............',
    '#....####.##....#..###.##.#.#..#.',
    '......##....#.#.#...#...#..#.....',
    '...#.#..####.##.#.........###..##',
    '.......#....#.##.......#.#.###...',
    '...#..#.#.........#...###......#.',
    '.#.##.#.#.#.#........#.#.##..#...',
    '.......#.##.#...........#..#.#...',
    '.####....##..#..##.#.##.##..##...',
    '.#.#..###.#..#...#....#.###.#..#.',
    '............#...#...#.......#.#..',
    '.........###.#.....#..##..#.##...',
]; // 27,19

// const input = [
//     '.#..##.###...#######',
//     '##.############..##.',
//     '.#.######.########.#',
//     '.###.#######.####.#.',
//     '#####.##.#.##.###.##',
//     '..#####..#.#########',
//     '####################',
//     '#.####....###.#.#.##',
//     '##.#################',
//     '#####.##.###..####..',
//     '..######..##.#######',
//     '####.##.####...##..#',
//     '.#####..#.######.###',
//     '##...#.##########...',
//     '#.##########.#######',
//     '.####.#.###.###.#.##',
//     '....##.##.###..#####',
//     '.#.#.###########.###',
//     '#.#.#.#####.####.###',
//     '###.##.####.##.#..##',
// ]; // 11,13

let Rta;

const mapWidth = input[0].length;
const asteroidsMapString = input.join('');
console.log(mapWidth);

let am = new AsteroidsMap(asteroidsMapString, mapWidth);
am.draw();
// console.log('Total asteroids', am.asteroids.length);

let ast = am.vaporizeFrom(27, 19);

let _200th = ast.otherAsteroids[199];

console.log('200th vaporized asteroid is', _200th.asteroid.toString());

Rta = _200th.asteroid.x * 100 + _200th.asteroid.y;
console.log('Rta', Rta);

// Rta 1513
