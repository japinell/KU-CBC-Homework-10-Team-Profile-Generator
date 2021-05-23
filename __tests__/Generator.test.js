//
const { Generator } = require("../src/Generator");
//
// Employee test scenarios based on application's acceptance criteria
//
describe("GIVEN a command-line application that accepts user input", () => {
  //
  describe("WHEN I am prompted for my team members and their information", () => {
    //
    test("THEN an HTML file is generated that displays a nicely formatted team roster based on user input", () => {
      //
      const fileName = "roster.html";
      const data = {};
      const gen = new Generator(fileName, data);
      //
      expect(gen).toBeInstanceOf(Generator);
      expect(gen.getFileName()).toEqual(fileName);
      expect(gen.getRoster()).toEqual(data);
      //
      // TODO: Mock the "writeToFile" function, which generates the team roster based on user input
      //
    });
    //
  });
  //
});
//
