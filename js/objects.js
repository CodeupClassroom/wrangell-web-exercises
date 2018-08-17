
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Ryan",
        lastName: "Orsinger",
        sayHello: function() {
            console.log("Hello from " + this.firstName + " " + this.lastName);
        }
    };

    var anotherPerson = {};
    anotherPerson.occupation = "Musician";
    anotherPerson.firstName = "Yanni";
    anotherPerson.instrument = "piano";
    anotherPerson.sayHello = function() {
        console.log("Hello from " + this.firstName + " " + this.lastName);
    };


    anotherPerson.instrument = "kazoo";
    console.log(anotherPerson.instrument);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
        {name: 'Daniel', amount: 600}
    ];

    // if a shopper's amount is greater than 200,
        // then they get a 12% discount
        // total is the original amount minus the original amount times the discount
    // if the shopper's amount is less than 200, the amount remains

    // array.forEach(function(element, index, array) {});

    shoppers.forEach(function(shopper) {
        var total;
        var discount = 0;

        if(shopper.amount > 200) {
            discount = shopper.amount * .12;
            total = shopper.amount - discount;
        } else {
            total = shopper.amount;
        }

        console.log(
            "The shopper " + shopper.name + " purchased " +
            "$" + shopper.amount + " of goods." +
            " and received a discount of " +
            "$" + discount + " and their final total is: " + total)
    });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var books = [];
    // books.push(
    //     {
    //         title: "No Excuses",
    //         author: {
    //             firstName: "Brian",
    //             lastName: "Tracy"
    //         },
    //         genre: "Nonfiction"
    //     });
    // books.push({title: "Crazy Rich Asians", author: {firstName: "Kevin", lastName: "Kwan"}, genre: "Contemporary Fiction"});
    // books.push({title: "Medieval Punishments", author: {firstName: "William", lastName: "Andrews"}, genre: "History"});
    // books.push({title: "Origin", author: {firstName: "Dan", lastName: "Brown"}, genre: "Contemporary Fiction"});
    // books.push({title: "How to Break Code and Confuse People", author: {firstName: "Most", lastName: "Developers"}, genre: "Technology"});
    // books.push({title: "The Alchemist", author: {firstName: "Paulo", lastName: "Coelho"}, genre: "Fiction"});
    // books.push({title: "I'm Judging You, the Do Better Manual", author: {firstName: "Luvvie", lastName: "Ajayi"}, genre: "Self-Help"});
    // books.push({title: "The Right Stuff", author: {firstName: "Tom", lastName: "Wolfe"}, genre: "History"});
    // books.push({title: "The Giver", author: {firstName: "Lois", lastName: "Lowry"}, genre: "YA Fiction"});



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(book, id) {
    //         console.log("Book # " + (id+1));
    //         console.log("Title: " + book.title);
    //         console.log("Author: " + book.author.firstName + " " + book.author.lastName)
    // });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var createBook = function (title, author) {
        var book = {};
        book.title = title;
        if (typeof author == "string") {
            var names = author.split(" ");
            var authObj = {
                firstName: names[0],
                lastName: names[1]
            }
            book.author = authObj;
        }
        else if (typeof author === "object") {
            book.author = author;
        }
        return book;
    }

    var showBookInfo = function (book, bookNum) {
        console.log("Book # " + bookNum);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName)
    }

    var books = [];
    books.push(createBook("No Excuses", "Brian Tracy"))
    books.push(createBook("Crazy Rich Asians", "Kevin Kwan"))
    books.push(createBook("Medieval Punishments", "William Andrews"))
    books.push(createBook("Origin", {firstName: "Dan", lastName: "Brown"}));
    books.push(createBook("The Alchemist", "Paulo Coelho"));
    books.push(createBook("I'm Judging You, the Do Better Manual", "Luvvie Ajayi"));
    books.push(createBook("The Right Stuff", {firstName: "Tom", lastName: "Wolfe"}));
    books.push(createBook("The Giver", "Lois Lowry"));
    books.push(createBook("The Salmon of Doubt", "Douglas Adams"));

    books.forEach(function(book, id) {
        showBookInfo(book, id+1);
    });

