"use strict";

var fruits = ["apple", "banana", "apple", "orange", "apple", "pineapple"];
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

// countAllOccurrances takes in an array and a value and returns the number of times that value exists in the provided array.

// array
// value
// count/result

// iterate - move across a list/array
// loops are a way iterate
// if there's any condition in your english, there's going to be an if condition

function countAllOccurrances(array, value) {
    var count = 0;
    array.forEach(function(element) {
        if(element === value) {
            count++;
        }
    });
    return count;
}

console.log("the number of apples in the fruits array is: " + countAllOccurrances(fruits, "apple"));
console.log("the number of dragonfruits in the fruits array is: " + countAllOccurrances(fruits, "dragonfruits"));

// allIndexesOf(array, value)
// there's a target value
// there's the input array
// there's an output array
// iterate across the array
// condition: if the value matches an element of the array
// add the index of that element onto the output array
// foreach
// check each and every item of the array if the element matches the input value
// if so, add the current index of the loop to the output array


function allIndexesOf(array, value) {
    var output = [];

    array.forEach(function(element, index) {
        if(element === value) {
            output.push(index);
        }
    });

    return output;
}

console.log("The indexes where 'apple' occurs in the fruits array is: " + allIndexesOf(fruits, "apple"));
console.log("The indexes where 'dragonfruit' occurs in the fruits array is: " + allIndexesOf(fruits, "dragonfruit"));

// removeAll function should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
function removeAll(array, itemToRemove) {
    var output = [];
    array.forEach(function(element) {
        if(itemToRemove !== element) {
            output.push(element);
        }
    });
    return output;
}

console.log("The array [2, 2, 4] with all the 2s removed is: " + removeAll([2, 2, 4], 2));
console.log("The fruits array with apples removed is: " + removeAll(fruits, "apple"));

    

