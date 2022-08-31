// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "="];
const lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

let pass = [];
let passArr = [];

// Generate password
function generatePassword() {
    // prompts user for password length
    let passLength = prompt(
        "How many characters would you like in your new password?"
    );

    // Checks for password limits, no lower than 8 and no higher than 128
    if (passLength < 8 || passLength > 128) {
        passLength = prompt(
            "The number must be more than 8 characters and less than 128 characters."
        );
    }

    // prompts user for character choices and stores them in vars
    let upperChoice = confirm(
        "Would you like your password to contain uppercase letters?"
    );
    let lowerChoice = confirm(
        "Would you like your password to contain lowercase letters?"
    );
    let numChoice = confirm("Would you like your password to contain numbers?");
    let specialChoice = confirm(
        "Would you like your password to contain special characters?"
    );

    // logic for the characters the user chose
    if (upperChoice) {
        passArr = passArr.concat(upper);
    }

    if (lowerChoice) {
        passArr = passArr.concat(lower);
    }

    if (specialChoice) {
        passArr = passArr.concat(special);
    }

    if (numChoice) {
        passArr = passArr.concat(nums);
    }
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
