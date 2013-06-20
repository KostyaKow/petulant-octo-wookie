var http = require('http');

var slow = true

var server = http.createServer(
   function (req, res) {
      slow = !slow
      if (slow) {
         for (var i = 0; i < 1000000000; i++) i-=0.01
      }
      console.log('hi!')
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('<b></b>Hello, World!' + i) 
      res.end()
   }                          )

server.listen(80) //4242

console.log('Server is up!')


