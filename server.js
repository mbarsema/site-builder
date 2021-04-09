var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  const uri = req.url !== '/' ? req.url : '/dist/index.html';

  fs.readFile(__dirname + uri, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);