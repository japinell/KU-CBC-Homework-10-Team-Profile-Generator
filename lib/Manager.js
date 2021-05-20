//
const { Employee } = require("../lib/Employee");
//
class Manager extends Employee {
  // Constructor
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // Methods
  getRole() {
    return "Manager";
  }
}

module.exports = { Manager };
