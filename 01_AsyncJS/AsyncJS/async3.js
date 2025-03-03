//creating the promisified setTime out
function setTimeoutPromisified(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 5000);
  });
}

function callback() {
  console.log("The SetTimeout is Called");
}
setTimeoutPromisified(3000).then(callback);
