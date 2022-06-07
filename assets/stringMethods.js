// methods are the same as functions
// Many of the objects you'll work with in JavaScript including Numbers, Strings, Arrays and so on also have these methods which can be called in order to operate on them in some way.

// length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number does not include the rest parameter. Has a value of 1
let title = "This is the Title of a Book";
let lowerTitle = title.toLowerCase();
console.log(lowerTitle);  // this is the title of a book

let titleTwo = "caps lock is cruise control for cool";
let upperTitle = titleTwo.toUpperCase();
console.log(upperTitle);  // CAPS LOCK IS CRUISE CONTROL FOR COOL

// Since a string is really just an array of letters, you can access its individual letters using an index beginning with zero, like any other array or list:
let myString = "Which letter is the best?";
console.log(myString[0]);  // W
console.log(myString[1]);  // h
console.log(myString[2]);  // i
console.log(myString[3]);  // c
console.log(myString[4]);  // h

// or going backwards!
let len = myString.length;
console.log(myString[len - 1]);  // ?
console.log(myString[len - 2]);  // t
console.log(myString[len - 3]);  // s
console.log(myString[len - 4]);  // e
console.log(myString[len - 5]);  // b


// Indexing
let object = "Object"
object.indexOf();
object.lastIndexOf();

let welcome = 'This is a welcome message!';
console.log(welcome.indexOf('welcome'));  // 10 (the index of the w)
console.log(welcome.lastIndexOf('e'));  // 24 (the last 'e' in the string)

// If you need to search a long string, you can also pass both of these a second argument - an integer - to specify the search starting point
console.log(welcome.indexOf('s', 7));  // 20 (the search begins after the first two 's')