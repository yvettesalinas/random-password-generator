// Reminder: # refers to the id from the HTML
//Global variables
var passwordEl=document.querySelector("#password");
var generatebtnEl = document.querySelector("#generate");
var copybtnEl=document.querySelector()

// Add event listener to generate button
generatebtnEl.addEventListener("click",  function() {
  var characterLength=prompt("Number of characters (choose between 8 and 25 characters):")
  
  if ((characterLength >= 8) && (characterLength >= 25)) {
      let symbols = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";
      let numbers = "0123456789";
      let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
      let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  }
})

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

