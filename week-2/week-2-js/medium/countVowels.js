/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
  str=str.toLowerCase();

  let cnt=0;
  let vowels="aeiou";
  for(let s of str){
    if(vowels.includes(s)) cnt++;
    
  }
  return cnt;
}

module.exports = countVowels;