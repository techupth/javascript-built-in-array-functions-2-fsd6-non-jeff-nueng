function isPalindrome(string) {
  console.log(string.split(''));
  console.log(string.split('').reverse(''));
  return string === string.split('').reverse('').join('')
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false