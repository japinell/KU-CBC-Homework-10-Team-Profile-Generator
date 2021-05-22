// Employee class
class Employee {
  // Constructor
  constructor(name, id, eMail) {
    this.id = id;
    this.name = name;
    this.eMail = eMail;
  }
  // Methods
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.eMail;
  }
  getRole() {
    return "E";
  }
  getRoleName() {
    return "Employee";
  }
}

module.exports = { Employee };
