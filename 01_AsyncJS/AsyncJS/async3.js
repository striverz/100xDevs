const fs = require("fs");

function promisifiedVersionOfFileRead(filPath, type) {
  return new Promise(function (resolve) {
    fs.readFile(filPath, type, function (err, data) {
      resolve(data);
    });
  });
}

promisifiedVersionOfFileRead("m.txt", "utf-8").then((IGotData) => {
  console.log(IGotData);
});
