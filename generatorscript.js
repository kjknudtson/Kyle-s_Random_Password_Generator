// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  
  password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
// Get variable for password length and 
  var passwordLength = prompt("How long does your password need to be? (Minimum: 8 Maximum 128)");

  if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be at least 8 characters and at most 128!");
      return password = "Try Again!";
  } else {
      alert("Your password will be " + passwordLength + " characters long!");
  

      var wantLowerCase = confirm("Do you want to use lower case letters?");

      if (wantLowerCase) {
          alert("You wish to include lower case letters in your password!");
      } else {
          alert("You do NOT wish to include lower case letters in your password!");
      }

      var wantUpperCase = confirm("Do you want to use upper case letters?");

      if (wantUpperCase) {
          alert("You wish to include upper case letters in your password!");
      } else {
          alert("You do NOT wish to include upper case letters in your password!");
      }

      var wantNumbers = confirm("Do you want to use numbers?");

      if (wantNumbers) {
          alert("You wish to include numbers in your password!");
      } else {
          alert("You do NOT wish to include numbers in your password!");
      }

      var wantSymbols = confirm("Do you want to use Symbols?");

      if (wantSymbols) {
          alert("You wish to include symbols in your password!");
      } else {
          alert("You do NOT wish to include symbols in your password!");
      }

      
      var choicesJustLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var choicesJustUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var choicesJustNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
      var choicesJustSymbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '`', '{', '|', '}', '~'];
      
      var randomAmount = (Math.floor(Math.random() * 5));

      var maxLength = 128;
       
      var password = [];
      
      
      // Do {
      //        function to add random amount of lower case to array if desired
      while (password.length < maxLength){
        for (i = 0; i < randomAmount; i++){
            if (wantLowerCase){
                password = password.concat(choicesJustLower[Math.floor(Math.random() * choicesJustLower.length)]);
            }
        }
      //        "                               " upper case "                  "

        for (i = 0; i < randomAmount; i++){
            if (wantUpperCase){
                password = password.concat(choicesJustUpper[Math.floor(Math.random() * choicesJustUpper.length)]); 
        
            }
        }
      //        "                               " numbers "                      "

        for (i = 0; i < randomAmount; i++){
            if (wantNumbers){
                password = password.concat(choicesJustNumbers[Math.floor(Math.random() * choicesJustNumbers.length)]); 
        
            }
        }
      //        "                               " Symbols "                       "

        for (i = 0; i < randomAmount; i++){
            if (wantSymbols){
                password = password.concat(choicesJustSymbols[Math.floor(Math.random() * choicesJustSymbols.length)]); 
        
            }
        
        }

       }

      //} while (password.length < passwordLength)
      
      //function to check to see if final array longer than passwordLength chosen
      

      // function to check if final array has any lower case
      while (password.length > passwordLength) {
        if (wantLowerCase){
         var foundLower = password.some(r=> choicesJustLower.indexOf(r) >= 0);
         if (foundLower) {
            password = password;
         } else {
            password = password.concat(choicesJustLower[Math.floor(Math.random() * choicesJustLower.length)]);
         }
        }
      // "                                      " upper case

        
        if (wantUpperCase){
          var foundUpper = password.some(r=> choicesJustUpper.indexOf(r) >= 0);
          if (foundUpper) {
             password = password;
          } else {
             password = password.concat(choicesJustUpper[Math.floor(Math.random() * choicesJustUpper.length)]);
          }
        }

        // "                                      " numbers
        if (wantNumbers){
          var foundNumber = password.some(r=> choicesJustNumbers.indexOf(r) >= 0);
          if (foundNumber) {
             password = password;
          } else {
             password = password.concat(choicesJustNumbers[Math.floor(Math.random() * choicesJustNumbers.length)]);
          }
        }
        
        // "                                      " symbols
       if (wantSymbols){
         var foundSymbol = password.some(r=> choicesJustSymbols.indexOf(r) >= 0);
         if (foundSymbol) {
            password = password;
         } else {
            password = password.concat(choicesJustSymbols[Math.floor(Math.random() * choicesJustSymbols.length)]);
         }

         
       }

       
       password.splice(Math.floor(Math.random()*password.length), 1);
      } 
      
        


      // if final array has all desired items and correct length shuffle array 10 times
      for (let i = password.length - 1; i > 10000; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
      }

      console.log(password);


      //convert array to string
      password = password.join('');
      console.log(password);
      return password;
    }
}




// function addRandomUpper() add a random amount of upperCase to array equal to randomly generated number for loop i < randomLength



// function addRandomNumber() add a random amount of Numbers to array equal to randomly generated number for loop i < randomLength















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
