// Node Packages

var inquirer = require("inquirer");

var fs = require("fs");

var mysql = require("mysql");

var key = require('./key.js');

// Create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: key.mysql.user,

  // Your password
  password: key.mysql.password,
  database: "Bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});



// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "welcome",
      type: "rawlist",
      message: "Welcome to Bamazon! Are you here to shop?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      // based on their answer, either show categories or end program
      if (answer.welcome.toUpperCase() === "YES") {
        postCategories();
      }
      else {
        console.log("Come Back Another Time!");
      }
    });
}

function postCategories() {
     // query the database for all categories
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
// once you have the items, prompt the user to choose a category
 inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
         },
         message: "Which item are you interested in?"
          },
       ])
      });
    }
 
      