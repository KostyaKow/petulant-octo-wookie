var http = require('http'),
    fs   = require('fs')

var htmlRes = fs.readFile('notfound.html')

function notfound(req, res) {
   res.write(htmlRes) 
}


exports._ =  notfound
