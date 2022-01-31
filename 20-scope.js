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

