//
const { Manager } = require("../lib/Manager");
//
// Manager test scenarios based on application's acceptance criteria
//
describe("WHEN I start the application", () => {
  //
  test("THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number", () => {
    //
    const name = "The CTO",
      id = 1,
      eMail = "cto@company.com",
      officeNumber = "123-456-7890",
      role = "Manager";
    const mgr = new Manager(name, id, eMail, officeNumber);
    //
    expect(mgr).toBeInstanceOf(Manager);
    expect(mgr.getId()).toEqual(id);
    expect(mgr.getName()).toEqual(name);
    expect(mgr.getEmail()).toEqual(eMail);
    expect(mgr.getRoleName()).toEqual(role);
    //
  });
});
//
