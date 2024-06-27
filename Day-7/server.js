const http = require('http');
const hostname = '127.0.0.2';
const PORT = 8080;
const sayHello = require('./hello');
const cal = require('./cal');

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("I am Server...!");
});

server.listen(PORT, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${PORT}/`);
});

sayHello('Rama');
sayHello('Sita Maa');

cal.sum(46, 87);
cal.sub(46, 87);
cal.mul(13, 3);