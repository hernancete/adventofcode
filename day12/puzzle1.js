const Moon = require('./utils').Moon;

// <x=-5, y=6, z=-11>
// <x=-8, y=-4, z=-2>
// <x=1, y=16, z=4>
// <x=11, y=11, z=-4>
const input = [
  [-5, 6, -11],
  [-8, -4, -2],
  [1, 16, 4],
  [11, 11, -4],
];

const Io = new Moon(input[0][0], input[0][1], input[0][2]);
const Europa = new Moon(input[1][0], input[1][1], input[1][2]);
const Ganymede = new Moon(input[2][0], input[2][1], input[2][2]);
const Callisto = new Moon(input[3][0], input[3][1], input[3][2]);

// First update the velocity of every moon by applying gravity
// Then update the position of every moon by applying velocity

let Rta = 0;
const steps = 1000;

for (let s = 0; s < steps; s++) {
  Io.updateVel([Europa, Ganymede, Callisto]);
  Europa.updateVel([Io, Ganymede, Callisto]);
  Ganymede.updateVel([Io, Europa, Callisto]);
  Callisto.updateVel([Io, Europa, Ganymede]);

  Io.updatePos();
  Europa.updatePos();
  Ganymede.updatePos();
  Callisto.updatePos();
}

let ioE = Io.energy();
let europaE = Europa.energy();
let ganymedeE = Ganymede.energy();
let callistoE = Callisto.energy();

console.log('Io', Io.getPos(), Io.getVel(), ioE);
console.log('Europa', Europa.getPos(), Europa.getVel(), europaE);
console.log('Ganymede', Ganymede.getPos(), Ganymede.getVel(), ganymedeE);
console.log('Callisto', Callisto.getPos(), Callisto.getVel(), callistoE);
Rta = ioE + europaE + ganymedeE + callistoE;
console.log('Rta', Rta);

// Rta 13399
