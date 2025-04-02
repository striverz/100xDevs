const { Command } = require("commander");
const program = new Command();
const fs = require("fs");
program
  .name("CLI Todos")
  .description("The command line interface of Todos")
  .version("1.0.0");

program
  .command("addToDo")
  .description("Add the todo task")
  .argument("<string>", "takes string as argument")
  .action((task) => {
    fs.readFile("todos.json", "utf-8", function (err, data) {
      const jsonData = JSON.parse(data);
      jsonData.toDoTasks.push(task);

      const jsonString = JSON.stringify(jsonData);

      fs.writeFile("todos.json", jsonString, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("todo task added successfully");
        }
      });
    });
  });

program
  .command("deleteToDo")
  .description("deletes the to-do tasks from the todoList")
  .argument("<string>", "takes a string")
  .action((task) => {
    fs.readFile("todos.json", "utf-8", function (err, data) {
      const jsonData = JSON.parse(data);
      jsonData.toDoTasks = jsonData.toDoTasks.filter((tasks) => tasks != task);

      const jsonString = JSON.stringify(jsonData);

      fs.writeFile("todos.json", jsonString, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("deleted the todo");
        }
      });
    });
  });

program.parse();
