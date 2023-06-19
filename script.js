// Assignment Code

// 1. promp the user for the password criteria, 
// a)password length >= 8 and < 128,
// b)upper case, lower case, numbers, symbols
// 2. valadate the input
// 3. generate password

var generateBtn = document.querySelector("#generate");
// created varables for 
var upperCase = ["ABCDEFGHIJKLMNOPQRSWXYZ"];
var lowerCase = ["abcdefghijklmnopqrswxyz"];
var numbers = ["12345678910"];
var symbols  = ["!@#$%^&*()_+-={}[]|\:;<>,./?"];

var password = "";

function generatePassword(){
var char =  prompt("number of characters?");
// characterLength is the length of characters below

newChar = upperCase + lowerCase + numbers + symbols;
console.log(typeof newChar)

if (char >= 8 && char <= 128){
while (char > password.length){
  password += newChar[Math.floor(Math.random() * newChar.length)];
}

  return password;  
}

else{
  return "please use greater than 8 and less than 128 characters";
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
