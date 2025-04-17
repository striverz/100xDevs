"use strict";
function greet(name) {
  console.log(name);
}
greet("Manikanta");
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
function isValidAge(age) {
  return age > 18;
}
console.log(isValidAge(10));
console.log(isValidAge(21));

function functionOne(fn) {
  setTimeout(fn, 5000);
}
functionOne(function () {
  console.log("Second Function");
});
