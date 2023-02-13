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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <style type="text/css">
            #textin {
                width: 500px;
                height: 150px;
            }
            #textout {
                font-family: courier;
                font-size: 12px;
                width: 40em;
                height: 200px;
                resize: none;

            </style>
        </head>
        <body>
            ${generateManagerCard(allEmployee)}
            ${generateEngineerCard(allEmployee)}
            ${generateInternCard(allEmployee)}
        </body>
    </html>
    `
 };


 module.exports = { generateHTML };

     //loop over the employee and generate a html
    // return that entire long template literal, i.e. all that html markup with embedded information about the employees
    // return generatedHtml; // some string


