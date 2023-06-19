// Assignment Code

// 1. promp the user for the password criteria, 
// a)password length >= 8 and < 128,
// b)upper case, lower case, numbers, symbols
// 2. valadate the input
// 3. generate password

var generateBtn = document.querySelector("#generate");
// created varables for the password
var upperCase = ["ABCDEFGHIJKLMNOPQRSWXYZ"];
var lowerCase = ["abcdefghijklmnopqrswxyz"];
var numbers = ["12345678910"];
var symbols  = ["!@#$%^&*()_+-={}[]|\:;<>,./?"];

// staring password is an empty string
var password = "";

// THIS function is declared to so it may run in writePassword function
function generatePassword(){
var char =  prompt("number of characters?");

// characterLength is the length of characters below

newChar = upperCase + lowerCase + numbers + symbols;
console.log(typeof newChar)

// conditional statement with while loop to create pw under criteria
if (char >= 8 && char <= 128){
  // inserted a while loop to return the proper length
while (char > password.length){
  password += newChar[Math.floor(Math.random() * newChar.length)];
}
  return password;  
}

else{
  return "please use a number 8 characters or greater and 128 characters or less";
}}
// Write password to the #password input

// writePassword function HERE
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button

// syntax: Element.addEventListener(event, function, useCapture);

generateBtn.addEventListener("click", writePassword);
