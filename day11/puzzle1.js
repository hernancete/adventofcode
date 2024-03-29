const intcodeAsync = require('../day9/utils').intcodeAsync;
const Queue = require('../day9/utils').Queue;

const Robot = require('./utils').Robot;
const Wall = require('./utils').Wall;

const input = [
  3, 8, 1005, 8, 291, 1106, 0, 11, 0, 0, 0, 104, 1, 104, 0, 3, 8, 1002, 8, -1, 10, 101, 1, 10, 10, 4, 10, 108, 0, 8, 10,
  4, 10, 1002, 8, 1, 28, 1, 1003, 20, 10, 2, 1103, 19, 10, 3, 8, 1002, 8, -1, 10, 1001, 10, 1, 10, 4, 10, 1008, 8, 0,
  10, 4, 10, 1001, 8, 0, 59, 1, 1004, 3, 10, 3, 8, 102, -1, 8, 10, 1001, 10, 1, 10, 4, 10, 108, 0, 8, 10, 4, 10, 1001,
  8, 0, 84, 1006, 0, 3, 1, 1102, 12, 10, 3, 8, 1002, 8, -1, 10, 101, 1, 10, 10, 4, 10, 1008, 8, 1, 10, 4, 10, 101, 0, 8,
  114, 3, 8, 1002, 8, -1, 10, 101, 1, 10, 10, 4, 10, 108, 1, 8, 10, 4, 10, 101, 0, 8, 135, 3, 8, 1002, 8, -1, 10, 1001,
  10, 1, 10, 4, 10, 1008, 8, 0, 10, 4, 10, 102, 1, 8, 158, 2, 9, 9, 10, 2, 2, 10, 10, 3, 8, 1002, 8, -1, 10, 1001, 10,
  1, 10, 4, 10, 1008, 8, 1, 10, 4, 10, 101, 0, 8, 188, 1006, 0, 56, 3, 8, 1002, 8, -1, 10, 1001, 10, 1, 10, 4, 10, 108,
  1, 8, 10, 4, 10, 1001, 8, 0, 212, 1006, 0, 76, 2, 1005, 8, 10, 3, 8, 102, -1, 8, 10, 1001, 10, 1, 10, 4, 10, 108, 1,
  8, 10, 4, 10, 1001, 8, 0, 241, 3, 8, 102, -1, 8, 10, 101, 1, 10, 10, 4, 10, 1008, 8, 0, 10, 4, 10, 1002, 8, 1, 264,
  1006, 0, 95, 1, 1001, 12, 10, 101, 1, 9, 9, 1007, 9, 933, 10, 1005, 10, 15, 99, 109, 613, 104, 0, 104, 1, 21102,
  838484206484, 1, 1, 21102, 1, 308, 0, 1106, 0, 412, 21102, 1, 937267929116, 1, 21101, 0, 319, 0, 1105, 1, 412, 3, 10,
  104, 0, 104, 1, 3, 10, 104, 0, 104, 0, 3, 10, 104, 0, 104, 1, 3, 10, 104, 0, 104, 1, 3, 10, 104, 0, 104, 0, 3, 10,
  104, 0, 104, 1, 21102, 206312598619, 1, 1, 21102, 366, 1, 0, 1105, 1, 412, 21101, 179410332867, 0, 1, 21102, 377, 1,
  0, 1105, 1, 412, 3, 10, 104, 0, 104, 0, 3, 10, 104, 0, 104, 0, 21101, 0, 709580595968, 1, 21102, 1, 400, 0, 1106, 0,
  412, 21102, 868389384552, 1, 1, 21101, 411, 0, 0, 1106, 0, 412, 99, 109, 2, 21202, -1, 1, 1, 21102, 1, 40, 2, 21102,
  1, 443, 3, 21101, 0, 433, 0, 1106, 0, 476, 109, -2, 2105, 1, 0, 0, 1, 0, 0, 1, 109, 2, 3, 10, 204, -1, 1001, 438, 439,
  454, 4, 0, 1001, 438, 1, 438, 108, 4, 438, 10, 1006, 10, 470, 1102, 0, 1, 438, 109, -2, 2106, 0, 0, 0, 109, 4, 1202,
  -1, 1, 475, 1207, -3, 0, 10, 1006, 10, 493, 21102, 0, 1, -3, 21202, -3, 1, 1, 21201, -2, 0, 2, 21101, 0, 1, 3, 21102,
  1, 512, 0, 1106, 0, 517, 109, -4, 2105, 1, 0, 109, 5, 1207, -3, 1, 10, 1006, 10, 540, 2207, -4, -2, 10, 1006, 10, 540,
  22101, 0, -4, -4, 1106, 0, 608, 21201, -4, 0, 1, 21201, -3, -1, 2, 21202, -2, 2, 3, 21101, 0, 559, 0, 1106, 0, 517,
  21201, 1, 0, -4, 21102, 1, 1, -1, 2207, -4, -2, 10, 1006, 10, 578, 21101, 0, 0, -1, 22202, -2, -1, -2, 2107, 0, -3,
  10, 1006, 10, 600, 21201, -1, 0, 1, 21102, 600, 1, 0, 106, 0, 475, 21202, -2, -1, -2, 22201, -4, -2, -4, 109, -5,
  2106, 0, 0,
];

let maxSteps = process.argv.length > 2 ? process.argv[2] : -1;
const maxStepsReached = (s = 0) => {
  return maxSteps != -1 && s >= maxSteps;
};

let Rta;

let finished = false;
let inQ = new Queue();
let outQ = new Queue();

intcodeAsync('robotBrain', input.slice(0), inQ, outQ).then((res) => {
  console.log('robotBrain finished!');
  finished = true;
});

let wall = new Wall();
let robot = new Robot(wall);

let steps = 0;
const manageIO = async () => {
  console.log('Managing IO');
  while (!finished) {
    console.log('---------------');
    console.log(
      'current',
      robot._currentX,
      robot._currentY,
      robot.direction.pointingTo(),
      robot.wall.isPanelPainted(robot._currentX, robot._currentY) ? 'painted' : ''
    );
    inQ.put(robot.getWallColor());
    let paintWith = await outQ.get();
    let turnTo = await outQ.get();
    // console.log('-> paint with', paintWith==0?'BLACK':'WHITE', 'turnTo', turnTo==0?'LEFT':'RIGHT');
    // robot.paintAndMove(paintWith);
    robot.paintAndTurn(paintWith, turnTo);
    // console.log(robot.wall._wall.length);
    // robot.turn(turnTo);
    robot.move();
    // finished = maxStepsReached(++steps);
  }

  Rta = robot.wall._wall.length;

  // console.log('###############');
  // console.log('Finished at',
  //     robot._currentX,
  //     robot._currentY,
  //     robot.direction.pointingTo(),
  //     robot.wall.isPanelPainted(robot._currentX, robot._currentY) ? 'painted' : '');
  console.log('top', robot.wall._top);
  console.log('bottom', robot.wall._bottom);
  console.log('left', robot.wall._left);
  console.log('right', robot.wall._right);
  console.log('Rta', Rta);
};

manageIO();

// Rta 1928 (BAD, too low) I also put 1929 (border case) but still too low
// Rta 1985
