/*
The global Object class is the object which has a number of static methods
as well as prototype methods (defined within its prototype). 

The static methods are the methods defined in the global Object class, not
inside it's prototype. They are not inherited by created objects which are 
instances of global 'Object'. 

? SYNTAX for calling static methods of global Object class:
? Object.<static method name>()

The prototype of the global Object class can be accessed using 
Object.__proto__ and they are inherited by created objects since the prototype
of both the global Object class and created objects is "Objects.__proto__"

? SYNTAX for calling prototype methods of the global Object class:

? Object.__proto__.<method name>()
* OR
? <created object name>__proto__.<method name>()
* OR
? <created object name>.<method name>()

*/