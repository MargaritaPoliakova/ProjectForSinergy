const http = require ('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    if (req.url === '/registration' || req.url === '/' ) {
        res.writeHead(200, {'Conver-Type':'text/html, charset= utf8'});
         fs.createReadStream(__dirname + '/html/registration.html', 'utf8').pipe(res);
    }
    else if (req.url === '/enter') {
        res.writeHead(200, {'Conver-Type':'text/html, charset= utf8'});
         fs.createReadStream(__dirname + '/html/enter.html', 'utf8').pipe(res);
    }
    else if (req.url === '/profile') {
        res.writeHead(200, {'Conver-Type':'text/html, charset= utf8'});
         fs.createReadStream(__dirname + '/html/profile.html', 'utf8').pipe(res);
    }
    else{
        res.writeHead(404, {'Conver-Type':'text/html, charset= utf8'});
         fs.createReadStream(__dirname + '/html/404.html', 'utf8').pipe(res);
    }
});

server.listen(3000,'127.0.0.1')