const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "RRR";
const app = express();

app.use(express.json());

const users = [];
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  res.send("user Signed Up Successfully");
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userFound = users.find(
    (user) => user.username == username && user.password == password
  );
  if (userFound) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    res.send(token);
  } else {
    res.status(401).send("User Not Found!");
  }
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedMessage = jwt.verify(token, JWT_SECRET);
  const username = decodedMessage.username;

  if (username) {
    res.json({ username });
  } else {
    res.status(401).send("no users found!");
  }
});

app.listen(3333);
