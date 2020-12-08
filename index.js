const mysql = require("mysql");
const inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

   
    user: "root",

    
    password: "",
    database: "employmentdb"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startUp();
});


const startUp = () => {
    inquirer.prompt([                 
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'type',
            choices: [
                'Add department',
                'Add role',
                'Add employee',
                'View departments',
                'View roles',
                'View employees',
                'Update employee roles',
                'Update employee managers',
                'Remove employee',
                'View employees by manager',
                'Delete department',
                'Delete role',
                'Delete employee',
                'View department budget',
            ],  
        },

    ])
        .then((data) => {
            switch (data.type) {
                case 'View employees':
                    viewEmp()             
                    break;
                case 'Add role':
                    addRole()             
                    break;
                case 'Add employee':
                    addEmp()             
                    break;
                case 'View departments':
                    viewDept()             
                    break;
                case 'View roles':
                    viewRoles()             
                    break;
                case 'View employees':
                    viewEmp()             
                    break;
                    case 'Update employee roles':
                    updateEmpRoles()            
                    break;
                case 'Update employee managers':
                    updateEmpMan()             
                    break;
                case 'Remove employee':
                    removeEmp()             
                    break;
                case 'View employees by manager':
                    viewEmpByMan()             
                    break;
                case 'Delete department':
                    deleteDept()             
                    break;
                case 'Delete role':
                    deleteRole()             
                    break;
                case 'Delete employee':
                    deleteEmp()            
                    break;
                default:
                    viewBudgets()         
                    break;
            }
        })
}




viewEmp()            

addRole()             

addEmp()             

viewDept()             

viewRoles()             

viewEmp()             

updateEmpRoles()        

updateEmpMan()          

removeEmp()             

viewEmpByMan()          

deleteDept()            

deleteRole()            

deleteEmp()             

viewBudgets()         
