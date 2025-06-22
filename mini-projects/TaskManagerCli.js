const readline = require("readline");
const fs = require("fs");
var datas = [];

console.log("+--------- CLI Task Manager ------------+");
console.log("1 - Add Task");
console.log("2 - Delete Task");
console.log("3 - Update Task");
console.log("4 - Task List");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Enter choice:", (choice) => {
  switch (Number(choice)) {
    case 1:
      getTaskInput();
      break;
    case 4:
      viewTasks();
      break;

    default:
      console.error("Invalid Choice");
      break;
  }
});

async function getTaskInput() {
  let taskData = {},
    tasks = [];
  input.question("Task Name:", (task) => {
    taskData.taskName = task;
    taskData.createdAt = Date.now();
    tasks.push(taskData);

    fs.readFile("database.json", "utf8", (err, data) => {
      if (err) {
        return console.log("Error on reading file", err);
      }
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.length > 1) {
          parsed.forEach((data) => {
            tasks.push(data);
          });
        } else {
          tasks.push(parsed[0]);
        }
        writeFile(tasks);
      }
    });

    input.close();
  });
}

function writeFile(tasks) {
  fs.writeFile("database.json", JSON.stringify(tasks), (error) => {
    console.log("writefile");
    if (error) {
      return console.log("Error writing on file");
    }
  });
}
function viewTasks() {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      return console.log("Error on reading file", err);
    }
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed.length > 1) {
        console.log("+--- Task List ---+");
        parsed.forEach((data) => {
          console.log(data.taskName);
        });
        return;
      } else {
        console.log(data[0].taskName);
        return;
      }
    }
  });
}

function getDeleteInput() {}

function getUpdateInput() {}

function deleteTask() {}

function updateTask() {}
