//*File System (Streams)

//* A stream is an abstract interface for working with data that is "streamed" in chunks, rather than being read or written all at once it will help to save system memory

//*Streams in fs module follow the Node.js stream API:

//* Readable streams - reading data
//* Writable streams  - writing data
//* Duplex streams - Both Readable and Writable
//* Transform Streams - Duplex streams that can modify or transform the data as it is written and read
//* Piping Streams - allows you to efficiently transfer data from one stream to another  , processing it into chunks

const fs = require("fs");

//* Performing stream operations with file system
//? First param is the file where we want to perform the operation , 2nd parameter is

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

//* Piping Streams

//here we will copy the contents of the readable stream and write it into the writablestream instance
const readableStream = fs.createReadStream("example.txt");
const writableStream = fs.createWriteStream("example-output.txt");

readableStream.pipe(writableStream);

writableStream.on("finish", () => {
  console.log("File Copied Successfully");
});
