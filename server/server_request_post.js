var http = require('http');
var queryStr = require('querystring');

var server = http.createServer(function(request, response) {
  var postdata = '';
  request.on('data', function(data) {
    postdata = postdata + data;
  });

  request.on('end', function() {
    var parsedQuery = queryStr.parse(postdata);
    console.log(parsedQuery);

    response.writeHead(200, {'Content-Type':'text/html'});

    var result = 'oppType = ' + parsedQuery.oppType
                + ', platformType = ' + parsedQuery.platformType
                + ', inventoryType = ' + parsedQuery.inventoryType;
    response.end(result);
  });
});

server.listen(8080, function() {
  console.log('Server is running...');
});
