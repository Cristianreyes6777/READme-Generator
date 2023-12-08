const fs = require("fs");

// Function to render the license badge
function renderLicenseBadge(license) {
    if (!license) {
        return "";
    }
  
    switch (license) {
        case "MIT License":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Apache License 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GNU General Public License v3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        default:
            return "";
    }
}

// Function to render the license link
function renderLicenseLink(license) {
    if (!license) {
        return "";
    }
  
    switch (license) {
        case "MIT License":
            return "https://opensource.org/licenses/MIT";
        case "Apache License 2.0":
            return "https://opensource.org/licenses/Apache-2.0";
        case "GNU General Public License v3.0":
            return "https://www.gnu.org/licenses/gpl-3.0";
        case "Mozilla Public License 2.0":
            return "https://www.mozilla.org/en-US/MPL/2.0/";
        default:
            return "";
    }
}

const generateReadme = (answers) => {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${renderLicenseBadge(answers.license)}

[License Information](${renderLicenseLink(answers.license)})

## Features
${answers.features}

## How to Contribute
${answers.contribute}

## Tests
${answers.tests}

## Questions
For any questions, please contact me at:
${answers.contactInfo}
    `;
};

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote to " + fileName);
    });
};

module.exports = {
    generateReadme,
    writeToFile,
};
