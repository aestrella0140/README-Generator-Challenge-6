// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Boost":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "BSD":
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "-[License](#license)";
    case "MIT":
      return "-[License](#license)";
    case "Boost":
      return "-[License](#license)";
    case "BSD":
      return "-[License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
      return `## License
  
  
      case 'MIT':
        This project is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).`;
    case "MIT":
      return `
          ## License
          
  
          This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
    case "Boost":
      return `
          ## License
          
         This project is licensed under the [Boost Software License 1.0 License](https://www.boost.org/LICENSE_1_0.txt).`;
    case "BSD":
      return `
          This project is licensed unter the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).`;
  
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

${renderLicenseBadge(data.License)}


## Table of contents

-[Installation](#installation)
-[Usage](#usage)
-[Contributions](#contributions)
-[Test](#test)
${renderLicenseLink(data.License)}
-[Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.Contribution}

## Test

${data.Test}

${renderLicenseSection(data.License)}
${renderLicenseLink(data.License)}

## Questions

This is my GitHub Profile : ${data.gitUser}

For additional questions, comments or tips please email me to : ${data.email}

You may also call or text me to my personal phone number @ ${data.Phone}



`;

}

module.exports = generateMarkdown;
