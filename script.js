// Assignment Code
var generateBtn = document.querySelector("#generate");
var charactersUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","W","X","Y","Z"];
var charactersLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9,10];
var string = "";



// .length, .random, .floor, for loop, array of numbers,characters,symbols, 

function generatePassword(){
var char =  prompt("number of characters?");
// characterLength is the length of characters below
var characterLength = char;  
var up = Math.random(charactersUpperCase)
var lo = Math.random(charactersLowerCase)
var nu = math.floor(Math.random() * 10);

console.log(nu);



// for(i = 0; i > characterLength; i++){
// console.log(i);
 


// Math.random(i);


string = "test"
console.log(characterLength);
// console.log("num", num);
  return string;  
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
