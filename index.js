// imports
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require("fs"); 

// Questions asked to the user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },

  {
    type: "input",
    message: "What is the title for your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please give description of your project.",
    name: "Description",
  },
  {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What license was used for this README?",
    name: "License",
  },

  {
    type: "list",
  message: "Select license",
  name: "License",
  choices: [
      "MIT",
      "GVL-GPL 3.0",
      "APACHE 2.0",
      "BSD 3",
      "None"
  ]
  },

  {
    type: "input",
    message: "Please add contributors",
    name: "Contributor",
  },
  {
    type: "input",
    message: "What command do you use to test this App?",
    name: "Test",
  },

  {
    type:"input",
    message:"Enter contact information?",
    name:"Questions"
  }
];

// Writing to a file 
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, function(err) {
  if (err) {
    return console.log(err);
  }
 
})

}


// initialization function
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("README.md", generatorMarkdown(data));
  })
}


// run the app
init();