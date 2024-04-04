const http = require('http');

const myServer = http.createServer(function (req, res) {
    switch(req.url) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.end('Welcome to my site!!');
            break;
        case '/home':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.end('this is home page!');
            break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            })
            res.end('Page not found');
    }
})

myServer.listen(3000, function () {
    console.log('Server is running on port 3000');
})