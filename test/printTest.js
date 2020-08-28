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

test('case 1, test rating', t => {
  let result = printOwing(invoice);
  const today = new Date();
  const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  t.is(`***********************\n**** Customer Owes ****\n***********************\nname: Eason\namount: 1\namount: ${dueDate.toLocaleDateString()}`, result);
});
