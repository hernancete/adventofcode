const { parseReactions, getOREs, reactions, waste, reset } = require('./utils');
const { inputReal } = require('./inputs');

reset();

parseReactions(inputReal);

const OREsQtty = 1000000000000;

// i = 4436975 is a guest to start finding i not from 0
for (i = 4436975; i < 10000000; i++) {
  if (OREsQtty - getOREs('FUEL', i) < 0) break;
  console.log(i);
}

// Rta2: 4436981
