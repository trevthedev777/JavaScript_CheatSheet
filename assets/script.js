// Declaring Variables

// There are three ways to declare a variable in JavaScript, and each has a slightly different use case. All three methods follow the same syntax, but use a different keyword

// Variables should be declared that the name represents the data they are storing and manipulating

// camelCase should be used when there are multiple words 

let myVar = "a Variable";

const myVarAgain = "a Variable";

var myVarThree  = "a Variable";

// The let keyword: Declares a JS variable that has a block scope, it can be reassigned but not redeclared,
// This means that the value or the variable is only allowed to be used in the declared block of code its intended for


// Block Scope Example:
// The myVar is now only being used in this if block
if (true) {
    let myVar = "Hello!";
    console.log(myVar);
}   else {
    console.log("Inside The else block: ", myVar)
}

// When its set to false, the condition changes to display the else condition because the if statement was no longer true
// because myVar is declared with let and thus has block scope, it is restricted to the if block, that is, it cannot exist outside the closing curly brace (}) just before the else 

if (false) {
    let myVar = "Hello!";
    console.log(myVar);
}   else {
    console.log("Inside The else block: ", myVar)
}