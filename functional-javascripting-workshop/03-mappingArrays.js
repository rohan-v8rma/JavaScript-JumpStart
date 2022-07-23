/*
? Mapping in JavaScript

Syntax:

Array.__proto__.map(<callbackFn>)
<object name>.__proto__.map(<callbackFn>)

* <object name>.map(<callbackFn>) //most commonly used

This is a protype method of the global Array class.

map calls a provided 'callbackFn' function once for each element in
an array, in order, and constructs a new array from the results. 
callbackFn is invoked only for indexes of the array which have 
assigned values (including undefined).

It is not called for missing elements of the array; that is:

indexes that have never been set;
indexes which have been deleted.
*/

function doubleAll(numbers){
    function multiplyby2(number){
        return (number * 2);
    }
    result = numbers.map(multiplyby2);
    return (result);

}
/*
What is happening in the function 'doubleAll' is that the array 
whose each element has to be doubled is passed into it. 
Within doubleAll, a function 'multiplyby2' is defined to multiply 
the number passed into 'multiplyby2' by 2.

Then, the map method of arrays is used on the 'numbers' array, 
where 'multiplyby2' is passed into map as a callback function
and a new array 'result' is created. 

This 'result' is then returned by the function 'doubleAll'.

*/
module.exports = doubleAll

//Compact form

module.exports = function doubleAll_1(numbers){
    return numbers.map(function multiplyby2_1(number){
        return (number * 2);
    })
}