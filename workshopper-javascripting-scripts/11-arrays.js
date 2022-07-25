
//? Arrays in JavaScript

const array = ["hello", "world", 1, 2, 3];

console.log(Object.keys(array));


let pizzaToppings = ["tomato sauce", "cheese", "pepperoni"];
console.log(pizzaToppings);

//* Adding elements to an array using push() method
pizzaToppings.push("pineapple");

co

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

console.log(arr[0]);
//valid statement
