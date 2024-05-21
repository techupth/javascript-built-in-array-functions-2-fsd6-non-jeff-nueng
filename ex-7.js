function isPalindrome(string) {
  return string === string.split('').reverse().join('') ? true : false;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false


// const letters = "we are apple ."
// let letterSplit = letters.split(' ')
// let leastWord = letterSplit[0]
// letterSplit.forEach((letter)=>{
//   if (leastWord.length > letter.length) {
//     leastWord = letter
//   }
// })

// console.log(leastWord.length)