const ASTEROID_MARK = '#';

class LineOfSigth {
  constructor(p1, p2) {
    this.x = p2.x - p1.x;
    this.y = p1.y - p2.y;
    this.los = Math.atan2(this.x, this.y);
    this.northAngle = (this.los / Math.PI + 1) % 2;
  }
}

class VisibleAsteroid {
  constructor(ast, md, los) {
    this.asteroid = ast;
    this.manhattanDistance = md;
    this.los = los;
    this.rotationFactor = 0;
  }
}

class Asteroid {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.visibleAsteroids = [];
    this.otherAsteroids = [];
  }

  toString() {
    return [this.x, this.y].join(' ');
  }

  equals(ast) {
    return this.x == ast.x && this.y == ast.y;
  }

  getManhattanDistance(ast) {
    return Math.abs(ast.x - this.x) + Math.abs(ast.y - this.y);
  }

  getLineOfSigth(ast) {
    return new LineOfSigth(ast, this);
  }

  inSameLos(ast1, ast2) {
    return ast1.los == ast2.los;
  }

  addVisibleAsteroid(ast) {
    // console.log('--------');
    // console.log('me',  this.x, this.y);
    let visibleCandidate = new VisibleAsteroid(ast, this.getManhattanDistance(ast), this.getLineOfSigth(ast));
    // console.log('adding', ast.x, ast.y, 'candidate', visibleCandidate.manhattanDistance, visibleCandidate.los);
    let visibleAsteroidInSameLosIndex = this.visibleAsteroids.findIndex((va) => {
      // console.log('checking if', va.los.los, '=', visibleCandidate.los.los, );
      return va.los.los == visibleCandidate.los.los;
    });
    // console.log('visibleAsteroidInSameLosIndex', visibleAsteroidInSameLosIndex);
    if (visibleAsteroidInSameLosIndex != -1) {
      // console.log('There is another asteroid in same los', this.visibleAsteroids[visibleAsteroidInSameLosIndex]);
      // console.log('checking if', visibleCandidate.manhattanDistance, '<', this.visibleAsteroids[visibleAsteroidInSameLosIndex].manhattanDistance);
      if (visibleCandidate.manhattanDistance < this.visibleAsteroids[visibleAsteroidInSameLosIndex].manhattanDistance) {
        // console.log('But this is closer. Replacing it');
        this.visibleAsteroids.splice(visibleAsteroidInSameLosIndex, 1, visibleCandidate);
      }
    } else {
      // console.log('No other asteroid in same los. Adding this one');
      this.visibleAsteroids.push(visibleCandidate);
    }
    // console.log('subtotal', this.visibleAsteroids.length);
  }

  addOtherAst(ast) {
    this.otherAsteroids.push(new VisibleAsteroid(ast, this.getManhattanDistance(ast), this.getLineOfSigth(ast)));
  }

  sortOtherAstLikeVaporizing() {
    // Sort the otherAsteroids list by northAngle first if they are the same, order by manhattanDistance
    this.otherAsteroids.sort((a, b) => {
      return a.los.northAngle == b.los.northAngle
        ? a.manhattanDistance - b.manhattanDistance
        : a.los.northAngle - b.los.northAngle;
    });
    // console.log('Sorted by northAngle');
    // this.otherAsteroids.forEach((oa, indx) => console.log(indx, oa.asteroid.toString(), oa.los.northAngle));
    let lastNorthAngle = null;
    let lastRotationFactor = 0;
    this.otherAsteroids.forEach((oa) => {
      if (lastNorthAngle !== null && oa.los.northAngle == lastNorthAngle) {
        lastRotationFactor += 2;
        oa.rotationFactor = lastRotationFactor;
      } else {
        lastRotationFactor = 0;
      }
      lastNorthAngle = oa.los.northAngle;
    });
    this.otherAsteroids.sort((a, b) => {
      return a.los.northAngle + a.rotationFactor - (b.los.northAngle + b.rotationFactor);
    });
    // console.log('Sorted by vaporizing order');
    // this.otherAsteroids.forEach((oa, indx) => console.log(indx, oa.asteroid.toString(), oa.los.northAngle + oa.rotationFactor, oa.rotationFactor/2));
  }
}

class AsteroidsMap {
  constructor(mapString, width) {
    this._mapString = mapString;
    this._width = width;
    this.map = this._mapString.match(/./g);
    this._hight = Math.ceil(this.map.length / this._width);
    this.asteroids = this.getAsteroids();
  }

  draw() {
    let cols = [];
    let cols_separator = [];
    for (let c = 0; c < this._width; c++) {
      cols.push(c % 10);
      cols_separator.push('-');
    }
    console.log(cols.join(' '));
    console.log(cols_separator.join('-'));

    let rowsRegex = new RegExp('.{' + this._width + '}', 'g');
    this._mapString.match(rowsRegex).forEach((r, i) => console.log(r.match(/./g).join(' '), '|', i));
  }

  getAsteroids() {
    let asteroids = [];
    for (let i in this.map) {
      if (this.map[i] == ASTEROID_MARK) {
        let x = i % this._width;
        let y = Math.floor(i / this._width);
        asteroids.push(new Asteroid(x, y));
      }
    }
    return asteroids;
  }

  calculateVisibleAsteroids(ast) {
    for (let other of this.asteroids.filter((e) => e != ast)) {
      ast.addVisibleAsteroid(other);
    }
  }

  calculateAll() {
    this.asteroids.forEach((a) => {
      this.calculateVisibleAsteroids(a);
    });
  }

  calculateVisibleAsteroidsFrom(x, y) {
    let ast = this.asteroids.find((a) => a.x == x && a.y == y);
    for (let other of this.asteroids.filter((e) => e != ast)) {
      ast.addVisibleAsteroid(other);
    }
  }

  vaporizeFrom(x, y) {
    let ast = this.asteroids.find((a) => a.x == x && a.y == y);
    for (let other of this.asteroids.filter((e) => e != ast)) {
      ast.addOtherAst(other);
    }
    ast.sortOtherAstLikeVaporizing();
    return ast;
  }
}

module.exports = {
  Asteroid: Asteroid,
  AsteroidsMap: AsteroidsMap,
};
