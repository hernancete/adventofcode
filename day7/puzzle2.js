
const intcodeAsync = require('./utils.js').intcodeAsync;
const Queue = require('./utils.js').Queue;

const input = [3,8,1001,8,10,8,105,1,0,0,21,42,51,76,101,118,199,280,361,442,99999,3,9,101,5,9,9,102,2,9,9,1001,9,4,9,102,2,9,9,4,9,99,3,9,1002,9,3,9,4,9,99,3,9,1002,9,4,9,1001,9,3,9,1002,9,5,9,101,3,9,9,1002,9,2,9,4,9,99,3,9,101,4,9,9,1002,9,2,9,1001,9,3,9,1002,9,3,9,101,4,9,9,4,9,99,3,9,101,3,9,9,1002,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,99];
// const input = [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,
// 27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5];

let Rta = 0;

const run = async (phaseSettingsSequence) => {

    let EA = new Queue();
    let AB = new Queue();
    let BC = new Queue();
    let CD = new Queue();
    let DE = new Queue();

    EA.put(phaseSettingsSequence[0]);
    AB.put(phaseSettingsSequence[1]);
    BC.put(phaseSettingsSequence[2]);
    CD.put(phaseSettingsSequence[3]);
    DE.put(phaseSettingsSequence[4]);
    EA.put(0);

    let allPromises = [
        intcodeAsync('amp A', input.slice(0), EA, AB),
        intcodeAsync('amp B', input.slice(0), AB, BC),
        intcodeAsync('amp C', input.slice(0), BC, CD),
        intcodeAsync('amp D', input.slice(0), CD, DE),
        intcodeAsync('amp E', input.slice(0), DE, EA),
    ]

    return Promise.all(allPromises).then((res) => {
        console.log('run', phaseSettingsSequence, EA.last());
        return EA.last();
    });
}

class value {
    constructor(val) {
        this.val = val;
        this.used = false;
    }
}

const phaseSettings = [
    new value(5),
    new value(6),
    new value(7),
    new value(8),
    new value(9),
];

let runs = [];

for (let first of phaseSettings) {
    first.used = true;
    for (let second of phaseSettings.filter(e => !(e.used))) {
        second.used = true;
        for (let third of phaseSettings.filter(e => !(e.used))) {
            third.used = true;
            for (let fourth of phaseSettings.filter(e => !(e.used))) {
                fourth.used = true;
                for (let fifth of phaseSettings.filter(e => !(e.used))) {
                    fifth.used = true;

                    let phaseSettingsSequence = [first.val, second.val, third.val, fourth.val, fifth.val];
                    console.log('Trying with:', phaseSettingsSequence);

                    runs.push(run(phaseSettingsSequence));

                    fifth.used = false;
                }
                fourth.used = false;
            }
            third.used = false;
        }
        second.used = false;
    }
    first.used = false;
}

Promise.all(runs).then((resp) => {
    resp.forEach((r) => console.log(r));
    console.log('Rta', resp.sort((a, b) => b - a )[0]);
});

// Rta 79846026
