"use strict";


// PROBLEM 1
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// where do you start?
// where do you end?
// what changes between each time the loop runs?
// what's the condition by which we run the loop

var num = 2;
var end = 65536;

while(num <= end) {
    console.log(num);
    num = num * 2;
}

// An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
var conesOrdered;

console.log("Good morning! I'm starting my day with " + allCones + " cones in my inventory");

do {
    conesOrdered = Math.floor(Math.random() * 5) + 1;
    console.log("The next customer ordered " + conesOrdered + " number of cones.");
    // check if we have enough cones for that customer.
        // if so,
        // we say we sold them
        // update inventory
    if(conesOrdered <= allCones) {
        console.log("Sold " + conesOrdered + " number of cones.");
        allCones = allCones - conesOrdered;
        console.log("I now have " + allCones + " left in my inventory.")
    } else {
        console.log("I'm sorry. I don't have enough for your order.");
    }

    if(allCones > 0) {
        console.log("Next customer, please!");
    }


} while(allCones > 0);  // we're gonna do the loop until allCones is 0 or less than 0...

console.log("Yay! I sold all the cones and get to go home happy and compensated");
