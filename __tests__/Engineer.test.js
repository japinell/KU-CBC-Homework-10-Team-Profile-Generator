// Import packages/libraries/classes needed
const inputs = require("../src/inputs");
const employee = require("../lib/Engineer");

// Engineer test scenarios
describe("WHEN I select the engineer option", () => {
  test("THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu", () => {
    //
    const eng = inputs.promptEngineerProfile();
    //
    expect(eng).toBeInstanceOf(Engineer);
    expect(eng).toHaveProperty("name");
    expect(eng).toHaveProperty("id").toBeGreaterThan(0);
    expect(eng).toHaveProperty("email");
    expect(eng).toHaveProperty("gitHub");
    //
  });
  //
});
