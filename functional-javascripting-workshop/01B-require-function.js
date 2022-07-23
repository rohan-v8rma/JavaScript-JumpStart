/*
? require() function

Then, in order to use this module in some other script, we can
use the require() function.
*/
let importedFunction = require("./01A-exposing-modules.js");

console.log(importedFunction("hello"));

/*
We must specify the path of the file using 
'./<file-containing module>' where ./ represents the current 
working directory or the ABSOLUTE path of the file.

However, we need not specify the path to import Node.js core 
modules or NPM modules in the require() function.
*/