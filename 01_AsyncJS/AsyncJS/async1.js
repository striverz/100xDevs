const fs = require("fs");

//Synchronously Reading the file data
const contents1 = fs.readFileSync("m.txt", "utf-8"); //waits for 2s then only move to the next line
console.log(contents1);

const contents2 = fs.readFileSync("n.txt", "utf-8"); //waits for the 2s then only move to the next line
console.log(contents2);

console.log("Done!");
