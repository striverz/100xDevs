const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

app.post("/addtodo", (req, res) => {
  const todo = req.body;
  let todosArray = [];
  fs.readFile("./todosList.json", "utf-8", (err, data) => {
    let readData = JSON.parse(data);
    readData.push(todo);

    fs.writeFile("./todosList.json", JSON.stringify(readData), (err, data) => {
      res.json({
        message: "to-do task added successfully",
      });
    });
  });
});

app.get("/gettodos", (req, res) => {
  fs.readFile("./todosList.json", "utf-8", function (err, data) {
    let todos = JSON.parse(data);
    console.log(todos);
    res.json({
      todos,
    });
  });
});

app.listen(3333);
