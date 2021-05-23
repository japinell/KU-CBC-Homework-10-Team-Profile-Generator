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
    validate: (answer) => {
      return validateAlphaInput(answer);
    },
  },
  {
    type: "input",
    name: "id",
    message: "What's the employee id? ",
    validate: (answer) => {
      return validateNumericInput(answer);
    },
  },
  {
    type: "input",
    name: "email",
    message: "What's the employee email address? ",
    validate: (answer) => {
      return validateEmailInput(answer);
    },
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
    default: "123-456-7890",
    validate: (answer) => {
      return validatePhoneInput(answer);
    },
    when: function (answers) {
      return answers.empType === "M";
    },
  },
  {
    type: "input",
    name: "gitHub",
    message: "What's the engineer's GitHub username? ",
    validate: (answer) => {
      return answer.length > 1;
    },
    when: function (answers) {
      return answers.empType === "E";
    },
  },
  {
    type: "input",
    name: "school",
    message: "What's the intern's school name? ",
    validate: (answer) => {
      return validateAlphaInput(answer);
    },
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
    validate: (answer) => {
      return validateFileNameInput(answer);
    },
    when: function (answers) {
      return !answers.more;
    },
  },
];
//
// Validate that the input is alphabetical with a lenght of 2 or more words, and at least 1 character each word
//
function validateAlphaInput(input) {
  let message = "Please enter one or more words with letters only";
  if (input.length > 0) {
    return input.match(/^[a-zA-Z]\w*/g) ? true : message;
  } else return message;
}
//
// Validate that the input is numeric with a lenght of 2 or more words, and at least 1 character each word
//
function validateNumericInput(input) {
  let message = "Please enter one or more digits without spaces";
  if (input.length > 0) {
    return input.match(/^[0-9]\w*/g) ? true : message;
  } else return message;
}
//
// Validate that the phone number is a valid one
//
function validatePhoneInput(input) {
  let message = "Please enter a valid phone number";
  if (input.length > 0) {
    return input.match(/^\d{3}-\d{3}-\d{4}/g) ? true : message;
  } else return message;
}
//
// Validate that the e-Mail address is a valid one
//
function validateEmailInput(input) {
  let message = "Please enter a valid email address";
  if (input.length > 0) {
    return input.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      ? true
      : message;
  } else return message;
}
//
// Validate that the file name is a valid one
//
function validateFileNameInput(input) {
  let message = "Please enter a valid file name";
  if (input.length > 0) {
    return input.match(
      /^[\w\-. ]+$/
      // /^\d{3}-\d{3}-\d{4}/g/
      // /^[a-zA-Z][.]\w*/g
    )
      ? true
      : message;
  } else return message;
}
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
promptStartQuestions();
//
// **********************************************************************************************************************************
//
// The following code is for testing purposes only:
//
// teamRoster.push(new Manager("Employee1", "1", "Email1", "1"));
// teamRoster.push(
//   new Engineer("Employee2", "2", "japinell@yahoo.com", "japinell")
// );
// teamRoster.push(new Intern("Employee3", "3", "Email3", "School"));
// teamRoster.push(new Intern("Employee4", "4", "japinell@yahoo.com", "School"));
// teamRoster.push(
//   new Engineer("Employee5", "5", "japinell@yahoo.com", "japinell")
// );
// //
// const fileName = "roster.html";
// const generator = new Generator(fileName, teamRoster);
// //
// generator.writeToFile();
