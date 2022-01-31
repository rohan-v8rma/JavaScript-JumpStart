/*
                INDEX
1. Static Methods vs. Prototype Methods
2. Inheritance
3. Own Properties & Shadowing Properties


* 1. Static Methods vs. Prototype Methods

'Static Methods' belong to a certain class and aren't inherited by instances of that class. 
For example, methods which are called using Object.<methodname>() are static methods of 
the global 'Object' class. Static methods get their name from the fact that they can't be mod

'Prototype Methods' of a certain class are inherited by instances of that class. 
Suppose we create an object "hello", 
it will have its [[Prototype]] : Object.__proto__
also global Object has its [[Prototype]] : Object.__proto__. 

* 2. Inheritance

Instances of a class will inherit the prototype methods of the following class. They can have
properties and static methods of their own as well.

For example,
All objects are instances of the global Object class so they inherit the prototype methods from that.
The prototype for both the created objects as well as the global Object class are "Object.__proto__".

All arrays are instances of the global Array class so they inherit the array manipulation methods
from the class since the prototype for both the instance as well as the class are "Array.__proto__".


* Lets consider "hello" is an instance of global Object class.

When calling a method such that hello.<method name>(), it will first check the static methods of 
hello, then inside the prototype of the "hello" object, which is also the prototype of the 
global "Object" class.
So, if a method isn't found defined in a certain object, its prototype will be searched for that method
and so on. This is the result of the Prototype Chain in JavaScript.


* 3. Own Properties & Shadowing Properties

! The properties of an object and not of its prototype are referred to as its 'OWN properties'.


? There can be a case where a property is defined in an object, suppose "hello" and a property of the 
? same name is defined in the prototype of "hello".

In this case, as is the description of the prototype chain, first the 'own properties' of 
the object "hello" will be looked up, and since the property is defined in "hello" as well, 
the version of the property present in object "hello" will be called rather than 
the one in the prototype.
! This is called "shadowing" the property.

* If we want, we can also directly call methods using the prototype of the hello object, using
? hello.__proto__.<method name>() 
* If we use this command, the static methods of the hello object won't be looked up.

*/
