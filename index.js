const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require("./utils/generateMarkdown");
const path = require("path");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        }, 
        {
            type: "input",
            message: "Please give a description for your README.md.",
            name: "description"
        },
        {
            type: "input",
            message: "Give some installation instructions.",
            name: "installation"
        },
        {
            type: "input",
            message: "What use does this project have?",
            name: "usage"
        },
        {
            type: "list",
            message: "Choose a license for your project.",
            name: "license",
            choices: [
                "MIT",
                "Apache License 2.0",
                "ISC"
            ]  
        },
        {
            type: "input",
            message: "How can you contribute?",
            name: "contributing"
        },
        {
            type: "input",
            message: "Enter test instructions.",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        }, 
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        } 

        ]).then(answers => {
            const {title, description, installation, usage, license, contributing, tests, username, email} = answers;

    const newFile = generateReadMe({...answers});
            fs.writeFileSync(path.join(process.cwd(), "newREADME.md"), newFile);
});
