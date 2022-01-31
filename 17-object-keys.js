/*
                INDEX
1. Introduction to keys
2. Keys with quotes and without quotes
3. Object.keys() method
*/
/*

* 1. Introduction to keys
? A JavaScript object is a collection of unordered keys and properties.
? Properties can usually be changed, added, and deleted, but some are read only.

The syntax for accessing the property of an object using the key is:

* objectName.propertyName      // person.age
OR
* objectName["propertyName"]   // person["age"]
OR
* objectName[expression]   // x = "age"; person[x]
where expression evaluates to a property name/key
*/


//* 2. Keys with quotes and without quotes

let hello = {"firstElement" : "a", secondElement : "b"};
/* 
! This doesn't make a difference in JavaScript in case of strings.
We can access both of these using 
? dot notation(without quotes): <object name>.<key>
AND
? bracket notation (with quotes): <object name>["<key>"]

It only makes a difference when we use numerical literals as keys.

For example:
 */
let obj = {12e34 : true, "12e34": false};
/*
Both these properties can only be accessed using bracket notation since these
aren't valid identifier names.
The first property is a numeric literal, so we can use proper scientific notation
when accessing that property.
*/
console.log(obj[12e34]);
console.log(obj[1.2e+35]); //for numerical literal keys, quotes not required in bracket notation.
//* OR
console.log(obj["1.2e+35"]); // however, if we want to use quotes, it should be in proper scientific notation.
/*
The second property can be accessed like any other property.
*/
console.log(obj["12e34"]);


//* 3. Object.keys() method

const car = {
    make : "Honda",
    model : "Accord",
    year : 2020
}
//? SYNTAX : <var_name> = Object.keys(<object_name>)
const keys = Object.keys(car)
/*
Object.keys() is a static method of the global 'Object' class.

Here the object 'Object' has a method called 
keys() which takes another object as an argument
whose keys/'property names' have to be told.
*/
console.log(keys)
/*
We can consider keys to be names of the properties
of an object, they specify what a particular 
property of an object encompasses.
*/