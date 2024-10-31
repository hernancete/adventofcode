const EventEmitter = require('events');

const getParamValue = (param, paramMode, intCode) => {
  return paramMode == 1 ? intCode[param] : intCode[intCode[param]];
};

const getParamIndex = (param, paramMode, intCode) => {
  return paramMode == 1 ? param : intCode[param];
};

const getParamModes = (opcode) => {
  return {
    first: opcode.toString().length >= 3 && opcode.toString().slice(-3, -2) == '1' ? 1 : 0,
    second: opcode.toString().length >= 4 && opcode.toString().slice(-4, -3) == '1' ? 1 : 0,
    third: opcode.toString().length >= 5 && opcode.toString().slice(-5, -4) == '1' ? 1 : 0,
  };
};

const intcode = (intCode, inputs = []) => {
  let outputs = [];
  for (let i = 0; i < intCode.length; i++) {
    let opcode = parseInt(intCode[i].toString().slice(-2));
    // console.log(i, opcode);

    let paramModes = getParamModes(intCode[i]);

    switch (opcode) {
      case 1:
        // Sum
        // console.log('-> Plus: inCode[', getParamIndex(i+3, paramModes.third, intCode), '] =', getParamValue(i+1, paramModes.first, intCode), '+', getParamValue(i+2, paramModes.second, intCode));
        intCode[getParamIndex(i + 3, paramModes.third, intCode)] =
          getParamValue(i + 1, paramModes.first, intCode) + getParamValue(i + 2, paramModes.second, intCode);
        i += 3;
        continue;
      case 2:
        // Multiplication
        // console.log('-> Mult: inCode[', getParamIndex(i+3, paramModes.third, intCode), '] =', getParamValue(i+1, paramModes.first, intCode), '*', getParamValue(i+2, paramModes.second, intCode));
        intCode[getParamIndex(i + 3, paramModes.third, intCode)] =
          getParamValue(i + 1, paramModes.first, intCode) * getParamValue(i + 2, paramModes.second, intCode);
        i += 3;
        continue;
      case 3:
        // Input
        input = inputs.shift();
        console.log('-> Asking for intCode', input);
        intCode[getParamIndex(i + 1, paramModes.first, intCode)] = input;
        i += 1;
        continue;
      case 4:
        // Output
        let output = getParamValue(i + 1, paramModes.first, intCode);
        // console.log('-> Output:', output);
        outputs.push(output);
        i += 1;
        continue;
      case 5:
        // Jump if true
        // console.log('-> jump if true', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+1, paramModes.second, intCode) != 0);
        // If true, i takes the value from the second param and I add "-1" to that value because the "for" loop adds 1 in the next iteration
        i =
          getParamValue(i + 1, paramModes.first, intCode) != 0
            ? getParamValue(i + 2, paramModes.second, intCode) - 1
            : i + 2;
        // console.log('Jumping to', i)
        continue;
      case 6:
        // Jump if false
        // console.log('-> jump if false', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+1, paramModes.second, intCode) != 0);
        // If true, i takes the value from the second param and I add "-1" to that value because the "for" loop adds 1 in the next iteration
        i =
          getParamValue(i + 1, paramModes.first, intCode) == 0
            ? getParamValue(i + 2, paramModes.second, intCode) - 1
            : i + 2;
        // console.log('Jumping to', i)
        continue;
      case 7:
        // Less than
        // console.log('-> less than', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+2, paramModes.second, intCode), getParamValue(i+1, paramModes.first, intCode) < getParamValue(i+2, paramModes.second, intCode));
        intCode[getParamIndex(i + 3, paramModes.third, intCode)] =
          getParamValue(i + 1, paramModes.first, intCode) < getParamValue(i + 2, paramModes.second, intCode) ? 1 : 0;
        // console.log('intCode[', getParamIndex(i+3, paramModes.third, intCode), '] = ', intCode[getParamIndex(i+3, paramModes.third, intCode)])
        i += 3;
        continue;
      case 8:
        // Equals to
        // console.log('-> equals to', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+2, paramModes.second, intCode), getParamValue(i+1, paramModes.first, intCode) == getParamValue(i+2, paramModes.second, intCode));
        intCode[getParamIndex(i + 3, paramModes.third, intCode)] =
          getParamValue(i + 1, paramModes.first, intCode) == getParamValue(i + 2, paramModes.second, intCode) ? 1 : 0;
        // console.log('intCode[', getParamIndex(i+3, paramModes.third, intCode), '] = ', intCode[getParamIndex(i+3, paramModes.third, intCode)])
        i += 3;
        continue;
      case 99:
        // console.log('Gracefully halting', outputs);
        return outputs;
      default:
        console.error('Unknown Opcode', opcode);
        return outputs;
    }
  }
};

