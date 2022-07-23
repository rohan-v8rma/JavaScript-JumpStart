const food = {
    types : "only pizza",
    fact : function () {
        console.log("pizza was the first food ever invented.")
    }
}
/*
'types' is a property of the object 'food' just like length is a property of the array 'food'

fact is a static method of the object 'food'.
*/

console.log(food.fact()) //static function of food

console.log(food.types)
/*
OR

console.log(food["types"])

This bracket notations for accessing properties is usually used when property names/keys are NOT valid identifiers.

? For example, the identifier is NOT valid if it starts with a number. This is true in the case of arrays where indices are just property names.
TODO : Refer 11-arrays.js for more info.
*/
