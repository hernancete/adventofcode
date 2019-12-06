
function operation(opcode, d1, d2) {
    if (opcode == 1) return d1 + d2
    else if (opcode == 2) return d1 * d2
    throw Error('Opcode unknown')
}

function intcode(input) {
    for (let i = 0; i < input.length; i += 4) {
        // console.log('i', i, ':', input[i], 'updating', input[i + 3]);
        if (input[i] == 99) {
            console.log('Gracefully halting');
            return input;
        }
        else if ([1, 2].indexOf(input[i]) != -1) {
            input[input[i + 3]] = operation(input[i], input[input[i + 1]], input[input[i + 2]]);
            if (input[i + 3] == 0) {
                console.log('----- input[0] CHANGED to', input[0]);
            }
        }
        else {
            console.log(`Unknown opcode ${input[i]}. Abort.`);
            return false;
        }
    }
}

module.exports = intcode;
