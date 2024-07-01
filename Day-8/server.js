const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("Day -8 Modules");
});

// OS details
const sys_details = require('./os');
sys_details();

//Path info
const pathInfo = require('./path');
console.log(pathInfo);

// File System 
const fs_ex = require('./fs');
fs_ex();

//File system read
const fs_read = require('./Filesystem/fs-1');
fs_read();

server.listen(port, hostname, ()=>{
    console.log(`Server Running at http://${hostname}:${port}/`);
});