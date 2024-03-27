DROP DATABASE IF EXISTS workout_db;
CREATE DATABASE workout_db;

USE workout_db;

CREATE TABLE user (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    age INT,
    email VARCHAR(30),
    password VARCHAR(15)
);


CREATE TABLE 