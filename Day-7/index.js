const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("Hello World");
});

server.listen(port, hostname, ()=>{
    console.log(`Server is successfully running at http://${hostname}:${port}/`);
});