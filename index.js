// TODO: Include packages needed for this application
import { writeFile } from "fs";
import pkg from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown.js";

const { prompt } = pkg;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please enter a project description",
        name: "Description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Provide examples for usage",
        name: "Usage"
    },
    {
        type: "input",
        message: "Provide instructions for contribution",
        name: "Contributors"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "Test"
    },
    {
        type: "input",
        message: "Contact info for further questions",
        name: "Questions"
    },
    {
        type: "input",
        message: "Enter your Github username",
        name: "Username"
    },
    {
        type: "input",
        message: "Enter your email?",
        name: "Email"
    },
    {
        type: "checkbox",
        message: "Please choose a license for your project",
        choices: ["MIT", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers => {

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);

    })
}

// Function call to initialize app
init();
