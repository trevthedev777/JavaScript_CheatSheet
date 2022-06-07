// Variables stored locally for the purposes of this cheat sheet

// Strings
function stringOne() {
    let strOne = "Double Quote String";
    let strTwo = 'Single quote strings';
    let strThree = "these are 'quoted' strings"
};


// Special String Characters
function specialCharacters() {
    let horizontalTab = '\t';
    // Both newline and carriage return display a newline
    let newline = '\n';
    let carriageReturn = "\r";
    // To avoid the use of these special characters just wrap the line in a double and quote with single
    let singleQuote = "\'";
    let doubleQuote = "\"";
};

// Template Literals
function templateLiteral() {
    let name = "Trevor";
    let surname = "Lehmann"

    let message = `Hi my name is ${name + '' + surname}`;
    console.log(message)
};

// String Concatenation
// The process of joining strings together with the + operator.

function concatString() {
    let name = "Trevor";
    console.log("Hello, my name is" + name);
    // Output
    // Hello my name is Trevor

    let myVar = 'a variable!'
    let myString = 'This string contains ' + myVar;
    console.log(myString);  // This string contains a variable!
    // Output
    // "This string contains a variable"
}

/*This concept is still useful today though, because you can use concatenation to build strings piece by piece or append one string to the end of another. All you have to do is use the + operator between the two strings you wish to concatenate:*/

function concatStringTwo() {
    let greeting = "Hello";
    let name = "Marcus";

    let fullGreeting = greeting + ', ' + name + '!';
    console.log(fullGreeting);  // Hello, Marcus! 
};


/*You can add as many strings together as you wish, and can use this concept to do all sorts of interesting stuff, like creating a list of HTML items using a loop:*/
function concatForLoop() {

    const fruits = ["apple", "orange", "banana"];
    const myHtml = "<ol>";

    for (let i = 0; i < fruits.length; i++) {
        myHtml = myHtml + "<li>" + fruits[i] + "</li>";
    }
    myHtml += "<ol>";

    // myHtml is now:
    // <ol>
    // <li>apple</li>
    // <li>orange</li>
    // <li>banana</li>
    // </ol>

    // using template literals
    // This becomes even more elegant when you use template literals to inject the fruit directly into the string without using the additional concatenation. The process of injecting variables into strings using template literals is called string interpolation:
    let fruitsTwo = ['apple', 'orange', 'banana'];
    let myHtmlTwo = '<ol>';

    for (let i = 0; i < fruitsTwo.length; i++) {
    myHtmlTwo += `<li>${fruits[i]}</li>`;
    }
    myHtmlTwo += '</ol>';
     // myHtml is now:
    // <ol>
    // <li>apple</li>
    // <li>orange</li>
    // <li>banana</li>
    // </ol>
}


console.log(stringOne);
console.log(specialCharacters);
console.log(templateLiteral);
console.log(concatString);
console.log(concatStringTwo);
console.log(concatForLoop);

