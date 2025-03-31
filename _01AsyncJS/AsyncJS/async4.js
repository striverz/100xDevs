//creating the Promisified fileRead
const fs = require("fs");
function promisifiedFileReading(path, type) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, type, function (error, data) {
      if (error) {
        reject("Error White reading the file");
      } else {
        resolve(data);
      }
    });
  });
}
function callback(data) {
  console.log(data);
}

promisifiedFileReading("m.txt", "utf-8").then(callback).catch(callback);
