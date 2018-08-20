    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var stringWithBreakTags = planetsArray.join("<br>");

    // "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li></ul>"

    // find your delimiter and assign it to a variable
    var delimeter = "</li><li>";

    // start a string variable that contains the first characters we need.
    // find a way to add every string element of an array into a single string
    var planetString = "<ul><li>"
        + planetsArray.join(delimeter)
        + "</li></ul>";

    document.body.innerHTML = planetsString;