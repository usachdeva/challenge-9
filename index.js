// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `gitname`,
        message: `What is your github username?`,
    },
    {
        type: `input`,
        name: `email`,
        message: `What is your email address?`,
    },
    {
        type: `input`,
        name: `title`,
        message: `What is your project's name?`,
    },
    {
        // type: `editor`,
        type: `input`,
        name: `description`,
        message: `Please write a short description of your project`,
    },
    {
        type: `list`,
        name: `license`,
        message: `What kind of license does your project have?`,
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: `input`,
        name: `dependencies`,
        message: `What command should be run to install dependencies?`,
        default: `npm i`,
    },
    {
        type: `input`,
        name: `test`,
        message: `What command should be run to run tests?`,
        default: `npm test`,
    },
    {
        type: `input`,
        name: `repoUse`,
        message: `What does the user need to know about using the repo?`,
    },
    {
        type: `input`,
        name: `repoContribute`,
        message: `What does the user need to know about contributing to the repo?`,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log("Success");
    });
}

// TODO: Create a function to initialize app
function init() {
    // setting up data with the write file
    inquirer.prompt(questions).then((answers) => {
        console.log("Generating README...");
        let data = JSON.parse(JSON.stringify(answers));
        let readmeContent = generateMarkdown(data);
        let fileName = "README.md";
        writeToFile(fileName, readmeContent);
    });
}

// Function call to initialize app
init();
