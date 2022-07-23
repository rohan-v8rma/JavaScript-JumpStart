function eat(food){
    return (food + " tasted really good.")
}
console.log(eat("bananas"))

/*
        INDEX   
1. Function DECLARATION vs Function EXPRESSION
2. call method of 'global Function class'


? 1. Function DECLARATION vs Function EXPRESSION

* a. Function DECLARATION

? Syntax: 
? function <function-name>(paramA, paramB) {
?     // Set of statements
? }

A function declaration also known as a `function statement`
declares a function with a function keyword. 

The function declaration must have a function name.

! Function declaration does not require a variable assignment as they are 
! standalone constructs and they cannot be nested inside a functional block.

These are executed before any other code.

The function in function declaration can be accessed before and after 
the function definition, since JavaScript is a compiled language.

? For example:
*/

(function yo(){
    console.log("This is a functional declaration");
})()

/*

* b. Function EXPRESSION

? Syntax:
? var <variable-name> = function (paramA, paramB){
?     // Set of statements
? }
They can also be used in IIFEs.
(which function declarations can be too but it is more appt. 
to use function expressions).

A function EXPRESSION is just a function declaration without 
the function name.

! Function expressions can be stored in a variable assignment.

* This is useful as we can conditionally store function expressions 
* in variables. So, the function operating can be different based on
* if a certain condition is met or not.

Function expressions load and execute only when the program interpreter 
reaches the line of code.

? For example: 
*/
var calSub = function (x, y) {
    let z = x - y;
    return z;
}
console.log("Subtraction : " + calSub(7, 4));

/*
? 2. call method of 'global Function class'


*/