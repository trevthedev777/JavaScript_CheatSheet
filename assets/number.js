// The Number is one of the primitive data types in JavaScript. It is a wrapper that represents any kind of number, or when used as a function, can convert another value into a number. While other languages have different types of numbers such as integers (whole numbers), floating point (decimal) numbers and so on, in JavaScript every number is just a number.

// Most often, you will use numbers as variables by declaring a variable that is a number:
let myNumber = 123;

// Once declared, you can now use this variable like you would a number in everyday life:

myNumber +=1; // Adds 1, now the number is 124

// Declare another variable and multiply them

let multplier = 2;
let product = myNumber * multplier;
console.log(product) // Will be 248 as myNumber was multiplied by 2
console.log(typeof product) // Number

// In JavaScript, every number is a floating point number. That means that unlike in other languages, an integer when compared with it's decimal equivalent will be the same:

let myInteger = 123;
let myDecimal = 123.0;
console.log(myInteger === myDecimal); // true

// When used as a function, Number() will convert another value such as a string, boolean, or other data type into a number. Falsy values will be converted to zero, truthy values will be converted to 1, values that cannot be converted to a number will be converted to NaN, and numbers greater than or equal to 1.8 x 10^308 will be converted to the constant Infinity (or -Infinity if the number is negative):

Number("123");       // 123
Number(null);        // 0
Number(true);        // 1
Number("Hello!");    // NaN (Not a Number)
Number(1.8e308);     // Infinity
Number(-1.8e308);    // -Infinity

Number.isNaN()	    // Returns whether the passed value is Not a Number	
isNaN("Hello!");	true
Number.isFinite()	// Returns whether the passed value is finite	        
isFinite(Infinity);	false
Number.isInteger()	// Returns whether the passed value is an integer	    
isInteger(123);	true
Number.parseFloat()	// Attempts to convert the passed value to a float	    
parseFloat("123.45");	123.45
Number.parseInt()	// Attempts to convert the passed value to an integer	
parseInt("123.45");	123

// The following are instance methods which operate on a Number instance

toFixed()	    // Returns a string representing the number with the passed number of decimal places	
123.45.toFixed(4);	"123.4500"
toPrecision()	// Returns a string representing the number with the passed precision	
123.45.toPrecision(4);	"123.5"
toString()	    // Returns a string representing the number in the specified base (10 by default)	
123.45.toString();	"123.45"

// Example:
let first = "42";
let second = "24.7";

let result = first + second;
console.log(result)
/*
The console.log above will log "4224.7" to the console, because 
it is concatinating strings instead of adding the values together
*/

let result2 = parseInt(first) + parseInt(second);
console.log(result2)
/* 
The console.log above will log 66 to the console, because both 
string values are converted to number types. However the second 
value has a decimal point, which means its value is rounded down to make a whole number because parseInt() was used, not parseFloat()
*/

let result3 = parseInt(first) + parseFloat(second)
console.log(result3)
/* 
The console.log above will log 66.7 to the console. because now 
the second value is parsed to a float which allows for the decimal
point. 
*/