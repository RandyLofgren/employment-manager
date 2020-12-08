INSERT INTO department (name)
VALUES ("sales");

INSERT INTO department (name)
VALUES ("finance");

INSERT INTO department (name)
VALUES ("engineering");

INSERT INTO department (name)
VALUES ("legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 48902, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 38903, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 120573, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 78573, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 67328, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 75423, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 104356, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 72957, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Jones", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Smith", 2, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Webs", 3, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Timmy", "Johnson", 4, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rick", "Roads", 5, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Donald", "Stevens", 6, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jimmy", "Punts", 7, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michelle", "Wilson", 8, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eduardo", "Rodriguez", 2, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Claes", "Nilsson", 2, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Johnny", "Slepp", 4, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tyrone", "Jones", 4, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cliff", "Marx", 5, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Yelps", 6, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tammy", "Yammy", 8, 0);