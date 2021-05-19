class Engineer extends Employee {
  // Constructor
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // Methods
  getGitHub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = { Engineer };
