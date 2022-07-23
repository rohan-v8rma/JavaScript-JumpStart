/*
*  1. console.log() in JavaScript

A console traditionally refers to a computer terminal 
where a user may input commands and view output such as
the results of inputted commands or status messages 
from the computer.

All modern browsers have a web console for debugging.
The console.log() method is used to write messages to 
this console. For example, 
*/
let greeting = "hello";
console.log(greeting);

/*
As you can see from these examples, console.log() makes 
it easier to see the value inside a variable. That's why 
it's commonly used for testing/debugging code.

* 2. ending statements with semi-colons

Although ending statements (NOT BLOCKS of code like if-else)
with semi-colons is optional in JavaScript, it is best 
practice to do so in order to avoid any edge case behaviour
where statements place on two different lines are interpreted together.

* 3. Data types in JavaScript 

In Javascript, there are only 6 data types defined:

? the primitives (boolean, number, string, null, undefined) 
? object (the only reference/non-primitive type)

for example, a string is an object which indices as its keys and 
characters as the property names.
*/
string = "helloworld";
console.log(Object.getOwnPropertyNames(string));
