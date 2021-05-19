// Packages needed by the application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generator");
const writeFileAsync = util.promisify(fs.writeFile); // WriteFile using promises instead of a callback function

// Questions
const startQuestions = [
  {
    type: "confirm",
    name: "start",
    message:
      "\n\n---------- TEAM PROFILE GENERATOR----------\n\nThe following questions will be used to generate the Team Profile Webpage.\nDo you wish to continue?",
  },
];

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What's the employee name? ",
  },
  {
    type: "input",
    name: "id",
    message: "What's the employee id? ",
  },
  {
    type: "input",
    name: "email",
    message: "What's the employee email address? ",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "officeNumber",
    message: "What's the manager's office number? ",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "gitHub",
    message: "What's the engineer's GitHub username? ",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "school",
    message: "What's the intern's school name? ",
  },
];

// Prompt the start questions
const promptStartQuestions = () => {
  //
  inquirer.prompt(startQuestions).then((answers) => {
      //
      return answers.start;
      //
    }
  };

// Prompt the employee's profile questions
const promptEmployeeProfile = () => {
  //
  inquirer.prompt(employeeQuestions).then((answers) => {
    //
    const {name, id, email} = answers;
    return new Employee(name, id, email);
    //
  }
  //
};

// Prompt the team manager's profile questions
const promptManagerProfile = () => {
  //
  inquirer.prompt(managerQuestions).then((answers) => {
    //
    return answers.officeNumber.length > 1;
    //
  }
  //
};

// Prompt the engineer's profile questions
const promptEngineerProfile = () => {
    //
    inquirer.prompt(engineerQuestions).then((answers) => {
      //
      return answers.gitHub.length > 1;
      //
    }
    //
  };

  
// Prompt the intern's profile questions
const promptInterProfile = () => {
    //
    inquirer.prompt(internQuestions).then((answers) => {
      //
      return answers.school.length > 1;
      //
    }
    //
  };
