var http    = require('http')
var router  = require('./router')

var i = 1

var server = http.createServer(
   function (req, res) {
      console.log('\n\n\nhandling request #' + i++)

      res.writeHead(200, {'Content-Type' : 'text/html'})

      router.handle(req, res) 
      //res.write('request: ' + url.parse(req.url).query)
      //res.write('\n\n<b>test</b>Hello, World!')

      res.end()
   }                          )

exports.server = server
exports.start  =
   function () {
      console.log('starting server')
      server.listen(8888)
   }
