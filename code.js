  var fs = require('fs');
  var http = require('http');


  var ser = http.createServer(function (req, res) {
    console.log(req.url);
    if(req.url === '/home' || req.url === '/'){
      res.writeHead(200, {'Content-type': 'text/html'});
      fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else {
      fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
  })
  ser.listen(3000, '127.0.0.1');
