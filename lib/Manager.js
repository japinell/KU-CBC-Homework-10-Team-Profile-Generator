//
const { Employee } = require("../lib/Employee");
//
class Manager extends Employee {
  // Constructor
  constructor(name, id, eMail, officeNumber) {
    super(name, id, eMail);
    this.officeNumber = officeNumber;
  }
  // Methods
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = { Manager };
