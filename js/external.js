"use strict";

// alert("Let's mine bitcoins using your browser without you knowing...");
// var favorite = prompt("What's your favorite computer worm?");
// alert("Great! My favorite worm is " + favorite + ", too!");

// Working for Google, Amazon and Facebook, they pay you a different rate per hour. 
// Google pays $400, Amazon $380, and Facebook $350. 
// How much will you receive in payment for this week? r
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;
var totalHours = googleHours + amazonHours + facebookHours;
var total = amazonHours*amazonRate + googleHours*googleRate + facebookHours*facebookRate;
var message = "After working " 
    + totalHours + " at Google, Facebook, and Amazon, we made: "
    + "$" + total.toFixed(2) + "!";
console.log(message);

var littleMermaidDays = 3;
    var brotherBearDays = 5;
    var herculesDays = 12;
    var pricePerMovie = 5;
    var littleMermaidTotal = littleMermaidDays * pricePerMovie;
    var brotherBearTotal = brotherBearDays * pricePerMovie;
    var herculesTotal = herculesDays * pricePerMovie;
    var grandTotal = herculesTotal + brotherBearTotal + littleMermaidTotal;
    console.log("Given the price per day of $" + pricePerMovie + ", the grand total for renting Little Mermaid for " + littleMermaidDays + " days, "
        + " Brother Bear for " + brotherBearDays + ", and "
        + " Hercules for " + herculesDays + " is $" + grandTotal + ".00");


// A student can be enrolled to a class 
// only if the class is not full 
// AND the class schedule does not conflict with her current schedule.
var classHasSpace = true;
var scheduleWorksForStudent = false;
var canBeEnrolledInClass = classHasSpace && scheduleWorksForStudent;

// A product offer can be applied only 
// if people buys more than 2 items, 
// and the offer has not expired. 
// Premium members do not need to buy a specific amount of products.
var moreThanTwoItems = true;
var offerIsValid = true;
var isPremiumMember = false;
var offerCanBeApplied = offerIsValid && (moreThanTwoItems || isPremiumMember);

// make some boolean variables that hold the following:
// user is logged in
// user is an administrator
// user is an author
// users can edit their articles if they are logged in and they are either an admin or author
var isLoggedIn = false;
var isAdmin = true;
var isAuthor = false;
var canEditArticle = isLoggedIn && (isAdmin || isAuthor);

// Create a variable that holds a boolean value for each of the following conditions:

// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
var username = prompt("Please enter your desired username");
var password = prompt("Please enter your desired password");

var passwordIsLongEnough = password.length >= 5;
var passwordContainsUsername = password.includes(username);
var usernameIsShortEnough = username.length <= 20;
// var userNameHasWhiteSpace = username.trim() !== username;
// var passwordHasWhiteSpace = password.trim() !== password;

var noWhiteSpace = username == username.trim() && password == password.trim();

var credentialsAreGood = passwordIsLongEnough && !passwordContainsUsername && 
    usernameIsShortEnough && noWhiteSpace;

if(credentialsAreGood) {
    console.log("Your account has been created. Check your email for the confirmation link");
} else {
    console.log("Your username or password must conform to the posted rules...,");
}