//
const { Engineer } = require("../lib/Engineer");
const {
  promptStart,
  promptEmployeeProfile,
  promptManagerProfile,
  promptEngineerProfile,
  promptInternProfile,
} = require("../src/inputs");
//
// Engineer test scenarios based on application's acceptance criteria
//
describe("WHEN I select the engineer option", () => {
  test("THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu", () => {
    //
    // const mgr = promptEngineerProfile();  // Should return an Engineer instance
    //
    const name = "The Engineer",
      id = 1,
      eMail = "eng@company.com",
      gitHub = "eng@github.com",
      role = "Engineer";
    const eng = new Engineer(name, id, eMail, gitHub);
    //
    expect(eng).toBeInstanceOf(Engineer);
    expect(eng.getId()).toEqual(id);
    expect(eng.getName()).toEqual(name);
    expect(eng.getEmail()).toEqual(eMail);
    expect(eng.getGitHub()).toEqual(gitHub);
    expect(eng.getRole()).toEqual(role);
    //
  });
  //
});
