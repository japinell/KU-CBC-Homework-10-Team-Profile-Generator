//
const inputs = require("../src/inputs");
const { Employee } = require("../lib/Employee");
//
// Employee test scenarios based on application's acceptance criteria
//
jest.mock("../src/inputs");
//
describe("GIVEN a command-line application that accepts user input", () => {
  //
  describe("WHEN I am prompted for my team members and their information", () => {
    //
    test("Read the employee profile", () => {
      //
      // Mock the "promptEmployeeProfile" function, which asks the user to enter the employee information
      //
      inputs.promptEmployeeProfile.mockReturnValue(
        //
        new Promise((resolve) => {
          //
          resolve({ data: {} });
          //
        })
        //
      );
      //
      expect(inputs.promptEmployeeProfile()).resolves.toHaveBeenCalled();
      expect(inputs.promptEmployeeProfile()).resolves.toHaveReturned();
      expect(inputs.promptEmployeeProfile()).resolves.toEqual({ data: {} });
      //
    });
    //
  });
  //
});
//
