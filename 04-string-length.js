/*
Properties in JavaScript

Properties are the values associated with a JavaScript object.

? A JavaScript object is a collection of unordered properties.
? Properties can usually be changed, added, and deleted, but some are read only.

The syntax for accessing the property of an object is:

* objectName.property      // person.age
OR
* objectName["property"]   // person["age"]
OR
* objectName[expression]   // x = "age"; person[x]
where expression evaluates to a property name
*/

let example = "example string";
console.log(example.length);
// OR 
console.log(example["length"]);