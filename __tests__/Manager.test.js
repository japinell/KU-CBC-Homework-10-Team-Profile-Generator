//
const { Manager } = require("../lib/Manager");
const {
  promptStart,
  promptEmployeeProfile,
  promptManagerProfile,
  promptEngineerProfile,
  promptInternProfile,
} = require("../src/inputs");
//
// Manager test scenarios based on application's acceptance criteria
//
describe("WHEN I start the application", () => {
  //
  test("THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number", () => {
    //
    // const mgr = promptManagerProfile();  // Should return a Manager instance
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
    expect(mgr.getRole()).toEqual(role);
    //
    // expect(mgr).toBeInstanceOf(Manager);
    // expect(mgr).toHaveProperty("name");
    // expect(mgr).toHaveProperty("id").toBeGreaterThan(0);
    // expect(mgr).toHaveProperty("email");
    // expect(mgr).toHaveProperty("officeNumber");
    //
  });
});
// describe("WHEN I enter the team manager’s name, employee ID, email address, and office number", () => {
//     test("THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team", () => {
//         //
//         const menu = inputs.promptMenu();
//         //
//         expect(menu).toBeGreaterThan(0);
//         expect(menu).toBeLessThan(4);
//         //
//     }
//   //
// });

// // Test scenarios - Based on acceptance criteria
// describe("WHEN I am prompted for my team members and their information", () => {
//   // THEN an HTML file is generated that displays a nicely formatted team roster based on user input
//   expect(generator.generateHTMLFile()).toBe(true);
// });
// describe("WHEN I click on an email address in the HTML", () => {
//   // THEN my default email program opens and populates the TO field of the email with the address
//   expect(generator.openEmailProgram()).toBe(true);
// });
// describe("WHEN I click on the GitHub username", () => {
//   // THEN that GitHub profile opens in a new tab
//   expect(generator.openOpenGitHubProfile()).toBe(true);
// });

// describe("WHEN I select the engineer option", () => {
//   // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//   expect(generator.readEngineerProfile()).toBe(true);
// });
// describe("WHEN I select the intern option", () => {
//   // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//   expect(generator.readInternProfile()).toBe(true);
// });
// describe("WHEN I decide to finish building my team", () => {
//   // THEN I exit the application, and the HTML is generated
//   expect(generator.generateHTMLFile()).toBe(true);
// });
