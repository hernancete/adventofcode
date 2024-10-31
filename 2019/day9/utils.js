const EventEmitter = require('events');

const getParamValue = (param, paramMode, intCode, baseOffset = 0) => {
  // return paramMode == 1 ? intCode[param] : intCode[intCode[param]];
  if (paramMode == 0) return intCode[param] >= intCode.length ? 0 : intCode[intCode[param]];
  else if (paramMode == 1) return param >= intCode.length ? 0 : intCode[param];
  else if (paramMode == 2)
    return intCode[param] + baseOffset >= intCode.length ? 0 : intCode[intCode[param] + baseOffset];
};

const getParamIndex = (param, paramMode, intCode, baseOffset = 0) => {
  // return paramMode == 1 ? param : intCode[param];
  if (paramMode == 0) return intCode[param];
  else if (paramMode == 1) return param;
  else if (paramMode == 2) return intCode[param] + baseOffset;
};

const getParamModes = (opcode) => {
  let first = (second = third = 0);
  return {
    first: opcode.toString().length >= 3 ? parseInt(opcode.toString().slice(-3, -2)) : first,
    second: opcode.toString().length >= 4 ? parseInt(opcode.toString().slice(-4, -3)) : second,
    third: opcode.toString().length >= 5 ? parseInt(opcode.toString().slice(-5, -4)) : third,
  };
};

