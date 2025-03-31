// Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2
function setTimeoutPromisified(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("Hai");

  await setTimeoutPromisified(3000);
  console.log("Hello");

  await setTimeoutPromisified(6000);
  console.log("Hai Hello There");
}
solve();

//2nd Assignment Question

const fs = require("fs");
function cleanFile(filePath, cb) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

async function main() {
  await cleanFile("m.txt");
  console.log("Done cleaning file");
}

main();
