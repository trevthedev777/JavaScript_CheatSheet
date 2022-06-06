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

// The let keyword: Declares a JS variable that has a block scope, it can be reassigned but not redeclared,
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