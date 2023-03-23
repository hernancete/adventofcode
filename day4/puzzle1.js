const utils = require('./utils.js');

let Rta;

let possiblePasswords = [];
for (let i = utils.input[0]; i <= utils.input[1]; i++) {
  if (utils.isNeverDecreasing(i) && utils.isAtLeastTwoAdjacentsTheSame(i)) possiblePasswords.push(i);
}

Rta = possiblePasswords.length;

console.log('possiblePasswords', possiblePasswords);
console.log('first', possiblePasswords[0]);
console.log('last', possiblePasswords[possiblePasswords.length - 1]);
console.log('Rta', Rta);

// Rta 1033
