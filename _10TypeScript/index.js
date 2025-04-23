"use strict";
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Manikanta");
function add(number1, number2) {
    return number1 + number2;
}
const value = add(2, 3);
console.log(value);
function isValidAge(age) {
    return age >= 18;
}
console.log(isValidAge(20));
console.log(isValidAge(16));
function callback() {
    console.log("callback function called");
}
function main(fn) {
    setTimeout(callback, 3000);
}
main(callback);
