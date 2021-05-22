//
const { Employee } = require("../lib/Employee");
//
class Engineer extends Employee {
  // Constructor
  constructor(name, id, eMail, gitHub) {
    super(name, id, eMail);
    this.gitHub = gitHub;
  }
  // Methods
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = { Engineer };
