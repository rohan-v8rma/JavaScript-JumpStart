/*
            INDEX
1. About prototypes & the prototype chain
2. Internal properties of an object
3. Creating an object with a predefined prototype


* 1. About prototypes & the prototype chain

? Every object in JavaScript has a built-in property, which is called its prototype. 

The prototype is itself an object, so the prototype will have its own prototype, 
making what's called a prototype chain. The chain ends when we reach a prototype 
that has null for its own prototype.

! Nearly all objects in JavaScript are instances of the global Object class, which sits
! just below null on the top of the prototype chain.


* 2. Internal properties of an object

! NOTE : On most online sources, for the sake of simplicity it is written Object.prototype, however, the 
! 'prototype', which is an "internal property" of an object, (indicated by the fact that it is 
! enclosed in double square brackets "[[ ]]") isn't an identifier which can be used in 
! actual code -- internal properties aren't accessible as members of the objects that contain them.

? However, they may be made accessible by particular functions or properties, 
? For example, the '__proto__' property is used to access the prototype of an object as a general convention
? in most browsers.

* The use of this double brackets notations over single brackets is probably to avoid any possible 
* confusion with actual bracket notation(i.e., property access).


* 3. Creating an object with a predefined prototype

The Object.create() method (static method of global Object class) creates a new object and 
allows you to specify an object that will be used as the new object's prototype.
*/

let Prototype = {
    firstMethod : function(){
        console.log("This is the first method in the prototype")
    },
    secondMethod : function(){
        console.log("This is the second method in the prototype")
    },
};
/* 
* 'Prototype' itself is an object, so the prototype of 'Prototype' is Object.__proto__, 
! the same as global Object class
*/

let newObj = Object.create(Prototype);
console.log(newObj);
