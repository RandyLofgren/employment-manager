DROP DATABASE IF EXISTS employmentdb;

CREATE DATABASE employmentdb;

USE employmentdb;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);



CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT(10) NULL,
  PRIMARY KEY (id)
);



CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  role_id INT(10) NULL,
  manager_id INT(5) NULL,
  PRIMARY KEY (id)
);

