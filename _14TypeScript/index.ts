function greet(name: string) {
  console.log(name);
}
greet("Manikanta");

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

function isValidAge(age: number): boolean {
  return age > 18;
}
console.log(isValidAge(10));
console.log(isValidAge(21));

function functionOne(fn: () => void) {
  setTimeout(fn, 5000);
}
functionOne(function () {
  console.log("Second Function");
});
