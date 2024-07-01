const EventEmitter = require('events');
const myEmitter = EventEmitter();

const welcomeUser  = () =>{
    console.log("Welcome to Server..!");
}

myEmitter.on('userJoined', welcomeUser);

myEmitter.emit('userJoined');