//require inquirer and fs to be able to use their methods
const inquirer = require("inquirer");
const fs = require("fs");
 
//variable for the MIT license legal jargon
const MIT = `<p>
MIT License

  Copyright &copy; 2022 
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  </p>`
//variable for the WTFPL license legal jargon
  const WTFPL = `<p>

  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
  Version 2, December 2004 
  
  Copyright &copy; 2022 
  
  Everyone is permitted to copy and distribute verbatim or modified 
  copies of this license document, and changing it is allowed as long 
  as the name is changed. 
  
  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 
  
  0. You just DO WHAT THE FUCK YOU WANT TO.

  </p>`
//variable for the Unlicense license legal jargon
  const Unlicense = `<p>

  Copyright &copy; 2022  

  This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
  </p>`


//inquirer prompt from the inquirer package, prompts user input for each object
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
      type: "list",
      message: "What license should this README have?",
      choices: ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"],
      name: "license",
    },
    {
      type: "input",
      message: "How can others contribute to your project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Did you run tests on this application? If so, explain.",
      name: "tests",
    },
    {
      type: "input",
      message: "How should others contact you? (github and/or email)",
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
  //then, from the prompts, check the response to the license prompt to see which license jargon must be included in the README
  ])
  .then((response) => {
      if (response.license === "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)") {
        licenseDescription = MIT
      } else if (response.license === "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)") {
        licenseDescription = WTFPL
      } else {
        licenseDescription = Unlicense
      }
    
//variable for the README blueprint. user responses will be added into the appropriate sections      
    const genREADME = `
# ${response.title} ${response.license}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${licenseDescription}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
${response.questions}  
[Github profile](https://www.github.com/${response.github})  
[Email Me](mailto:${response.email})
`;


//fs writefile is taking all of the responses from the above function, writing them in the format of the genREADME variable, and creating a file called README1 in the root folder. If an error occurs, it will be console logged. If no error (good news) it will console log that a new document was generated.
fs.writeFile("README1.md", genREADME, (err) =>
err ? console.error(err) : console.log("new README1.md generated")
  );
    
    
  });