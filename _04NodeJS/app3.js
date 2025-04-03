//Create a middleware that counts total number of requests sent to a server.
// Also create an endpoint that exposes it

const express = require("express");
const app = express();

let countOfRequests = 0;
function requestsCountMiddleWare(req, res, next) {
  countOfRequests++;
  next();
}
app.use(requestsCountMiddleWare);

app.get("/login", (req, res) => {
  res.json({
    data: "Login Successful",
  });
});

app.get("/count", (req, res) => {
  res.json({
    data: `The count of requestsMade are ${countOfRequests}`,
  });
});

app.listen(3000);
