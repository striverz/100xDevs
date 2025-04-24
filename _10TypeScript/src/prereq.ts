interface A {
  name: string;
  age: number;
}

function findSumOfUsers(a: A, b: A): number {
  return a.age + b.age;
}

const res = findSumOfUsers(
  {
    name: "mani",
    age: 21,
  },
  {
    name: "swamy",
    age: 24,
  }
);

console.log(res);
