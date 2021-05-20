//
const { Employee } = require("../lib/Employee");
//
// Employee test scenarios based on application's acceptance criteria
//
describe("WHEN I start the application", () => {
  //
  test("THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number", () => {
    //
    const name = "Employee1",
      id = 1,
      email = "emp1@email.com";
    const emp = new Employee(name, id, email);
    //
    expect(emp).toBeInstanceOf(Employee);
    expect(emp.getId()).toEqual(id);
    expect(emp.getName()).toEqual(name);
    expect(emp.getEmail()).toEqual(email);
    //
  });
  //
});
//

/*
// Test scenarios - Based on acceptance criteria
describe("WHEN I am prompted for my team members and their information", () => {
  // THEN an HTML file is generated that displays a nicely formatted team roster based on user input
  expect(generator.generateHTMLFile()).toBe(true);
});
describe("WHEN I click on an email address in the HTML", () => {
  // THEN my default email program opens and populates the TO field of the email with the address
  expect(generator.openEmailProgram()).toBe(true);
});
describe("WHEN I click on the GitHub username", () => {
  // THEN that GitHub profile opens in a new tab
  expect(generator.openOpenGitHubProfile()).toBe(true);
});
describe("WHEN I decide to finish building my team", () => {
  // THEN I exit the application, and the HTML is generated
  expect(generator.generateHTMLFile()).toBe(true);
});
*/
