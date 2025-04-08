const express = require("express");
const app = express();

app.use(express.json());

app.get("/add", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a + b,
  });
});
app.get("/subtract", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a - b,
  });
});
app.get("/multiply/:a/:b", (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  res.json({
    ans: a * b,
  });
});
app.get("/divide/:a/:b", (req, res) => {
  const a = req.params.a;
  const b = req.params.b;
  res.json({
    ans: a / b,
  });
});

app.listen(3000);
