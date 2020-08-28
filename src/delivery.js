const handleIsRush = [
  function (deliveryState, deliveryTime) {
    return ['MA', 'CT'].includes(deliveryState) ? 1 : deliveryTime;
  },
  function (deliveryState, deliveryTime) {
    return ['NY', 'NH'].includes(deliveryState) ? 2 : deliveryTime;
  },
  function (deliveryState, deliveryTime) {
    return deliveryTime === 0 ? 3 : deliveryTime;
  }
]

const handleIsNotRush = [
  function (deliveryState, deliveryTime) {
    return ['MA', 'CT', 'NY'].includes(deliveryState) ? 2 : deliveryTime;
  },
  function (deliveryState, deliveryTime) {
    return ['ME', 'NH'].includes(deliveryState) ? 3 : deliveryTime;
  },
  function (deliveryState, deliveryTime) {
    return deliveryTime === 0 ? 4 : deliveryTime;
  }
]

function deliveryDate(anOrder, isRush) {
  let deliveryTime = 0;
  if (isRush) {
    handleIsRush.map(handler => {
      deliveryTime = handler(anOrder.deliveryState, deliveryTime);
    })
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  } else {
    handleIsNotRush.map(handler => {
      deliveryTime = handler(anOrder.deliveryState, deliveryTime);
    })
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};
