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
                'Delete department',
                'Delete role',
                'Delete employee',

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
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What department would you like to add?"
        }
    ]).then(deptAnswers => {
        connection.query(
            "INSERT INTO department set ?", deptAnswers,
            function (err, res) {
                if (err) throw err;
                viewDept();
            }
        )
    })


}

function addRole() {
    console.log("Inserting a new role...\n");
    connection.query("SELECT * from department;", (err, results) => {
        if (err) console.log(err)
        const deptList = results.map(dept => { return { name: dept.name, value: dept.id } })

        inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "What role title would you like to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "What salary does this role make?"
            },
            {
                name: "department_id",
                type: "list",
                message: "What department is this role in?",
                choices: deptList
            }

        ]).then(roleAnswers => {

            connection.query(
                "INSERT INTO role SET ?", roleAnswers,
                function (err, res) {
                    if (err) throw err;
                    viewRoles();
                }
            );
        })
    })

};
function addEmp() {
    console.log("Inserting a new employee...\n");
    connection.query("SELECT * from role;", (err, results) => {
        if (err) console.log(err)
        const roleList = results.map(role => { return { name: role.title, value: role.id } })
        connection.query("SELECT * from employee;", (err, results) => {
            if (err) console.log(err)
            const empList = results.map(emp => { return { name: `${emp.first_name} ${emp.last_name}`, value: emp.id } })
            inquirer.prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "What is the employees first name?"
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "What is the employees last name?"
                },
                {
                    name: "role_id",
                    type: "list",
                    message: "What is the employees role?",
                    choices: roleList
                },
                {
                    name: "manager_id",
                    type: "list",
                    message: "Who is this employees manager?",
                    choices: empList
                }
            ]).then(employeeAnswers => {

                connection.query(
                    "INSERT INTO employee SET ?", employeeAnswers,
                    function (err, res) {
                        if (err) throw err;
                        viewEmp();
                    }
                );
            })
        })
    })
};

function updateEmpRoles() {
    console.log("Updating employee role...\n");
    connection.query("SELECT * from role;", (err, results) => {
        if (err) console.log(err)
        const roleUpList = results.map(role => { return { name: role.title, value: role.id } })
        connection.query("SELECT * from employee;", (err, results) => {
            if (err) console.log(err)
            const empUpList = results.map(emp => { return { name: `${emp.first_name} ${emp.last_name}`, value: emp.id } })

            inquirer.prompt([
                {
                    name: "role_id",
                    type: "list",
                    message: "What new role would you like to assign this employee?",
                    choices: roleUpList
                },
                {
                    name: "id",
                    type: "list",
                    message: "Which employee would you like to update?",
                    choices: empUpList
                }
            ]).then(empUpAnswers => {
                    console.log(empUpAnswers)
                connection.query(
                    "UPDATE employee SET ? WHERE ?", 
                    [{
                          role_id: empUpAnswers.role_id 
                    },
                     {
                        
                        id: empUpAnswers.id
                     }
                    ],
                    function (err, res) {
                        if (err) throw err;
                        viewEmp();
                    }
                );
            })

        })
    })


};



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

function deleteDept() {
    console.log("Deleting a department...\n");
    connection.query("SELECT * from department;", (err, results) => {
        if (err) console.log(err)
        const deptDelList = results.map(dept => { return { name: dept.name, value: dept.id } })
        inquirer.prompt([
            {
                name: "id",
                type: "list",
                message: "Which department would you like to delete?",
                choices: deptDelList
            },
        ]).then(deptDelAnswers => {
            connection.query(
                "DELETE FROM department WHERE ?", deptDelAnswers,
                function (err, res) {
                    if (err) throw err;
                    viewDept();
                }
            );
        })

    })
};

function deleteRole() {
    console.log("Deleting a role...\n");
    connection.query("SELECT * from role;", (err, results) => {
        if (err) console.log(err)
        const roleDelList = results.map(role => { return { name: role.title, value: role.id } })
        inquirer.prompt([
            {
                name: "id",
                type: "list",
                message: "Which role would you like to delete?",
                choices: roleDelList
            },
        ]).then(roleDelAnswers => {
            connection.query(
                "DELETE FROM role WHERE ?", roleDelAnswers,
                function (err, res) {
                    if (err) throw err;
                    viewRoles();
                }
            );
        })

    })



};

function deleteEmp() {
    console.log("Deleting an employee...\n");

    connection.query("SELECT * from employee;", (err, results) => {
        if (err) console.log(err)
        const empDelList = results.map(emp => { return { name: `${emp.first_name} ${emp.last_name}`, value: emp.id } })

        inquirer.prompt([

            {
                name: "id",
                type: "list",
                message: "Which employee would you like to update?",
                choices: empDelList
            }
        ]).then(empDelAnswers => {

            connection.query(
                "DELETE from employee WHERE ?", empDelAnswers,
                function (err, res) {
                    if (err) throw err;
                    viewEmp();
                }
            );
        })

    })
};
