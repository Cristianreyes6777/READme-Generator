// packages

const fs = require("fs");
const inquire = require("inquirer");
const path = require("path");


// prompts
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include any necessary screenshots.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, any third-party assets used, and any tutorials you followed.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license for this project?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'If you would like other developers to contribute to your project, provide guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests for your application and how to run them.'
    },
    {
        type: 'input',
        name: 'contactInfo',
        message: 'Provide your contact information for others to reach you. (Email, LinkedIn, GitHub, etc.)'
    }
];

  
  // Writing README.md File
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  // Initializing app
  function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
  init();