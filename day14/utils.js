const reactions = [];
const waste = {};

function parseReactions(input) {
  input.split("\n").forEach((react) => {
    const [formula, result] = react.split("=>");
    const [resultQtty, resultChemical] = result.trim().split(" ");
    const resultChemicalTrimmed = resultChemical.trim();
    reactions[resultChemicalTrimmed] = {
      qtty: parseInt(resultQtty),
      formula: [],
    };
    formula
      .trim()
      .split(",")
      .forEach((part) => {
        const [partQtty, partChemical] = part.trim().split(" ");
        reactions[resultChemicalTrimmed].formula.push({
          qtty: parseInt(partQtty),
          chemical: partChemical.trim(),
        });
      });
  });
  return reactions;
}

function reset() {
  reactions.splice(0);
  Object.keys(waste).forEach((k) => delete waste[k]);
}

function getOREs(chemical, qtty = 1) {
  if (chemical === "ORE") return qtty;

  if (!waste[chemical]) waste[chemical] = 0;

  if (waste[chemical] >= qtty) {
    waste[chemical] -= qtty;
    return 0;
  } else {
    const need = qtty - waste[chemical];
    const executionTimes = Math.ceil(need / reactions[chemical].qtty);

    // console.log("need", need);
    // console.log("waste", waste[chemical]);
    // console.log("executionTimes", executionTimes);
    // console.log("reactions[chemical].qtty", reactions[chemical].qtty);

    const ret = reactions[chemical].formula.reduce((acc, current) => {
      return acc + getOREs(current.chemical, current.qtty * executionTimes);
    }, 0);

    waste[chemical] = reactions[chemical].qtty * executionTimes - need;
    return ret;
  }
}

module.exports = {
  parseReactions,
  getOREs,
  reactions,
  waste,
  reset,
};
