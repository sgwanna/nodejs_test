var http = require('http');
var url = require('url');
var queryStr = require('querystring');

var server = http.createServer(function(request, response) {
  console.log('--- log start ---');

  var parsedUrl = url.parse(request.url);
  console.log(parsedUrl);

  var parsedQuery = queryStr.parse(parsedUrl.query, '&', '=');
  console.log(parsedQuery);

  console.log('--- log end ---');

  response.writeHead(200, {'Content-Type':'text/html'});

  var str = parsedQuery.var1 + ', ' + parsedQuery.var2;
  response.end('Hello World! ' + str);
});

server.listen(8080, function() {
  console.log('Server is running...');
});
