// Assignment Code
var generateBtn = document.querySelector("#generate");

var string = "";

// .length, .random, .floor, for loop, array of numbers,characters,symbols, 

function generatePassword(){
var char =  prompt("number of characters?");

var num = confirm("Do you want to use numbers?")
 string = "test"
console.log("num", num);
  return string;  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
