const utils = require('./utils.js');

const w1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
const w2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
// const w1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
// const w2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];
// const w1 = ['U7', 'R6', 'D4', 'L4'];
// const w2 = ['R8', 'U5', 'L5', 'D3'];

// Trazar todo el primer path
// Iterar el segundo de a tramos y calcular si hay intesecciones (ir conservando los steps del segundo)
// Cuando encuentre intersección, buscar en el primer path el índice del primer punto de intersección

let Rta;

let p1 = utils.makePath(w1);

let startPoint = [0, 0];
let w2Steps = 0;

w2.some((s) => {
  console.log(s);
  let p2 = utils.makePath([s], startPoint);
  // console.log(p2);
  let intersections = utils.getIntesections(p1.slice(1), p2.slice(1));

  if (intersections.length) {
    console.log('intersections', intersections);
    let firstW2Intersection = intersections[0];
    console.log('firstW2Intersection', firstW2Intersection);
    w2Steps += p2.indexOf(firstW2Intersection) + 1;
    console.log('w2Steps', w2Steps);
    let w1Steps = p1.indexOf(firstW2Intersection);
    console.log('w1Steps', w1Steps);

    Rta = w1Steps + w2Steps;
    return true;
  }

  w2Steps += p2.length;
  console.log('w2Steps', w2Steps);
  startPoint = p2[p2.length - 1];
  return false;
});

console.log('Rta', Rta);

// Rta
