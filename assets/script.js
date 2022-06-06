// Declaring Variables

// There are three ways to declare a variable in JavaScript, and each has a slightly different use case. All three methods follow the same syntax, but use a different keyword

// Variables should be declared that the name represents the data they are storing and manipulating

// camelCase should be used when there are multiple words 

let myVar = "a Variable let";
console.log(myVar);

const myVarAgain = "a Variable const";
console.log(myVarAgain);

var myVarThree  = "a Variable var";
console.log(myVarThree);

// THE LET KEYWORD: Declares a JS variable that has a block scope, it can be reassigned but not redeclared,
// This means that the value or the variable is only allowed to be used in the declared block of code its intended for

// Block Scope Example:
// The myVar is now only being used in this if block
if (true) {
    let myVar = "Hello! from the block scope varuable";
    console.log(myVar);
}   else {
    console.log("Inside The else block: ", myVar)
}

// When its set to false, the condition changes to display the else condition because the if statement was no longer true
// because myVar is declared with let and thus has block scope, 
// it is restricted to the if block, that is, it cannot exist outside the closing curly brace (}) just before the else 
// Running this code will produce a ReferenceError, because in the context of the else block, myVar is not defined

if (false) {
    let myVar = "Hello!";
    console.log(myVar);
}   else {
    console.log("Inside The else block: ", myVar)
}

// Variables declared with let have three defining characteristics

// 1) They have block scope, which means they are only defined within the confines of theri own code block (bounded by curly braces {} )
// 2) They can't be redclared within the same scope, for example:
//     let myNewVar = "New Variable";
//     let myNewVar = "Attempting to override the declared value"; // This will throw a SyntaxError, myNewVar is already declared
// 3) They can be reassigned, regardless of scope, in other words:
    let myLatestVar  = "Newest Variable";
    console.log(myLatestVar)
    myLatestVar = "See How I change it?";
    console.log(myLatestVar)



// THE CONST KEYWORD: Declares a JavaScript variable that has block scope, and which cannot be reassigned or redeclared.
// const is an abbreviation for constant
// const variables are typically used to store data that won't be modified at any point of the code - things like :
//     - Settings
//     - URL's which might be called
//     - Filenames
//     - Likes/comments etc

//  You can define a variable with const in the exact same way as you would using let, and it will behave almost identically:
    const google = "https://www.google.com";
    console.log(google);

// const variables are similar to let variables asa thet are block scope level declarations, there are just a fww jey differences:
//  1) Unlike l;let variables, const variables can't be redclared or reassigned, attepting to change it will throw an error
// You will need to comment out the errors to display the code correctly through the console
        const url = "www.google.com";
        console.log(url);
        // =====================================
        // uncomment this code to see the errors:
        // =====================================
        // const url = "www.youtube.com";  // SyntaxError: Identifier 'url' has already been declared
        // console.log(url);
        // url = "www.google.com";         // TypeError: Assignment to constant variable.
        // console.log(url);

        const number = 4;
        console.log(number);
        // number = number + 2;            // TypeError: Assignment to constant variable.
        // console.log(number);
        // number += 2;                    // TypeError: Assignment to constant variable.
        // console.log(number);
        
//  2) Unlike let Variables, constants can't be decalred woithout setting a value
        // let url; // OK (url, is undefinied byt declared)
        // const url; // SyntaxError: Missing Initilizer in const declareation

//  3) Arrays and objects stored in constants can be modified, but you can't reassign a new object or array to the same constant:
    // Define a const Object:
    const trevor  = {
        name: "Trevor",
        age: 32,
        location: "Canada"
    };
    console.log(trevor);
    // Change values:
    trevor.age = 31; // we're changing the objects property, not the constant itself
    console.log(trevor.age);
    trevor["Birthday"] = "November 7"; // we're modifying the object, not the constant itself
    console.log(trevor["Birthday"]);

    // trevor = {
    //     name: "Trevor",
    //     age: 31,
    //     location: "Ireland"
    // };                  // NOT ok, we're changing the constant's value
    // console.log(trevor);

    // Define a const array:, 
    const cars = ["Saab", "BMW", "Merccedez Benz"];
    console.log(cars);

    cars[0] = "Toyota";  // Ok, we're updating the array element, not the constant itself
    cars.push("Audi");   // Ok, we're updating the array, not the constant itself
    cars = ["Toyota", "Volvo", "BMW", "Audi"];  // NOT ok, we're changing the constant's value
    