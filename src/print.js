const calculateOutstanding = (borderSpacings) => {
  return borderSpacings.reduce((outstanding, o) => {
    return outstanding + o.amount;
  }, 0);
}

function setDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwing(invoice) {
  const outstanding = calculateOutstanding(invoice.borderSpacing);
  setDueDate(invoice);
  print(invoice, outstanding)
}

function print(invoice, outstanding) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

module.exports = {
  printOwing
};
