//
const { Intern } = require("../lib/Intern");
const {
  promptStart,
  promptEmployeeProfile,
  promptManagerProfile,
  promptEngineerProfile,
  promptInternProfile,
} = require("../src/inputs");
//
// Intern test scenarios based on application's acceptance criteria
//
describe("WHEN I select the intern option", () => {
  test("THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu", () => {
    //
    // const mgr = promptInternProfile();  // Should return an Intern instance
    //
    const name = "The Intern",
      id = 1,
      eMail = "int@company.com",
      school = "School",
      role = "Intern";
    const int = new Intern(name, id, eMail, school);
    //
    expect(int).toBeInstanceOf(Intern);
    expect(int.getId()).toEqual(id);
    expect(int.getName()).toEqual(name);
    expect(int.getEmail()).toEqual(eMail);
    expect(int.getSchool()).toEqual(school);
    expect(int.getRole()).toEqual(role);
    //
  });
  //
});
