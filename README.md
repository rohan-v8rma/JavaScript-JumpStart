- [Important Details and Methods related to Web Browsers](#important-details-and-methods-related-to-web-browsers)
  - [`console` object](#console-object)
    - [`console.log(<arg>)` method](#consolelogarg-method)
    - [`console.table(<arg>)` method](#consoletablearg-method)
    - [`console.warn(<arg>)` and `console.error(<arg>)` method](#consolewarnarg-and-consoleerrorarg-method)
    - [`console.time(<arg>)` and `console.timeEnd(<arg>)`;](#consoletimearg-and-consoletimeendarg)
    - [`console.clear()` method](#consoleclear-method)
  - [Running a method in the Browser Console](#running-a-method-in-the-browser-console)
  - [`window` object and "context"](#window-object-and-context)
    - [Usage of `window.console` object](#usage-of-windowconsole-object)
  - [`alert(<arg>)` or `window.alert(<arg>)` method](#alertarg-or-windowalertarg-method)
- [General information about JavaScript](#general-information-about-javascript)
  - [Data types](#data-types)
    - [`string` data-type](#string-data-type)
  - [`undefined` data type](#undefined-data-type)
  - [Objects](#objects)
  - [Prototypes](#prototypes)
  - [Arrays](#arrays)
    - [Structure of created array objects](#structure-of-created-array-objects)
    - [Accessing elements at specific indices of an array](#accessing-elements-at-specific-indices-of-an-array)
  - [Variable and Constant values](#variable-and-constant-values)
    - [`let` keyword for variables](#let-keyword-for-variables)
    - [`const` keyword for constants](#const-keyword-for-constants)
  - [Template literals and string interpolation in Javascript](#template-literals-and-string-interpolation-in-javascript)
  - [Ending statements with semi-colons](#ending-statements-with-semi-colons)
- [Functions in Javascript](#functions-in-javascript)
  - [Function DECLARATION vs Function EXPRESSION](#function-declaration-vs-function-expression)
    - [a. Function DECLARATION](#a-function-declaration)
    - [b. Function EXPRESSION](#b-function-expression)
  - [No Parameters vs. Default Parameters](#no-parameters-vs-default-parameters)
  - [call method of 'global Function class'](#call-method-of-global-function-class)
  - [Object Construction function](#object-construction-function)
  - [Callback functions](#callback-functions)
  - [`this` object of functions](#this-object-of-functions)
  - [Immediately Invoked Function Expression (`IIFE`)](#immediately-invoked-function-expression-iife)
    - [Use-case of an `IIFE`](#use-case-of-an-iife)

# Important Details and Methods related to Web Browsers

## `console` object

A console traditionally refers to a computer terminal where a user may input commands and view output such as the results of inputted commands or status messages from the computer.

All modern browsers have a web console for debugging.

### `console.log(<arg>)` method

The `console.log()` method is used to write messages to this console. For example:
```javascript
let greeting = "hello";
console.log(greeting);
```
`console.log()` makes it easier to see the value inside a variable. That's why it's commonly used for testing/debugging code.

### `console.table(<arg>)` method

This method displays the keys and values of the object passed to it in tabular form.

### `console.warn(<arg>)` and `console.error(<arg>)` method

- `console.warn()` method outputs a warning message to the Web browser's console.
- `console.error()` method output an error message to the Web browser's console.
An example of both is shown below. 
![](images/browser-console-warning-error.png)

### `console.time(<arg>)` and `console.timeEnd(<arg>)`;

The `console.time()` method starts a timer we can use to track how long an operation takes.

Each timer is given a unique name. 

When we call `console.timeEnd()` with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

Input:
```javascript
console.time("Your code took");
console.log("Hello World");
console.timeEnd("Your code took");
```

Output:
```
Your code took: 4.3919237898ms
```

### `console.clear()` method

This clears the Browser's console.

## Running a method in the Browser Console

![](images/console-function-output-and-return-value.png)

As we can see, the line just below `console.log("hello");` displays the output (`hello`) of the command.

The line below that shows an arrow pointing to the left and `undefined`. This is the return value of the method that was run.

## `window` object and "context"

`window` is a global variable representing the browser window in which the script is running.

It is exposed to JavaScript code. 

Javascript code has access to global variables based on where it's running - browser engine or node. 

I'm calling this global state **context**.

It only works in browsers and not in regular scripts, because only browsers have window context.

In node, accessing window is meaningless because there's no browser window.

### Usage of `window.console` object

`window.console` returns a reference to the console object which provides access to the browser's debugging console.

In simple words, it checks if the console is available(truthy value) so that we can log next.

In the case of mobile browsers or general code editors, they don't support debugger/console).

Try running this in your browser's console:

```javascript
if( window.console ) {
    window.console.log( open_date );
};
```
## `alert(<arg>)` or `window.alert(<arg>)` method

The alert() method displays an alert box with a message and an OK button.

The alert box takes the focus away from the current window, and forces the user to read the message.

For example:
![](./images/javascript-alert.png)

# General information about JavaScript

## Data types

In Javascript, there are only 6 data types defined:

- the primitives (`boolean`, `number`, `string`, `null`, `undefined`) 
- object (the only reference/non-primitive type)

### `string` data-type

Strings in JavaScript are actually objects with indices as keys and 
the corresponding characters as values for those keys.

## `undefined` data type

- A variable that has not been assigned a value is of type `undefined`. 
- A method or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value. 
- A function returns `undefined` if a value was not returned.

## Objects

Constructor function: Object()

This creates an empty instance of the global Object class.

## Prototypes

## Arrays

Arrays are not a separate data type, rather they are instances of the global `Array` class, which is an instance of the global `Object` class.

The global `Array` class, like the global `Object` class, has some static methods as well as some prototype methods, defined within it's prototype which are inherited by created arrays, which are instances of the global `Array` class.

### Structure of created array objects

When we create an array, it is an instance of the global `Array` class from which it inherits methods. 

It has indices starting from 0 as its keys, which have the elements at the corresponding indices as properties and another key called `length` which stores the number of elements of the array.
```javascript
let arr = ["a", "b", "c"];
```
The following array has a structure similar to this:
```javascript
arr = {
    0: "a"
    1: "b"
    2: "c"
    length: 3
    [[Prototype]]: Array.__proto__
}
```# Syntax for a regular functionvalues.

```javascript
console.log(Object.keys(arr));
console.log(Object.values(arr));
```
### Accessing elements at specific indices of an array

```javascript
arr.0; //invalid

console.log(arr[0]); //valid
```
The first statement is invalid since identifies can't begin with numbers.

The second statement is valid.


## Variable and Constant values

### `let` keyword for variables
```javascript
let example_1;
example = "some string";
console.log(example_1);
```

### `const` keyword for constants

If you are sure that the value of a variable won't change throughout the program, it's recommended to use `const` so as to prevent any errors later on due to changing on variables not meant to be changed. 

Note that it isn't possible to declare constants without initializing them.
This is an example of erroneous code:
```javascript
const x;  // Error! Missing initializer in const declaration.
x = 5;
console.log(x)
```

This is correct:
```javascript
const example_2 = "yo";
console.log(example_2);
```
## Template literals and string interpolation in Javascript



## Ending statements with semi-colons

Although ending statements (NOT BLOCKS of code like if-else) with semi-colons is optional in JavaScript, it is best practice to do so in order to avoid any edge-case behaviour where statements place on two different lines are interpreted together.

# Functions in Javascript

In javascript, functions are also objects.

There is a global `Function` class which has static as well as prototype methods.


## Function DECLARATION vs Function EXPRESSION

### a. Function DECLARATION

```javascript
function functionName(paramA, paramB) {
    // Set of statements
}
```

A function declaration also known as a `function statement` declares a function with a function keyword. 

The function declaration must have a function name.

Function declaration does not require a variable assignment as they are standalone constructs and they cannot be nested inside a functional block.

These are executed before any other code.

The function in function declaration can be accessed before and after the function definition, since JavaScript is a compiled language.

For example:
```javascript
(function yo(){
    console.log("This is a functional declaration");
})();
```

### b. Function EXPRESSION

```javascript
var variableName = function (paramA, paramB){
    // Set of statements
}
```
They can also be used in [IIFE](#immediately-invoked-function-expression-iife)s (which function declarations can be too but it is more appt. 
to use function expressions).

A function EXPRESSION is just a function declaration without the function name.

Function expressions can be stored in a variable assignment.

This is useful as we can conditionally store function expressions in variables. 

So, the function operating can be different based on if a certain condition is met or not.

Function expressions load and execute only when the program interpreter 
reaches the line of code.

```javascript
var calSub = function (x, y) {
    let z = x - y;
    return z;
}
console.log("Subtraction : " + calSub(7, 4));
```
## No Parameters vs. Default Parameters

In JavaScript, function parameters default to [`undefined` data type](#undefined), if no parameters are provided. 

Suppose we have the following code:
```javascript
function print_message(message) {
console.log("Message is : " message);
};
print_message();
```
The output would be:
```
Message is : undefined
```

However, it's often useful to set a different default value. This is where default parameters can help.

```javascript
function functionName(param = defVal) {
// function body
};
```
Here `defVal` is the default value for the argument `param`.

## call method of 'global Function class'

TODO

## Object Construction function

TODO

## Callback functions

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to do some kind of routine or action.

## `this` object of functions

'this' object of a function is by-default 'undefined'.

We can manipulate its properties etc and use it to create more objects with the help of constructor functions.

## Immediately Invoked Function Expression (`IIFE`)


`IIFE`, Immediately Invoked Function Expression, is a JavaScript function that runs as soon as it is defined.

It is a design pattern which is also known as a **Self-Executing Anonymous Function** and contains two major parts:

- The first is the function expression (no-name function).

    Note that we can provide a named function (FUNCTION DEFINITION) over here as well with [lexical scope](#meaning-of-lexical-scope) enclosed within the Grouping Operator `()`.

    Even though we can use both function definitions and expressions in IIFEs, we should use definitions anyway to make our code more readable. 

    ##### Meaning of lexical scope

    The ability where the inner function can access the parent function scope is known as **lexical scope**.

    This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

- The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

For example:
```javascript
(function IIFE() {
    console.log("This is an IIFE");
    //variables defined here can't be accessed outside but they can be accessed by functions defined inside this function.
    })() // the function is immediately invoked  
```

Check out [20B-IIFE.js](./workshopper-javascripting-scripts/20B-IIFE.js) for an example implementation of IIFEs.

### Use-case of an `IIFE`

- When we don't want to re-use the code of the function and don't want to add to the already extensive global namespace, so the functions of an `IIFE` can't be called externally. 

    This is why we can use function expressions (no-name functions) since we don't have to call it later on. 

    However, we can still name it (use function declaration) in order to organize our code.

* It is a common pattern for creating local scopes.  




