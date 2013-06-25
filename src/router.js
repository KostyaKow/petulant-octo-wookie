var http = require('http')
var url  = require('url')
var qs   = require('querystring')

var defaultPage   = require('./default')
var registerPage  = require('./register')
var submitPage    = require('./submit')

function handleReq(req, res) {
   if (req.method == 'POST') {
      var queryData = '';
      req.on('data',
             function(data) {
               queryData += data
               if(queryData.length > 1e6) {
                  queryData = ""
                  response.writeHead(413, {'Content-Type': 'text/plain'}).end()
                  request.connection.destroy()
               }
            }
            )

        req.on('end',
                   function() { 
                     res.post = qs.parse(queryData)
                     //callback()
                  }
                  )
      console.log('---GOTTA POST: ' + queryData + '----\n')
      
   } //END POST TEST

   var reqUrl = url.parse(req.url)
   var path = reqUrl.pathname;
  
   console.log(path) 
   
   if (path == '/register') 
      registerPage.start(res)
   else if (path == '/submit')
      submitPage.start(reqUrl, res)

}


exports.handle = handleReq
