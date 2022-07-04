// In JavaScript, like other programming languages, there are several different data types. Some of these include numbers, strings, booleans, and objects. Sometimes it's useful to know the type of data you're working with, and conveniently JavaScript comes with an operator for just that purpose: typeof.

// The typeof operator can be used either as a function or as an operator. To determine the type of data you're working with, all you need to do is provide typeof with the data, and it will return its type. Here are a few examples:

typeof 1; //Number
typeof "Hello World" // String
typeof true // Boolean
typeof ["a", "b", "c"]; // Object (Array)
typeof {key: "value"} // Object Dictionary

// You can also use this operator as a function, placing the data you need the type of inside a set of parentheses. This code is functionally equivalent to the above: 

typeof(1);                        // "number"
typeof('Hello world!');           // "string"
typeof(true);                     // "boolean"
typeof(['a', 'b', 'c']);          // "object"
typeof({name: 'John', age: 30});  // "object"

// You can use the data type of an object to make decisions, like anything else in your code. If you want to do something only if a piece of data is of a certain type, simply check it with an if statement:

if (typeof myData === "string") {
  // do something only if myData is a string
};

// Knowing which data type you're working with is often critical to understanding how to move forward with your code. Whenever you need to know the type of a piece of data, whether it's to perform some logic conditionally or to better understand how you can navigate or manipulate the data, remember that the typeof operator is always there.

// Challenge
let itmOne = 10;
let itmTwo = '20';
let itmThree = true;

console.log(typeof itmOne);
console.log(typeof itmTwo);
console.log(typeof itmThree);
console.log(typeof (itmOne +itmTwo));

