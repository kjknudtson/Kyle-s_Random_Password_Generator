// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  
  password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Function definition for adding certain amount of user desired characters to password
function addRandomItem (randomAmount, wantItem, choicesArray, password) {
      
      
  if (wantItem) {

    for (i = 0; i < randomAmount; i++) {
    
        var randomItem = choicesArray[Math.floor(Math.random() * choicesArray.length)];
      
        password.push(randomItem);
    }   
  
  }

}

// Function definition to check to make sure final password has at least one of each user desired criteria
function checkForItem(userWants, password, choicesArray) {
  if (userWants){

    var foundItem = password.some(r=> choicesArray.indexOf(r) >= 0);

    if (foundItem) {

       password = password;

    } else {

      var randomItem = choicesArray[Math.floor(Math.random() * choicesArray.length)];
      
      password.push(randomItem);

    }

   }
   
}



// Function to generate password
function generatePassword() {

  // Get variable for password length
  var passwordLength = prompt("How long does your password need to be? (Minimum: 8 Maximum 128)");

  passwordLength = parseInt(passwordLength);

  // If/else statement to guarantee that number chosen is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {

      alert("Password must be at least 8 characters and at most 128!");

      return password = "Try Again!";

  } else {
  
    // Variable to count the total amount of types of criteria desired by user
    var choicesChosen = 0; 
  
    // Getting boolean variable to determine if user wants to include lower case letters
    var wantLowerCase = confirm("Do you want to use lower case letters?");

    if (wantLowerCase) {

      choicesChosen++;

    }  
    
    // Getting boolean variable to determine if user wants to include upper case letters
    var wantUpperCase = confirm("Do you want to use upper case letters?");

    if (wantUpperCase) {

      choicesChosen++;

    }

    // Getting boolean variable to determine if user wants to include numbers
    var wantNumbers = confirm("Do you want to use numbers?");

    if (wantNumbers) {

      choicesChosen++;

    }

    

    // Getting boolean variable to determine if user wants to include symbols
    var wantSymbols = confirm("Do you want to use Symbols?");

    if (wantSymbols) {

      choicesChosen++;

    }
      

    
    // Array of all lower case letters
      var choicesJustLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Array of all upper case letters
      var choicesJustUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // Array of all numbers
      var choicesJustNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // Array of symbols
      var choicesJustSymbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '`', '{', '|', '}', '~'];

    
    
    // Variable to determine how many of each user desired criteria should be initally added to password
    var randomAmount = Math.floor(passwordLength / choicesChosen);
 

   // Variable for empty array that will house randomly picked items from the other previous four array    
    var password = [];
    
   // While loop to call function to add desired characters to empty password array   
    while (password.length < passwordLength) {

      addRandomItem(randomAmount, wantLowerCase, choicesJustLower, password);
      
      addRandomItem(randomAmount, wantUpperCase, choicesJustUpper, password);

      addRandomItem(randomAmount, wantNumbers, choicesJustNumbers, password);

      addRandomItem(randomAmount, wantSymbols, choicesJustSymbols, password);

    }
    
    // While loop to call function that checks to make sure at least one type of each criteria is included in final password
    while (password.length > passwordLength) {

      // Removes one random item from the final array
      password.splice(Math.floor(Math.random()*password.length), 1);

      
      checkForItem(wantLowerCase, password, choicesJustLower);

      checkForItem(wantUpperCase, password, choicesJustUpper);

      checkForItem(wantNumbers, password, choicesJustNumbers);

      checkForItem(wantSymbols, password, choicesJustSymbols);

 
    } 
    
    console.log(password);
    

      // Function to shuffle final array after having verified that length is correct and at least one of each category chosen is present
      // Durstenfeld shuffle, a variation of the Fisher-Yates shuffle algorithm
      for (var i = password.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));

        var temp = password[i];

        password[i] = password[j];

        password[j] = temp;

    }

      

      


      // Convert array to string
      password = password.join('');


      //return final password string
      return password;
    }
}
























// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
