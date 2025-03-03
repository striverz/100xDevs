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
