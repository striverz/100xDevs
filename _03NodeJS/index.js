//library for creating the own Command Line Interface (CLI)
const { Command } = require("commander");
const program = new Command();

const fs = require("fs");

program
  .name("CLI For Files")
  .description("CLI for dealing with the files")
  .version("1.0.0");

program
  .command("count_words") //what commands it is doing
  .description("Counts the number of words presented in the file") //what does the command will eventually do
  .arguments("<file>", "file to read") //what arguments it will takes
  .action((file) => {
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) {
        console.log(err);
      } else {
        const totalWords = data.split(" ").length;
        console.log(
          `The total number of words are ${totalWords} in the file ${file}`
        );
      }
    });
  });

program.parse();
