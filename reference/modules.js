//* File System

//Modules -> modules are reusable chunks of code that is commonly used in routing , requests etc.

//*Types of modules:
//? File System  Module -> allows us to perform file operations
//? HTTP Module -> allows us to perform http requests
//? Path Module -> helps us on file directories
//? OS Module -> Provides information about Operating Systems
//? URL Module -> Allow us to parse and construct the URL
//? Crypto Module -> Provides cryptography functionality such as encrypting the data

//importing the file system module in node
const fs = require("fs");
//importing the http module in node
const http = require("http");
//importing the path module in node
const path = require("path");
//importing OS module
const os = require("os");
//import URL module
const url = require("url");
//import Crypto module
const crypto = require("crypto");
//requires or import our custom greeting module
const sayHello = require("./greeting");

//requires the math module that has mutiple exports
const math = require("./math.js");

//requires the lodash package
const lodash = require("lodash");

//* Reading a txt file using file system module
/** 

//first parameter is file name
//second parameter is the format of the file
//third parameter is a callback function with parameters error and data
//? error -> if we caught an error during the code operation it will have a value
//? data -> if we dont caught any error we will get the data from the .txt file
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
*/

//* Writing in a text file using file system module

/*
//what we will be writing in the text file
//timemark : 18:15
const content = "Windyl Gwapo";
//first parameter is the file where we want to write, if no file is detected it automatically creates the file for us
//second parameter is the content of what we want to write
//third parameter is the callback function
fs.writeFile("output.txt", content, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File is Written");
});
*/

/*
//*Creating simple server
//first parameter is the request (req)
//second parameter is the response (res)

//? A basic server that send status code and set the header then send the message hello world
const server = http.createServer((req, res) => {
  //sends the status code to 200 (request is ok or successfull) when the server instance is called
  res.statusCode = 200;

  //converts the content into text plain
  res.setHeader("Content-Type", "text/plain");
  //returns a message to a browser
  res.end("Hello, World");
});

//first parameter (3000) -> specifies that the server will start in port 3000
//second parameter is a callback function

//runs the server in port 3000 and displays hello world  , when the link is clicked you will be redirected to a page that says hello world
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

*/

/*
const directory = "/user/local";
const fileName = "example.txt";

//helps us join the directory and the filename
const fullPath = path.join(directory, fileName);

console.log(fullPath);
*/

//* returns the platform of our OS
//the total mem and free meem is in bytes so it might need conversion if you needed so
// console.log("Platform", os.platform());
//returns the CPU Architecture of our system
// console.log("CPU Architecture:", os.arch());
//returns the operating system release
// console.log("OS Version:", os.version());
//returns the total memory of the system
// console.log("Total Memory:", os.totalmem());
//returns the total free memory of our system
// console.log("Free Memory:", os.freemem());

/*
//*Using the URL module
const myUrl = new URL("https://example.com:8080/path/name?query=hello#hash");
console.log("HOST:", myUrl.host); //* example.com:8080
console.log("Pathname:", myUrl.pathname); //* path/name
console.log("Search Params:", myUrl.searchParams); //* URLSearchParams { 'query' => 'hello' }
*/
/*
//* Using the crypto
//the parameter in hash accepts what type of hash that you want to use
const hash = crypto.createHash("sha256");
//hash the message provided in the parameter
hash.update("Hello, World!");
//finalizes the hash
//the parameter defines what type of value is returned
console.log(hash.digest("hex")); //*dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f
*/
/*
//* Using our custom module with single export
const message = sayHello("Windyl");
const message2 = sayHello("Kristine");
console.log(message);
console.log(message2);

//* Using our custom module with multiple export
const addition = math.add(2, 2);
const subtract = math.subtract(5, 3);

console.log("Addition result: ", addition);
console.log("Subtraction result: ", subtract);

*/

//* Sample usage of lodash

const numbers = [1, 2, 3, 4, 5];
const letters = ["A", "E", "I", "O", "U"];
//reverse the order of arrays using lodash
const reversed = lodash.reverse(numbers);
const letterReversed = lodash.reverse(letters);
console.log(reversed);
console.log(letterReversed);
