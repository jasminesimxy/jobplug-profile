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
            <title>Job Plug Profile</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">

        </head>
        <body>
        <div class="container text-center">
        <div class="row">
          <div class="col">Job Plug Profile</div>

          <main class="container">
          <section class="row">
          <section class="row justify-content-around">
          <div class="col-12 col-sm-6 col-lg-4 mb-3">
          <div class =card  style="width: 18rem;">
          ${generateEngineerCard(allEmployee)}
          ${generateInternCard(allEmployee)}
          ${generateManagerCard(allEmployee)}
          </div>
          </div>
          </section>
          </section>
          </main>

        </body>
    </html>
    `
 };


 module.exports = { generateHTML };

     //loop over the employee and generate a html
    // return that entire long template literal, i.e. all that html markup with embedded information about the employees
    // return generatedHtml; // some string


