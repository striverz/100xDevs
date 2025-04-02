const express = require("express");
const app = express();

app.use(express.json());
let todos = [];

//create todo
app.post("/addtodo", (req, res) => {
  todos.push(req.body);
  res.send("todo added");
});

//read todo
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.patch("/updateToDo", (req, res) => {
  todos.forEach((todo) => {
    if (todo.id == req.body.id) {
      todo.task = req.body.task;
    }
  });

  res.send("updated todo");
});

//delete todo
app.delete("/deletetodo", (req, res) => {
  todos = todos.filter((oneObj) => oneObj.id != req.body.id);
  res.send("deleted todo");
});

app.listen(3333);
