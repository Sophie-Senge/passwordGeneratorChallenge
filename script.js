// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// fix alerts if there is time
mainArray ="";

function getPasswordOptions() {
 
  let passwordLength = prompt("Please choose between 10-64 characters.");
  
  if (passwordLength < 10 || passwordLength > 64){
    alert("password must be between 10 and 64 characters!");
  }  
 
  else if (passwordLength => 10 && passwordLength <= 64){ 
  let hasLowerCase = confirm ("Would you like to include lower case characters?");
          if (hasLowerCase === true) {
            mainArray = mainArray.concat(lowerCasedCharacters);
          }
        
  let hasUpperCase = confirm("Would you like to include upper case characters?")
         if(hasUpperCase === true) {mainArray = mainArray.concat(upperCasedCharacters);}
        
  let hasSymbols = confirm("Would you like to include symbols?")
        if(hasSymbols === true) {mainArray = mainArray.concat(specialCharacters);}
  let hasNumbers = confirm("Would you like to include numbers?")
        if(hasNumbers === true) {mainArray = mainArray.concat(numericCharacters);}

  console.log(passwordLength);
  console.log(mainArray);


if (!hasSymbols && !hasLowerCase &&
  !hasUpperCase && !hasNumbers){
  alert("Must choose at least one character type!")
}
    
}

 return;
//  console.log(passwordLength)  
  
}

getPasswordOptions()



// Function for getting a random element from an array
function randomArray (arr){
  let stringToBuild = "";
  let newPos;
  for (let i = 0; i < arr.length; i++) {
    newPos = Math.floor(Math.random() * arr.length);
    const character = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = character;
    stringToBuild += character; 
  }
  return stringToBuild;
}
console.log(randomArray(specialCharacters));
console.log(randomArray(specialCharacters));
console.log(randomArray(specialCharacters));




// Function to generate password with user input


function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);