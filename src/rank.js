const COrEI = ['china', 'east-indies'];

const handleRisk = [
  function (voyage) {
    return voyage.length > 4 ? 2 : 0;
  },
  function (voyage) {
    return voyage.length > 8 ? voyage.length - 8 : 0;
  },
  function (voyage) {
    return COrEI.includes(voyage.zone) ? 4 : 0;
  },
]

const handleHistoryRisk = [
  function (voyage, history) {
    return history.length < 5 ? 4 : 0;
  },
  function (voyage, history) {
    return history.filter(v => v.profit < 0).length;
  },
  function (voyage, history) {
    return voyage.zone === 'china' && hasChina(history) ? -2 : 0;
  }
]

function voyageRisk(voyage) {
  let result = 1;
  handleRisk.map(handler => {
    result += handler(voyage);
  })
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  handleHistoryRisk.map(handler => {
    result += handler(voyage, history);
  })
  return Math.max(result, 0);
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china') {
    result += 1;
  }
  if (voyage.zone === 'east-indies') {
    result += 1;
  }
  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    if (history.length > 10) {
      result += 1;
    }
    if (voyage.length > 12) {
      result += 1;
    }
    if (voyage.length > 18) {
      result -= 1;
    }
  } else {
    if (history.length > 8) {
      result += 1;
    }
    if (voyage.length > 14) {
      result -= 1;
    }
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  } else {
    return 'B';
  }
}

module.exports = {
  rating
};
