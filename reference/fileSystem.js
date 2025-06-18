//*File System (Streams)

//* A stream is an abstract interface for working with data that is "streamed" in chunks, rather than being read or written all at once it will help to save system memory

//*Streams in fs module follow the Node.js stream API:

//* Readable streams - reading data
//* Writable streams  - writing data
//* Duplex streams - Both Readable and Writable
//* Transform Streams - Duplex streams that can modify or transform the data as it is written and read
//* Piping Streams - allows you to efficiently transfer data from one stream to another  , processing it into chunks
//* Directories - Involves using the fs (File System) module to create, read, update,delete, and manage directories. The fs modules provides both synchronouse and asynchrounoys methods to handle directory related tasks

const fs = require("fs");

//* Performing stream operations with file system
//? First param is the file where we want to perform the operation , 2nd parameter is
//=================================================================
/*
//*Creates a readable stream
const readableStream = fs.createReadStream("example.txt", {
  encoding: "utf8",
});

//*Adding the listener events

//*it helps use pass the data from the .txt file and into smaller chunk
readableStream.on("data", (chunk) => {
  console.log(chunk);
});

//*triggers when  we completely read the file
readableStream.on("end", () => {
  console.log("Finished reading the file");
});

//*triggers when we get an error when we are reading the file
readableStream.on("error", (err) => {
  console.log("Error", err);
});
*/

/*
//*Creates a writable stream
const writableStream = fs.createWriteStream("writableOutput.txt");

//* writes the data in the parameter to writableOutput.txt
writableStream.write("Hello, ");
writableStream.write("Nigga");

//* signals the end of writing process
writableStream.end();
writableStream.on("finish", () => {
  console.log("Finished writing to the file");
});
*/
//================================================================
//* Piping Streams
/*
//*here we will copy the contents of the readable stream and write it into the writablestream instance
const readableStream = fs.createReadStream("example.txt");
const writableStream = fs.createWriteStream("example-output.txt");

readableStream.pipe(writableStream);

writableStream.on("finish", () => {
  console.log("File Copied Successfully");
});
*/
//================================================================
/*
//*Performing stream operation in large file
//*8importing readLine module
//*event driven
//*efficient in data management
const readLine = require("readline");
//*creating a readable stream that will contain the file where we want to read
const readableStream = fs.createReadStream("example.txt");
//*we will have to provide the input stream that we will have to read line by line
const rl = readLine.createInterface({ input: readableStream });

//*subscribing to an event to our rl variable everytime a line is found
rl.on("line", (line) => {
  console.log("Line:", line);
});

rl.on("close", () => {
  console.log("Finished pricessing the file");
});
*/
//================================================================
//*Creating the directory using Directories

/*
//* creates the folder
//* first paramater is the directory name , second parameter is the callback function that receives an error

//* mkdir() is an asynchronous method that creates a new directory
fs.mkdir("newDirectory", (err) => {
  //*trigggers when we get any error
  if (err) {
    console.error("Error creating directory:", err);
    return;
  }

  console.log("Directory created successfully");
});



//* mkdDirSync() is an synchronous method of creating a new directory

fs.mkdirSync("newDirectory2");
console.log("Directory is created succesfully");
*/
//=================================================================
//*Reading a directory using Directories

//* readdir() asynchronous way of reading a directory
//* The first parameter is the path of the directory that we want to read
//* The second parameter is the callback function that accepts the error and files , if there is an error it will be passed in the err, if it doesnt we can do something to the files in the directory
/*
fs.readdir("./", (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  //* displays the file that are present in the directory
  console.log("Directory Content:", files);
});

//* readdirSync() is an synchronous way of reading directories

const files = fs.readdirSync("./");
console.log(files);
*/
//=================================================================
//* Checking if a directory exists

//*asynchronous way
//*returns true or false
// const existing = fs.existsSync("./node_modules");

// if (existing) {
//   console.log("Directory exists");
// } else {
//   console.log("Directory does not exist");
// }
// =============================================================================
//*Removing a directory

//* rmdir() removes a directory asynchronously
//* receives the folder the name you want to remove and a callback function
//* when using rmdir() error occurs if an directory has a file or is not empty
// fs.rmdir("newDirectory2", (err) => {
//   if (err) {
//     console.error("Error removing directory:", err);
//     return;
//   }
//   console.log("Directory removed successfully");
// });
// =============================================================================
//*Removing a non-empty directory
//* rm() deletes the directory if directory is not empty
//* {recursive : true} means we want to clear the diretory and delete the directory itself
fs.rm("newDirectory2", { recursive: true }, (err) => {
  if (err) {
    console.log("Error deleting file:", err);
    return;
  }
  console.log("Files and Directory are removed successfully");
});
// =============================================================================
