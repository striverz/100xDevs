interface Person {
  name: string;
  age: number;
  isLegal: () => boolean;
}

class UserImp implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isLegal(): boolean {
    return this.age > 18;
  }
}

let p1 = new UserImp("Manikanta", 21);
let p2 = new UserImp("Sara", 18);
console.log(p1.isLegal());
console.log(p2.isLegal());
