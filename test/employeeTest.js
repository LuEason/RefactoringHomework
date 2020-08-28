const test = require('ava');
const {Employee} = require("../src/employee");

test('case 1, test employee', t => {
  const employee = new Employee('Eason', 'engineer');
  t.is('Eason (engineer)', employee.toString());
});

test('case 2, test employee', t => {
  const employee = new Employee('Eason', 'manager');
  t.is('Eason (manager)', employee.toString());
});

test('case 3, test employee', t => {
  const employee = new Employee('Eason', 'salesman');
  t.is('Eason (salesman)', employee.toString());
});

test('case 4, test employee', t => {
  try {
    const employee = new Employee('Eason', 'boss');
    t.fail();
  } catch (e) {
    t.is('Employee cannot be of type boss', e.message);
  }
});
