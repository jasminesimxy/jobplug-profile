//Import statement:
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const allEmployee = [];

const baseQuestion = [
    {
    type: 'list',
    name: 'role',
    message: 'What license does your project have?', choices:
    ['Manager','Intern','Engineer','No']
}
]

function init() {

inquirer
.prompt( baseQuestion
)

.then((answers) => {
    if (answers.role == 'Manager'){
        return managerQuestion()
    }
    else if (answers.role == "Intern") {
        return internQuestion()
    }
    else if (answers.role == 'No') {
        return endQuestion ()
    }
    else {
        return engineerQuestion()
    }
    
  });

}



function managerQuestion () {

const questions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is your  name?',
      },
      {
        type: 'input',
        name: 'id',
        message: ' What is your ID ?',
      },

    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: ' What is your office number ?',
      },
]
inquirer 
.prompt(questions
)
.then((answers) => {
    const manager = new Manager (answers.name, answers.id,answers.email, answers.officeNumber);
    allEmployee.push (manager);
    init();
  });
};

function internQuestion () {

const questions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: ' Describe your project.',
      },

]
};


function engineerQuestion () { 
    
const questions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: ' Describe your project.',
      },

]
}; 



function endQuestion () {
    const readmeContent = generateHTML(allEmployee);

    fs.writeFile('index.html', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created!')
    );

}