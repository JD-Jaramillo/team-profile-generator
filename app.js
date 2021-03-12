// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const employeeAnswersArr = [];


const questions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officeNum',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'I do not want to add any more team members',
        ],
    },

];
const engQuestions = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub?",
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'I do not want to add any more team members',
        ],
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'internId',
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: 'internSchool',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'I do not want to add any more team members',
        ],
    },
]

function engQuestionsFunc() {
    inquirer
        .prompt(engQuestions)
        .then(answers => {
            var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            employeeAnswersArr.push(engineer);
            if (answers.teamMember === 'Engineer') {
                engQuestionsFunc();
            } else if (answers.teamMember === 'Intern') {
                internQuestionsFunc();
            } else {
                writeHtml();
            }
        })

}

function internQuestionsFunc() {
    inquirer
        .prompt(internQuestions)
        .then(answers => {
            var intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            employeeAnswersArr.push(intern);
            if (answers.teamMember === 'Engineer') {
                engQuestionsFunc();
            } else if (answers.teamMember === 'Intern') {
                internQuestionsFunc();
            } else {
                writeHtml();
            }
        })
}



function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNum);
            employeeAnswersArr.push(manager);
            if (answers.teamMember === 'Engineer') {
                console.log('answer was engineer');
                engQuestionsFunc();
            } else if (answers.teamMember === 'Intern') {
                console.log('answer was intern');
                internQuestionsFunc();
            } else {
                writeHtml();
            }
        })
}

function writeHtml() {
    const writeHtml = fs.writeFile(outputPath, render(employeeAnswersArr), (err) => {
        err ? console.log(err) : console.log('Your HTML has been generated!');
    })

}

init();
