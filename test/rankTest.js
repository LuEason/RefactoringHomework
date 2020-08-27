const test = require('ava');
const {rating} = require("../src/rank");

const voyage = {
  zone: 'west-indies',
  length: 10,
};

const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },
  {
    zone: 'west-indies',
    profit: 15,
  },
  {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];

test('case 1, test rating', t => {
  const myRating = rating(voyage, history);
  t.is('B', myRating);
});

test('case 2, test rating', t => {

  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'china',
      profit: -2,
    }
  ];
  for (let i = 0; i < 18; i++) {
    history.push({
      zone: 'west-africa',
      profit: 7,
    })
  }

  const myRating = rating(voyage, history);
  t.is('A', myRating);
});

test('case 3, test rating', t => {

  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'china',
      profit: 0,
    }
  ];

  const myRating = rating(voyage, history);
  t.is('B', myRating);
});

test('case 4, test rating', t => {

  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'china',
      profit: 0,
    }
  ];
  for (let i = 0; i < 8; i++) {
    history.push({
      zone: 'west-africa',
      profit: 7,
    })
  }

  const myRating = rating(voyage, history);
  t.is('B', myRating);
});

test('case 5, test rating', t => {

  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 0,
    }
  ];
  for (let i = 0; i < 4; i++) {
    history.push({
      zone: 'west-africa',
      profit: 7,
    })
  }

  const myRating = rating(voyage, history);
  t.is('A', myRating);
});

test.skip('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});
