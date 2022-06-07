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

// Another useful method related to string indexing is the charAt() method, which returns the character at a given index. It can be thought of as the opposite of the two methods above. If the index number is not found, this method will return an empty string:
let myStringThree = 'Welcome to the universe!';
console.log(myStringThree.charAt(15));  // u

/* Slicing */
// Finally, if you need to slice a string to get only certain characters you can use the slice() method, which takes two parameters: a starting index and an ending index. If you pass only the starting index, slice() will return that index plus rest of the string:

let myStringFour = 'Welcome to the universe!';
console.log(myStringFour.slice(1));     // 'elcome to the universe!'
console.log(myStringFour.slice(0, 6));  // 'Welcom' (last index is not included)
console.log(myStringFour.slice(0, 7));  // 'Welcome'
console.log(myStringFour.slice(15));    // 'universe!'

// ======================
// LIST OF STRING METHODS

object.length;                // Returns the length of a string
object.charAt();              // Returns the character at the specified index (position)
object.charCodeAt();          // Returns the Unicode of the character at the specified index
object.concat();              // Joins two or more strings, and returns a new joined strings
object.endsWith();            // 	Checks whether a string ends with specified string/characters
object.fromCharCode();	      // Converts Unicode values to characters
object.includes();	          // Checks whether a string contains the specified string/characters
object.indexOf();	          // 	Returns the position of the first found occurrence of a specified value in a string
object.lastIndexOf();	      // Returns the position of the last found occurrence of a specified value in a string
object.localeCompare();	      // Compares two strings in the current locale
object.match();               // Searches a string for a match against a regular expression, and returns the matches
object.repeat();              // Returns a new string with a specified number of copies of an existing string
object.replace();             // Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
object.search();              // Searches a string for a specified value, or regular expression, and returns the position of the match
object.slice();               // Extracts a part of a string and returns a new string
object.split();               // Splits a string into an array of substrings
object.startsWith();          // Checks whether a string begins with specified characters
object.substr();              // (Depreciated) Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
object.substring();           // Extracts the characters from a string, between two specified indices
object.toLocaleLowerCase();   // Converts a string to lowercase letters, according to the host's locale
object.toLocaleUpperCase();   // Returns the length of a string
object.toLowerCase();         // Converts a string to lowercase letters
object.toString();            // Returns the value of a String object
object.toUpperCase();         // Converts a string to uppercase letters
object.trim();                // Removes whitespace from both ends of a string
object.valueOf();             // Returns the length of a string


