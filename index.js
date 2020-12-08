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
                case 'Add department':
                    addDept()
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




function addDept() {
    console.log("Inserting a new department...\n");
    connection.query(
        "INSERT INTO department SET ?",
        {
            name: "marketing",                  //need to fix this to call something with inquirer?
        },
        function (err, res) {
            if (err) throw err;


            viewDept();
        }
    );

}

function addRole() {
    console.log("Inserting a new role...\n");
    connection.query(
        "INSERT INTO role SET ?",
        {
            title: "marketing manager",                  //need to fix this to call something with inquirer?
            salary: 92045,                  //need to fix this to call something with inquirer?
            department_id: 5,                  //need to fix this to call something with inquirer?
        },
        function (err, res) {
            if (err) throw err;
            viewRole();
        }
    );
}

function addEmp() {
    console.log("Inserting a new employee...\n");
    connection.query(
        "INSERT INTO employee SET ?",
        {
            first_name: "FirstName",                  //need to fix this to call something with inquirer?
            last_name: "LastName",
            role_id: 5,
            manager_id: 5
        },
        function (err, res) {
            if (err) throw err;
            viewEmp();
        }
    );
}

function viewDept() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        connection.end();
    });
}

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        connection.end();
    });
}

function viewEmp() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        connection.end();
    });
}

function updateEmpRoles() {
    console.log("Updating employee role...\n");
    connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
            {
                role_id: 4     //Need to add inquirer
            },
            {
                id: "19"     ///Need to add inquirer
            }
        ],
        function (err, res) {
            if (err) throw err;
            viewEmp();
        }
    );
}


function updateEmpMan() {
    console.log("Updating employee manager...\n");
    connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
            {
                manager_id: 4     //Need to add inquirer
            },
            {
                id: "19"     ///Need to add inquirer
            }
        ],
        function (err, res) {
            if (err) throw err;
            viewEmp();
        }
    );
}



function viewEmpByMan() {

}

function deleteDept() {
    console.log("Deleting a department...\n");
    connection.query(
        "DELETE FROM department WHERE ?",
        {
            name: "marketing"
        },
        function (err, res) {
            if (err) throw err;
            viewDept();
        }
    );

}

function deleteRole() {
    console.log("Deleting a role...\n");
    connection.query(
        "DELETE FROM role WHERE ?",
        {
            title: "marketing manager"
        },
        function (err, res) {
            if (err) throw err;
            viewRoles();
        }
    );


}

function deleteEmp() {
    console.log("Deleting an employee...\n");
    connection.query(
        "DELETE FROM employee WHERE ?",
        {
            id: 19                          //Need to fix to ask in inquirer
        },
        function (err, res) {
            if (err) throw err;
            viewEmp();
        }
    );

}

function viewBudgets() {

}      
