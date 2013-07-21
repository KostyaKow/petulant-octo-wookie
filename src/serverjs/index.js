var m_http    = require('http')

var m_router  = require('./router')
    m_db      = require('./db')

m_db.init()

var i = 1

var server =
   http.createServer(function (req, res) {
      console.log('\n\n\nhandling request #' + i++)

      res.writeHead(200, {'Content-Type' : 'text/html'})
      
      //TODO: check for failures and recover...
      router._(req, res) 

      res.end()
   })

console.log('starting server')
server.listen(8888)
