// node modules 
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generator");

// lib modules 
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager");


const newEmployeeData = [];

// "Enter to create new employee 
// Start - Enter prompts = Then Enter Engineer, Employee, or Finished List

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
        

            // List shows Employee / Engineer / Intern / Manager    
        { 
            type: "list",
            message: "Please select role.",
            choices: ["Engineer", "Intern", "Manager", "Complete"],
            name: "role"
        }
    ])

    // From the selected agent follow along with prompts to enter all of the specific information. 

    if (answers.role === "Manager") {
        const managerInfo = await inquirer 
        .prompt ([
            {
            type: "input",
            message: "Please enter office number",
            name: "officeNum"
        }
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerInfo.officeNum
        );
        newEmployeeData.push(newManager);
        promptQuestions();
    } else if (answers.role === "Engineer") {
        const githubInfo = await inquirer
        .prompt ([
            {
                type: "input",
                message: "Please insert Github username.",
                name: "github"
            }
        ])
        const newEngineer = new Engineer (
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        newEmployeeData.push(newEngineer);
        promptQuestions()
    } else if (answers.role === "Intern") {
        const schoolInfo = await inquirer
        .prompt ([
            {
                type: "input",
                message: "Please insert school.",
                name: "school"
            }
        ])
        const newIntern = new Intern (
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        newEmployeeData.push(newIntern);
        promptQuestions();
};
}
async function promptQuestions() {
   
    const addMembers = await inquirer
    .prompt([
        {
        name: "addMember",
        type: "list",
        choices: ["Add new team member", "Complete team"],
        message: "What would you like to do next"
        }
    ])
    if (addMembers.addMember === "Add new team member") {
        return questions()
    }
    return completeTeam();
}

    function completeTeam () {
        console.log("New team member", newEmployeeData)
        fs.writeFileSync(
            "./output/index.html",
            generateTeam(newEmployeeData),
            "utf-8"
        );
    }

    questions();