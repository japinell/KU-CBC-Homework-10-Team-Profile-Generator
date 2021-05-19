class Intern extends Employee {
  // Constructor
  constructor(name, id, email, school) {
    super(name, id, email);
    this.github = github;
  }
  // Methods
  getSchoot() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
