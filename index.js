// node modules 
const inquirer = require("inquirer");
const fs = require("fs");

// lib modules 
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager");





// Start - Create manager. Enter 4 manager prompts = Then Enter Engineer, Employee, or Finished List

const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "Please insert name.",
            name: "name"
        },
        {
            type: "input",
            message: "Please insert ID number.",
            name: "id"
        },
        {
            type: "input",
            message: "Please insert E-Mail address.",
            name: "email"
        },
        {
            type: "list",
            message: "Please select role.",
            name: ["Engineer", "Intern", "Manager"]
        }
    ])
}

// "Would you like to enter a new employee?"(yes/no)
//If yes - Go to list. - List shows Employee / Engineer / Intern / Manager 
// From the selected agent follow along with prompts to enter all of the ID information. 
