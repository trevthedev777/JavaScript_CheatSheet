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
    // cars = ["Toyota", "Volvo", "BMW", "Audi"];  // NOT ok, we're changing the constant's value
    

// THE VAR KEYWORD: Declares a JavaScript variable that has global scope, and which can freely be reassigned or redeclared.
// In modern JavaScript it's usually considered a bad practice to use this declaration, because it creates a variable which has global scope,
// which means it can be unintentionally changed outside of its own scope

// Variables declared with var behave significantly different than their const and let counterparts. The most significant difference is that variables declared with var are accessible outside the scope in which they are declared. This means that they can be inadvertently overwritten and can create bugs in your code that are difficult to detect

    // Remove comment to see the error
    // var i = 0;

    // for(var i = 0. i <= 5; i++) {
    //     console.log("Inside the loop... ", i);
    // } 

    // console.log("Outside the loop: ", i);

    // The code produces the following output:
    // Inside the loop: 0
    // Inside the loop: 1
    // Inside the loop: 2
    // Inside the loop: 3
    // Inside the loop: 4
    // Inside the loop: 5
    // Outside the loop: 6
    // Do you see the problem? If not, you're not alone, but look closely at what happened: On line 1 we declared a variable, i, using var, and gave it a value of 0. Then on line 3 we initiated a for loop, declaring a variable i beginning with zero and iterating through 5, incrementing i after each iteration. When the i in the loop is equal to 5, iteration stops, and the final increment takes place (i++), incrementing it to 6. However, when we logged i to the console outside the loop, i has a value of 6! It has been overwritten by the loop's i. This is because variables declared with var are not restricted with regard to being reassigned, redeclared, or reused in another scope.

    // The first variable declared on line 1 should have remained 0 within the global scope, that is, the code outside of the loop, because the loop's code block is bounded by the curly braces. Nothing that happened inside that loop should have affected anything outside the loop, but it did, inadvertently overwriting the original i variable and then incrementing it each time the loop executed. The original variable, which should have maintained a value of 0 was lost. If you were to declare the first variable with let or const, you would have received an error when you tried to redeclare it with the same name in the for loop, preventing this issue. Here are some more examples to drive the point home:

    // Allowed: This is ok because the variable defined for use in the for loop is declared with let, which means it won't affect the outer one due to its scope being restricted to the loop.
    let j = 0;

    for (let j = 0; j <= 5; j++) {
        console.log("Inside the loop... ", j);
    }
      console.log("Outside the loop: ", j);


    //   Global and Local Scopes
    // Global Scope:
    // In JavaScript, any code that exists at the top level of your application, that is, anything that is not inside any function, loop, conditional statement and so on, has global scope.

    // Local Scope:
    // Any code that exists inside a set of curly braces, for example, code contained within the opening and closing braces of a loop, a conditional statement, or a function, has local scope.
    let globalVar = "My global variable"
    // globalVar has global scope

    for (let i = 0; i < 5; i++) {
    let localVar = "myLocalVar";
    console.log(i);

    // Both i and localVar have local scope
    };

    // In the above, globalVar is accessible everywhere, even inside the loop. It can't be redeclared since it was declared with let, but it can be accessed, updated and manipulated inside the loop or anywhere else in the code. localVar and i, on the other hand, are not accessible anywhere outside the closing bracket of the for loop. Once the for loop is finished, those variables no longer exist. You can think of scope as simply "the current block of code". If you're not in a designated code block surrounded by curly braces, you are looking at the global scope. This goes for loops, functions, conditionals, and other types of JavaScript constructs:

    // Global scope

    if (...) {
  // Local scope
    };

    // More global scope

    function myFunction() {
  // Local scope
    };

    // More global scope

    for (...) {
    // Local scope
    };

    // There is a third type of scope called block scope, too. This is similar to local scope, but refers specifically to the code block the variable exists in. This is relevant when there is nesting in your code, where a variable inside a function might be local, but inside an if statement or loop within the function, anything declared is local only to the loop code blocks. Another way to think about it is that the furthest level out in your code is global scope, the next level in is local, but if within the local scope there is another level of code like a loop, if statement, etc, then the "local" scope in the function is now somewhat like the function's "global" scope, and anything further in is block scope. If this seems confusing, take a look at this example:

    let globalVar = 'a global variable';

    function myFunction() {
    let localVar = 'a local variable';
    
    if (localVar) {
        let blockVar = 'a block-scoped variable';
    } else {
        let otherBlockVar = 'a different block-scoped variable';
    }
    };

    // Above, the two block-scoped variables are accessible only within their respective code blocks, bounded by the curly braces. The local variable is accessible anywhere in the function, and the global variable is accessible anywhere in the entire script. Scope is not just a construct of JavaScript either. As you learned in the comparative programming module, Python also uses code blocks, but instead of being bounded by curly braces they are bounded by the indentation level. That means that in Python, anything at the outermost indentation level is considered global and anything indented is local to that specific indentation level. As you work with these languages more and more, scope will become more clear. When you're writing code, remember to always keep in mind the scope in which you're writing, especially when defining variables. Your code's functionality is dependent on everything having the proper scope.
