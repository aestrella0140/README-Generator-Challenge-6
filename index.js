// TODO: Include packages needed for this application

const inquirer = require("inquirer");

const { writeFile } = require("fs").promises;
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is your title of your Project?",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions input.",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage info input.",
    },
    {
      type: "input",
      name: "Contribution",
      message: "Enter Contribution Guidelines input.",
    },
    {
      type: "input",
      name: "Test",
      message: "Enter Test instructions input.",
    },
    {
      type: "input",
      name: "License",
      message: "Enter license for repository.",
    },
    {
      type: "input",
      name: "gitUser",
      message: "Enter GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address.",
    },
    {
      type: "input",
      name: "Phone",
      message: "Enter personal or work phone number.",
    },
  ]);
};

// TODO: Create a function to write README file
const generateREADME = ({
  Title,
  installation,
  usage,
  Contribution,
  Test,
  License,
  gitUser,
  email,
  Phone,
}) =>
  `# <${Title}>


## Table of contents

-[Installation](#installation)
-[Usage](#usage)
-[Contributions](#contributions)
-[Test](#test)
-[License](#license)
-[Questions](#questions)


## Installation

${installation}


## Usage

${usage}

## Contributions

${Contribution}

## Test

${Test}

## License

${License}

## Questions

This is my GitHub Profile : ${gitUser}

For additional questions, comments or tips please email me to : ${email}

You may also call or text me to my personal phone number @ ${Phone}



`;

// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((answers) => writeFile("README", generateREADME(answers)))
    .then(() => console.log("Successfully wrote README"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
