const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/add", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  console.log(a + b);
  res.json({
    answer: a + b,
  });
});

app.listen(3333, () => {
  console.log("sever is listeninig");
});
