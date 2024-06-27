# Introduction to NodeJS

Node JS is an OPen Source server environment. It uses JavaScript on the server. Node JS uses asynchronous programming. 
- Means - 
    - A common task for a web server can be to open a file on the server and return the content to the client.
    - Sends a the task to computer flie system, ready to handle the next request, and when the slie system has opened and read the file, the server returns the content to the client.
    - NodeJS removes the waiting and simply continues with the next request.
    - Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

## Example
- Created Few server and run on web browser. 

## Module
- In Node.js, a module is essentially a reusable block of code that can be used to perform a specific set of tasks or provide a specific functionality. A module can contain variables, functions, classes, objects, or any other code that can be used to accomplish a particular task or set of tasks.
**Example:**
- This is the code in hello.js file:
function sayHello(name){
    console.log(`Hello ${name}`);
}

module.exports = sayHello

- This is the code in server.js file:
const sayHello = require('./hello.js');

sayHello("Prashanth");
sayHello("Rama");
sayHello("Sita Maa");