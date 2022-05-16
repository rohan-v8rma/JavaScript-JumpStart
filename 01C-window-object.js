/*
`window` is a global variable representing the browser window in which the script is running.
It is exposed to JavaScript code. 

Javascript code has access to global variables based on where it's running - browser engine or node.
I'm calling this global state context.

! It only works in browsers and not in regular scripts, because only browsers have window context.
? In node, accessing window is meaningless because there's no browser window.

* Usage of window.console.

window.console returns a reference to the console object which 
provides access to the browser's debugging console.

In simple words, it checks if the console is available(truthy value) so that we can log next.
(in case of mobile browsers or general code editors, they don't support debugger/console).
*/

if( window.console ) {
    window.console.log( open_date );
};
