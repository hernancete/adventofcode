const title = (t) => {
  let r = t.length + 4;
  console.log();
  console.log(' +' + '-'.repeat(r) + '+');
  console.log(' |  ' + t + '  |');
  console.log(' +' + '-'.repeat(r) + '+');
  console.log();
};

const sortInput = (input) => {
  let ordered = [];
  let inPath = [];

  let COMIndx = input.findIndex((e) => e.split(')')[0] == 'COM');
  ordered.push(input.splice(COMIndx, 1)[0]);
  inPath.push(ordered[0].split(')')[0]);
  inPath.push(ordered[0].split(')')[1]);

  while (input.length) {
    for (let i in input) {
      if (inPath.indexOf(input[i].split(')')[0]) != -1) {
        ordered.push(input.splice(i, 1)[0]);
        inPath.push(ordered[ordered.length - 1].split(')')[1]);
      }
    }
  }

  return ordered;
};

class path {
  constructor(root, firstElem = null, offset = 1) {
    this.root = root;
    this._path = [];
    this.offset = offset;
    if (firstElem) this.append(firstElem);
  }

  append(elem) {
    this._path.push(elem);
    if (this._path.length == 1) this.name = this.root + '-' + this._path[0];
  }

  contains(elem) {
    return this._path.indexOf(elem) != -1;
  }

  isTheLast(elem) {
    return this._path.length && this._path.indexOf(elem) == this._path.length - 1;
  }

  offsetOf(elem) {
    if (!this.contains(elem)) return false;
    return this.offset + this._path.indexOf(elem) + 1;
  }

  toString() {
    return this._path.join(' - ');
  }

  totalOrbits() {
    let _totalOrbits = 0;
    this._path.forEach((_, i) => {
      _totalOrbits += i + this.offset;
    });
    return _totalOrbits;
  }
}

const makePaths = (orderedInput) => {
  let paths = [];

  for (let o of orderedInput) {
    let sun = o.split(')')[0];
    let plannet = o.split(')')[1];
    // console.log(sun, plannet);

    if (paths.length == 0) {
      // console.log('This should happen just once');
      paths.push(new path(sun, plannet));
      continue;
    }

    for (let p of paths) {
      if (p.isTheLast(sun)) {
        // console.log('Adding', plannet, 'to path', p.toString());
        p.append(plannet);
        break;
      } else if (p.contains(sun)) {
        // console.log('Forking a new path with', plannet, 'and an offset of', p.offsetOf(sun));
        paths.push(new path(sun, plannet, p.offsetOf(sun)));
        break;
      }
    }
  }

  return paths;
};

const getBelongingPath = (paths, elem) => {
  return paths.find((e) => e.contains(elem));
};

const getParentRecursive = (ancestors = [], paths = []) => {
  let oldest = ancestors[0];
  if (oldest.root != 'COM') {
    ancestors.unshift(getBelongingPath(paths, oldest.root));
    return getParentRecursive(ancestors, paths);
  } else {
    return ancestors;
  }
};

module.exports = {
  title: title,
  path: path,
  sortInput: sortInput,
  makePaths: makePaths,
  getBelongingPath: getBelongingPath,
  getParentRecursive: getParentRecursive,
};
