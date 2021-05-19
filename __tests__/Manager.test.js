// Import packages/libraries/classes needed
const inputs = require("../src/inputs");
const employee = require("../lib/Manager");

// Employee test scenarios
describe("WHEN I start the application", () => {
  test("THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number", () => {
    //
    const mgr = inputs.promptManagerProfile();
    //
    expect(mgr).toBeInstanceOf(Manager);
    expect(mgr).toHaveProperty("name");
    expect(mgr).toHaveProperty("id").toBeGreaterThan(0);
    expect(mgr).toHaveProperty("email");
    expect(mgr).toHaveProperty("officeNumber");
    //
  });
});
describe("WHEN I enter the team manager’s name, employee ID, email address, and office number", () => {
    test("THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team", () => {
        //
        const menu = inputs.promptMenu();
        //
        expect(menu).toBeGreaterThan(0);
        expect(menu).toBeLessThan(4);
        //
    }
  // 
});

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

describe("WHEN I select the engineer option", () => {
  // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  expect(generator.readEngineerProfile()).toBe(true);
});
describe("WHEN I select the intern option", () => {
  // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  expect(generator.readInternProfile()).toBe(true);
});
describe("WHEN I decide to finish building my team", () => {
  // THEN I exit the application, and the HTML is generated
  expect(generator.generateHTMLFile()).toBe(true);
});
