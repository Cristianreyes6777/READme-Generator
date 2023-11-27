const fs = require("fs");

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
${answers.license}

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