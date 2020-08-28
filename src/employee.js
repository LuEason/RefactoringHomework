const whiteList = ['engineer', 'manager', 'salesman'];

class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType (type) {
    if (!this.inWhiteList(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  inWhiteList(type) {
    return whiteList.includes(type);
  }

  toString() {
    return `${this._name} (${this._type})`;
  }
}

module.exports = {
  Employee
};
