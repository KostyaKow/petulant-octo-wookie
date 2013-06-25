var http = require('http')
var url  = require('url')

var defaultPage = require('./default')
var submitPage  = require('./submit')

function handleReq(req, res) {
   var reqUrl = url.parse(req.url)
   var path = reqUrl.pathname;
  
   console.log(path) 
   
   if (path == '/') 
      defaultPage.start(res)
   else if (path == '/submit.js')
      submitPage.start(reqUrl, res)

}


exports.handle = handleReq
