
const getParamValue = (param, paramMode, intCode) => {
    return paramMode == 1 ? intCode[param] : intCode[intCode[param]];
}

const getParamIndex = (param, paramMode, intCode) => {
    return paramMode == 1 ? param : intCode[param];
}

const getParamModes = (opcode) => {
    return {
        'first': opcode.toString().length>=3 && opcode.toString().slice(-3, -2) == '1' ? 1 : 0,
        'second': opcode.toString().length>=4 && opcode.toString().slice(-4, -3) == '1' ? 1 : 0,
        'third': opcode.toString().length>=5 && opcode.toString().slice(-5, -4) == '1' ? 1 : 0,
    };
}

const intcode = (intCode, input) => {
    for (let i=0; i<intCode.length; i++) {

        let opcode = parseInt(intCode[i].toString().slice(-2));
        // console.log(i, opcode);

        let paramModes = getParamModes(intCode[i])

        switch(opcode) {
            case 1:
                // console.log('-> Plus: inCode[', getParamIndex(i+3, paramModes.third, intCode), '] =', getParamValue(i+1, paramModes.first, intCode), '+', getParamValue(i+2, paramModes.second, intCode));
                intCode[getParamIndex(i+3, paramModes.third, intCode)] = getParamValue(i+1, paramModes.first, intCode) + getParamValue(i+2, paramModes.second, intCode);
                i+=3;
                continue;
            case 2:
                // console.log('-> Mult: inCode[', getParamIndex(i+3, paramModes.third, intCode), '] =', getParamValue(i+1, paramModes.first, intCode), '*', getParamValue(i+2, paramModes.second, intCode));
                intCode[getParamIndex(i+3, paramModes.third, intCode)] = getParamValue(i+1, paramModes.first, intCode) * getParamValue(i+2, paramModes.second, intCode);
                i+=3;
                continue;
            case 3:
                console.log('-> Asking for intCode', input);
                intCode[getParamIndex(i+1, paramModes.first, intCode)] = input;
                i+=1;
                continue;
            case 4:
                console.log('-> Output:', getParamValue(i+1, paramModes.first, intCode));
                i+=1;
                continue;
            case 5:
                // console.log('-> jump if true', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+1, paramModes.second, intCode) != 0);
                i = getParamValue(i+1, paramModes.first, intCode) != 0 ? getParamValue(i+2, paramModes.second, intCode) - 1 : i + 2;
                // console.log('Jumping to', i)
                continue;
            case 6:
                // console.log('-> jump if false', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+1, paramModes.second, intCode) != 0);
                i = getParamValue(i+1, paramModes.first, intCode) == 0 ? getParamValue(i+2, paramModes.second, intCode) - 1 : i + 2;
                // console.log('Jumping to', i)
                continue;
            case 7:
                // console.log('-> less than', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+2, paramModes.second, intCode), getParamValue(i+1, paramModes.first, intCode) < getParamValue(i+2, paramModes.second, intCode));
                intCode[getParamIndex(i+3, paramModes.third, intCode)] = getParamValue(i+1, paramModes.first, intCode) < getParamValue(i+2, paramModes.second, intCode) ? 1 : 0;
                // console.log('intCode[', getParamIndex(i+3, paramModes.third, intCode), '] = ', intCode[getParamIndex(i+3, paramModes.third, intCode)])
                i+=3;
                continue;
            case 8:
                // console.log('-> equals to', getParamValue(i+1, paramModes.first, intCode), getParamValue(i+2, paramModes.second, intCode), getParamValue(i+1, paramModes.first, intCode) == getParamValue(i+2, paramModes.second, intCode));
                intCode[getParamIndex(i+3, paramModes.third, intCode)] = getParamValue(i+1, paramModes.first, intCode) == getParamValue(i+2, paramModes.second, intCode) ? 1 : 0;
                // console.log('intCode[', getParamIndex(i+3, paramModes.third, intCode), '] = ', intCode[getParamIndex(i+3, paramModes.third, intCode)])
                i+=3;
                continue;
            case 99:
                console.log('Gracefully halting');
                return;
            default:
                console.error('Unknown Opcode', opcode);
                return;
        }
    }
}

module.exports = {
    intcode: intcode,
}
