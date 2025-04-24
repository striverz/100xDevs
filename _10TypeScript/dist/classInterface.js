"use strict";
class UserImp {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18;
    }
}
let p1 = new UserImp("Manikanta", 21);
let p2 = new UserImp("Sara", 18);
console.log(p1.isLegal());
console.log(p2.isLegal());
