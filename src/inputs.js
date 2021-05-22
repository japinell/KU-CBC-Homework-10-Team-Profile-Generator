// Packages needed by the application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//const generateMarkdown = require("./generator");
const { Employee } = require("../lib/Employee");
const { Manager } = require("../lib/Manager");
const { Engineer } = require("../lib/Engineer");
const { Intern } = require("../lib/Intern");
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

const empQuestions = [
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

const mgrQuestions = [
  {
    type: "input",
    name: "officeNumber",
    message: "What's the manager's office number? ",
  },
  {
    type: "list",
    name: "more",
    message: "Do you want to enter another employee? ",
    choices: [
      { value: "M", name: "Manager" },
      { value: "E", name: "Engineer" },
      { value: "I", name: "Intern" },
      { value: "N", name: "No, finish" },
    ],
    default: "M",
  },
];

const engQuestions = [
  {
    type: "input",
    name: "gitHub",
    message: "What's the engineer's GitHub username? ",
  },
  {
    type: "list",
    name: "empType",
    message: "Do you want to enter another employee? ",
    choices: [
      { value: "M", name: "Manager" },
      { value: "E", name: "Engineer" },
      { value: "I", name: "Intern" },
      { value: "N", name: "No, finish" },
    ],
    default: "E",
  },
];

const intQuestions = [
  {
    type: "input",
    name: "school",
    message: "What's the intern's school name? ",
  },
  {
    type: "list",
    name: "empType",
    message: "Do you want to enter another employee? ",
    choices: [
      { value: "M", name: "Manager" },
      { value: "E", name: "Engineer" },
      { value: "I", name: "Intern" },
      { value: "N", name: "No, finish" },
    ],
    default: "I",
  },
];

// All answers
let allAnswers = [];

// Prompt the start questions
const promptStart = () => {
  //
  inquirer.prompt(startQuestions).then((startAnswers) => {
    //
    if (startAnswers.start) {
      //
      promptEmployeeProfile();
      //
    }
    //
  });
};

// Prompt the employee's profile questions
const promptEmployeeProfile = () => {
  //
  inquirer.prompt(empQuestions).then((empAnswers) => {
    //
    const empType = empAnswers.empType;
    //
    switch (empType) {
      //
      case "M":
        promptManagerProfile();
      case "E":
        promptEngineerProfile();
      case "I":
        promptInternProfile();
      //
    }
    // //
    // const { name, id, email } = empAnswers;
    // return new Employee(name, id, email);
    //
  });
  //
};

// Prompt the team manager's profile questions
const promptManagerProfile = () => {
  //
  // Manager is an instance of Employee, so read the Employee's properties first and then the Manager's
  //
  inquirer.prompt(empQuestions).then((empAnswers) => {
    //
    inquirer.prompt(mgrQuestions).then((mgrAnswers) => {
      //
      const { name, id, email } = empAnswers;
      const { officeNumber } = mgrAnswers;
      const empType = mgrAnswers.more;
      //
      console.log(mgrAnswers);
      //
      switch (empType) {
        //
        case "M":
          promptManagerProfile();
        case "E":
          promptEngineerProfile();
        case "I":
          promptInternProfile();
        default:
          console.log("Done");
        //
      }
      //
      //
      //return new Manager(name, id, email, officeNumber);
      //
    });
    //
  });
  //
};

// Prompt the engineer's profile questions
const promptEngineerProfile = () => {
  //
  // Engineer is an instance of Employee, so read the Employee's properties first and then the Engineer's
  //
  inquirer.prompt(empQuestions).then((empAnswers) => {
    //
    inquirer.prompt(engQuestions).then((engAnswers) => {
      //
      const { name, id, email } = empAnswers;
      const { gitHub } = engAnswers;
      //
      return new Engineer(name, id, email, gitHub);
      //
    });
    //
  });
  //
};

// Prompt the intern's profile questions
const promptInternProfile = () => {
  //
  // Intern is an instance of Employee, so read the Employee's properties first and then the Intern's
  //
  inquirer.prompt(empQuestions).then((empAnswers) => {
    //
    inquirer.prompt(intQuestions).then((intAnswers) => {
      //
      const { name, id, email } = empAnswers;
      const { school } = intAnswers;
      //
      return new Intern(name, id, email, school);
      //
    });
    //
  });
  //
};

promptStart();
//promptEmployeeProfile();
//promptManagerProfile();
//promptEngineerProfile();
//promptInternProfile();

module.exports = {
  promptStart,
  promptEmployeeProfile,
  promptManagerProfile,
  promptEngineerProfile,
  promptInternProfile,
};