const intcodeAsync = async (name, intCode, inQueue = null, outQueue = null) => {
  for (let i = 0; i < intCode.length; i++) {
    let opcode = parseInt(intCode[i].toString().slice(-2));
    // console.log(name, i, opcode);

    let paramModes = getParamModes(intCode[i]);

    switch (opcode) {
      case 1:
        // Sum
        // console.log(name, '-> Plus: inCode[', getParamIndex(i+3, paramModes.third, intCode), '] =', getParamValue(i+1, paramModes.first, intCode), '+', getParamValue(i+2, paramModes.second, intCode));
        intCode[getParamIndex(i + 3, paramModes.third, intCode)] =
          getParamValue(i + 1, paramModes.first, intCode) + getParamValue(i + 2, paramModes.second, intCode);
        i += 3;
        continue;
      case 2:
        // Multiplication
        // console.log(name, '-> Mult: inCode[', getParamIndex(i+3, paramModes.third, intCode), '] =', getParamValue(i+1, paramModes.first, intCode), '*', getParamValue(i+2, paramModes.second, intCode));
        intCode[getParamIndex(i + 3, paramModes.third, intCode)] =
          getParamValue(i + 1, paramModes.first, intCode) * getParamValue(i + 2, paramModes.second, intCode);
        i += 3;
        continue;
      case 3:
        // Input
        // console.log(name, '-> Waiting for input ...');
        input = await inQueue.get();
        // console.log(name, '-> input', input);
        intCode[getParamIndex(i + 1, paramModes.first, intCode)] = input;
        i += 1;
        continue;
      case 4:
        // Output
        let output = getParamValue(i + 1, paramModes.first, intCode);
        // console.log(name, '-> Output:', output);
        outQueue.put(output);
        i += 1;
        continue;
      case 5:
        // Jump if true
        // console.log('-> jump if true', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+1, paramModes.second, intCode) != 0);
        // If true, i takes the value from the second param and I add "-1" to that value because the "for" loop adds 1 in the next iteration
        i =
          getParamValue(i + 1, paramModes.first, intCode) != 0
            ? getParamValue(i + 2, paramModes.second, intCode) - 1
            : i + 2;
        // console.log('Jumping to', i)
        continue;
      case 6:
        // Jump if false
        // console.log('-> jump if false', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+1, paramModes.second, intCode) != 0);
        // If true, i takes the value from the second param and I add "-1" to that value because the "for" loop adds 1 in the next iteration
        i =
          getParamValue(i + 1, paramModes.first, intCode) == 0
            ? getParamValue(i + 2, paramModes.second, intCode) - 1
            : i + 2;
        // console.log('Jumping to', i)
        continue;
      case 7:
        // Less than
        // console.log('-> less than', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+2, paramModes.second, intCode), getParamValue(i+1, paramModes.first, intCode) < getParamValue(i+2, paramModes.second, intCode));
        intCode[getParamIndex(i + 3, paramModes.third, intCode)] =
          getParamValue(i + 1, paramModes.first, intCode) < getParamValue(i + 2, paramModes.second, intCode) ? 1 : 0;
        // console.log('intCode[', getParamIndex(i+3, paramModes.third, intCode), '] = ', intCode[getParamIndex(i+3, paramModes.third, intCode)])
        i += 3;
        continue;
      case 8:
        // Equals to
        // console.log('-> equals to', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+2, paramModes.second, intCode), getParamValue(i+1, paramModes.first, intCode) == getParamValue(i+2, paramModes.second, intCode));
        intCode[getParamIndex(i + 3, paramModes.third, intCode)] =
          getParamValue(i + 1, paramModes.first, intCode) == getParamValue(i + 2, paramModes.second, intCode) ? 1 : 0;
        // console.log('intCode[', getParamIndex(i+3, paramModes.third, intCode), '] = ', intCode[getParamIndex(i+3, paramModes.third, intCode)])
        i += 3;
        continue;
      case 99:
        // console.log('Gracefully halting');
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

  queue() {
    return this._queue;
  }

  last() {
    return this._queue.length ? this._queue[this._queue.length - 1] : null;
  }
}

module.exports = {
  intcode: intcode,
  intcodeAsync: intcodeAsync,
  Queue: Queue,
};
