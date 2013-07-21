var m_http = require('http'),
    m_url  = require('url'),

var m_handlepost = require('./handlepost')

var m_router_notfound      = require('./router/notfound/notfound'),
    m_router_public_menus  = require('./router/menus'),
    m_chefs = require('./router/
       

function handleRequest(req, res) {
   if (req.method == 'POST') {
      handle_post._(req, res)
      return
   }

   var reqUrl = m_url.parse(req.url)
   var path = reqUrl.pathname;
  
   console.log('handling request for: ' + path) 

   switch (path) {
   case '/public':
       
   break
   
   case '/submit':
   break

   default:
      not_found._(req, res, path) 
   break      
   }
  
   if (path == '/register') 
      registerPage.start(res)
   else if (path == '/submit')
      thankyouPage.start(reqUrl, res)

}


exports._ = handleReq
