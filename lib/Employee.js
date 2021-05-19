// Employee class
class Employee {
  // Constructor
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  // Methods
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
