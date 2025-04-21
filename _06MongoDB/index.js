const express = require("express");
const { connectDB } = require("./config/databaseConnection");
const { UserModel } = require("./models/usersModel");
const { TodoModel } = require("./models/todosModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");

const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3333;
const JWT_SECRET = "RRR";

app.use(express.json());

app.post("/signup", async (req, res) => {
  //Input Validation using the Zod Library

  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(100),
    name: z.string().min(5).max(100),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect Credentials",
      error: parsedDataWithSuccess.error,
    });
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  const hashPassword = await bcrypt.hash(password, 5);

  await UserModel.create({
    email: email,
    password: hashPassword,
    name: name,
  });

  res.json({
    message: "User Signup Successful!",
  });
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  const isHashPasswordMatches = bcrypt.compare(password, user.password);

  if (isHashPasswordMatches) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(401).send("Invalid Credentials");
  }
});

async function authUser(req, res, next) {
  const token = req.headers.token;
  if (!token) res.status(401).send("The token is not valid!");
  const isTokenValid = jwt.verify(token, JWT_SECRET);
  if (!isTokenValid) return res.status(401).send("The Token is not valid!");

  const id = isTokenValid.id;
  const user = await UserModel.findById(id);
  req.user = user;
  req.userId = user.id;

  next();
}

app.post("/todo", authUser, async (req, res) => {
  const title = req.body.title;
  const status = req.body.status;
  const userId = req.body.userId;

  await TodoModel.create({
    title,
    status,
    userId,
  });

  res.json({
    message: "The todo tasks added",
  });
});

app.get("/todos", authUser, async (req, res) => {
  const todosData = await TodoModel.find({
    userId: req.userId,
  });
  res.json({
    todos: todosData,
  });
});

connectDB().then(() => {
  console.log("Data Base is Connected");
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});
