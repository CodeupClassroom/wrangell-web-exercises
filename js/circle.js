(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * Math.pow(this.radius, 2);
        },

        logInfo: function(weWantToRoundTheAnswerToTheNearestWholeNumber) {
            if(weWantToRoundTheAnswerToTheNearestWholeNumber) {
                console.log("The approximate area of a circle of radius " + this.radius + " is " + Math.round(this.getArea()));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);  // should show area with lots of numbers after the decimal

    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);  // should show area rounded up/down to the nearest integer

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();









var itemForSale = {
    "price": 2.99,
    "logPrice": function(weWantToRoundPrice) {
        if(weWantToRoundPrice) {
            console.log("The approximate price is: $" + Math.round(this.price));
        } else {
            console.log("The exact price is: $" + this.price);
        }
    }
};

// log info about this item for sale:
// Log the price rounded to the nearest dollar
itemForSale.logPrice(true);

// now we will log the exact price of the item
itemForSale.logPrice(false);

// now, update the price to be 5.99
itemForSale.price = 5.99;

// log the price rounded to the nearest dollar
itemForSale.logPrice(true);
// log the exact price
itemForSale.logPrice(false);










