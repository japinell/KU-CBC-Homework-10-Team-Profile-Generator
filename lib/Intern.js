//
const { Employee } = require("../lib/Employee");
//
class Intern extends Employee {
  // Constructor
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  // Methods
  getSchoot() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = { Intern };
