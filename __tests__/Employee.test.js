//
const { Employee } = require("../lib/Employee");
//
// Employee test scenarios based on application's acceptance criteria
//
describe("GIVEN a command-line application that accepts user input", () => {
  //
  test("THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number", () => {
    //
    const name = "The CEO",
      id = 1,
      eMail = "ceo@company.com",
      role = "Employee";
    const emp = new Employee(name, id, eMail);
    //
    expect(emp).toBeInstanceOf(Employee);
    expect(emp.getId()).toEqual(id);
    expect(emp.getName()).toEqual(name);
    expect(emp.getEmail()).toEqual(eMail);
    expect(emp.getRoleName()).toEqual(role);
    //
  });
  //
});
//
