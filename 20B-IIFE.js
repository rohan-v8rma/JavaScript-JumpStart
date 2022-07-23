/*
! IIFE, Immediately Invoked Function Expression, is a JavaScript function that runs as soon as it is defined.

It is a design pattern which is also known as 
* a Self-Executing Anonymous Function and contains two major parts:

The first is the function expression
?(NOTE that we can provide a named function(FUNCTION DEFINITION) over here as well) 
with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

? USE CASE

* When we don't want to re-use the code of the function and don't want to add to the already extensive global namespace, so the functions of an IIFE can't be called externally. 
This is why we can use function expressions(no-name functions) since we don't have to call it later on. 
However, we can still name it(use function declaration) in order to organize our code.

* It is a common pattern for creating local scopes.  

Example:  
*/ 
//* the function expression is surrounded by parenthesis  
(function IIFE() {
    console.log("This is an IIFE");
    //variables defined here can't be accessed outside but they can be accessed by functions defined inside this function.
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