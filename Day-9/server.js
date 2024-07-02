const http = require('http');
const { type } = require('os');
const fs = require('fs');

// Getting The content 
const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyle = fs.readFileSync('./navbar-app/styles.css');
const homeLogo = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');



const server = http.createServer((req,res) =>{
    const url = req.url;
    console.log(url);
    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyle);
        res.end();

    }else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/javascript'});
        res.write(homeLogic);
        res.end();
    }else if(res.url == '/logo.svg'){
        res.writeHead(200, {'content-type' : 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    }else if(req.url === '/about'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write("<h1>Welcome to About Page");
        res.end();
    }else if(req.url === '/content'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write("<h1>Welcome to Content Page");
        res.end();
    }else{
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>404 Resource Not Found <a href="/">Go Home Page</a></h1>');
        res.end();
    }
})



server.listen(5000, () => {
    console.log(`Server is running at http://127.0.0.1:5000`);
})