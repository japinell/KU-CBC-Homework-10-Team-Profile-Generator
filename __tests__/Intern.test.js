// Import packages/libraries/classes needed
const inputs = require("../src/inputs");
const employee = require("../lib/Intern");

// Intern test scenarios
describe("WHEN I select the intern option", () => {
  test("THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu", () => {
    //
    const int = inputs.promptInternProfile();
    //
    expect(int).toBeInstanceOf(Intern);
    expect(int).toHaveProperty("name");
    expect(int).toHaveProperty("id").toBeGreaterThan(0);
    expect(int).toHaveProperty("email");
    expect(int).toHaveProperty("school");
    //
  });
  //
});
