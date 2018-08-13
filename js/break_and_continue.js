"use strict";

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// this means you do a loop over and over until the user complies
//

function isNumeric(n) {
    return !isNaN(parseFloat(n));
}

function isOdd(n) {
    return n % 2 !== 0;
}

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
var userNumber;

do {
    userNumber = prompt("Please input an odd number between 1 and 50.");

    if(isOdd(userNumber) && isNumeric(userNumber) && userNumber >= 1 && userNumber <= 50) {
        break;
    }
} while(true);

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

for(var i = 1; i <= 50; i+=2) {
    if(i === userNumber) {
        console.log("Yikes! Skipping number: " + userNumber);
        continue;
    }
    console.log("Here's an odd number " + i);
}
