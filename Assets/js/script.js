// Reminder: # refers to the id from the HTML; Global variables
var passwordEl=document.querySelector("#password");
var generatebtnEl = document.querySelector("#generate");
var copybtnEl=document.querySelector("#copy");

generatebtnEl.addEventListener("click",  function () {

  var passwordLength = prompt("Number of characters (choose between 8 and 128 characters):")

    if ((passwordLength >= 8) && (passwordLength <= 128)) {
         
      //Variables for options: symbols, numbers and lower case and capital letters
      let symbols = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";
      let numbers = "0123456789";
      let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        
      //Prompts to confirm options
      let newPassword = "";
      let askSymbols = confirm("Do you want your new password to have special characters?  For example: !{/?");
      let askNumbers = confirm("Do you want your new password to have numbers characters?");
      let askCapital = confirm("Do you want your password to have capital letters?");
      let askLower = confirm("Do you want your new password to have lowercase letters?");

      //Possible user option combinations
      var allOption = symbols + numbers + capitalLetters + lowerLetters;
      var sn = symbols + numbers;
      var sc = symbols + capitalLetters;
      var sl = symbols + lowerLetters;
      var nl = numbers + lowerLetters;
      var nc = numbers + capitalLetters;
      var lc = lowerLetters + capitalLetters;
      var snc = symbols + numbers + capitalLetters;
      var snl = symbols + numbers + lowerLetters;
      var nlc = numbers + lowerLetters + capitalLetters;
      var slc = symbols + lowerLetters +capitalLetters;
      var s = symbols;
      var l = lowerLetters;
      var n = numbers;
      var c = capitalLetters;
    
      //"if" and "else if" statements to run with every possible user combination
    if ((askSymbols === true) && (askNumbers === true) && (askCapital ===true) && (askLower === true)) {
      for (i = 0; i < passwordLength; i++) {
      let password = Math.floor (Math.random() * allOption.length);
      newPassword += allOption.charAt(password, password + 1);
      }
    }

    else if ((askSymbols === true) && (askNumbers === true) && (askCapital === false) && (askLower === false)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * sn.length);
        newPassword += sn.charAt(password, password + 1);
      }
    }
  
    else if ((askSymbols === true) && (askNumbers === false) && (askCapital === true) && (askLower === false)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * sc.length);
        newPassword += sc.charAt(password, password + 1);
      }
    }
     
    else if ((askSymbols === true) && (askNumbers === false) && (askCapital === false) && (askLower === true)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * sl.length);
        newPassword += sl.charAt(password, password + 1);
      }
    }
  
    else if ((askSymbols === false) && (askNumbers === true) && (askCapital === false) && (askLower === true)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * nl.length);
        newPassword += nl.charAt(password, password + 1);
      }
    }
    
    else if ((askSymbols === false) && (askNumbers === true) && (askCapital === true) && (askLower === false)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * nc.length);
        newPassword += nc.charAt(password, password + 1);
      }
    }
    
    else if ((askSymbols === false) && (askNumbers === false) && (askCapital === true) && (askLower === true)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * lc.length);
        newPassword += lc.charAt(password, password + 1);
      }
    }

    else if ((askSymbols === true) && (askNumbers === true) && (askCapital === true) && (askLower === false)) {
    for (i = 0; i < passwordLength; i++) {
      let password = Math.floor (Math.random() * snc.length);
      newPassword += snc.charAt(password, password + 1);
    }
  }

    else if ((askSymbols === true) && (askNumbers === true) && (askCapital === false) && (askLower === true)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * snl.length);
        newPassword += snl.charAt(password, password + 1);
      }
    }
    
    else if ((askSymbols === false) && (askNumbers === true) && (askCapital === true) && (askLower === true)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * nlc.length);
        newPassword += nlc.charAt(password, password + 1);
      }
    }
    
    else if ((askSymbols === true) && (askNumbers === false) && (askCapital === true) && (askLower === true)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * slc.length);
        newPassword += slc.charAt(password, password + 1);
      }
    }
    
    else if ((askSymbols === true) && (askNumbers === false) && (askCapital === false) && (askLower === false)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * s.length);
        newPassword += s.charAt(password, password + 1);
      }
    }
    
    else if ((askSymbols === false) && (askNumbers === false) && (askCapital === false) && (askLower === true)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * l.length);
        newPassword += l.charAt(password, password + 1);
      }
    }

    else if ((askSymbols === false) && (askNumbers === true) && (askCapital === false) && (askLower === false)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * n.length);
        newPassword += n.charAt(password, password+ 1);
      }
    }
    
    else if ((askSymbols === false) && (askNumbers === false) && (askCapital === true) && (askLower === false)) {
      for (i = 0; i < passwordLength; i++) {
        let password = Math.floor (Math.random() * c.length);
        newPassword += c.charAt(password, password + 1);
      }
    }   
  
  passwordEl.textContent = newPassword;
}
})


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

