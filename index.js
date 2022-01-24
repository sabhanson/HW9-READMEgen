const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title for your README?",
      name: "title",
    },
    {
      type: "input",
      message: "Write your Description here",
      name: "description",
    },
    {
      type: "input",
      message: "Write your Installation instructions here",
      name: "installation",
    },
    {
      type: "input",
      message: "Write your Usage instructions here",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "What license should this README have?",
      choices: ["1", "2", "3"],
      name: "license",
    },
    {
      type: "input",
      message: "What are your Contribution instructions?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What should your Tests section say?",
      name: "tests",
    },
    {
      type: "input",
      message: "How do you prefer to be contacted for questions?",
      name: "questions",
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((response) => {
    const genREADME = `
# ${response.title}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Contact](#contact)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
${response.questions}  
[Github profile](https://www.github.com/${response.github})  
[Email Me](mailto:${response.email})
`;

    fs.writeFile("README1.md", genREADME, (err) =>
      err ? console.error(err) : console.log("new README generated")
    );
  });
