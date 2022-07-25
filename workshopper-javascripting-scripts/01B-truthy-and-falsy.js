/*
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).


* JavaScript uses type coercion in Boolean contexts.

! Type coercion is the automatic or implicit conversion of values from one data type  to another (such as strings to numbers). 

Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

? Examples of truthy values in JavaScript  will be coerced to true in boolean contexts, and thus can execute if blocks, for example.
*/

//* Truthy or Falsy
if (-Infinity) {
    console.log("This is a truthy value");
}
else {
    console.log("This is a falsy value");
};