/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();

  let s1="";
  for(let s of str){
    if(s>='a' && s<='z') s1+=s;
  }

  for(let i=0;i<s1.length/2;i++){
    if(s1[i]!=s1[s1.length-i-1]) return false;
  }
  return true;
}

module.exports = isPalindrome;
