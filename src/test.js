var http = require('http');


var i = 0

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n' + (i++));
}).listen(4242, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4242//');


