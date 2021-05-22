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
];
//
const teamRoster = [];
//
// Initializes the application
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
// Prompts the employee questions
//
function promptEmployeeQuestions() {
  //
  inquirer.prompt(employeeQuestions).then((answers) => {
    //
    const { name, id, email, empType, officeNumber, gitHub, school } = answers;
    //
    // Employee type is guaranteed to be any of the following
    //
    console.log(answers);
    //
    // switch (empType) {
    //   case "M":
    //     return new Manager(name, id, email, officeNumber);
    //   case "E":
    //     return new Engineer(name, id, email, gitHub);
    //   case "I":
    //     return new Intern(name, id, email, school);
    // }
    //
    teamRoster.push(answers);
    //
    if (answers.more) {
      //
      promptEmployeeQuestions();
      //
    } else {
      //
      console.log(teamRoster);
      //
    }
    //
  });
  //
}
//
// Rock & Roll
//
promptStartQuestions();
//
