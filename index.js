//Import statement:
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const allEmployee = [];
const { generateHTML } = require("./generateHTML");
console.log(generateHTML);

const baseQuestion = [
  {
    type: "list",
    name: "role",
    message: "What role ?",
    choices: ["Manager", "Intern", "Engineer", "No"],
  },
];

function promptUserForTeamMember() {
  inquirer
    .prompt(baseQuestion)
    .then((answers) => {
      if (answers.role == "Manager") {
        return managerQuestion();
      } else if (answers.role == "Intern") {
        return internQuestion();
      } else if (answers.role == "No") {
        return endQuestion();
      } else { // reverse those two ^
        return engineerQuestion();
      }
    });
}

function managerQuestion() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is your  name?",
    },
    {
      type: "input",
      name: "id",
      message: " What is your ID ?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your e-mail?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: " What is your office number ?",
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    allEmployee.push(manager);
    promptUserForTeamMember();
    //init();
  });
}

function internQuestion() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is your  name?",
    },
    {
      type: "input",
      name: "id",
      message: " What is your ID ?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your e-mail?",
    },
    {
      type: "input",
      name: "school",
      message: "What school are you attending?",
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    allEmployee.push(intern);
    promptUserForTeamMember();
  });
}

function engineerQuestion() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is your  name?",
    },
    {
      type: "input",
      name: "id",
      message: " What is your ID ?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your e-mail?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username ?",
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    allEmployee.push(engineer);
    promptUserForTeamMember();
  });
}

function endQuestion() {
  console.log('endQuestion function ran');
  const htmlContent = generateHTML(allEmployee);

  // fs.writeFile("index.html", htmlContent, (err) =>
  //   err ? console.log(err) : console.log("Successfully created!")
  // );
}

promptUserForTeamMember();
