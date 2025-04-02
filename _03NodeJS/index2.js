const { Command } = require("commander");
const program = new Command();

program
  .name("isPrimeOrNot")
  .description("Checks wherether given number is prime or not")
  .version("1.0.1");

program
  .command("isPrime")
  .description("Checks whether given number is prime or not")
  .argument("number", "Takes a number")
  .action((number) => {
    let isPrime = true;
    for (let i = 2; i * i <= number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    isPrime ? console.log("Prime") : console.log("Not a Prime");
  });

program.parse();
