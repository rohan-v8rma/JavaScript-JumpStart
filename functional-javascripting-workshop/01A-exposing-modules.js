function upperCaser(input){
    return input.toUpperCase()
}
module.exports = upperCaser
/*
The concept of modularity has a form in JavaScript as well.

The 'module.exports' is a special object which is included in every JavaScript file in the Node.js application by default. 

The 'module' is an OBJECT that represents the current module, and 'exports' is a KEY of that object 'module which can have a PROPERTY (in the form of a value), which will be exposed as a module.

So, whatever you assign to module.exports will be exposed as a module.
When we write the statement module.exports = <value>, the <value> can be a number, string, array, object, function etc.
*/

