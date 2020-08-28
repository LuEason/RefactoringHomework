const handleIsRush = [
  function (deliveryState, deliveryTime) {
    if ([
      'MA',
      'CT',
    ].includes(deliveryState)) {
      return 1;
    }
    return deliveryTime;
  },
  function (deliveryState, deliveryTime) {
    if ([
      'NY',
      'NH',
    ].includes(deliveryState)) {
      return 2;
    }
    return deliveryTime;
  },
  function (deliveryState, deliveryTime) {
    if (deliveryTime === 0) {
      return 3;
    }
    return deliveryTime;
  }
]


function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime = 0;
    handleIsRush.map(handler => {
      deliveryTime = handler(anOrder.deliveryState, deliveryTime);
    })
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  } else {
    let deliveryTime;
    if ([
      'MA',
      'CT',
      'NY',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    } else if ([
      'ME',
      'NH',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    } else {
      deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};
