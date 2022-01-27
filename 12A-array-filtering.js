
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
The syntax of the filter() method is:

<array>.filter(callback(element), thisArg)

? filter() Parameters
The filter() method takes in:

? callback: 
The test function to execute on each array element; 
returns true if element passes the test, else false. It takes in:
element - The current element being passed from the array.

! A callback function is a function passed into another function 
! as an argument, which is then invoked inside the outer function to do
! some kind of routine or action.

? thisArg (optional):
This value doesn't change what the array is, rather it is
used as the value of the object 'this' when executing callback. 
By default, it is undefined.
*/

filtered = numbers.filter(function evenNumbers(number){
    return number % 2 === 0;
})
//? NOTE that we can use both function declarations and expressions within filter()

/*
filter() returns a new array with only the elements that passed the test.
Notes:
filter() does not change the original array.
filter() does not execute callback for array elements without values (null values).
*/
console.log(filtered);

//* Usage of the object 'this' in filter() method
//? In this example, the elements getting filtered is dynamic thanks to 'this' object 

function myFilter(elementOfArray) { 
    return elementOfArray === this.val; 
} 
let arr = [1, 1, 1, 2, 2]; 
console.log(arr.filter(myFilter, {val: 1})); 

console.log(arr.filter(myFilter, {val: 2}));

/*
The function 'myFilter' is executed on each element of the array 'arr'.
So the elements for which the evaluated expression has a truth value of 1, 
are getting added into the filtered array
*/