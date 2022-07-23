/*
? Arrays in JavaScript
* 1. About Arrays and the global Array class
* 2. Indexing in created array objects
* 3. Accessing elements at specific indices of an array


* 1. About Arrays and the global Array class
Arrays are not a separate data type, rather they are instances of the global Array class,which is an instance of the global Object class.

The global 'Array' class, like the global 'Object' class, has some static methods as well as some prototype methods, defined within it's prototype which are inherited by created arrays, which are instances of the global Array class.

*/
const array = ["hello", "world", 1, 2, 3];

console.log(Object.keys(array));

let pizzaToppings = ["tomato sauce", "cheese", "pepperoni"]
console.log(pizzaToppings)

//* Adding elements to an array using push() method
pizzaToppings.push("pineapple")
console.log(pizzaToppings)


/* 
* 2. Structure of created array objects

When we create an array, it is an instance of the global Array class from which it inherits methods. It has indices starting from 0 as its keys, which have the elements at the corresponding indices as properties and another key called length which stores the number of elements of the array.
*/
let arr = ["a", "b", "c"];
/*
The following array has a structure similar to this
arr = {
    0: "a"
    1: "b"
    2: "c"
    length: 3
    [[Prototype]]: Array.__proto__
}
*/
console.log(Object.keys(arr));


//* 3. Accessing elements at specific indices of an array

/*
arr.0;
! Not a valid statement since 0 is not a valid idenitifier.
TODO : Refer 16-object-properties.js for more info
*/

arr["O"]; 
//valid statement but note that index should be in string form
