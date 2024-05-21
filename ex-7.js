// ให้เขียน Function ที่ชื่อว่า isPalindrome ซึ่งมีคุณสมบัติดังต่อไปนี้
// รับ Parameter string เป็น String ที่เป็นคำหรือ ประโยคอะไรก็ได้
// โดย Function นี้จะทำการตรวจสอบ string ที่ได้รับเข้ามาว่าเป็นคำที่สามารถอ่านจากหลังไปหน้าหรือหน้าไปหลังแล้วมีความหมายเหมือนกันหรือไม่ คำแบบนี้เรียกว่า Palindrome
// ในกรณีที่ string เป็น Palindrome ตัว Function นี้ จะ Return ผลลัพธ์เป็น true
// ในกรณีที่ string ไม่เป็น Palindrome ตัว Function นี้ จะ Return ผลลัพธ์เป็น false
// ให้เขียนโปรแกรมที่สามารถตรวจสอบ String ว่าเป็น Palindrome หรือไม่



function isPalindrome(string) {
  // Start coding here
 let reversedWord = string.split("").reverse().join("");
  console.log(reversedWord);
  if(string === reversedWord){
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false

