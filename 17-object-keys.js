const car = {
    make : "Honda",
    model : "Accord",
    year : 2020
}
// SYNTAX : <var_name> = Object.keys(<object_name>)
const keys = Object.keys(car)
/*
! Object.keys() is a prototype method

Note that a prototype method is an in-built method of a
particular object. Basically that method is a function defined
within the scope of that particular object.

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