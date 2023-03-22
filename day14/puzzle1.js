const { parseReactions, getOREs, reactions, waste, reset } = require("./utils");
const { inputReal } = require("./inputs");

reset();

parseReactions(inputReal);

console.log(getOREs("FUEL", 1));
// console.log(waste);

// Rta1: 278404

// for (i = 4436980; i < 10000000; i++) {
//   if (1000000000000 - getOREs("FUEL", i) < 0) break;
//   console.log(i);
// }

// Rta2: 4436981
