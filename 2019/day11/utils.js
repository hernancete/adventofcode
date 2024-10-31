const BLACK = 0;
const WHITE = 1;
const TURNLEFT = 0;
const TURNRIGHT = 1;

const BLACK_PAINT = ' ';
const WHITE_PAINT = '@';

class Panel {
  constructor(x, y, color = BLACK) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

class Wall {
  constructor() {
    this._wall = [];
    this._top = 0;
    this._bottom = 0;
    this._left = 0;
    this._right = 0;
  }

  isPanelPainted(x, y) {
    return this._wall.find((p) => p.x == x && p.y == y);
  }

  paintPanel(x, y, color) {
    let panel = this.isPanelPainted(x, y);
    if (panel) {
      panel.color = color;
    } else {
      this._wall.push(new Panel(x, y, color));
    }
    this.updateBorders(x, y);
  }

  getPanelColor(x, y) {
    let panel = this.isPanelPainted(x, y);
    return panel ? panel.color : BLACK;
  }

  updateBorders(x, y) {
    this._top = Math.min(this._top, y);
    this._bottom = Math.max(this._bottom, y);
    this._left = Math.min(this._left, x);
    this._right = Math.max(this._right, x);
  }

  draw() {
    let drawing = [];
    for (let y = this._top; y <= this._bottom; y++) {
      let row = [];
      for (let x = this._left; x <= this._right; x++) {
        row.push(this.getPanelColor(x, y) == BLACK ? BLACK_PAINT : WHITE_PAINT);
      }
      console.log(row.join(''));
      drawing.push(row);
    }
    return drawing;
  }
}

class Direction {
  constructor() {
    this.angle = Math.PI / 2;
  }

  getX() {
    return this.normalize(Math.cos(this.angle));
  }

  getY() {
    return this.normalize(Math.sin(this.angle) * -1);
  }

  normalize(val) {
    if (val > 0.9) return 1;
    else if (val < -0.9) return -1;
    else return 0;
  }

  turnLeft() {
    this.angle += Math.PI / 2;
  }

  turnRight() {
    this.angle -= Math.PI / 2;
  }

  pointingTo() {
    if (this.getX() == 0 && this.getY() == -1) return '^';
    if (this.getX() == 0 && this.getY() == 1) return 'v';
    if (this.getX() == -1 && this.getY() == 0) return '<';
    if (this.getX() == 1 && this.getY() == 0) return '>';
  }
}

class Robot {
  constructor(wall) {
    this.wall = wall;
    this.direction = new Direction();
    this._currentX = 0;
    this._currentY = 0;
  }

  getWallColor() {
    return this.wall.getPanelColor(this._currentX, this._currentY);
  }

  paintAndMove(color) {
    this.wall.paintPanel(this._currentX, this._currentY, color);
    this._currentX += this.direction.getX();
    this._currentY += this.direction.getY();
  }

  turn(to) {
    if (to == TURNLEFT) this.direction.turnLeft();
    else this.direction.turnRight();
  }

  paintAndTurn(color, to) {
    this.wall.paintPanel(this._currentX, this._currentY, color);
    if (to == TURNLEFT) this.direction.turnLeft();
    else this.direction.turnRight();
  }

  move() {
    this._currentX += this.direction.getX();
    this._currentY += this.direction.getY();
  }
}

module.exports = {
  BLACK: BLACK,
  WHITE: WHITE,
  Wall: Wall,
  Robot: Robot,
  // Direction: Direction,
};
