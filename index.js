const inquirer = require("inquirer");
const fs = require('fs');



    inquirer.prompt ([
      {
        type: 'input',
        message: 'What is your README title?',
        name: 'title'
      },
      {
        type: 'input',
        message: 'Write your README description here',
        name: 'description'
      },
      {
        type: 'input',
        message: 'Write your Installation instructions here',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'Write your Usage instructions here',
        name: 'usage'
      },
      {
        type: 'checkbox',
        message: 'What license should this README have?',
        choices: [ '1', '2', '3'],
        name: 'license'
      },
      {
        type: 'input',
        message: 'What are your Contribution instructions?',
        name: 'contributing'
      },
      {
        type: 'input',
        message: 'What should your Tests section say?',
        name: 'tests'
      },
      {
        type: 'input',
        message: 'How would someone contact you for questions?',
        name: 'questions'
      },
    ]);


const genREADME = ({title, description, installation, usage, license, contributing, tests, questions}) =>
`WRITE THE README MARKDOWN HERE`
    