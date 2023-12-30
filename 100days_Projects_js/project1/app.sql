CREATE DATABASE IF NOT EXISTS register_page;

USE register_page;

CREATE TABLE IF NOT EXISTS clients (
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100)
);


