const fs = require("fs");

function print(error, data) {
  console.log(data);
}
fs.readFile("m.txt", "utf-8", print);
fs.readFile("n.txt", "utf-8", print);

console.log("Done!");
