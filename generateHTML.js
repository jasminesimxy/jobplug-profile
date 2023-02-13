function generateManagerCard(employeeArray){
    employeeArray.forEach((employeeObj, index,) => {
        let isManager = employeeObj.getRole() == 'Manager' ? true : false;
    })
}

function generateHTML (allEmployee) {
    console.log('allEmployee looks like', allEmployee);
    
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head> 
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link> // bootstrap
            <link src='./css/stylesheet.css'>
        </head>
        <body>
            ${generateManagerCard(allEmployee)}
            ${generateEngineerCard(allEmployee)}
            ${generateInternCard(allEmployee)}
        </body>
    </html>
    `
    //loop over the employee and generate a html


    // return that entire long template literal, i.e. all that html markup with embedded information about the employees
    // return generatedHtml; // some string
 };



 module.exports = { generateHTML };



