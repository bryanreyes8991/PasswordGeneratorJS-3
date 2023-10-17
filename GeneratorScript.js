var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password")

    passwordText.value = password;

//Beginning of my code
var lcpasswordChar = 'abcdefghijklmnopqrstuvwxyz';
var ucpasswordChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specChar = '!@#$%^&*';
var nums = '123456789';
var userSel = '';
var pw = '';

//Beginning of my function
function generatePassword() {
do firstPrompt = parseInt(window.prompt("How many characters would you like your password to have?(MIN: 8;MAX: 128)"));
 while (firstPrompt <= 8 && firstPrompt >= 128); {
 userNumber = firstPrompt;
} if (!firstPrompt){
    return window.alert('Enter a valid number.');
} else {
    secondPrompt = window.prompt("include special characters? Yes or No answers only.")
} if (secondPrompt === 'Yes') {
    specChar += userSel;
} else {
    thirdPrompt = window.prompt('Include uppercase letters?');
} if (thirdPrompt === 'Yes') {
    ucpasswordChar += userSel;
} else {
    fourthPrompt = window.prompt('Include lowercase letters?');
} if (fourthPrompt === 'Yes') {
    lcpasswordChar += userSel;
} else {
    fifthPrompt = window.prompt('Include numbers?');
} if (fifthPrompt === 'Yes') {
    nums += userSel;
} for (i = 0; i < length; i++) {
    var rand = Math.floor(Math.random() * (userSel.length));
    pw += userSel.charAt(rand);
}
return pw === passwordText; 


}}; //End Function

generateBtn.addEventListener("click", writePassword)