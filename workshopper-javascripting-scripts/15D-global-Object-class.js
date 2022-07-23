/*
The global Object class is the object which has a number of static methods
as well as prototype methods (defined within its prototype). 

! It can act as an object or a function depending on how it's used.

* Usage as a constructor function

? SYNTAX for 'Object' as a constructor function for creating other objects:
? let newObject = Object()
*/
console.log(Object instanceof Function);
//! returns 'true' since 'Object' can act as a constructor function

console.log(Object.__proto__ === Function.prototype)
//! returns 'true' since 'Object' is an instance of 'Function' so it 
//! inherits its prototype from 'Function'

/*
* Usage as an object

The static methods are the methods defined in the global Object class, not
inside it's prototype. They are not inherited by created objects which are 
instances of global 'Object'. 

? SYNTAX for calling static methods of global Object class:
? Object.<static-method-name>()

* The prototype of the global Object class can be accessed using 'Object.prototype'.
This is the prototype which is inherited by instances of this global Object class.

Suppose an instance the global Object class, 'hello' is created.
So the prototype of the parent of 'hello' (which is Object) is given by 'hello.__proto__'.
*/
hello = new Object;
console.log(hello.__proto__ === Object.prototype); //! returns true

/*
? SYNTAX for calling prototype methods of the global Object class:

? Object.prototype.<method-name>()
* OR
? <created-object-name>__proto__.<method-name>()
* OR
? <created-object-name>.<method-name>()
*/

console.log(Object instanceof Object);
/*
! returns true since global Object class is itself an object 
! having properties and in-built methods
*/
