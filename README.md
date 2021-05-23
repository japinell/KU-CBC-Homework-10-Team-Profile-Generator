# 10 Object-Oriented Programming: Team Profile Generator

## Description

Build a **Node.js** command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Write a unit test for every part of your code and ensure that it passes each test.

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

This application requires **Node.js** JavaScript Runtime, **Inquirer.js** and **Jest** packages. Basic knowledge of Node.js is recommended to run the application. To faciliate the installation of the application, a _package.json_ file is provided with the project. Execute the following command in your console to install Inquirer:

```bash
npm i inquirer
npm i jest
```

## Usage

The application is invoked by using the following command:

```bash
node index.js
```

Follow the prompts noticing that some of the questions have pre-defined input values, which means that it is enough for the user to press the ENTER key to accept the default value for that input.

A sample output of the application is provided [here](https://github.com/japinell/KU-CBC-Homework-10-Team-Profile-Generator/blob/main/roster.html).

If you want to cancel the application execution, press the following command in Microsoft Windows, or equivalent commands in Mac OS and Linux, to stop the execution of the application:

```bash
CTRL + C
```

A link to a walkthrough video demonstrating the application functionality is provided [here](https://drive.google.com/file/d/1JgqGP5NtRl3KXU8ID2EaU0vYTp6aNsJf/view).

## License

This project is licensed under The MIT License. Refer to https://opensource.org/licenses/MIT for more information of what you can and cannot do with this project. See contact information below if you have questions, comments, or suggestions for the project.

## Features

The application features the generation of a team roster HTML file with information gathered from user input. An important aspect is the use of object-oriented concepts like classes, inheritance, and extensibility to hold an array of objects in memory before it is rendered to the file. The application was also designed with a test-driven approach in mind. Several test scenarios were created to mimic the application functionality before writing the actual functionality.

Future development:

- Capture the user inputs and hold them in a database file.

## Contributing Guidelines

Want to contribute to this project? You may clone or fork the project in GitHub. Note the licesing information below.

## Test Instructions

- Clone the repository
- Install **Inquirer.js** and **Jest** as follows:

```bash
npm i inquirer
npm i jest
```

- If you want to view or run the test scenarios, check them out in the _**tests**_ folder. Run the tests by executing the following command within this folder:

```bash
jest
```

- Finally, run the application:

```bash
node index.js
```

## Contact Information

For questions, comments, or suggestions, please contact me by E-Mail:

japinell@yahoo.com

Check out my other **cool** projects in GitHub - https://github.com/japinell

## License

This application is licensed under the following license:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)(https://opensource.org/licenses/MIT)

For more information, please follow the link provided above.
