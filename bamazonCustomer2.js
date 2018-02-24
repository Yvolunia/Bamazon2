// Node Packages

var inquirer = require("inquirer");

var fs = require("fs");

var mysql = require("mysql");

var keys = require('./keys.js');

// Create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: keys.mysql.user,

  // Your password
  password: keys.mysql.password,
  database: "Bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readBamazon_DB();
});

function readBamazon_DB() {
  connection.query("SELECT product_name FROM products", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

// // Created a series of questions
// inquirer.prompt([

//   {
//     type: "input",
//     name: "name",
//     message: "Who are you???"
//   },

//   {
//     type: "list",
//     name: "doingWhat",
//     message: "What are you doing in my house??",
//     choices: ["I made you cookies!", "No lie dude. I'm here to rob you.", "Uh. This is my house... Who are YOU???"]
//   },

//   {
//     type: "checkbox",
//     name: "carryingWhat",
//     message: "What are you carrying in your hands??",
//     choices: ["TV", "Slice of Toast", "Butter Knife"]
//   },

//   {
//     type: "confirm",
//     name: "canLeave",
//     message: "Can you leave now?"
//   },

//   {
//     type: "password",
//     name: "myPassword",
//     message: "Okay fine. You can stay. But only if you say the magic password."
//   }

// ]).then(function(user) {

//   if (user.confirm) {
//     console.log("so you're stuck here too, then?");
//   }

//   // If the user guesses the password...
//   if (user.myPassword === "myHouse") {

//     console.log("==============================================");
//     console.log("");
//     console.log("Well a deal's a deal " + user.name);
//     console.log("You can stay as long as you like.");
//     console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
//     console.log("");
//     console.log("==============================================");
//   }


//   // If the user doesn't guess the password...
//   else {

//     console.log("==============================================");
//     console.log("");
//     console.log("Sorry " + user.name);
//     console.log("I'm calling the cops!");
//     console.log("");
//     console.log("==============================================");

//   }
// });