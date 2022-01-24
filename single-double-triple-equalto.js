/*
? What is = in JavaScript?

It is a regular assignment operator in which the value of the right operand is assigned to the 
left operand, where the left operand is a variable.
*/
let hello = "world";
console.log(hello);
/*
? What is == in JavaScript?

Double equals (==) is a comparison operator, which transforms the 
operands having the same type before comparison.

So, when you compare string with a number, JavaScript converts any 
string to a number. An empty string is always converts to zero. 
A string with no numeric value is converts to NaN (Not a Number), 
which returns false.

== operator is useful for comparing the identity of two operands 
even though, they are not of a similar type.
*/
console.log(3 == "3"); 
//will return true since "3" converted to 3 before comparison

/*
? What is === in JavaScript?

=== (Triple equals) is a strict equality comparison operator in JavaScript, 
which returns false for the values which are not of a similar type. 

Value are not implicitly converted to some other value before comparison.

If the variable values are of different types, then the values 
are considered as unequal.

If the variable are of the same type, are not numeric, and 
have the same value, they are considered as equal.

Lastly, If both variable values are numbers, they are considered equal 
if both are not NaN (Not a Number) and are the same value.

*/
console.log(2 === "2");
/*
Since === operator doesn't performs type casting for equality, 
this expression will return false.
*/