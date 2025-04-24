function identity<T>(arg: T): T {
  return arg;
}

let answer1 = identity<string>("Manikanta");
let answer2 = identity<number>(100);
console.log(answer1);
console.log(answer2);
