const test = require('ava');
const {printOwing} = require("../src/print");

const invoice = {
  borderSpacing: [
    {
      amount: 1
    }
  ],
  customer: 'Eason'
}

test.skip('case 1, test rating', t => {
  let lastLog;
  console.oldLog = console.log;
  console.log = function(str) {
    console.oldLog(str);
    lastLog = str;
  }
  printOwing(invoice);
  console.log('lastLog:' + lastLog)
  t.is('***********************\n**** Customer Owes ****\n***********************\nname: Easonamount: 1\namount: 9/26/2020', lastLog);
});
