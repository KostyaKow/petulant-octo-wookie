var m_http = require('http')
    m_qs   = require('querystring')

var m_db = require('./db')

function _(req, res) {
   console.log('handling a post request')
   queryData = collectPostData(req, res)
   handlePost(queryData, res) 
}

function collectPostData(req, res) {
   var queryData = ''

   req.on(
          'data',
          function(data) {
             queryData += data
             if(queryData.length > 1e6) { //check for overflow
                queryData = ''
                response.writeHead(413, {'Content-Type': 'text/plain'}).end()
                request.connection.destroy()
             }
          }
         )

   req.on(
          'end',
          function() {
             console.log('---Received a POST request: ' + queryData + '----')
             return queryData
          }
         )
}


//TODO: implement the specks
function handlePost(queryData, res) {
   var parsed = m_qs.parse(queryData)
  
   if (parsed['action'] == 'register') {
      console.log('adding a user')
      m_db.addUser(parsed['usrname'], parsed['passwd'])
   }

   if (parsed['action'] == 'submit') {
      console.log('submitting something')
      if (parsed['passwd'] != m_db.getPasswd(parsed['usrname']))
         console.log('wrong password; cannot post the comment')
      else
         m_db.postComment(parsed['title'], parsed['comment'], parsed['usrname'])
   }
   //res.write()
}

exports.start = start
