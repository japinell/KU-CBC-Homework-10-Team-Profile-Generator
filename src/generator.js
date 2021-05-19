// Packages needed by the application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const inputs = require("./inputs");
const writeFileAsync = util.promisify(fs.writeFile); // WriteFile using promises instead of a callback function

// Initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const fileName = answers.fileName;
    //console.log(JSON.stringify(answers, null, "  "));
    writeToFile(fileName, answers);
  });
}

// Rock & Roll!
init();
