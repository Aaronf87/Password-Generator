// Assignment Code

// 1. promp the user for the password criteria, a)password length > 128, b)upper case, lower case, numbers, symbols
// 2. valadate the input
// 3. generate password

var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9,10];
var password = "";
// .length, .random, .floor, for loop, array of numbers,characters,symbols, 

function generatePassword(){
var char =  prompt("number of characters?");
// characterLength is the length of characters below



newChar = upperCase + lowerCase+ numbers;
console.log(newChar)

var randomUcase = upperCase[Math.floor(Math.random()* 10 ) + 1];
var randomLcase = lowerCase[Math.floor(Math.random()* 10 ) + 1];
var randomNumber = numbers[Math.floor(Math.random()* 10 ) + 1];


password += randomUcase;
password += randomLcase;
password += randomNumber;

while (char > password.length){
  password += newChar[Math.floor(Math.random() * newChar.length)];


}

  return password;  
}

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
