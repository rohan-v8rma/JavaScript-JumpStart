/*
            INDEX
1. About prototypes, the prototype chain and the two types of prototypes
2. Internal properties of an object
3. Creating an object with a predefined prototype


* 1. About prototypes & the prototype chain

? Every object in JavaScript has a built-in property, which is called its prototype. 

The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

? Note that there are two types of prototypes associated with an object. 
  
  One which the object has inherited from some other class, which can be accessed using:
* <object-name>.__proto__ 
  Another which is passed on to instances of that object, which can be accessed using:
* <object-name>.prototype

So, for example if an object 'hello' is an instance of the global Object class, 
"hello.__proto__ === Object.prototype" will return 'true', since the prototype inherited by 'hello' is the same prototype which 'Object' passes on to instances of itself.

* "Object.__proto__" will return 'undefined' since the global Object class doesn't inherit from any other object.

! Nearly all objects in JavaScript are instances of the global Object class, which sits just below null on the top of the prototype chain.


* 2. Internal properties of an object

! NOTE : '[[prototype]]', which is an "internal property" of an object, (indicated by the fact that it is enclosed in double square brackets "[[ ]]") isn't an identifier which can be used in actual code.

* The use of this double brackets notations over single brackets is probably to avoid any possible confusion with actual bracket notation(i.e., property access).


* 3. Creating an object with a predefined prototype

The Object.create() method (static method of global Object class) creates a new object and allows you to specify an object that will be used as the new object's prototype.
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
'Prototype' itself is an object, so the prototype of 'Prototype' is Object.prototype which it inherits from global Object class. 
! NOTE : "Prototype.__proto__ === Object.prototype" will return True

*/

let newObj = Object.create(Prototype);
console.log(newObj);
