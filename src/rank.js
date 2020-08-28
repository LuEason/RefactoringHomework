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

function captainHistoryRisk(voyage, history) {
  let result = 1;
  handleHistoryRisk.map(handler => {
    result += handler(voyage, history);
  })
  return Math.max(result, 0);
}

const handleVoyageProfitFactor = [
  function (voyage, history) {
    return COrEI.filter(c => voyage.zone === c).length;
  },
  function (voyage, history) {
    return voyage.zone === 'china' && hasChina(history) ? 3 + handleVoyageProfitFactor[2](voyage, history) : handleVoyageProfitFactor[5](voyage, history);
  },
  function (voyage, history) {
    return history.length > 10 ? 1 + handleVoyageProfitFactor[3](voyage, history) : handleVoyageProfitFactor[3](voyage, history);
  },
  function (voyage, history) {
    return voyage.length > 12 ? 1 + handleVoyageProfitFactor[4](voyage, history) : handleVoyageProfitFactor[4](voyage, history);
  },
  function (voyage, history) {
    return voyage.length > 18 ? -1 : 0;
  },
  function (voyage, history) {
    return history.length > 8 ? 1 + handleVoyageProfitFactor[6](voyage, history) : handleVoyageProfitFactor[6](voyage, history);
  },
  function (voyage, history) {
    return voyage.length > 14 ? -1 : 0;
  }
]

function voyageProfitFactor(voyage, history) {
  let result = 2;
  for (let i = 0; i < 2; i++) {
    result += handleVoyageProfitFactor[i](voyage, history);
  }
  return result;
}

function rating(voyage, history) {
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
