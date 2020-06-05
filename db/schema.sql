DROP DATABASE IF EXISTS Godo;
CREATE DATABASE Godo;
USE Godo;



-- CREATE TABLE business (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) UNIQUE NOT NULL,
--   average_age INT (10) NOT NULL,
--   min_age INT (10) NOT NULL,
--   price INT (10) MIN 1 MAX 4,
--   lng INT.DECIMAL (3,6),
--   lat INT.DECIMAL (3,3),
--   tags VARCHAR (200),
--   reveiws VARCHAR (500),
--   rating INT.DECIMAL (1,1),
--   department_id INT UNSIGNED NOT NULL,
--   INDEX dep_ind (department_id),
--   CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
-- );

-- CREATE TABLE user (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   age INT (10) NOT NULL,
--   budget INT (10) MIN 1 MAX 4,
--   lng INT.DECIMAL (3,6),
--   lat INT.DECIMAL (3,3),
--   preferences VARCHAR (200),
--   CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
--   manager_id INT UNSIGNED,
--   INDEX man_ind (manager_id),
--   CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
