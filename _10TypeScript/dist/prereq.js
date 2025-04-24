"use strict";
function findSumOfUsers(a, b) {
    return a.age + b.age;
}
const res = findSumOfUsers({
    name: "mani",
    age: 21,
}, {
    name: "swamy",
    age: 24,
});
console.log(res);
