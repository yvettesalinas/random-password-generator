// Reminder: # refers to the id from the HTML
//Global variables
var passwordEl=document.querySelector("#password");
var generatebtnEl = document.querySelector("#generate");
var copybtnEl=document.querySelector("#copy");

// Add event listener to generate button
generatebtnEl.addEventListener("click",  function() {
  var characterLength=prompt("Number of characters (choose between 8 and 25 characters):")
  
  if ((characterLength >= 8) && (characterLength <= 25)) {
     
    //Variables for options: symbols, numbers and lower case and capital letters
    let symbols = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";
    let numbers = "0123456789";
    let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerLetters= "abcdefghijklmnopqrstuvwxyz";
    
  }
})

let newPassword = "";
let askSymbols = confirm("Do you want your new password to have special characters?  For example: !{/?");
let askNumbers = confirm("Do you want your new password to have numbers characters?");
let askCapital = confirm("Do you want your password to have capital letters?");
let askLower = confirm("Do you want your new password to have lowercase letters?");


var allOption = symbols + numbers + capitalLetters + lowerLetters;
var snOption = symbols + numbers;
var scOption = symbols + capitalLetters;
var slOption = symbols + lowerLetters;
var nlOption = numbers + lowerLetters;
var ncOption = numbers + capitalLetters;
var lcOption = lowerLetters + capitalLetters;
var sncOption = symbols + numbers + capitalLetters;
var snlOption = symbols + numbers + lowerLetters;
var nlcOption = numbers + lowerLetters + capitalLetters;
var slcOption = symbols + lowerLetters +capitalLetters;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

