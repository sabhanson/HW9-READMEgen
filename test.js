//PSUEDO CODE BELOW WITH HW README GUIDE


// GIVEN a command-line application that accepts user input
//TODO: create a node js application to run in the built in terminal


// WHEN I am prompted for information about my application repository
//TODO: inquirer to ask the user the following "inputs"
//inquirer
    // .prompt([
    //   {
    //     type: 'input',
    //     message: "What is your title?",
    //     name: "title",
    //   }
    // ])
    // .then ((response) =>
    // )


// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//TODO: fs.writeFile ('README.md', etc, etc)
//TODO:
    //include a TITLE
    //include a DESCRIPTION
    //include a TABLE OF CONTENTS
    //include a INSTALLATION
    //include a USAGE
    //include a LICENSE
    //include a CONTRIBUTING
    //include a TESTS
    //include a QUESTIONS


// WHEN I enter my project title
//TODO: prompt user 1st question "What is the title of your project"


// THEN this is displayed as the title of the README
//TODO: inside the variable for the generated README file, use "##Title: ${title}"
    // const generateREADME = (response) =>
    // write readme markdown here `` etc look up markdown language


// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//TODO: prompts for each section "add your description" "add your installation instructions", add your "usage" etc. etc. etc.


// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//TODO: inside the variable for the generated README file, use "##Description: ${description}" , "##Installation: ${installation}", etc for all of the different sections


// WHEN I choose a license for my application from a list of options
//TODO: prompt user with checkbox for different license types????


// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//TODO: look up what badges go with which licenses, I think Joe sent them in Slack (https://shields.io/category/license)


// WHEN I enter my GitHub username
//TODO: prompt "What is your github username?"


// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//TODO: in READMEgen variable, write <a href="https://github.com/" + ${github}>Visit my Github profile</a>


// WHEN I enter my email address
//TODO: prompt user "what is your email address?"


// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//TODO: in READMEgen variable, write an ${email} email link that will open to the user's email app <a href="mailto:info@example.com">send mail</a>


// WHEN I click on the links in the Table of Contents
//TODO: make the table of contents elements all clickable links for "description", "usage", etc
//# Table of Contents
//- [Description](#description)
//- [Installation](#installation)
//- [Contact Me](#contact-me)
//when you click on these it will redirect you to that section of the page


// THEN I am taken to the corresponding section of the README
//TODO: make these the titles of each section, note: # is large text, ### is smaller text
//# Description
//# Installation
//# Contact Me
