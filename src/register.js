var http = require('http')

function start(res) {
   res.write(
      '<html>' +
   
      '<head>' +
      '<title>Welcome to the forum!</title>' +
      '</head>\n' +
      
      '<body>' +
      '<form name="input" id="form1" action="submit" method = "POST">\n' +
      'Enter your name: <input type="text" name="name"><br>\n' +
      'Title: <input type="text" name="title"><br><br>\n' +
      'Comment:<br><textarea name="comment" rows="10" cols="60">Your Comment</textarea>\n' +
      '<input type="submit" value="Submit!">\n' +
      '</form>\n' +
      '</body>\n' +

      '</html>')
}

exports.start = start
