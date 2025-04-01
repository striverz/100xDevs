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

program
  .command("count_letters")
  .description("Counts the total number of characters from a file")
  .arguments("<file>", "File to read")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let fileData = data;
        let countOfLetters = 0;
        for (var c of fileData) {
          if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z"))
            countOfLetters++;
        }
        console.log(
          `The total count of lettes in the file ${file} are ${countOfLetters}`
        );
      }
    });
  });

program.parse();
