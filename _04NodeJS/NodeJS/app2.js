//Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express");
const app = express();

app.use(express.json());

function loggerMiddleware(req, res, next) {
  console.log(req.method);
  console.log(req.hostname + req.url);
  console.log(new Date());
  next();
}
app.use(loggerMiddleware); //global middleware below all are default go through the this middle ware

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
});

app.post("/mul", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  res.json({
    answer: a * b,
  });
});

app.listen(3000);
