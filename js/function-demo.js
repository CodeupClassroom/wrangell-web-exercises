"use strict";

// var response = confirm("Are you ready to move forward?");


// two steps of user defined functions
// Step 1 is to define the function
function yell(input) {
    return input.toUpperCase();
}

// 4 pieces of a function definition
// the word function, the name of the function, parameters in parentheses, body

// Step 2 is to call the function (invoke, execute, run)
alert(yell("Hi, everybody!"));

// EVERY function has a return value
// if you don't return explicitly, your function's return value is undefined
function add(a, b) {
    return a + b;
}

x = 2;
y = 3;  

var result = add(x, y);
console.log(result);

function five() {
    return 5;
}

result = add(five(), five());
result = add(5, 5)










// Example:
// Write a function that takes in a number 
// and returns that number with a dollar sign in front of it.

function toPrice(input) {
    var output = "$" + input;
    return output;
}

var candyBar = 2;

console.log("The price of this candy-bar is " + toPrice(candyBar));