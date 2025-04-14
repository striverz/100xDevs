const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {});

app.post("/signin", (req, res) => {});

app.get("/me", (req, res) => {});

app.listen(3333);
