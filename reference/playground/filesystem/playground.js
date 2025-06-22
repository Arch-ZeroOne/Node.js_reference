const fs = require("fs");

//*reading a file

/*
fs.readFile("database.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error Occured:", err);
    return;
  }

  console.log(data);
});

*/

//*writing to a file
const content = "Windyl Parcon Monton";
/*
fs.writeFile("database.txt", content, (err, data) => {
  if (err) {
    console.error("Error occured:", err);
    return;
  }

  console.log("Content has been written successfully");
});
*/

//*Streams

//* Creating a Readable Stream
/*
const readableStream = fs.createReadStream("database.txt", {
  encoding: "utf8",
});

//Events of the readable stream

//*The "data event fires when a chunk of data is read"
readableStream.on("data", (chunk) => {
  console.log(chunk);
});

//*Fires when there is no more data in the database
readableStream.on("end", () => {
  console.log("File has been read successfully");
});

readableStream.on("error", (err) => {
  console.error("Eror occured:", err);
});

//*Writable Streams

//*Creating a Writable Stream

const writableStream = fs.createWriteStream("databas.txt");

//*writes the data to the text file
writableStream.write("Hello");
writableStream.write("Every");
writableStream.write("One");

writableStream.on("error", (err) => {
  console.log("Error during the writing process:", err);
});

//*ends the writing process
writableStream.end();

//*listens to the "finish" event when the writing process is done
writableStream.on("finish", () => {
  console.log("Finished Writing on file");
});
*/
//Piping Streams

// const readableStream = fs.createReadStream("file1.txt");
// const writableStream = fs.createWriteStream("file2.txt");

//* copies the content of the readable stream then write it to the file in the parameter

//readableStream.pipe(writableStream);

//writableStream.on("finish", () => {
//  console.log("File has been copied successfully");
//});

//perfoming stream opeation on larage files
/*
const readLine = require("readline");
const readableStream = fs.createReadStream("database.txt");
//the one that will read the file
const reader = readLine.createInterface({ input: readableStream });

//subcribing to the event everytime a line is found
reader.on("line", (line) => {
  //console.log("Line:", line);
});

//subscribe when the operation is done
reader.on("close", () => {
  // console.log("Done reading file using readline");
});

//*Creating directories using Directories in File System

//*mkdir() is short for make directory , it is an asynchronous way of creating a  new directory

fs.mkdir("fsPlayground", (err) => {
  if (err) {
    console.error("Error occured:", err);
    return;
  }

  console.log("Directory was created successfully");
});
*/

//*synchronous way of creating directories
// fs.mkdirSync("newDirectory2");
// console.log("Directory is created successfully");

//asynchronous way
//reads the current directory
// fs.readdir("./", (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }

//   console.log(files);
// });

//synchronous way

// const fileContent = fs.readdirSync("./");
// console.log(fileContent);

//*checking if a directory exists
// const existing = fs.existsSync("./");
// console.log(existing);

//removing directory

//asynchronous way

// fs.rmdir("newDirectory2", (err) => {
//   if (err) {
//     console.error("Error removing directory:", err);
//     return;
//   }

//   console.log("Directory removed successfully");
// });

fs.rm("testDir2", { recursive: true }, (err) => {
  if (err) {
    console.log("Error on file deletion:", err);
  }

  console.log("Files and Directory was removed");
});
