/* Hello, World! program in node.js */
console.log("Hello, World!")
var http = require("http");

http.createServer(function functionName(request, response) {
  // Send the Http header
  // Http Status: 200 : OK
// Content Type: text/plain
response.writeHead(200, {'Content-Type' : 'text/plain'});

// Send the response body as "Hello World"
response.end('Hello World\n');
}).listen(8081);

//Console will print message
console.log('Server running at http://127.0.0.1:8081/');
