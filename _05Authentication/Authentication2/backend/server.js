const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const JWT_SECRET = "RRR";

app.use(cors());
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username,
    password,
  });

  res.json({ message: "user added successfully" });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userFound = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!userFound) {
    return res.status(400).json({ message: "user not found!" });
  }
  const token = jwt.sign({ username }, JWT_SECRET);
  res.json({ token: token });
});

function authUser(req, res, next) {
  const token = req.headers.token;
  if (!token) return res.status(400).send("The token not found");

  const decodedData = jwt.verify(token, JWT_SECRET);
  if (!decodedData) return res.status(400).send("user authentication failed");

  const username = decodedData.username;
  req.username = username;

  next();
}
app.get("/me", authUser, (req, res) => {
  //authenticate the user then send the username
  res.send({ user: req.username });
});
app.listen(3333);
