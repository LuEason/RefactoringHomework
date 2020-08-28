const test = require('ava');
const {deliveryDate} = require("../src/delivery");

test('case 1, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, true);
  t.is(2, deliveryTime);
});

test('case 2, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'CT',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, true);
  t.is(2, deliveryTime);
});

test('case 3, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'NY',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, true);
  t.is(3, deliveryTime);
});

test('case 4, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'NH',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, true);
  t.is(3, deliveryTime);
});

test('case 5, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'OHTER',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, true);
  t.is(4, deliveryTime);
});

test('case 6, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, false);
  t.is(4, deliveryTime);
});

test('case 7, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'CT',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, false);
  t.is(4, deliveryTime);
});

test('case 8, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'NY',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, false);
  t.is(4, deliveryTime);
});

test('case 9, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'ME',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, false);
  t.is(5, deliveryTime);
});

test('case 10, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'NH',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, false);
  t.is(5, deliveryTime);
});

test('case 11, test deliveryDate', t => {
  const anOrder = {
    deliveryState: 'OTHER',
    placedOn: {
      plusDays: function (deliveryTime) {
        return deliveryTime
      }
    }
  }
  const deliveryTime = deliveryDate(anOrder, false);
  t.is(6, deliveryTime);
});
