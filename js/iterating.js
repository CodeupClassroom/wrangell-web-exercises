    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Margret Hamilton", "Ada Lovelace", "Admiral Grace Hopper", "Sandi Metz", "Kathleen Dollard"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The number of elements on the array is " + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(names[4]);

    console.log("-----");

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    function thank(name) {
        console.log("Thanks to " + name + " for building awesome stuff!");
    }

    names.forEach(thank);

    names.forEach(function(element, index) {
        console.log(element);
    });


    var beatles = ["John", "Paul", "Ringo", "George"];
    console.log(beatles);

    beatles.forEach(function(element, index, array) {
        console.log("The value at index " + index + " is: " + element);
    });

    beatles.forEach(function(name, index) {
        if(index !== beatles.length -1) {
            beatles[index] = name.toUpperCase();
        }
    });

    console.log(beatles);

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array (ultimate)
     * - secondToLast: returns the second to last (penultimate)
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(input) {
        if(Array.isArray(input)) {
            return input[0];
        }
    }

    var second = function(input) {
        if(Array.isArray(input)) {
            return input[1];
        }
    };

    function last(input) {
        if(Array.isArray(input)) {
            return input[input.length -1];
        }
    }

    function secondToLast(input) {
        if(Array.isArray(input)) {
            return input[input.length -2];
        }
    }

    var languages = ["JS", "Java", "MySQL", "CSS", "HTML"];

    console.log(secondToLast(languages));


