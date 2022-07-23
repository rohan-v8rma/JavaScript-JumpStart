/*
? Higher-order Function

JavaScript has "first-class/higher-order functions".
These functions can be treated like any other data type in JavaScript:
just like Strings or Numbers, Function values can be stored as 
variables, properties on objects or passed to other functions as arguments.

All other function are first order functions.

A "Higher-Order Function" is a function that accepts functions
as parameters and/or returns a function.

The key difference between Functions and other value types in 
JavaScript is the call syntax: 
if a reference to a function is followed by parenthesis and 
some optional comma-separated values: 
someFunctionValue(arg1, arg2, etc), 
then the function body will be executed with the 
supplied arguments (if any).

In this exercise we're going to demonstrate that functions can be 
passed as values by passing you a function as an argument.
*/
function higherOrderFunction(firstOrderFunction, num){
    for(let iterVar = 0; iterVar < num; iterVar++){
        firstOrderFunction();
    }
}

module.exports = higherOrderFunction;

/* 
Solution involving recursion

function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }  
    module.exports = repeat
*/
