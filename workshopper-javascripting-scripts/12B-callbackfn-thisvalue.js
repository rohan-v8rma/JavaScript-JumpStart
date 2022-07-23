/*
! A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to do some kind of routine or action.
*/

/*
* Usage of the object 'this' in filter() method

'this' object of a function is by-default 'undefined'.

We can manipulate its properties etc and use it to create more objects with the help of constructor functions.
*/
//? In this example, the elements getting filtered is dynamic thanks to 'this' object 

function myFilter(elementOfArray) { 
    return elementOfArray === this.val; 
} 
let arr = [1, 1, 1, 2, 2]; 
console.log(arr.filter(myFilter, {val: 1})); 

console.log(arr.filter(myFilter, {val: 2}));

/*
The function 'myFilter' is executed on each element of the array 'arr'.
So the elements for which the evaluated expression has a truth value of 1, are getting added into the filtered array
*/