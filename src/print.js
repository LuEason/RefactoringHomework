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
  return print(invoice, outstanding);
}

function print(invoice, outstanding) {
  let result = '';
  result += '***********************\n';
  result += '**** Customer Owes ****\n';
  result += '***********************\n';
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  return result;
}

module.exports = {
  printOwing
};
