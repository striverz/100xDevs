const express = require("express");
const app = express();

app.use(express.json());

//creating a token Randomly
function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

const users = []; //global containers for storing all the users details

//(/signup API) for signup the user
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.send("User Signup successful");
});

//(/signin API) for signin the user and generaten the token and responded with the token
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let userFound = users.find(
    (user) => user.username == username && user.password == password
  );

  if (userFound) {
    const token = generateToken();
    userFound.token = token;

    res.json({
      token: token,
    });
  } else {
    res.status(401).json({ message: "User Not Found!" });
  }
});

//(/me API) for getting the users info based on the token associated with the user
app.get("/me", (req, res) => {
  const token = req.headers.token;
  const userFound = users.find((user) => user.token == token);
  if (userFound) {
    res.json({
      data: userFound.username,
    });
  } else {
    res.status(401).json({ message: "Token is invalid!" });
  }
});

app.listen(3333);
