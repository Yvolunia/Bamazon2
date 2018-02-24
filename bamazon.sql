DROP DATABASE IF EXISTS Bamazon_DB;
CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

--Creates new rows containing data in all columns --

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("JavaScript and JQuery: Interactive Front-End Web Development", "books", 23.07, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MySQL Crash Course", "books", 25.26, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("
Mastering MongoDB 3.x: An expert's guide to building fault-tolerant MongoDB applications", "books", 28.33, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell Laptop", "computers", 430.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP Laptop", "computers", 697.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brother Laser Printer", "computers", 169.05, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("aspirin", "health_beauty", 8.50, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bubble bath", "health_beauty", 3.75, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tissues", "health_beauty", 4.20, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rose candle", "health_beauty", 15.22, 30);


