const i = 0;
/*
There are 3 scopes in JavaScript:
Block Scope, Local Scope and Global Scope

In JavaScript, objects and functions are also variables.
Scope determines the accessibility of variables, objects, 
and functions from different parts of the code.
*/
/*
* BLOCK Scope

The keywords 'let' and 'const' provide BLOCK Scope 
in JavaScript. 
Variables declare inside a {} block can't
be accessed from outside the block. 

BUT, variables declared with the 'var' keyword can NOT
have BLOCK Scope. Such variables, even when placed within
a block can be accessed from outside it.
! NOTE : if-else also have BLOCK scope so var can bypass those as well.
*/
{
    let blockScopedVariable = 2;
    var notBlockScoped = 2;
}
//! blockScopedVariable can NOT be used here
//? notBlockScoped CAN be used here

/*
* Local/Function Scope

Variables declared within a JavaScript function, become LOCAL to the function.

Local variables have Function Scope:
They can only be accessed from within the function.

Since local variables are only recognized inside their functions,
variables with the same name can be used in different functions.

Local variables are created when a function starts, and 
deleted when the function is completed.

Functions defined inside other functions, known as nested  
functions, have access to their parent function's scope.  
   
*/
function hello(){
    const functionScopedConstant = 1;
    let functionScopedVariable1 = 2;
    var functionScopedVariable2 = 3; 

    // var keyword can only bypass block scope, not function scope
}
hello()
//! The 2 variables and 1 constant declared and initialized above
//! can NOT be used over here.

/*
* Global Scope
A variable defined OUTSIDE A FUNCTION OR BLOCK using the 
keywords 'const', 'let' and 'var' has global scope.

Global Scope of a variable signifies that all scripts and 
functions on a web page can access it. 

Also, 
Variables which are initialized without declaring them using 
a keyword, be it within a function or a block have GLOBAL scope. 

For Example:
*/
function helloworld() {
    globalVariable = 2;
}
helloworld();
console.log(globalVariable);
//? globalVariable can be used over here.


/*
Do NOT create global variables unless you intend to.

Global variables (or functions) can overwrite 
window variables (or functions).
Any function, including the window object, can overwrite 
your global variables and functions.
*/

/*
! IIFE, Immediately Invoked Function Expression, 
is a JavaScript function that runs as soon as it is defined.

It is a design pattern which is also known as 
* a Self-Executing Anonymous Function and contains two major parts:

The first is the function expression
?(NOTE that we can provide a named function(FUNCTION DEFINITION) over here as well) 
with lexical scope enclosed within the Grouping Operator (). 
This prevents accessing variables within the IIFE idiom as well 
as polluting the global scope.

The second part creates the immediately invoked function expression () 
through which the JavaScript engine will directly interpret the function.

? USE CASE

* When we don't want to re-use the code of the function and don't want to 
* add to the already extensive global namespace, so the functions of an 
* IIFE can't be called externally. 
This is why we can use function expressions(no-name functions) since we 
don't have to call it later on. 
However, we can still name it(use function declaration) in order to 
organize our code.

* It is a common pattern for creating local scopes.  

Example:  
*/ 
//* the function expression is surrounded by parenthesis  
(function IIFE() {
    console.log("This is an IIFE");
    //variables defined here can't be accessed outside  
    //but they can be accessed by functions defined inside this function.
    })() // the function is immediately invoked  

//! IIFE(); not possible here since the function is contained within an IIFE
   
const a = 1; const b = 2; const c = 3;  
    (function () {  
       const b = 5; const c = 6;  
       (function () {  
        const b = 8;  
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
        (function () {  
            const a = 7; const c = 9;  
            (function () {  
            const a = 1; const c = 8  
          })()  
        })()  
      })()  
    })()

//! NOTE that we can use both function declarations and expressions in IIFEs
//? BUT we should use declarations anyway to make our code more readable.
