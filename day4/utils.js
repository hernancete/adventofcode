
const input = [347312, 805915];

const isNeverDecreasing = (n) => {
    let _n = n.toString();
    for (let i=1; i<_n.length; i++) {
        if (_n[i] < _n[i-1]) return false;
    }
    return true;
}

const isAtLeastTwoAdjacentsTheSame = (n) => {
    let _n = n.toString();
    for (let i=1; i<_n.length; i++) {
        if (_n[i] == _n[i-1]) return true;
    }
    return false;
}

const isExactTwoAdjacentsTheSame = (n) => {
    let _n = n.toString();
    for (let i=1; i<_n.length; i++) {
        if (_n[i] == _n[i-1]) {
            if (i > 1 && _n[i] == _n[i-2]) continue;
            if (i < _n.length - 1 && _n[i] == _n[i+1]) continue;
            return true;
        }
    }
    return false;
}


module.exports = {
    input: input,
    isNeverDecreasing: isNeverDecreasing,
    isAtLeastTwoAdjacentsTheSame: isAtLeastTwoAdjacentsTheSame,
    isExactTwoAdjacentsTheSame: isExactTwoAdjacentsTheSame,
}