const intcodeAsync = async (name, intCode, inQueue = null, outQueue = null) => {
  let baseOffset = 0;

  for (let i = 0; i < intCode.length; i++) {
    let opcode = parseInt(intCode[i].toString().slice(-2));
    // console.log(name, 'index:', i, 'instruction:', intCode[i]);

    let paramModes = getParamModes(intCode[i]);

    switch (opcode) {
      case 1:
        // Sum
        // console.log(name, '-> Plus: inCode[', getParamIndex(i+3, paramModes.third, intCode, baseOffset), '] =', getParamValue(i+1, paramModes.first, intCode, baseOffset), '+', getParamValue(i+2, paramModes.second, intCode, baseOffset));
        intCode[getParamIndex(i + 3, paramModes.third, intCode, baseOffset)] =
          getParamValue(i + 1, paramModes.first, intCode, baseOffset) +
          getParamValue(i + 2, paramModes.second, intCode, baseOffset);
        i += 3;
        continue;
      case 2:
        // Multiplication
        // console.log(name, '-> Mult: inCode[', getParamIndex(i+3, paramModes.third, intCode, baseOffset), '] =', getParamValue(i+1, paramModes.first, intCode, baseOffset), '*', getParamValue(i+2, paramModes.second, intCode, baseOffset));
        intCode[getParamIndex(i + 3, paramModes.third, intCode, baseOffset)] =
          getParamValue(i + 1, paramModes.first, intCode, baseOffset) *
          getParamValue(i + 2, paramModes.second, intCode, baseOffset);
        i += 3;
        continue;
      case 3:
        // Input
        // console.log(name, '-> Waiting for input ...');
        input = await inQueue.get();
        // console.log(name, '-> input', input);
        intCode[getParamIndex(i + 1, paramModes.first, intCode, baseOffset)] = input;
        // console.log(name, '-> saving the input in index', 'getParamIndex(', i+1, ', ', paramModes.first, ', intCode, ', baseOffset, ')', getParamIndex(i+1, paramModes.first, intCode, baseOffset));
        i += 1;
        continue;
      case 4:
        // Output
        let output = getParamValue(i + 1, paramModes.first, intCode, baseOffset);
        // console.log(name, '-> Output:', output);
        outQueue.put(output);
        i += 1;
        continue;
      case 5:
        // Jump if true
        // console.log(name, '-> jump if true', getParamValue(i+1, paramModes.first, intCode, baseOffset), getParamValue(i+1, paramModes.first, intCode, baseOffset) != 0);
        // If true, i takes the value from the second param and I add "-1" to that value because the "for" loop adds 1 in the next iteration
        i =
          getParamValue(i + 1, paramModes.first, intCode, baseOffset) != 0
            ? getParamValue(i + 2, paramModes.second, intCode, baseOffset) - 1
            : i + 2;
        // console.log('Jumping to', i)
        continue;
      case 6:
        // Jump if false
        // console.log(name, '-> jump if false', getParamValue(i+1, paramModes.first, intCode, baseOffset), getParamValue(i+1, paramModes.first, intCode, baseOffset) != 0);
        // If true, i takes the value from the second param and I add "-1" to that value because the "for" loop adds 1 in the next iteration
        i =
          getParamValue(i + 1, paramModes.first, intCode, baseOffset) == 0
            ? getParamValue(i + 2, paramModes.second, intCode, baseOffset) - 1
            : i + 2;
        // console.log(name, 'Jumping to', i)
        continue;
      case 7:
        // Less than
        // console.log(name, '-> less than', getParamValue(i+1, paramModes.first, intCode, baseOffset), getParamValue(i+2, paramModes.second, intCode, baseOffset), getParamValue(i+1, paramModes.first, intCode, baseOffset) < getParamValue(i+2, paramModes.second, intCode, baseOffset));
        intCode[getParamIndex(i + 3, paramModes.third, intCode, baseOffset)] =
          getParamValue(i + 1, paramModes.first, intCode, baseOffset) <
          getParamValue(i + 2, paramModes.second, intCode, baseOffset)
            ? 1
            : 0;
        // console.log(name, 'intCode[', getParamIndex(i+3, paramModes.third, intCode, baseOffset), '] = ', intCode[getParamIndex(i+3, paramModes.third, intCode, baseOffset)])
        i += 3;
        continue;
      case 8:
        // Equals to
        // console.log(name, '-> equals to', getParamValue(i+1, paramModes.first, intCode, baseOffset), getParamValue(i+2, paramModes.second, intCode, baseOffset), getParamValue(i+1, paramModes.first, intCode, baseOffset) == getParamValue(i+2, paramModes.second, intCode, baseOffset));
        intCode[getParamIndex(i + 3, paramModes.third, intCode, baseOffset)] =
          getParamValue(i + 1, paramModes.first, intCode, baseOffset) ==
          getParamValue(i + 2, paramModes.second, intCode, baseOffset)
            ? 1
            : 0;
        // console.log(name, 'intCode[', getParamIndex(i+3, paramModes.third, intCode, baseOffset), '] = ', intCode[getParamIndex(i+3, paramModes.third, intCode, baseOffset)])
        i += 3;
        continue;
      case 9:
        // Relative base offset
        // console.log(name, '-> adjust relative base offset with', getParamValue(i+1, paramModes.first, intCode, baseOffset));
        baseOffset += getParamValue(i + 1, paramModes.first, intCode, baseOffset);
        // console.log(name, 'new base offset', baseOffset);
        i += 1;
        continue;
      case 99:
        console.log(name, '-> Gracefully halting');
        return;
      default:
        console.error('Unknown Opcode', opcode);
        return;
    }
  }
};

class Queue extends EventEmitter {
  constructor() {
    super();
    this._queue = [];
  }

  put(val) {
    this._queue.push(val);
    this.emit('queue_new_item');
  }

  get() {
    return new Promise((resolve, _reject) => {
      if (this._queue.length) {
        resolve(this._queue.shift());
      } else {
        this.once('queue_new_item', () => {
          resolve(this._queue.shift());
        });
      }
    });
  }

  getOrDie() {
    if (this._queue.length) {
      return this._queue.shift();
    } else {
      throw new Error('Empty Queue');
    }
  }

  queue() {
    return this._queue;
  }

  last() {
    return this._queue.length ? this._queue[this._queue.length - 1] : null;
  }
}

module.exports = {
  intcodeAsync: intcodeAsync,
  Queue: Queue,
};
