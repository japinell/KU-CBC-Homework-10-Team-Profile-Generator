//
// Library imports
//
const inquirer = require("inquirer");
//
// Class imports
//
const { Employee } = require("./lib/Employee");
const { Manager } = require("./lib/Manager");
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");
const { Generator } = require("./src/Generator");
//
// Questions
//
const startQuestions = [
  {
    type: "confirm",
    name: "continue",
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
  {
    type: "list",
    name: "empType",
    message: "What's the employee role'? ",
    choices: [
      { value: "M", name: "Manager" },
      { value: "E", name: "Engineer" },
      { value: "I", name: "Intern" },
    ],
    default: "M",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What's the manager's office number? ",
    when: function (answers) {
      return answers.empType === "M";
    },
  },
  {
    type: "input",
    name: "gitHub",
    message: "What's the engineer's GitHub username? ",
    when: function (answers) {
      return answers.empType === "E";
    },
  },
  {
    type: "input",
    name: "school",
    message: "What's the intern's school name? ",
    when: function (answers) {
      return answers.empType === "I";
    },
  },
  {
    type: "confirm",
    name: "more",
    message: "Do you want to enter more employees?",
  },
  {
    type: "input",
    name: "fileName",
    message: "Enter the filename where to save the team roster: ",
    default: "roster.html",
    when: function (answers) {
      return !answers.more;
    },
  },
];
//
const teamRoster = [];
//
// Initialize the application
//
function promptStartQuestions() {
  //
  inquirer.prompt(startQuestions).then((answers) => {
    //
    if (answers.continue) {
      //
      promptEmployeeQuestions();
      //
    }
    //
  });
}
//
// Prompts for the employee questions
//
function promptEmployeeQuestions() {
  //
  inquirer.prompt(employeeQuestions).then((employeeAnswers) => {
    //
    const { name, id, email, empType, officeNumber, gitHub, school } =
      employeeAnswers;
    //
    // Employee type is guaranteed to be any of the following
    //
    switch (empType) {
      //
      case "M":
        teamRoster.push(new Manager(name, id, email, officeNumber));
        break;
      case "E":
        teamRoster.push(new Engineer(name, id, email, gitHub));
        break;
      case "I":
        teamRoster.push(new Intern(name, id, email, school));
        break;
      //
    }
    //
    if (employeeAnswers.more) {
      //
      promptEmployeeQuestions();
      //
    } else {
      //
      const fileName = employeeAnswers.fileName;
      const generator = new Generator(fileName, teamRoster);
      //
      generator.writeToFile();
      //
    }
    //
  });
  //
}
//
// Rock & Roll
//
//promptStartQuestions();
//
teamRoster.push(new Manager("Employee1", "1", "Email1", "1"));
teamRoster.push(new Engineer("Employee2", "2", "Email2", "GitHub"));
teamRoster.push(new Intern("Employee3", "3", "Email3", "School"));
//
const fileName = "roster.html";
const generator = new Generator(fileName, teamRoster);
//
generator.writeToFile();
