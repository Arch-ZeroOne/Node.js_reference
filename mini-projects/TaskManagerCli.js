const readline = require("readline");
const fs = require("fs");
var datas = [];

console.log("+--------- CLI Task Manager ------------+");
console.log("1 - Add Task");
console.log("2 - Delete Task");
console.log("3 - Task List");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Enter choice:", (choice) => {
  switch (Number(choice)) {
    case 1:
      getTaskInput();
      break;
    case 2:
      deleteTask();
      break;
    case 3:
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

    fs.readFile("database.json", "utf8", (err, data) => {
      if (err) {
        return console.log("Error on reading file", err);
      }
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.length > 1) {
          taskData.id = parsed.length + 1;
          tasks.push(taskData);
          parsed.forEach((data) => {
            tasks.push(data);
          });
        } else {
          taskData.id = parsed.length + 1;
          tasks.push(taskData);
          tasks.push(parsed[0]);
        }
        console.log("\nTask added successfully\n");
        writeFile(tasks);
      }
      if (!data) {
        taskData.id = 1;
        tasks.push(taskData);
        console.log("\nTask added successfully\n");
        writeFile(tasks);
      }
    });

    input.close();
  });
}

function viewTasks() {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      return console.log("Error on reading file", err);
    }
    if (data) {
      const parsed = JSON.parse(data);
      console.log("\t\t+--- Task List ---+");
      if (parsed.length > 1) {
        parsed.forEach((data) => {
          console.log(`\t\t    ${data.taskName}\n`);
        });
      } else {
        console.log(`\t\t    ${parsed[0].taskName}\n`);
      }
    }
    input.close();
  });
}

function deleteTask() {
  let tasks = [];
  input.question("Task id:", (id) => {
    fs.readFile("database.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error occured:", err);
        return;
      }
      if (data) {
        const parsed = JSON.parse(data);
        const filtered = parsed.filter((data) => data.id != id);

        if (filtered) {
          filtered.forEach((data) => {
            tasks.push(data);
          });
          writeFile(tasks);
        }
      }
    });
    input.close();
  });
}

function writeFile(tasks) {
  fs.writeFile("database.json", JSON.stringify(tasks), (error) => {
    if (error) {
      return console.log("Error writing on file");
    }
  });
}
