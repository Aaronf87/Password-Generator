// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9,10];
var password = "";
// .length, .random, .floor, for loop, array of numbers,characters,symbols, 

function generatePassword(){
var char =  prompt("number of characters?");
// characterLength is the length of characters below
// password += upperCase[Math.floor(math.random() * upperCase.length)]


// password = char;
console.log (upperCase.length);
console.log (lowerCase.length);
console.log (numbers.length);

var randomUcase = upperCase[Math.floor(Math.random() * upperCase.length) + 1];
var randomLcase = lowerCase[Math.floor(Math.random() * lowerCase.length) + 1];
var randomNumber = numbers[Math.floor(Math.random() * numbers.length) + 1];

password = randomUcase + randomLcase + randomNumber;
// console.log("num", num);
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
