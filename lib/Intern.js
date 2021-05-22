//
const { Employee } = require("../lib/Employee");
//
class Intern extends Employee {
  // Constructor
  constructor(name, id, eMail, school) {
    super(name, id, eMail);
    this.school = school;
  }
  // Methods
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = { Intern };
